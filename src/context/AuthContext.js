import React, {useEffect} from "react";
import {createContext, useState} from "react";


export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(true);
    useEffect(()=> {
        setCurrentUser(JSON.parse(sessionStorage.getItem("user")));
    }, []);

    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;