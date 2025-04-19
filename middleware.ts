import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  try {
    const response = NextResponse.next()
    const supabase = createMiddlewareClient({ req: request, res: response })

    const {
      data: { session },
    } = await supabase.auth.getSession()

    // If there's no session and the user is trying to access a protected route
    const isAuthRoute = request.nextUrl.pathname.startsWith("/auth")

    if (!session && !isAuthRoute) {
      const redirectUrl = new URL("/auth", request.url)
      return NextResponse.redirect(redirectUrl)
    }

    // If there's a session and the user is trying to access auth routes
    if (session && isAuthRoute) {
      const redirectUrl = new URL("/", request.url)
      return NextResponse.redirect(redirectUrl)
    }

    return response
  } catch (error) {
    console.error("Middleware error:", error)
    // If there's an error, allow the request to continue
    // but redirect to auth page if it's not already an auth route
    const isAuthRoute = request.nextUrl.pathname.startsWith("/auth")
    if (!isAuthRoute) {
      const redirectUrl = new URL("/auth", request.url)
      return NextResponse.redirect(redirectUrl)
    }
    return NextResponse.next()
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
