'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ModalWrapper } from '@/components/custom-ui/Modal'
import Image from 'next/image'
import { BedDouble, Bath, Toilet } from 'lucide-react'

const BookInspectionModal = () => {
  const [open, setOpen] = useState(false)

  return (
    <ModalWrapper
      open={open}
      setOpen={setOpen}
      trigger={
        <button
          onClick={() => setOpen(true)}
           className='w-full bg-white text-[#5D14AD] hover:bg-gradient-to-r hover:from-[#5D14AD] hover:to-[#9747FF] hover:text-white transition-all duration-300 px-6 py-3 rounded-lg font-semibold'>
          Book for Inspection
        </button>
      }
      bigscreenwidth="max-w-xl w-full"
    >
      <div className="space-y-6 p-4 md:p-6">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-[#5D14AD]">
          Go Tour this Property on Sunday, February 16
        </h2>

        {/* Property Info */}
        <div className="flex items-start gap-4">
          <div className="w-28 h-24 relative flex-shrink-0 rounded-md overflow-hidden">
            <Image
              src="/images/inspection-house.png"
              alt="Property"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-bold text-black">₦ 450,000</h3>
            <div className="flex items-center gap-4 text-sm text-black/80 font-semibold">
              <span className="flex text-nowrap items-center gap-1">
                <BedDouble size={16} /> 6 Bedrooms
              </span>
              <span className="flex text-nowrap items-center gap-1">
                <Bath size={16} /> 6 Bathrooms
              </span>
              <span className="flex text-nowrap items-center gap-1">
                <Toilet size={16} /> 4 Toilets
              </span>
            </div>
            <p className="text-sm text-black/80">Chevron, Lekki, Lagos</p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border italic border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-black/80"
          />
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border italic border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-black/80"
          />
          <div className="flex gap-4">
            <span className="px-4 py-3 border border-gray-300 rounded-md text-black/80">
              +234
            </span>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border italic border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-black/80"
            />
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-600 text-center leading-relaxed">
          PropiFix will call you within the next business hour to match you with a
          PropiFix™ network agent. By submitting this information, I acknowledge that
          I have read and agreed to the{' '}
          <span className="underline font-medium cursor-pointer text-black">
            Terms of use
          </span>{' '}
          and{' '}
          <span className="underline font-medium cursor-pointer text-black">
            Privacy Policy
          </span>
          .
        </p>

        <Link href={'/inspection-payment'} >
          <button className="w-full cursor-pointer bg-gradient-to-r from-[#5D14AD] to-[#9747FF] text-white py-3 rounded-md font-semibold hover:opacity-90 transition">Book for Inspection now</button>
        </Link>
      </div>
    </ModalWrapper>
  )
}

export default BookInspectionModal
