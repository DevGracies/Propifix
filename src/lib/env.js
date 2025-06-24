'use client'
function getEnvVar(name) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export const RECAPTCHA_SITE_KEY = getEnvVar('NEXT_PUBLIC_RECAPTCHA_SITE_KEY')
export const RECAPTCHA_SECRET_KEY = getEnvVar(
  'NEXT_PUBLIC_RECAPTCHA_SECRET_KEY'
)
export const LOCAL_BASE_URL_DEV = getEnvVar('NEXT_PUBLIC_LOCAL_BASE_URL_DEV')
export const BASE_URL = getEnvVar('NEXT_PUBLIC_BASE_URL')
export const LOCAL_BASE_URL = getEnvVar('NEXT_PUBLIC_LOCAL_BASE_URL')
export const NODE_ENV = getEnvVar('NEXT_PUBLIC_NODE_ENV')
export const CLOUDINARY_CLOUD_NAME = getEnvVar(
  'NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME'
)
export const CLOUDINARY_API_KEY = getEnvVar('NEXT_PUBLIC_CLOUDINARY_API_KEY')
export const CLOUDINARY_API_SECRET = getEnvVar(
  'NEXT_PUBLIC_CLOUDINARY_API_SECRET'
)
export const CLOUDINARY_PRESET_NAME = getEnvVar(
  'NEXT_PUBLIC_CLOUDINARY_PRESET_NAME'
)
