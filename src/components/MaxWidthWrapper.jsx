import React from 'react'

const MaxWidthWrapper = ({children, className}) => {
  return (
    <div className={`max-w-[1440px] mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper;