import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css"
import { AuthProvider } from "@/app/context/AuthContext"
import Script from "next/script"

export const metadata = {
  title: "Fitness Tracker",
  description: "Track your workouts and routines",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}

