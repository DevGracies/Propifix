import React from 'react'
import FindAgentForm from './forms/FindAgentForm';
import Image from 'next/image';
import MapComponent from './MapContainer';

const agents = [
  { id: 1, name: "Grace Olori", lat: 6.5244, lng: 3.3792 },
  { id: 2, name: "John Doe", lat: 6.6, lng: 3.35 },
];

const FindAgent = () => {
  return (
    <section className="lg:flex text-white relative">
      <div
        className="w-full max-w-[520px] px-5 md:px-0 md:pl-[72px] py-[60px] md:py-[40px] bg-gradient-to-l from-[#5D14AD] to-[#9747FF] flex flex-col gap-5 relative
        z-40
"
      >
        <h1 className="font-semibold text-[20px] md:text-[30px] max-w-[530px]">
          Discover house agents and trusted service providers near you, from
          carpenters and cleaners to painters and electricians.
        </h1>
        <div className="flex gap-[4px] items-center">
          <Image src={'/icons/Alert.svg'} width={18} height={18} alt='icon' className='size-[12px] md:size-[18px]'/>
          <p className="text-[13px] md:text-[15px] font-light">
            We’ve detected your location as <span className='font-semibold'>IKEJA, LAGOS.</span>
          </p>
        </div>
        <FindAgentForm/>
      </div>
      <div className='w-full max-w-[340px] relative  overflow-hidden z-40 clip hidden lg:flex'>
        <Image src={'/home-images/FindAgentbg3.svg'} fill alt='backgroung-3' className='object-cover'/>
        <Image src={'/home-images/FindAgentbg2.svg'} height={500} width={500} alt='backgroung-3' className='object-cover absolute -left-3 w-full h-full'/>
        <Image src={'/home-images/FindAgentbg1.svg'} height={500} width={500} alt='backgroung-3' className='object-cover absolute -left-6 w-full h-full'/>
      </div>
      <MapComponent agents={agents}/>
    </section>
  );
}

export default FindAgent