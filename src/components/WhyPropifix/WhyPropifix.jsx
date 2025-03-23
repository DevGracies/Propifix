import Image from 'next/image';
import React from 'react'

export const HOWITWORKS = [
  {
    iconPath: '/icons/icon-verified.svg',
    title: 'Verified Local Agents'
  },
  {
    iconPath: '/icons/token_trust.svg',
    title: 'Property Insights You Can Trust'
  },
  {
    iconPath: '/icons/teany_icon.svg',
    title: 'Wide Range of Properties'
  },
  {
    iconPath: '/icons/wrench.svg',
    title: 'Comprehensive Home & Property Services'
  },
]

const WhyPropifix = () => {
  return (
    <section className="py-5 md:py-[70px] px-5 md:px-[72px] flex flex-col lg:flex-row justify-between items-center gap-10">
      <h1 className="text-[30px] font-semibold text-[#9D71C6] capitalize">
        why <span className="text-[#5D14AD]">propifix?</span>
      </h1>
      <div>
        {HOWITWORKS.map((how, index) => (
          <div className="relative py-4  border-b-2 border-[#9747FF] flex gap-2 ">
            <Image
              src={how.iconPath}
              height={30}
              width={30}
              alt={how.title}
            />
            <h1 className="text-[20px] md:text-[25px] font-medium capitalize">{how.title}</h1>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyPropifix