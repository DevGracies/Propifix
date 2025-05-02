import { TOKEN_KEY } from '@/lib/constants'
import Cookies from 'js-cookie'

export const UseLoggedIn = () => {
  const token = Cookies.get(TOKEN_KEY)
  const parsedToken = token ? JSON.parse(token) : null

  return {
    firstName: parsedToken?.user?.fullName,
    isLoggedIn: parsedToken ? true : false,
  }
}
