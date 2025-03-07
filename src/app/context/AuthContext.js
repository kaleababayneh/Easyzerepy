"use client"

import { createContext, useState, useEffect, useContext } from "react"
import { useRouter } from "next/navigation"
import {
  login as loginService,
  register as registerService,
  logout as logoutService,
  getCurrentUser,
} from "@/app/services/authService"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in on initial load
    const checkLoggedIn = async () => {
      try {
        const currentUser = getCurrentUser()
        setUser(currentUser)
      } catch (err) {
        console.error("Authentication check failed:", err)
      } finally {
        setLoading(false)
      }
    }

    checkLoggedIn()
  }, [])

  const login = async (username, password) => {
    setError(null)
    try {
      const userData = await loginService(username, password)
      setUser(userData)
      router.push("/")
      return userData
    } catch (err) {
      setError(err.response?.data?.detail || "Login failed. Please check your credentials.")
      throw err
    }
  }

  const register = async (username, password) => {
    setError(null)
    try {
      await registerService(username, password)
      return await login(username, password)
    } catch (err) {
      setError(err.response?.data?.detail || "Registration failed. Please try again.")
      throw err
    }
  }

  const logout = () => {
    logoutService()
    setUser(null)
    router.push("/login")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        loading,
        error,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthContext

