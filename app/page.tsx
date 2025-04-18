"use client"

import { useSearchParams } from "next/navigation"
import TranquilApp from "../tranquil-app"
import InsightsTrends from "../insights-trends"

export default function Page() {
  const searchParams = useSearchParams()
  const view = searchParams.get("view")

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
