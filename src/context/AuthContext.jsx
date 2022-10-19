import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "../config/firebase"

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [ currentUser, setCurrentUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth)

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
    }

    const resetPassword = (email) => sendPasswordResetEmail(auth, email)

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setCurrentUser(currentUser)
            setLoading(false)
        })
    }, [])

    return (
        <AuthContext.Provider
            value={{
                signup,
                login,
                loginWithGoogle,
                logout,
                currentUser,
                loading,
                resetPassword
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}