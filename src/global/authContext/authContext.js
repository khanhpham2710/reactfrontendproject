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
    const [loading, setLoading] = useState(true)
    const [userLogOut,setUserLogOut] = useState(false)
    const [userInfo, setUserInfo] = useState(false)

    useEffect(() => {
        const user_info = JSON.parse(localStorage.getItem("user_info"))
        const logOut = JSON.parse(localStorage.getItem("logOut"))
        if (user_info) setUserInfo(user_info)
        if (logOut) setUserLogOut(logOut)
    }, []);

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
        loading,
        userLogOut,
        userInfo,
        setUserLogOut
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}