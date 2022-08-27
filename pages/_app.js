import AuthProvider from '../context/auth/authProvider'
import AppProvider from '../context/app/appProvider'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
	return (
		<AuthProvider>
			<AppProvider>
				<Component {...pageProps} />
			</AppProvider>
		</AuthProvider>
	)
}

export default MyApp
