'use client'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'sonner'

const handleMutationError = (error) => {
  toast.error(error?.response?.data?.message || 'Upload Failed')
  console.error('Error:', error)
}

const handleMutationSuccess = (data, successMessage) => {
  if (!data) return
  toast.success(successMessage)
  console.log('Success:', data)
}

const uploadImage = async (file) => {
  if (!file) throw new Error('No file provided')

  const formData = new FormData()
  formData.append('file', file)

  const presetName = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME
  if (!presetName) throw new Error('Missing Cloudinary preset name')

  formData.append('upload_preset', presetName)

  const response = await axios.post(
    'https://api.cloudinary.com/v1_1/hamskid/image/upload',
    formData
  )

  return response.data
}

export const useImageUpload = () => {
  return useMutation({
    mutationFn: uploadImage,
    onSuccess: (data) => handleMutationSuccess(data, 'Upload Successful!'),
    onError: handleMutationError,
  })
}
