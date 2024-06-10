import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, initializeUser);
        return unsub
    }, [])

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({ ...user });
        } else {
            setCurrentUser(null);
        }
        setLoading(false)
    }
    
    const value = {
        currentUser, userLoggedIn: !!currentUser, loading
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}