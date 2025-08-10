'use client'

import API from '@/api'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import Cookies from 'js-cookie'
import { TOKEN_KEY, ROLE_MAP } from '@/lib/constants'
import { useRouter } from 'next/navigation'

export const useLogin = (userType) => {
  const router = useRouter()

  const normalizedUserType = userType?.toLowerCase()
  const expectedRole = ROLE_MAP[normalizedUserType]

  console.log('Login hook userType:', userType)
  console.log('Normalized userType:', normalizedUserType)
  console.log('Mapped role:', expectedRole)

  return useMutation({
    mutationFn: (data) => API.post('/auth/login', data),

    onSuccess: (response) => {
      const userData = response?.data?.data
      const actualRole = userData?.user?.__t?.toLowerCase()
      const token = userData?.accessToken

      console.log('LOGIN DEBUG — expected:', expectedRole, 'actual:', actualRole)

    if (actualRole !== expectedRole) {
        toast.error(`No ${normalizedUserType} account found with these credentials.`)
        return
      }

      Cookies.set(TOKEN_KEY, JSON.stringify(userData), {
        expires: 1 / 24,
        secure: true,
        sameSite: 'Strict',
      })

      toast.success('Login successful!')

      switch (actualRole) {
        case 'house_agent':
          router.push('/agent/dashboard')
          break
        case 'landlord':
          router.push('/landlord/dashboard')
          break
        case 'caretaker':
          router.push('/caretaker/dashboard')
          break
        case 'artisan':
          router.push('/artisan/dashboard')
          break
        case 'user':
        default:
          router.push('/user/dashboard')
      }
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
        error?.message ||
        'Login Failed'
      )
    },
  })
}
