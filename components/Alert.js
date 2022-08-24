import useAuth from "../hooks/useAuth"

const Alert = () => {

    const { message } = useAuth()
    
    return (
        <div className="bg-red-500 px-3 py-2 w-full my-3 max-w-lg text-center text-white mx-auto rounded-lg">
            {message}
        </div>
    )
}

export default Alert