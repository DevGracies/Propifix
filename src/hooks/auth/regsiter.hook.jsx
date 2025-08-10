'use client'

import API from '@/api'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import Cookies from 'js-cookie'
import { TOKEN_KEY } from '@/lib/constants'
import { useRouter } from 'next/navigation'

const useRegisterMutation = (url) => {
  const router = useRouter()

  return useMutation({
    mutationFn: (data) => API.post(url, data),

    onSuccess: (data) => {
      toast.success('Registration Successful!')
      console.log('Success:', data)

      Cookies.set(TOKEN_KEY, JSON.stringify(data?.data?.data), {
        expires: 1 / 24, 
        secure: true,
        sameSite: 'Strict',
      })

      router.push('/user/login') 
    },

    onError: (error) => {
      console.error('Registration failed:', error?.response?.data || error.message)

      toast.error(
        error?.response?.data?.message ||
        error?.message ||
        'Registration Failed'
      )
    },
  })
}

export const useCreateUser = () => useRegisterMutation('/auth/register/user')
export const useCreateAgent = () => useRegisterMutation('/auth/register/agent')
export const useCreateLandlord = () => useRegisterMutation('/auth/register/landlord')
export const useCreateCaretaker = () => useRegisterMutation('/auth/register/caretaker')
export const useCreateArtisan = () => useRegisterMutation('/auth/register/artisan')
