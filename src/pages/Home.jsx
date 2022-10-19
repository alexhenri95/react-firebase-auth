import useAuth from "../hooks/useAuth"

const Home = () => {

    const { currentUser, logout, loading } = useAuth()

    const handleLogout = async() => {
        await logout()
    }

    console.log(currentUser);

    if(loading) return <h1>Cargando...</h1>

    return (
        <div className="py-12 px-12 bg-white rounded-2xl shadow-xl w-96">
            <div className='text-center'>
                <h1 className="text-3xl font-bold mb-6 cursor-pointer">
                    Home
                </h1>
                <p>Bienvenido {  currentUser.displayName || currentUser.email }</p>
                <br />
                <button onClick={ handleLogout } className='bg-purple-200 py-3 px-4 rounded text-sm text-slate-500 hover:text-slate-600 font-bold cursor-pointer uppercase'>Cerrar Sesión</button>
            </div>
        </div>
    )
}

export default Home