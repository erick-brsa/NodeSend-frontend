import { useReducer } from 'react'
import authContext from './authContext'
import authReducer from './authReducer'

import { 
    USER_AUTHENTICADED, 
    SUCCESSFUL_REGISTRATION,
    ERROR_REGISTRATION,
    CLEAR_ALERT,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGN_OUT
} from '../../types'

import axios from '../../config/axios'
import tokenAuth from '../../config/tokenAuth'

const AuthProvider = ({ children }) => {
    
    // Definir un state inicial
    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
        authenticated: false,
        user: null,
        message: null
    }

    // Definir el reducer
    const [ state, dispatch ] = useReducer(authReducer, initialState)

    // Usuario autenticado
    const userAuthenticated = async () => {
        const token = localStorage.getItem('token')

        if (token) {
            tokenAuth(token)
        }

        try {
            const { data } = await axios('/auth')
            console.log(data.user);
            dispatch({
                type: USER_AUTHENTICADED,
                payload: data.user
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Registrar nuevos usuarios
    const registerUser = async (user) => {
        try {
            const { data } = await axios.post('/users', user)
            dispatch({
                type: SUCCESSFUL_REGISTRATION,
                payload: data.message
            })
        } catch (error) {
            dispatch({
                type: ERROR_REGISTRATION,
                payload: error.response.data.message
            })
        }
        setTimeout(() => {
            dispatch({
                type: CLEAR_ALERT
            })
        }, 3000)
    }

    const authenticateUser = async (user) => {
        try {
            const { data } = await axios.post('/auth', user)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data.token
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.message
            })
        }
        setTimeout(() => {
            dispatch({
                type: CLEAR_ALERT
            })
        }, 3000)
    }

    const signout = () => {
        dispatch({
            type: SIGN_OUT
        })
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                userAuthenticated,
                registerUser,
                authenticateUser,
                signout
            }}
        >
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider 