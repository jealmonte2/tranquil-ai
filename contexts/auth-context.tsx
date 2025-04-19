"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { createBrowserSupabaseClient } from "@/lib/supabase"
import type { User, Session } from "@supabase/supabase-js"

type UserProfile = {
  id: string
  email: string
  first_name?: string
  last_name?: string
  full_name?: string
  role?: string
  department?: string
  mindfulness_score?: number
  workload_capacity?: number
  team_connection?: number
}

type AuthContextType = {
  user: User | null
  session: Session | null
  profile: UserProfile | null
  loading: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  // Fetch user profile data
  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabaseClient.from("profiles").select("*").eq("id", userId).single()

      if (error) {
        // Check if the error is about the missing table
        if (error.message.includes("does not exist")) {
          console.warn("Profiles table does not exist yet. Using default profile data.")
          // Return a default profile based on user metadata
          return createDefaultProfile(userId)
        }

        console.error("Error fetching profile:", error)
        return createDefaultProfile(userId)
      }

      return data as UserProfile
    } catch (error) {
      console.error("Error in fetchProfile:", error)
      return createDefaultProfile(userId)
    }
  }

  // Create a default profile from user metadata
  const createDefaultProfile = (userId: string): UserProfile => {
    if (!user) return { id: userId, email: "" }

    return {
      id: userId,
      email: user.email || "",
      first_name: user.user_metadata?.first_name || "",
      last_name: user.user_metadata?.last_name || "",
      full_name: user.user_metadata?.full_name || user.email?.split("@")[0] || "User",
      role: "Employee",
      mindfulness_score: 75,
      workload_capacity: 65,
      team_connection: 80,
    }
  }

  useEffect(() => {
    const setData = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabaseClient.auth.getSession()

        if (error) {
          console.error(error)
          setLoading(false)
          return
        }

        setSession(session)
        setUser(session?.user ?? null)

        if (session?.user) {
          const profileData = await fetchProfile(session.user.id)
          setProfile(profileData)
        }

        setLoading(false)
      } catch (error) {
        console.error("Error in setData:", error)
        setLoading(false)
      }
    }

    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(async (_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)

      if (session?.user) {
        const profileData = await fetchProfile(session.user.id)
        setProfile(profileData)
      } else {
        setProfile(null)
      }
    })

    setData()

    return () => {
      subscription.unsubscribe()
    }
  }, [supabaseClient])

  const signOut = async () => {
    await supabaseClient.auth.signOut()
    setProfile(null)
    router.push("/auth")
  }

  const value = {
    user,
    session,
    profile,
    loading,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
