import axios from './axios'

const tokenAuth = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Beader ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export default tokenAuth