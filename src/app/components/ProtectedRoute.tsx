"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "../context/AuthContext"
import LoadingSpinner from "../components/LoadingSpinner"

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, loading, router])

  if (loading) {
    return <LoadingSpinner />
  }

  return isAuthenticated ? children : null
}

export default ProtectedRoute

