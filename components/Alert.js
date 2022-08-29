import useAuth from "../hooks/useAuth"
import useApplication from "../hooks/useApplication"

const Alert = () => {

    // Extraer mensaje de error para usuario
    const { message } = useAuth()

    // Extraer mensaje de error para archivos
    const { message_file } = useApplication()
    
    return (
        <div className="bg-red-500 px-3 py-2 w-full my-3 max-w-lg text-center text-white mx-auto rounded-lg">
            { message || message_file }
        </div>
    )
}

export default Alert