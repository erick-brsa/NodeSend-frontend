import {
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_ERROR,
    CREATE_LINK_SUCCESS,
    CREATE_LINK_ERROR,
    SHOW_ALERT,
    CLEAR_ALERT
} from '../../types'

const appReducer = (state, action) => {
    switch(action.type) {
        case UPLOAD_FILE_SUCCESS:
        case UPLOAD_FILE_ERROR:
        case CREATE_LINK_SUCCESS:
        case CREATE_LINK_ERROR:
            return
        case SHOW_ALERT:
            return {
                ...state,
                message_file: action.payload
            }
        case CLEAR_ALERT:
            return {
                ...state,
                message_file: null
            }
        default: 
            return
    }
}

export default appReducer