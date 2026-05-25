import {createContext, useContext} from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));


    const storetokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);

    };

    let isLoggedIn = !!token;


    // logout user function
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    return <AuthContext.Provider value={{storetokenInLS, LogoutUser, isLoggedIn}}>
        {children}
    </AuthContext.Provider>
}


export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider in main.jsx");
    }
    return authContextValue;
}