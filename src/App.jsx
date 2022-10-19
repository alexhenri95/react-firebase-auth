import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { AuthProvider } from "./context/AuthContext"
import PrivateLayout from "./layouts/PrivateLayout"
import ResetPassword from "./pages/ResetPassword"

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<AuthLayout/>}>
                        <Route index element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/recuperar-password" element={<ResetPassword/>} />
                    </Route>
                    <Route path="/home" element={<PrivateLayout/>}>
                        <Route path="/home" index element={<Home/>} />
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App