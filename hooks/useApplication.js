import { useContext } from "react"
import appContext from '../context/app/appContext'

const useApplication = () => {
    return useContext(appContext)
}

export default useApplication