import React, {useEffect} from "react";
import {createContext, useState} from "react";
import {userObserver} from "../authentication/firebase";


export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(false);
    useEffect(() => {
        userObserver(setCurrentUser)
    }, []);

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;