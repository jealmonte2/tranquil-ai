"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import TranquilApp from "../tranquil-app"
import InsightsTrends from "../insights-trends"

export default function Page() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const view = searchParams.get("view")

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth")
    }
  }, [loading, user, router])

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <img src="/tranquil-icon.png" alt="Tranquil" className="h-12 mx-auto mb-4" />
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    )
  }

  // If not authenticated, don't render anything (will redirect in useEffect)
  if (!user) {
    return null
  }

  // Check for both insights and manager views
  if (view === "insights") {
    return <InsightsTrends />
  } else if (view === "manager") {
    // Return the manager view of TranquilApp
    return <TranquilApp isManagerView={true} />
  }

  // Default to employee view
  return <TranquilApp isManagerView={false} />
}
