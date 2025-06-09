'use client'

import { useRef } from 'react'
import { PopularBadge } from '@/components/svg'
import { Badge } from '../Badge'
import { CustomImage } from '../Image'
import { Text } from '../Text'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const PropertyCard = ({ details }) => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  // Sample images array - in a real implementation, these would come from the details prop
  const images = [
    '/User_profile_bg.png',
    '/User_profile_bg.png',
    '/User_profile_bg.png',
    '/User_profile_bg.png',
  ]

  return (
    <div className='flex flex-col gap-4 border-t-2 border-gray pt-5'>
      <div className='flex items-center justify-between'>
        <Text style='text-[16px] font-[700]'>₦ 450,000</Text>
        <Badge text='FOR SALE' />
      </div>
      <Text style='text-[14px] font-[500] text-dark-grey'>
        4 beds . 1 bath . 1931 sqft . Semi Furnished
      </Text>
      <div className='relative'>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          pagination={{ clickable: true }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current
            swiper.params.navigation.nextEl = navigationNextRef.current
          }}
          className='w-full md:min-h-[270px] h-[200px]'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <CustomImage
                src={image}
                style='w-full md:min-h-[270px] h-[200px]'
                imgStyle='object-cover'
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className='absolute top-1/2 left-4 z-10 transform -translate-y-1/2'>
          <button
            ref={navigationPrevRef}
            className='flex items-center justify-center bg-white p-2 rounded-full shadow-md'
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        <div className='absolute top-1/2 right-4 z-10 transform -translate-y-1/2'>
          <button
            ref={navigationNextRef}
            className='flex items-center justify-center bg-white p-2 rounded-full shadow-md'
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className='absolute bottom-[-1rem] left-[-0.5rem] z-40'>
          <PopularBadge />
        </div>
      </div>
      <Text style='text-[16px] font-[500]'>
        Plot 16 Chief Nwuke Street Trans Amadi Industrial Layout
      </Text>
    </div>
  )
}
