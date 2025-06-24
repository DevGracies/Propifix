'use client'

import React from 'react'
import ImageCarousel from './ImageCarousel'
import AgentCard from './AgentCard'
import PropertySummary from './PropertySummary'
import SafetyTips from './SafetyTips'
import SubscribeForm from './SubscribeForm'
import RecommendedProperties from './RecommendedProperties'
import { BackButton } from './BackButton'
import { MapPinned } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const PropertyDetails = () => {
  const property = {
    price: '₦ 450,000',
    bedrooms: 6,
    bathrooms: 6,
    toilets: 4,
    premium: true,
    description: `This stunning 3-bedroom, 2-bathroom home boasts a spacious open-plan living and dining area with large windows that flood the space with natural light, a fully equipped modern kitchen with premium appliances and ample storage, and a luxurious master suite complete with an en-suite bathroom and walk-in closet. The beautifully landscaped backyard features a patio perfect for entertaining or relaxing, while additional highlights include a two-car garage, energy-efficient heating and cooling, and stylish finishes throughout. Located in a peaceful neighborhood close to schools, shopping, parks, and public transport, this property offers the perfect blend of comfort, style, and convenience.`,
    address: 'Chevron Lekki Lagos',
    pid: '4HBWD',
    updated: '2025-01-06 18:18:18',
  }

  const agent = {
    name: 'Grace Olori',
    phone: '07006599384',
    location: 'Lagos, Ikeja',
    avatar: '/images/agent.jpg',
  }

  return (
    <div className="px-4 md:px-10 pt-20 md:pt-24 pb-12 space-y-10">
        <BackButton/>
        
      <div className="flex flex-col lg:flex-row gap-8">
        
        <div className="w-full lg:w-3/5 space-y-6">
          <ImageCarousel images={[...Array(12)].map((_, i) => '/images/inspection-house.svg')} />
          <PropertySummary {...property} />

          <section className='py-10'>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#9D71C6] mb-2">Property <span className='text-[#5D14AD]'>Description</span></h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{property.description}</p>
          </section>

          <SafetyTips />
        </div>

        <aside className="w-full lg:w-2/5 space-y-6">
          <AgentCard {...agent} />

          <div className="p-4 border rounded-lg space-y-6 bg-[#E8BEFE26]">
            <p className="text-base lg:text-lg text-black pb-10">
              By continuing, you agree to propiFix's{' '}
              <a className="text-[#5D14AD] font-semibold cursor-pointer">Terms and Conditions</a> &{' '}
              <a className="text-[#5D14AD] font-semibold cursor-pointer">Privacy Policy</a>.
            </p>
          <Link href={'/inspection'}>
            <button className="w-full text-xs md:text-base cursor-pointer border-2 font-bold border-[#5D14AD] text-[#5D14AD] py-2 rounded-md hover:bg-[#5D14AD] hover:text-white transition">
                Book for inspection
            </button>
          </Link>
           <Link href={'/property-payment'}>
            <button className="w-full text-xs md:text-base mt-2 cursor-pointer bg-gradient-to-r from-[#5D14AD] to-[#9747FF] text-white py-2 rounded-md font-semibold">
                Buy Property
             </button>
           </Link>
          </div>

          <div className="p-4 bg-white space-y-2">
            <h3 className="font-semibold text-[#9D71C6] text-2xl md:text-3xl">Property 
             <span className='text-[#5D14AD] ml-1'>Address</span></h3>
            <div className="flex flex-col md:flex-row justify-between text-md text-black font-semibold">
              <div className='flex gap-1 items-center'>
                <MapPinned/>
                 <span className='text-sm md:text-base'>{property.address}</span>
              </div>
              <span className="font-mono text-sm md:text-base">PID: {property.pid}</span>
            </div>
            <p className="text-xs md:text-sm text-gray-500">Last updated {property.updated}</p>
          </div>

          <div className="p-4 border border-[#5D14AD] rounded-lg bg-white space-y-3">
            <div className="flex flex-col gap-1 py-1">
              <span className='flex'>
                <Image src={'/icons/authenticity-icon.svg'} width={50} height={20} className="flex-shrink-0"></Image>
                <h3 className="text-sm md:text-lg font-semibold">The property's authenticity is confirmed</h3>
              </span>
              <p className='ml-12 text-xs md:text-base'>We will look into whether this listing is authentic or not if it reported as such.</p>
            </div>
            <button className="w-full text-xs md:text-base mt-2 cursor-pointer bg-gradient-to-r from-[#5D14AD] to-[#9747FF] text-white py-2 rounded-md font-semibold">
                Report Property
             </button>
          </div>

            <button className="w-full text-xs md:text-base cursor-pointer border-2 font-bold border-[#5D14AD] text-[#5D14AD] py-2 rounded-md hover:bg-[#5D14AD] hover:text-white transition">
                Dispute
            </button>

          <SubscribeForm />
        </aside>
      </div>

      <RecommendedProperties />
    </div>
  )
}

export default PropertyDetails
