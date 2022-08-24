/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import useAuth from "../hooks/useAuth"

const Header = () => {

    const { user, signout } = useAuth()

    return (
        <header className="py-8 flex flex-col md:flex-row items-center justify-between">
            <Link href="/">
                <img
                    src="/logo.svg"
                    alt="NodeSend Logo"
                    className="w-64 mb-8 md:mb-0"
                />
            </Link>
            {user ? (
                <div className="flex gap-5 items-center">
                    <p className="font-bold text-lg">¡Hola, {user.name}!</p>
                    <button 
                        type="button"
                        onClick={signout}
                        className="bg-red-600 hover:bg-red-800 transition-colors font-semibold text-white px-5 py-3 rounded-lg uppercase"
                    >
                            Cerrar Sesión
                    </button>
                </div>
            ) : (
                <div className="flex gap-2">
                    <Link href="/login">
                        <a className="bg-red-600 hover:bg-red-800 transition-colors font-semibold text-white px-5 py-3 rounded-lg uppercase">
                            Iniciar Sesión
                        </a>
                    </Link>
                    <Link href="/register">
                        <a className="bg-black hover:bg-gray-700 transition-colors font-semibold text-white px-5 py-3 rounded-lg uppercase">
                            Crear Cuenta
                        </a>
                    </Link>
                </div>
            )}
        </header>
    )
}

export default Header