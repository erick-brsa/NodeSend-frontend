import useApplication from '../../hooks/useApplication'
import {
    CLEAR_STATE,
    UPLOAD_FILE,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_ERROR,
    CREATE_LINK_SUCCESS,
    CREATE_LINK_ERROR,
    ADD_PASSWORD,
    ADD_DOWNLOADS,
    SHOW_ALERT,
    HIDE_ALERT
} from '../../types'

const appReducer = (state, action) => {
    switch(action.type) {
        case CLEAR_STATE:
            return {
                ...state,
                message_file: null,
                name: '',
                original_name: '',
                loading: false,
                downloads: 1,
                password: '',
                author: null,
                url: ''
            }
        case UPLOAD_FILE:
            return {
                ...state,
                loading: true
            }
        case UPLOAD_FILE_SUCCESS:
            return {
                ...state,
                name: action.payload.name,
                original_name: action.payload.original_name,
                loading: false
            }    
        case UPLOAD_FILE_ERROR: 
            return {
                ...state,
                message_file: action.payload,
                loading: false
            } 
        case CREATE_LINK_SUCCESS:
            return {
                ...state,
                url: action.payload
            }
        case CREATE_LINK_ERROR: {
            return {
                ...state,
                message_file: action.payload
            }
        }
        case ADD_PASSWORD: {
            return {
                ...state,
                password: action.payload
            }
        }
        case ADD_DOWNLOADS: {
            return {
                ...state,
                downloads: action.payload
            }
        }
        case SHOW_ALERT:
            return {
                ...state,
                message_file: action.payload
            }
        case HIDE_ALERT:
            return {
                ...state,
                message_file: null
            }
        default: 
            return
    }
}

export default appReducer