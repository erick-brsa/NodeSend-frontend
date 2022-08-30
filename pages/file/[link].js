import { useState } from 'react'

import useApplication from '../../hooks/useApplication'

import Layout from "../../components/Layout"
import Alert from '../../components/Alert'
import axios from '../../config/axios'

const LinkPage = ({ link }) => {

	const [hasPassword , setHasPassword] = useState(link.password)
	const [password, setPassword] = useState('')

	const { showAlert, message_file } = useApplication()

	const verifyPassword = async (e) => {
		e.preventDefault()

		try {
			const { data } = await axios.post(`/links/${link.link}`, { password })
			setHasPassword(data.password)
		} catch (error) {
			showAlert(error.response.data.message)
		}
	}

	return (
		<Layout>
			{hasPassword ? (
				<div>
					<div className="max-w-lg container mx-auto p-5 md:p-0">
						<p className='mb-2 font-semibold'>Este enlace está protegido por una contraseña, colocala a continuación.</p>
						{ message_file && <Alert />}
						<form
							className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
							onSubmit={e => verifyPassword(e)}
						>
							<div className="mb-4">
								<label htmlFor="password" className="text-black block text-sm font-bold mb-2">
									Contraseña
								</label>
								<input 
									id="password" 
									type="password" 
									placeholder="Contraseña"
									className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-slate-300"
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
                            <input 
                                type="submit"
                                value="Validar contraseña"
                                className="bg-red-600 hover:bg-gray-900 rounded transition-colors w-full p-2 text-white uppercase font-semibold "
                            />

						</form>
					</div>
				</div>			
				) : (
				<div className="flex flex-col gap-5 items-center justify-center mt-10">
					<h1 className="text-4xl text-center text-gray-700">Descarga tu archivo</h1>
						<a 
							href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/files/${link.file}`} 
							className="bg-red-500 hover:bg-red-800 text-center px-10 py-3 rounded font-bold text-white uppercase cursor-pointer">
								Descargar
						</a>
				</div>

			)}
		</Layout>
	)
}

export default LinkPage

export async function getStaticProps({ params }) { 

	const { data } = await axios(`/links/${params.link}`)

	return {
		props: { link: data }
	}
}

export async function getStaticPaths() {
	const { data: links } = await axios('/links')

	return {
		paths: links.map(link => ({
			params: { link: link.url }
		})),
		fallback: false
	} 
}