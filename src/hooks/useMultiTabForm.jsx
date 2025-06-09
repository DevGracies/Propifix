'use client'

import { useEffect } from 'react'

export const useMultiTabForm = () => {
  const STORAGE_KEY = 'PROPIFIX_UPLOAD_MULTITAB_FORM_DATA'

  const saveTabData = (tabName, data, tabIndex = null) => {
    try {
      const existingData = localStorage.getItem(STORAGE_KEY)
      let formData = existingData ? JSON.parse(existingData) : {}

      formData = {
        ...formData,
        [tabName]: data,
        ...(tabIndex !== null &&
          (!formData.lastCompletedStep ||
            tabIndex > formData.lastCompletedStep) && {
            lastCompletedStep: tabIndex,
          }),
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
      return true
    } catch (error) {
      console.error('Error saving form data:', error)
      return false
    }
  }

  const getTabData = (tabName) => {
    try {
      const savedFormData = localStorage.getItem(STORAGE_KEY)
      if (savedFormData) {
        const parsedData = JSON.parse(savedFormData)
        return parsedData[tabName] || null
      }
      return null
    } catch (error) {
      console.error('Error loading form data:', error)
      return null
    }
  }

  const getLastCompletedStep = () => {
    try {
      const savedFormData = localStorage.getItem(STORAGE_KEY)
      if (savedFormData) {
        const parsedData = JSON.parse(savedFormData)
        return parsedData.lastCompletedStep || 0
      }
      return 0
    } catch (error) {
      console.error('Error getting last completed step:', error)
      return 0
    }
  }

  const getAllData = () => {
    try {
      const savedFormData = localStorage.getItem(STORAGE_KEY)
      return savedFormData ? JSON.parse(savedFormData) : null
    } catch (error) {
      console.error('Error loading all form data:', error)
      return null
    }
  }

  const clearAllData = () => {
    localStorage.removeItem(STORAGE_KEY)
  }

  return {
    saveTabData,
    getTabData,
    getLastCompletedStep,
    getAllData,
    clearAllData,
  }
}

/**Hook to load default values for a form from localStorage*/
export const useLoadFormDefaults = (form, tabName) => {
  const { getTabData } = useMultiTabForm()

  useEffect(() => {
    try {
      if (typeof window === 'undefined') return

      const savedData = getTabData(tabName)

      if (savedData) {
        Object.entries(savedData).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            form.setValue(key, value)
          }
        })
      }
    } catch (error) {
      console.error('Error loading form defaults:', error)
    }
  }, [form, tabName])
}
