import Layout from "../../components/Layout"
import axios from '../../config/axios'

const LinkPage = ({ link }) => {
	return (
		<Layout>
			<h1 className="text-4xl text-center text-gray-700">Descarga tu archivo</h1>
			<div className="flex items-center justify-center mt-10">
				<a 
					href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/files/${link.file}`} 
					className="bg-red-500 hover:bg-red-800 text-center px-10 py-3 rounded font-bold text-white uppercase cursor-pointer">
					Aquí
				</a>
			</div>
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