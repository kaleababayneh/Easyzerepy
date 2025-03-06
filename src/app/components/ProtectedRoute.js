"use client";

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation"; // Updated import
import AuthContext from "./../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    // if (!user) {
    //   router.push("/login");
    // }
  }, [user, router]);

  return user ? children : children;
};

export default ProtectedRoute;
