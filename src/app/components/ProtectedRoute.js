"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AuthContext from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {

   const { user } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user]);

    return user ? children : null;
};

export default ProtectedRoute;