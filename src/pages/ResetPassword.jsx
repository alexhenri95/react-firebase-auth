import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ResetPassword = () => {

    const { resetPassword } = useAuth()

    const [ email, setEmail ] = useState('')

    const [ error, setError ] = useState()

    const handleSubmit = async(e) => {
        e.preventDefault()

        if (email === ''){
            setError('Ingresa tu email.')
            setTimeout(() => {
                setError()
            }, 3000);
            return
        }

        try {
            await resetPassword(email)
            setError('Te enviamos un email con un enlace para reestablecer tu contraseña.')
            setEmail('')
        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <div className="py-12 px-12 bg-white rounded-2xl shadow-xl w-96">
            <div className='text-center'>
                <h1 className="text-3xl font-bold mb-6 cursor-pointer">
                    Recuperar Contraseña
                </h1>
            </div>

            {
                error &&  <p className="p-4 bg-red-500 mb-6 rounded text-white text-center">(*) {error}</p>
            }

            <form onSubmit={ handleSubmit } noValidate="off">
                <div className="space-y-4">
                    <input 
                        type="email"
                        onChange={ (e) => setEmail(e.target.value) }
                        placeholder="Tu Email" 
                        className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-400"
                    />
                </div>

                <div className="text-center mt-6">
                    <button type='submit' className="py-3 w-full text-lg text-white bg-purple-500 rounded-lg hover:bg-purple-600 uppercase font-bold">
                        Enviar email
                    </button>
                </div>
            </form>

            <div className="text-center mt-8 flex justify-between items-center">
                
                <Link to="/register" className=''>
                    ¿Aún no tienes una cuenta?
                    <span className='bg-purple-200 py-1 px-2 rounded text-sm text-slate-500 hover:text-slate-600 font-bold cursor-pointer uppercase'>Registrate</span>
                </Link>

            </div>
        </div>
    )
}

export default ResetPassword