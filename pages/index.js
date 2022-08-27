import Link from "next/link"
import { useEffect } from "react"

import Alert from '../components/Alert'
import Layout from "../components/Layout"
import Dropzone from "../components/Dropzone"

import useAuth from "../hooks/useAuth"
import useApplication from "../hooks/useApplication"

const IndexPage = () => {

	const { userAuthenticated, user } = useAuth()
	const { message_file } = useApplication()

	useEffect(() => {
		userAuthenticated()
	}, [])

	return (
		<Layout
			title="NodeSend"
			description="NodeSend, comparte archivos de forma segura"
		>
			<div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
				{message_file && <Alert></Alert>}
				<div className="lg:flex md:shadow-lg bg-white rounded-lg py-10 px-5">
					<Dropzone />
					<div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0">
						<h2 className="text-4xl font-sans font-bold text-gray-800 my-4">
							Compartir archivos de forma sencilla y privada
						</h2>
						<p className="text-gray-400 font-bold">
							<span className="text-red-500"> React Node Send {''} </span>
								te permite compartir archivos con cifrado de extremo a extremo
						</p>
						{!user && (
							<Link href="/register">
								<a className="text-slate-400 font-bold text-lg hover:text-slate-500">
									Crea una cuenta para mayores beneficios
								</a>
							</Link>
						)}
					</div>
				</div>
			</div>
		</Layout>
	  )
}

export default IndexPage
