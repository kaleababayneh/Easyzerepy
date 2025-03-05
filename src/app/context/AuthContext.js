"use client";

import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { use } from "react/cjs/react.production";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();
    
    const login = async (username, password) => {
        try {
            const formData = new FormData();
            formData.append("username", username);
            formData.append("password", password);

            const response = await axios.post("http://localhost:8000/auth/token", formData, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });
            axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.access}`;
            localStorage.setItem("token", response.data.access);
            setUser(response.data);
            router.push("/");
        } catch (error) {
            console.log("Login has failed");
            console.error(error);
        }
    }

    const logout = () => {
        setUser(null);
        delete axios.defaults.headers.common["Authorization"];
        router.push("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
       

export default AuthContext;