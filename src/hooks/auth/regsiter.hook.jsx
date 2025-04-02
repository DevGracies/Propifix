'use client'

import API from '@/api'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import Cookies from 'js-cookie'
import { TOKEN_KEY } from '@/lib/constants'

const handleMutationSuccess = (data) => {
  toast.success('Registration Successful!')
  console.log('Success:', data)
  Cookies.set(TOKEN_KEY, JSON.stringify(data?.data?.data), {
    expires: 1 / 24, // 1 hour
    secure: true,
    sameSite: 'Strict',
  })
}

const handleMutationError = (error) => {
  toast.error(error?.response?.data?.message || 'Registration Failed')
  console.log('Error:', error)
}

const useRegisterMutation = (url) => {
  return useMutation({
    mutationFn: (data) => API.post(url, data),
    onSuccess: (data) => handleMutationSuccess(data),
    onError: handleMutationError,
  })
}

export const useCreateUser = () => useRegisterMutation('/auth/register/user')
export const useCreateAgent = () => useRegisterMutation('/auth/register/agent')
export const useCreateLandlord = () =>
  useRegisterMutation('/auth/register/landlord')
export const useCreateCaretaker = () =>
  useRegisterMutation('/auth/register/caretaker')
export const useCreateArtisan = () =>
  useRegisterMutation('/auth/register/artisan')
