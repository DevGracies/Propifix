import { TOKEN_KEY } from '@/lib/constants'
import { NextResponse } from 'next/server'

export function middleware(request) {
  const token = request.cookies.get(TOKEN_KEY)?.value

  if (!token && isProtectedRoute(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

function isProtectedRoute(pathname) {
  const protectedRoutes = ['/dashboard']
  return protectedRoutes.some((route) => pathname.startsWith(route))
}

export const config = {
  matcher: ['/cms/:path*'],
}
