import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const sigInUser = (email, password) => signInWithEmailAndPassword(auth, email, password)
    const signOutUser = () => signOut(auth)
    useEffect(() => {
        onAuthStateChanged(auth, (u) => {
            if (u) setUser(u.email)
            else setUser(null)
        })
    }, [])

    return (
        <AuthContext.Provider value={{ user, createUser, sigInUser, signOutUser }}>
            {children}
        </AuthContext.Provider>
    )
}