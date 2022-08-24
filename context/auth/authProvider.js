import { useReducer } from 'react'
import authContext from './authContext'
import authReducer from './authReducer'

import { 
    USER_AUTHENTICADED, 
    SUCCESSFUL_REGISTRATION,
    ERROR_REGISTRATION,
    CLEAR_ALERT
} from '../../types'

import axios from '../../config/axios'

const AuthProvider = ({ children }) => {
    
    // Definir un state inicial
    const initialState = {
        token: 'ESTE ES MI TOKEN',
        authenticated: null,
        user: null,
        message: null
    }

    // Definir el reducer
    const [ state, dispatch ] = useReducer(authReducer, initialState)

    // Usuario autenticado
    const userAuthenticated = (name) => {
        dispatch({
            type: USER_AUTHENTICADED,
            payload: name
        })
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

    return (
        <authContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                userAuthenticated,
                registerUser,
            }}
        >
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider 