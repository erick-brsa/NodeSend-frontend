import { useFormik } from 'formik'
import * as Yup from 'yup'

import Layout from '../components/Layout'
import Alert from '../components/Alert'
import useAuth from '../hooks/useAuth'

const RegisterPage = () => {

    const { registerUser, message } = useAuth()

    // Formulario y validación con formik y yup
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                    .required('El nombre es obligatorio'),
            email: Yup.string().
                    email('El email no es válido')
                    .required('El email es obligatorio'),
            password: Yup.string()
                    .required('La contraseña es obligatoria')
                    .min(6, 'La contraseña debe contener al menos 6 caracteres')
        }),
        onSubmit: (values) => {
            registerUser(values)
        }
    })
    
    return (
        <Layout
            title="NodeSend - Registro"
            description="NodeSend - Registro"
        >
            <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
                <h2 className="text-4xl font-sans font-bold text-gray-800 text-center my-4">
                    Crear Cuenta
                </h2>
                {message && <Alert />}
                <div className="flex justify-center mt-5">
                    <div className="w-full max-w-lg">
                        <form 
                            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="w-full max-w-lg">
                                <div className="mb-4">
                                    <label htmlFor="name" className="text-black block text-sm font-bold mb-2">
                                        Nombre
                                    </label>
                                    <input 
                                        id="name" 
                                        type="text" 
                                        placeholder="Nombre de Usuario"
                                        className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-slate-300"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.name && formik.errors.name && (
                                        <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                            <p className="font-bold">{formik.errors.name}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="text-black block text-sm font-bold mb-2">
                                        Correo Electrónico
                                    </label>
                                    <input 
                                        id="email" 
                                        type="email" 
                                        placeholder="Correo Electrónico"
                                        className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-slate-300"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                     {formik.touched.email && formik.errors.email && (
                                        <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                            <p className="font-bold">{formik.errors.email}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="text-black block text-sm font-bold mb-2">
                                        Contraseña
                                    </label>
                                    <input 
                                        id="password" 
                                        type="password" 
                                        placeholder="Contraseña"
                                        className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-slate-300"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                     {formik.touched.password && formik.errors.password && (
                                        <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                            <p className="font-bold">{formik.errors.password}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <input 
                                type="submit"
                                value="Crear Cuenta"
                                className="bg-red-600 hover:bg-gray-900 transition-colors w-full p-2 text-white uppercase font-semibold "
                            />
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default RegisterPage