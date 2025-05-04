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
  <div className='flex flex-col gap-4 rounded-[12px] p-3 border-2 border-light-purple w-[380px] min-h-[169px] bg-white flex-shrink-0'>
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
  <div className='absolute top-[26rem] left-[3rem]'>
    <Text
      as='h1'
      style='text-center md:text-[64px] text-[50px] font-[600] leading-[120%] mb-3 text-light-purple'
    >
      How It <span className='text-thick-purple'>Works</span>
    </Text>
    <Text style='text-center text-[16px] font-[500] leading-[120%] w-[432px]'>
      {`Welcome to our PropiFix! Whether you're looking to buy, rent, or access professional property-related services!`}
    </Text>
  </div>
)

export const HowItWorks = () => {
  return (
    <div className='w-full overflow-x-auto'>
      <section className='bg-white p-3 flex justify-center items-start pt-32 w-[1150px] min-w-[1150px] relative mx-auto'>
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

        <div className='relative w-full h-[65rem] mb-14'> <HowItWorksText />
          <div className='absolute top-[1rem] left-0'>
            <HowItWorksCard
              title='Find Your Dream Property'
              desc='Use our advanced search filters to browse through a wide range of agents and properties for sale or rent. Refine your search by location, service category and radius. Click on any agent to see detailed information, including properties and their features, pricing, and so on.'
              hashSvg={<HashOneSvg />}
            />
          </div>
          <div className='absolute top-[2rem] right-[8rem]'>
            <HowItWorksCard
              title='Connect with Agents'
              desc={`Once you find a property that interests you, reach out to the agent directly using the Enquire button provided on the property info page to send a message. Discuss the property details, schedule viewings, or request additional information from the agent to make an informed decision.`}
              hashSvg={<HashTwoSvg />}
            />
          </div>
          <div className='absolute top-[18rem] right-10'>
            <HowItWorksCard
              title={'Schedule a Viewing'}
              desc={
                'Arrange a convenient time to visit the property. Our agents will guide you through the viewing and answer any questions you have.'
              }
              hashSvg={<HashThreeSvg />}
            />
          </div>
          <div className='absolute top-[32rem] right-5'>
            <HowItWorksCard
              title={'Make Your Decision'}
              desc={`Discuss pricing, payment plans, or rental terms with the agent. Use our platform's message feature for transparency.  If needed, we provide access to legal experts who can assist with property verification and documentation.`}
              hashSvg={<HashFourSvg />}
            />
          </div>
          <div className='absolute top-[48rem] right-0'>
            <HowItWorksCard
              title={'Finalize the Deal'}
              desc={`Once the terms are agreed upon, proceed with the payment or lease agreement. We ensure all transactions are safe and secure.`}
              hashSvg={<HashFiveSvg />}
            />
          </div>
          <div className='absolute bottom-0 right-[40%]'>
            <HowItWorksCard
              title={'Additional Services'}
              desc={`Explore our trusted network of professionals for moving, interior design, and home improvement needs. Other services include carpentry,  dry cleaning, electrical work, house cleaning, painting and wallpaper installation.`}
              hashSvg={<HashSixSvg />}
            />
          </div>
          <div className='m-auto px-[4rem] mt-[10rem] floating-arrow'>
            <CustomImage
              src={arrowImage}
              style='w-[700px] h-[750px]'
              imgStyle='object-contain z-[1000]'
            />
          </div>
        </div>
      </section>
    </div>
  )
}