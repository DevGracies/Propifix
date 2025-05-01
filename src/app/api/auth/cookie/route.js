import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { TOKEN_KEY } from '@/lib/constants'

export async function POST(request) {
  const { token } = await request.json()

  cookies().set({
    name: process.env.TOKEN_KEY || TOKEN_KEY,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60, // 1 hour
    path: '/',
  })

  return NextResponse.json({ success: true })
}

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get(process.env.TOKEN_KEY || TOKEN_KEY)

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({ token: token })
}
