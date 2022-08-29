import { useReducer } from 'react'

import appContext from './appContext'
import appReducer from './appReducer'

import {
    CLEAR_STATE,
    UPLOAD_FILE,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_ERROR,
    CREATE_LINK_SUCCESS,
    CREATE_LINK_ERROR,
    SHOW_ALERT,
    HIDE_ALERT
} from '../../types'

import axios from '../../config/axios'

const AppProvider = ({ children }) => {

    // Definir state inicial

    const initialState = {
        message_file: null,
        name: '',
        original_name: '',
        loading: false,
        downloads: 1,
        password: '',
        author: null,
        url: ''
    }

    // Definir el reducer
    const [ state, dispatch ] = useReducer(appReducer, initialState)

    // Sube los archivos al servidor
    const uploadFile = async (formData, fileName) => {
        dispatch({
            type: UPLOAD_FILE
        })

        try {
            const { data } = await axios.post('/files', formData)
            dispatch({
                type: UPLOAD_FILE_SUCCESS,
                payload: {
                    name: data.file,
                    original_name: fileName
                }
            })
        } catch (error) {
            dispatch({
                type: UPLOAD_FILE_ERROR,
                payload: error.response.data.message
            })
        }
    }

    // Crea un enlace una vez que se subió el archivo
    const createLink = async () => {
        const data = {
            name: state.name,
            original_name: state.original_name,
            downloads: state.downloads,
            author: state.author
        }

        try {
            const { data: response } = await axios.post('/links', data)

            dispatch({
                type: CREATE_LINK_SUCCESS,
                payload: response.message
            })
        } catch (error) {
            dispatch({
                type: CREATE_LINK_ERROR,
                payload: error.response.data.message
            })
        }
    }

    // Reiniciar el state
    const restart_app = () => {
        dispatch({
            type: CLEAR_STATE,
        })
    }

    // Mostrar alerta
    const showAlert = (message) => {
        dispatch({
            type: SHOW_ALERT,
            payload: message
        })
        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT
            })
        }, 3000)
    }

    return (
        <appContext.Provider
            value={{
                message_file: state.message_file,
                name: state.name,
                original_name: state.original_name,
                loading: state.loading,
                downloads: state.downloads,
                password: state.password,
                author: state.author,
                url: state.url,
                showAlert,
                uploadFile,
                restart_app,
                createLink
            }}
        >
            { children }
        </appContext.Provider>
    )
}

export default AppProvider