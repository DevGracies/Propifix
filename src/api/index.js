import { getBaseUrl } from '@/utils/envHandler'
import axios from 'axios'
import Cookies from 'js-cookie'

let url = getBaseUrl()

const API = axios.create({
  baseURL: url,
  timeout: 25000,
})

API.interceptors.request.use((req) => {
  const token = Cookies.get('Token')
  if (token) {
    req.headers.Authorization = `Bearer ${token}`
  }
  return req
})

let isRefreshing = false
let refreshSubscribers = []

const refreshToken = async () => {
  try {
    console.log('Attempting to refresh token...')
    const refreshToken = Cookies.get('RefreshToken')

    if (!refreshToken) {
      console.error('No refresh token available')
      throw new Error('No refresh token')
    }

    const response = await API.post(`${url}/auth/refresh`, { refreshToken })
    const newAccessToken = response.data.accessToken

    Cookies.set('AccessToken', newAccessToken, {
      expires: 1 / 24, // 1 hour
      secure: true,
      sameSite: 'Strict',
    })
    console.log('Token refreshed successfully:', newAccessToken)

    return newAccessToken
  } catch (error) {
    console.error('Refresh token failed:', error)
    Cookies.remove('AccessToken')
    Cookies.remove('RefreshToken')
    window.location.href = '/user/login'
    throw error
  }
}

const retryFailedRequests = (token) => {
  refreshSubscribers.forEach((callback) => callback(token))
  refreshSubscribers = []
}

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          refreshSubscribers.push((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`
            resolve(API(originalRequest))
          })
        })
      }

      originalRequest._retry = true
      isRefreshing = true

      try {
        const newToken = await refreshToken()
        isRefreshing = false
        retryFailedRequests(newToken)

        originalRequest.headers.Authorization = `Bearer ${newToken}`
        return API(originalRequest)
      } catch (refreshError) {
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export default API
