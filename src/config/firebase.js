import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCVaVKa76eJdRJ6PMG0Zfkv0jZJWBjh0e4",
    authDomain: "react-firebase-auth-2022.firebaseapp.com",
    projectId: "react-firebase-auth-2022",
    storageBucket: "react-firebase-auth-2022.appspot.com",
    messagingSenderId: "1063163268410",
    appId: "1:1063163268410:web:1ef957b80ebabd2bc59403"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)