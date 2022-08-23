/* eslint-disable @next/next/no-img-element */

import Link from "next/link"

const Header = () => {
    return (
        <header className="py-8 flex flex-col md:flex-row items-center justify-between">
            <Link href="/">
                <img
                    src="/logo.svg"
                    alt="NodeSend Logo"
                    className="w-64 mb-8 md:mb-0"
                />
            </Link>
            <div className="flex gap-2">
                <Link  href="/login"> 
                    <a className="bg-red-600 hover:bg-red-800 transition-colors font-semibold text-white px-5 py-3 rounded-lg uppercase">
                        Iniciar Sesión
                    </a>
                </Link>
                <Link  href="/register"> 
                    <a className="bg-black hover:bg-gray-700 transition-colors font-semibold text-white px-5 py-3 rounded-lg uppercase">
                        Crear Cuenta
                    </a>
                </Link>
            </div>
        </header>
    )
}

export default Header