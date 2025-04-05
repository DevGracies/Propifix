'use client'

import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const ReactQueryProvider = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // Default 5 minutes
        // cacheTime: 1000 * 60 * 10, // Default 10 minutes
        refetchOnWindowFocus: false, // Disable refetch on window focus
        keepPreviousData: true,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider
