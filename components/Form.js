import { useState } from "react"
import useApplication from "../hooks/useApplication"

const Form = () => {
    
	const [hasPassword, setHasPassword] = useState(false)

    const { addPassword, addDownloads } = useApplication()

	return (
		<div className="w-full mt-20">
			<div className="mb-2">
				<label htmlFor="" className="text-lg">
					Eliminar tras:
					<select 
                        className="appearance-none w-full mt-2 bg-white border border-gray-400 tet-black px-4 pr-8 py-2 rounded leading-none focus:outline-none focus:border-gray-500"
                        onChange={(e) => addDownloads(Number(e.target.value))}
                    >
						<option value="" selected disabled> -- Selecciona --</option>
						<option value="1">5 descargas</option>
						<option value="10">10 descargas</option>
						<option value="15">15 descargas</option>
						<option value="20">20 descargas</option>
					</select>
				</label>
			</div>
			<div className="mb-0">
				<div className="flex justify-between">
					<label htmlFor="" className="text-lg">
						Proteger con contraseña:
					</label>
					<input
						type="checkbox"
						onChange={() => setHasPassword(!hasPassword)}
					/>
				</div>
				{hasPassword && (
					<input
						type="password"
						className="appearance-none w-full rounded mt-2 bg-white border border-gray-400 text-black py-3 px-4 pr-8 leading-none focus:outline-none focus:border-gray-600"
						placeholder="Escribe la contraseña"
                        onChange={e => addPassword(e.target.value)}
					/>
				)}
			</div>
		</div>
	)
}

export default Form
