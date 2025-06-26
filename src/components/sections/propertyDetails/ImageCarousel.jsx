import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Images } from 'lucide-react'

const ImageCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handleImagePrev = () => {
        setCurrentImageIndex(prev =>
          prev === 0 ? images.length - 1 : prev - 1
        )
      }
    
      const handleImageNext = () => {
        setCurrentImageIndex(prev =>
          prev === images.length - 1 ? 0 : prev + 1
        )
      }

  const [index, setIndex] = useState(0)
  return (
    <div className='w-full relative rounded-xl overflow-hidden flex-shrink-0'>
          <Image
            src={images[currentImageIndex]}
            alt={`Property ${currentImageIndex + 1}`}
            width={800}
            height={600}
            className='w-full h-full object-cover rounded-xl transition-all duration-300 ease-in-out'
          />
          <div className='absolute inset-y-0 left-0 flex items-center px-2'>
            <button className='bg-white text-black p-2 rounded-full' onClick={handleImagePrev}>
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center px-2'>
            <button className='bg-white text-black p-2 rounded-full' onClick={handleImageNext}>
              <ChevronRight size={20} />
            </button>
          </div>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2 bg-gray-200 px-2 py-1 md:px-6 md:py-2 text-xs md:text-base rounded-full rounded-b-none flex items-center gap-2 shadow-md'>
            <Images width={20} />
            {currentImageIndex + 1}/{images.length}
          </div>
        </div>

  )
}

export default ImageCarousel


