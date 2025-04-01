'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'

export const CustomImage = ({
  src,
  alt = 'object not found',
  style,
  imgStyle,
  priority = false,
  clickFunc,
}) => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <div className={cn('relative', style)} onClick={clickFunc}>
      {isLoading && (
        <div className={cn('animate-pulse bg-gray-200', style)}></div>
      )}
      <Image
        src={src}
        alt={alt}
        className={cn('w-full', imgStyle)}
        onLoad={() => setIsLoading(false)}
        fill={true}
        priority={priority}
      />
    </div>
  )
}
