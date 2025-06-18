'use client'

import React, { useState } from 'react'
import { BackButton } from './BackButton'
import BookInspectionModal from './BookInspectionModal'
import { ChevronLeft, ChevronRight, Images } from 'lucide-react'
import Image from 'next/image'
import PropertyInfo from './PropertyInfo'
import { format } from 'date-fns'

const Inspection = () => {
  const dates = [
    { label: 'Sunday', date: '2025-02-16', short: '16', month: 'FEB' },
    { label: 'Monday', date: '2025-02-17', short: '17', month: 'FEB' },
    { label: 'Tuesday', date: '2025-02-18', short: '18', month: 'FEB' }
  ]

  const timeSlots = [
    { label: 'Morning', time: '8am - 12pm' },
    { label: 'Afternoon', time: '12pm - 4pm' },
    { label: 'Evening', time: '4pm - 8pm' }
  ]

  const images = Array(12).fill('/images/inspection-house.svg')

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedDate, setSelectedDate] = useState(dates[0].date)
  const [selectedTime, setSelectedTime] = useState('Morning')
  const [showModal, setShowModal] = useState(false)

  const selectedTimeSlot = timeSlots.find(slot => slot.label === selectedTime)?.time || ''

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1
      setCurrentIndex(newIndex)
      setSelectedDate(dates[newIndex].date)
    }
  }

  const handleNext = () => {
    if (currentIndex < dates.length - 1) {
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      setSelectedDate(dates[newIndex].date)
    }
  }

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

  return (
    <div className='p-6 md:p-10 mt-20 space-y-10'>
      <BackButton />
      <h1 className='text-lg md:text-2xl font-semibold text-[#9D71C6]'>
        Book <span className='text-[#5D14AD]'>Inspection</span>
      </h1>

      <div className='flex flex-col md:flex-row gap-10 items-stretch'>
        <div className='w-full md:w-3/5 relative rounded-xl overflow-hidden flex-shrink-0'>
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

        <div className='w-full md:w-2/5 flex flex-col justify-between space-y-6'>
          {/* Date */}
          <div>
            <h2 className='font-semibold text-center text-lg md:text-2xl mb-4'>Date</h2>
            <div className='flex items-center gap-4 overflow-x-auto scrollbar-hide'>
              <button onClick={handlePrev}>
                <Image src={'/icons/left-arrow-button.svg'} alt='button' width={200} height={20} />
              </button>
              {dates.map((d, index) => (
                <div
                  key={d.date}
                  onClick={() => {
                    setSelectedDate(d.date)
                    setCurrentIndex(index)
                  }}
                  className={`p-4 rounded-xl border min-w-[96px] w-full text-center ${
                    selectedDate === d.date
                      ? 'bg-purple-100 border-purple-600'
                      : 'border-gray-200'
                  }`}
                >
                  <p className='text-xs md:text-sm font-semibold'>{d.label}</p>
                  <p className='text-xs md:text-xl font-bold'>{d.short}</p>
                  <p className='text-xs md:text-sm'>{d.month}</p>
                </div>
              ))}
              <button onClick={handleNext}>
                <Image src={'/icons/right-arrow-button.svg'} alt='button' width={200} height={20} />
              </button>
            </div>
          </div>

          {/* Time */}
          <div>
            <h2 className='font-semibold text-center text-lg md:text-2xl mb-4'>Time</h2>
            <div className='flex gap-4 overflow-x-auto scrollbar-hide'>
              {timeSlots.map((slot) => (
                <button
                  key={slot.label}
                  onClick={() => setSelectedTime(slot.label)}
                  className={`p-4 rounded-xl border w-full ${
                    selectedTime === slot.label
                      ? 'bg-purple-100 border-purple-600 text-purple-700'
                      : 'border-gray-200 text-gray-600'
                  }`}
                >
                  <p className='text-xs md:text-sm font-semibold'>{slot.label}</p>
                  <p className='text-xs md:text-sm'>{slot.time}</p>
                </button>
              ))}
            </div>
          </div>

          <div className='w-full bg-gradient-to-r from-[#5D14AD] to-[#9747FF] p-[2px] rounded-lg'>
            <BookInspectionModal
              open={showModal}
              setOpen={setShowModal}
              selectedDate={selectedDate}
              selectedTime={selectedTimeSlot}
            />
          </div>
        </div>
      </div>

      <PropertyInfo
        name='4-Bedroom Semi-Detached Duplex'
        location='Chevy Lekki, Lagos'
        agent='Grace Olori'
        inspectionDate={format(new Date(selectedDate), 'MMM dd, yyyy')}
        inspectionTime={selectedTimeSlot}
        fee='₦5,000'
      />
    </div>
  )
}

export default Inspection


