import { 
    USER_AUTHENTICADED, 
    USER_UNAUTHENTICADED,
    SUCCESSFUL_REGISTRATION, 
    ERROR_REGISTRATION,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    CLEAR_ALERT,
    SIGN_OUT
} from '../../types'

const authReducer = (state, action) => {
    switch (action.type) {
        case SUCCESSFUL_REGISTRATION:
        case ERROR_REGISTRATION:
        case ERROR_REGISTRATION:
        case LOGIN_ERROR:
            return {
                ...state,
                message: action.payload
            } 
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload)
            return {
                ...state,
                token: action.payload,
                authenticated: true
            }
        case USER_AUTHENTICADED: 
            return {
                ...state,
                user: action.payload,
                authenticated: true
            }
        case USER_UNAUTHENTICADED:
            return {
                ...state,
                user: null,
                authenticated: false
            }
        case SIGN_OUT: 
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                user: null,
                authenticated: false
            }
        case CLEAR_ALERT:
            return {
                ...state,
                message: null
            } 
        default: 
            return
    }
}

export default authReducer