import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PrivateLayout = () => {

    const { currentUser, loading } = useAuth()

    if (loading) return <h1>Loading</h1> 

    if (!currentUser) return <Navigate to='/' />

    return (
        <div className="min-h-screen bg-purple-400 flex justify-center items-center">
            <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
            <div className="absolute w-48 h-48 rounded-xl bg-purple-300 bottom-6 right-10 transform rotate-12 hidden md:block"></div>

                <Outlet/>

            <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
            <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
            </div>
        </div>

    )
}

export default PrivateLayout