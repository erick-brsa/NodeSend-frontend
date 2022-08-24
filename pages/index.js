/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import Layout from "../components/Layout"
import useAuth from "../hooks/useAuth"

const IndexPage = () => {

	const { userAuthenticated } = useAuth()

	useEffect(() => {
		userAuthenticated()
	}, [])

	return (
		<Layout
			title="NodeSend"
			description="NodeSend, comparte archivos de forma segura"
		>
			<h1>Home</h1>
		</Layout>
	  )
}

export default IndexPage
