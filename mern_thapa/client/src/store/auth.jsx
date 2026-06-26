import { createContext, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [services, setServices] = useState([]);


    const storetokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);

    };

    let isLoggedIn = !!token;


    // logout user function
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    // jwt authentication - to get the current logged in user data


    const userAuthentication = async () => {
        try {

            const response = await fetch("http://localhost:5001/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log("user data : ", data);
                setUser(data);
            }
        } catch (error) {
            console.log("Error in user data fetching", error);
        }
    }

    // to fetch the services data from the backend

    const getServices = async () => {
        try {
            const response = await fetch("http://localhost:5001/api/data/service", {
                method: "GET",

            });

            if (response.ok) {
                const data = await response.json();
                console.log("services data : ", data);
                setServices(data);
            }
        } catch (error) {
            console.log("Error in services data fetching", error);
        }
    }


    useEffect(() => {

        getServices();

        userAuthentication();

    }, []);



    return <AuthContext.Provider value={{ storetokenInLS, LogoutUser, isLoggedIn, user, services }}>
        {children}
    </AuthContext.Provider>
}


export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider in main.jsx");
    }
    return authContextValue;
}