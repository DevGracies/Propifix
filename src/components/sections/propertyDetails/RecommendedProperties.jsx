'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const properties = [
  {
    price: '₦ 450,000',
    beds: 4,
    baths: 1,
    sqft: 1931,
    furnished: 'Semi-Furnished',
    status: 'FOR SALE',
    label: 'Plot 16 Chief Nwuke Street',
    location: 'Trans Amadi Industrial Layout',
    img: '/images/inspection-house.png',
    isNew: false
  },
  {
    price: '₦ 250,000',
    beds: 7,
    baths: 3,
    sqft: 1334,
    furnished: 'Semi-Furnished',
    status: 'FOR SALE',
    label: '44, Arinola Street, Ori Okuta.',
    location: 'Ikorodu',
    img: '/images/inspection-house.png',
    isNew: true
  },
  {
    price: '₦ 195,000',
    beds: 2,
    baths: 2,
    sqft: 1000,
    furnished: 'Furnished',
    status: 'FOR SALE',
    label: '5 Olaide Tomori Street, off',
    location: 'Simbiat Abiola Road, Ikeja',
    img: '/images/inspection-house.png',
    isNew: true
  },
]

const RecommendedProperties = () => {
  const scrollRef = useRef(null)
  const [activeTab, setActiveTab] = useState('For Sale')

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const scrollAmount = scrollRef.current.offsetWidth
    scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
  }

  return (
    <section className="w-full space-y-4">
      <div className="flex flex-col md:flex-row items-start lg:items-center justify-between">
        <h2 className="text-xl text-nowrap md:text-3xl font-semibold text-[#9D71C6] flex-1">
            Recommended
         <span className='text-[#5D14AD]'> Properties</span> 
        </h2>

        <div className="hidden lg:block mx-10 h-px w-full bg-[#5D14AD]" />

        <div className="hidden md:flex items-center gap-3 mr-6">
          <Image
            onClick={() => scroll('left')}
            src={'/icons/left-arrow-button.svg'}
            width={50}
            height={20}
            className="p-2 rounded-full"
          >
          </Image>
          <Image
            onClick={() => scroll('right')}
            src={'/icons/right-arrow-button.svg'}
            width={50}
            height={20}
            className="p-2 rounded-full"
          >
          </Image>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 text-sm md:text-base font-semibold border-b border-white/20 pb-2">
        <button
          className={`pb-1 ${activeTab === 'For Sale' ? 'text-[#5D14AD] border-b-2 border-[#5D14AD]' : 'text-gray-500'}`}
          onClick={() => setActiveTab('For Sale')}
        >
          For Sale
        </button>
        <button
          className={`pb-1 ${activeTab === 'For Rent' ? 'text-[#5D14AD] border-b-2 border-[#5D14AD]' : 'text-gray-500'}`}
          onClick={() => setActiveTab('For Rent')}
        >
          For Rent
        </button>
      </div>

      <div ref={scrollRef} className="flex gap-6 overflow-x-auto scroll-smooth pb-2 no-scrollbar">
        {properties.map((p, index) => (
          <div key={index} className="min-w-[280px] md:min-w-[350px] lg:w-full space-y-2">
             <div className="h-px w-full bg-gray-700" />
             {/* Price + Status */}
             <div className="flex items-center justify-between px-1">
              <span className="text-blackg text-sm md:text-base font-semibold">
                {p.price}
                {p.isNew && (
                <span className="text-xs ml-2 md:text-sm font-semibold text-gray-700">New</span>
               )}
              </span>
              <span className="bg-gradient-to-r from-[#5D14AD] to-[#9747FF] text-white text-xs md:text-sm font-semibold rounded-full px-3 py-1">
                {p.status}
              </span>
            </div>

            {/* Specs */}
            <p className="text-xs md:text-sm text-black px-1">
              {p.beds} beds • {p.baths} baths • {p.sqft} sqft • {p.furnished}
            </p>

            <div className="relative rounded-md overflow-hidden">
              <Image src={p.img} alt={p.label} width={400} height={250} className="w-full h-[220px] object-cover" />
              <button className="absolute top-1/2 left-2 -translate-y-1/2 bg-white p-1 rounded-full shadow">
                <ChevronLeft size={16} />
              </button>
              <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-white p-1 rounded-full shadow">
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Address */}
            <p className="text-xs md:text-sm font-medium text-black px-1 leading-tight">
              {p.label}
              <br />
              {p.location}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecommendedProperties
