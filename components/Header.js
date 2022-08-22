/* eslint-disable @next/next/no-img-element */

const Header = () => {
    return (
        <header className="py-8 flex flex-col md:flex-row items-center justify-between">
            <img
                src="/logo.svg"
                alt="NodeSend Logo"
                className="w-64 mb-8 md:mb-0"
            />
        </header>
    )
}

export default Header