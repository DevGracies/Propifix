import React from 'react'

const AnimatedSpinner = () => {
  return (
         <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
            <div className="absolute top-0 left-0 w-16 h-16 border-4 border-[#5D14AD] rounded-full border-t-transparent animate-spin"></div>
        </div>
  )
}

export default AnimatedSpinner
