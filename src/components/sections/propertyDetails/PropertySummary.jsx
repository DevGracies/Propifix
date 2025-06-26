import React from 'react'
import { BedDouble, Bath, Toilet, Crown } from 'lucide-react'

const PropertySummary = ({ price, bedrooms, bathrooms, toilets, premium }) => (
  <div className="flex flex-row items-center justify-evenly bg-gradient-to-r from-[#5D14AD] to-[#9747FF] text-white rounded-3xl px-6 py-4 w-full gap-4 sm:gap-6">

    <div className="flex flex-col items-center sm:items-start">
      <div className="text-lg md:text-xl font-bold">{price}</div>
      {premium && (
        <div className="mt-1 bg-[#D890FF] text-black flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full">
          <Crown size={14} /> Premium
        </div>
      )}
    </div>

    <div className="block h-10 w-px bg-white/40" />

    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6 text-xs md:text-base text-nowrap">
      <div className="flex items-center gap-2">
        <BedDouble size={18} /> {bedrooms} Bedrooms
      </div>
      <div className="flex items-center gap-2">
        <Bath size={18} /> {bathrooms} Bathrooms
      </div>
      <div className="flex items-center gap-2">
        <Toilet size={18} /> {toilets} Toilets
      </div>
    </div>
  </div>
)

export default PropertySummary


