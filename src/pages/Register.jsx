import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Register = () => {

    const { signup } = useAuth()

    const navigate = useNavigate()

    const [ user, setUser ] = useState({
        email: '',
        password: ''
    })
    const [ error, setError ] = useState()

    const handleChange = ({target: {name, value}}) => {
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        if (user.name === '' || user.email === '') {
            setError('Todos los campos son requeridos.')
            setTimeout(() => {
                setError()
            }, 3000);
            return
        }

        try {
            await signup( user.email, user.password )
            navigate('/home')
        } catch (error) {
            setError(error.message)
            setTimeout(() => {
                setError()
            }, 3000);
        }

    }

    return (
        <div className="py-12 px-12 bg-white rounded-2xl shadow-xl w-96">
            <div className='text-center'>
                <h1 className="text-3xl font-bold mb-6 cursor-pointer">
                    Registro
                </h1>
            </div>

            {
                error &&  <p className="p-4 bg-red-500 mb-6 rounded text-white text-center">(*) {error}</p>
            }

            <form onSubmit={ handleSubmit } noValidate="off">
                <div className="space-y-4">
                    <input 
                        type="email" 
                        name="email"
                        id="email"
                        onChange={handleChange}
                        placeholder="Tu Email" 
                        className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-400"
                    />

                    <input 
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        placeholder="Tu Contraseña" 
                        className="block text-sm py-3 px-4 rounded-lg w-full border outline-purple-400"
                    />
                </div>

                <div className="text-center mt-6">
                    <button type="submit" className="py-3 w-full text-lg text-white bg-purple-500 rounded-lg hover:bg-purple-600 uppercase font-bold">
                        Crear
                    </button>
                </div>
            </form>

            <div className="text-center mt-8 flex justify-between items-center">
                
                <Link to="/" className=''>
                    ¿Ya tienes una cuenta?
                    <span className='bg-purple-200 py-1 px-2 rounded text-sm text-slate-500 hover:text-slate-600 font-bold cursor-pointer uppercase'>Login</span>
                </Link>

            </div>
        </div>
    )
}

export default Register