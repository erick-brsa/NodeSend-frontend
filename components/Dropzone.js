import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import useApplication from '../hooks/useApplication'
import axios from '../config/axios'

const Dropzone = () => {
    
    // const [ image, setImage ] = useState(null)

    const { showAlert } = useApplication()

    const onDropRejected = () => {
        showAlert('No se pudo subir, el límite es 1MB, obten una cuenta gratis para subir archivos más grandes')
    }

    const onDropAccepted = () => {
        // Crear un form data
        const formData = new FormData()
        formData.append('file', acceptedFiles[0])
        // setImage(URL.createObjectURL(acceptedFiles[0]))
        // const { data } = await axios.post('/files', formData)
        // console.log(data);
    }

    // const onDrop = useCallback(async (acceptedFiles) => {

        // Crear un form data
        // const formData = new FormData()
        // formData.append('file', acceptedFiles[0])

        // setImage(URL.createObjectURL(acceptedFiles[0]))
        // const { data } = await axios.post('/files', formData)
        // console.log(data);
    // }, [])

    
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDropAccepted, onDropRejected, maxSize: 1000000 })

    const files = acceptedFiles.map(file => (
            <li key={file.lastModified} className="bg-white flex-1 p-3 mb-4 shadow-lg rounded">
              <img src={image} />
                <p className="font-bold text-xl">{file.path}</p>
                <p className="font-sm text-gray-500">{(file.size / Math.pow(1024, 2).toFixed(2))} MB</p>
            </li>
        ) 
    )

    return (
        <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0 flex flex-col items-center justify-center border-dashed border-gray-400 border-2 bg-gray-100 px-4">
            {acceptedFiles.length > 0 ? (
                <div className="mt-10 w-full">
                    <h4>Archivos</h4>    
                    <ul className="text-2xl font-bold text-center mb-4">
                        {files}
                    </ul>
                    <button
                        type="button"
                        className="bg-blue-500 w-full rounded text-white my-10 hover:bg-blue-700 p-2"
                        onClick={() => createLink()}
                    >Crear enlace</button>
                </div>
            ) : (
                <div {...getRootProps({ className: "dropzone w-full py-32"})}>
                    <input 
                        className="h-100"
                        {...getInputProps()}    
                    />
                    <div className="text-center">
                            {
                                isDragActive ? (
                                    <p className='text-2xl'>
                                        Suelta el archivo aquí
                                    </p>
                                ) : (
                                    <>
                                        <p className="text-2xl text-center text-gray-700">Selecciona un archivo y arrastralo aquí</p>
                                        <button 
                                            type="button"
                                            className="bg-blue-500 w-full rounded text-white my-10 hover:bg-blue-700 p-2"
                                        >
                                            Selecciona archivos para subir
                                        </button>
                                    </>
                                )
                            }
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dropzone