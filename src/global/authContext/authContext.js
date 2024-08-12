import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)
    const [userLoggedInWithGoogle, setUserLoggedInWithGoogle] = useState(false)
    const [userLoggedInWithEmail, setUserLoggedInWithEmail] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,initializeUser);
        return ;
    },[])

    async function initializeUser(user){
        if (user){
            setCurrentUser({...user});
            setUserLoggedInWithGoogle(true)
        } else {
            setCurrentUser(null)
            setUserLoggedInWithGoogle(false)
        }
        setLoading(false)
    }


    const value = {
        currentUser,
        userLoggedInWithGoogle,
        userLoggedInWithEmail,
        setUserLoggedInWithGoogle,
        setUserLoggedInWithEmail,
        loading,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}