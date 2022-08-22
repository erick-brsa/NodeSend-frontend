/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import Header from "./Header"

const Layout = ({ children, title, description }) => {
    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <title>{title}</title>
            </Head>

            
            <div className="bg-gray-100 min-h-screen">
                <div className="container mx-auto">
                    <Header />
                    <main className="mt-20">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}

export default Layout