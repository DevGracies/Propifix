'use client'

import arrowImage from '../../../../public/arrowImg.svg'
import { Text } from '@/components/shared/Text'
import {
  HashOneSvg,
  HashTwoSvg,
  HashThreeSvg,
  HashFourSvg,
  HashFiveSvg,
  HashSixSvg,
} from '@/components/svg'
import { CustomImage } from '@/components/shared/Image'

const HowItWorksCard = ({ title, desc, hashSvg }) => (
  <div className='flex flex-col gap-4 rounded-[12px] p-3 border border-light-purple border-2 md:w-[380px] w-full min-h-[169px]'>
    <div className='flex items-center gap-2'>
      {hashSvg}
      <Text as='h2' style='text-[20px] font-[600]'>
        {title}
      </Text>
    </div>
    <Text as='h3' style='font-[400] text-[12px]'>
      {desc}
    </Text>
  </div>
)

export const HowItWorksText = () => (
  <div className='xl:absolute relative xl:top-[26rem] xl:left-[3rem] top-auto right-auto'>
    <Text
      as='h1'
      style='text-center md:text-[64px] text-[50px] font-[600] leading-[120%] mb-3 text-light-purple'
    >
      How It <span className='text-thick-purple'>Works</span>
    </Text>
    <Text style='text-center text-[16px] font-[500] leading-[120%] md:w-[432px] w-full'>
      {`Welcome to our PropiFix! Whether you’re looking to buy, rent, or access professional property-related services!`}
    </Text>
  </div>
)

export const HowItWorks = () => {
  return (
    <section
      className='bg-white xl:overflow-auto overflow-none p-3 flex flex-col justify-center items-center gap-10 pt-28 md:pt-32 md:w-full xl:w-[1444px] w-auto'
    >
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .floating-arrow {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <div className='relative xl:w-[1094px] w-auto xl:overflow-auto overflow-none xl:h-[65rem] h-auto mb-10 xl:block xl:gap-0 gap-[20px] flex flex-col items-center justify-center'>
        <HowItWorksText />
        <div className='xl:absolute relative xl:top-[1rem] left-0 top-auto right-auto'>
          <HowItWorksCard
            title='Find Your Dream Property'
            desc='Use our advanced search filters to browse through a wide range of agents and properties for sale or rent. Refine your search by location, service category and radius. Click on any agent to see detailed information, including properties and their features, pricing, and so on.'
            hashSvg={<HashOneSvg />}
          />
        </div>
        <div className='xl:absolute relative xl:top-[2rem] top-auto right-auto xl:right-[8rem]'>
          <HowItWorksCard
            title='Connect with Agents'
            desc={`Once you find a property that interests you, reach out to the agent directly using the Enquire button provided on the property info page to send a message. Discuss the property details, schedule viewings, or request additional information from the agent to make an informed decision.`}
            hashSvg={<HashTwoSvg />}
          />
        </div>
        <div className='xl:absolute relative xl:top-[18rem] xl:right-10 top-auto right-auto'>
          <HowItWorksCard
            title={'Schedule a Viewing'}
            desc={
              'Arrange a convenient time to visit the property. Our agents will guide you through the viewing and answer any questions you have.'
            }
            hashSvg={<HashThreeSvg />}
          />
        </div>
        <div className='xl:absolute relative xl:top-[32rem] xl:right-5 top-auto right-auto'>
          <HowItWorksCard
            title={'Make Your Decision'}
            desc={`Discuss pricing, payment plans, or rental terms with the agent. Use our platform's message feature for transparency.  If needed, we provide access to legal experts who can assist with property verification and documentation.`}
            hashSvg={<HashFourSvg />}
          />
        </div>
        <div className='xl:absolute relative xl:top-[48rem] xl:right-0 top-auto right-auto'>
          <HowItWorksCard
            title={'Finalize the Deal'}
            desc={`Once the terms are agreed upon, proceed with the payment or lease agreement. We ensure all transactions are safe and secure.`}
            hashSvg={<HashFiveSvg />}
          />
        </div>
        <div className='xl:bottom-0 xl:absolute relative xl:right-[40%] bottom-auto right-auto'>
          <HowItWorksCard
            title={'Additional Services'}
            desc={`Explore our trusted network of professionals for moving, interior design, and home improvement needs. Other services include carpentry,  dry cleaning, electrical work, house cleaning, painting and wallpaper installation.`}
            hashSvg={<HashSixSvg />}
          />
        </div>
        <div className='m-auto px-[4rem] mt-[10rem] xl:block hidden floating-arrow'>
          <CustomImage
            src={arrowImage}
            style='md:w-[700px] w-[400] md:h-[750px] h-[400px]'
            imgStyle='object-contain z-[1000]'
          />
        </div>
      </div>
    </section>
  )
}
