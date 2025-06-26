import React from 'react'
import Image from 'next/image'
import { PhoneCall, Copy, ArrowRight } from 'lucide-react'

const AgentCard = ({ name, phone, location, avatar }) => {
  return (
    <div className="relative p-3 rounded-xl border-2 border-[#5D14AD] shadow-md overflow-hidden h-full md:h-[400px] text-white">
      
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/backgrounds/agent-card-bg.jpg')"
        }}
      />

      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 h-full p-4 space-y-4">
        <div className="absolute top-4 right-4 w-20 md:w-fit">
          <Image
            src={avatar}
            width={140}
            height={120}
            alt={name}
            className="rounded-[16px] rounded-tl-[42px] rounded-br-[50px] border border-white object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm md:text-xl font-semibold">Agent Full Name</p>
            <p className="text-xs md:text-lg">{name}</p>
          </div>

          <div>
            <p className="text-sm md:text-xl font-semibold">Contact</p>
            <div className="flex items-center gap-2 text-xs md:text-lg">
              {phone}
              <PhoneCall size={16} className="text-white cursor-pointer" />
              <Copy size={16} className="text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <p className="text-sm md:text-xl font-semibold">Location</p>
            <p className="text-xs md:text-lg">{location}</p>
          </div>
        </div>

        <button className="text-white cursor-pointer pt-10 text-xs md:text-sm font-semibold underline flex items-center gap-1">
          View more properties from this agent <ArrowRight size={14} />
        </button>
      </div>
    </div>
  )
}

export default AgentCard

