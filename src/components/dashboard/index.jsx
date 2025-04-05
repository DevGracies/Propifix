'use client'

import { TOKEN_KEY } from '@/lib/constants'
import Cookies from 'js-cookie'

export const DashboardHome = () => {
  const token = Cookies.get(TOKEN_KEY)
  const parsedToken = token ? JSON.parse(token) : null

  console.log(parsedToken?.accessToken)

  return (
    <div>
      {`Welcome to the dashboard home ${
        parsedToken?.user?.fullName || 'Guest'
      }`}
    </div>
  )
}
