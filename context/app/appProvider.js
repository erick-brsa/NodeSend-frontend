import { useReducer } from 'react'
import appContext from './appContext'
import appReducer from './appReducer'

import {
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_ERROR,
    CREATE_LINK_SUCCESS,
    CREATE_LINK_ERROR,
    SHOW_ALERT,
    CLEAR_ALERT
} from '../../types'

const AppProvider = ({ children }) => {

    // Definir state inicial

    const initialState = {
        message_file: null
    }

    // Definir el reducer
    const [ state, dispatch ] = useReducer(appReducer, initialState)

    const showAler = (message) => {
        dispatch({
            type: 'SHOW_ALERT',
            payload: message
        })
        setTimeout(() => {
            dispatch({
                type: 'CLEAR_ALERT'
            })
        }, 3000)
    }

    return (
        <appContext.Provider
            value={{
                message_file: state.message_file,
                showAler
            }}
        >
            {children}
        </appContext.Provider>
    )
}

export default AppProvider