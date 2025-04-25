'use client'

import topEllipse from '../../../../public/contact_top_ellipse.svg'
import bottomEllipse from '../../../../public/contact_bottom_ellipse.svg'
import OrImg from '../../../../public/or_img.svg'
import {
  CallSvg,
  CustomerCareSvg,
  FacebookSvg,
  InstagramSvg,
  LocationSvg,
  MailSvg,
  XSvg,
  YoutubeSvg,
} from '@/components/svg'
import { Text } from '@/components/shared/Text'
import { CustomImage } from '@/components/shared/Image'
import { Button } from '@/components/ui/button'

const Labelledicon = ({ text, icon }) => (
  <div className='flex items-start gap-5'>
    {icon}{' '}
    <Text style='text-[#FFFFFF] text-[18px] font-[400] leading-[120%]'>
      {text}
    </Text>
  </div>
)

export const ContactUs = () => {
  return (
    <section className='bg-[ghostwhite] p-3 flex flex-col justify-center items-center gap-10'>
      <Text
        as='h1'
        style='text-center text-[40px] text_linear-purple font-[700] leading-[120%] pt-28 md:pt-32'
      >
        Contact Us
      </Text>
      <Text
        as='h1'
        style='text-center text-[18px] font-[500] leading-[120%] mb-4'
      >
        {`We’d love to hear from you! Whether you have questions, our team is here
        to help.`}
      </Text>
      <div className='bg-white md:mx-[6rem] mx-0 p-3 rounded-[10px] md:w-[600px] lg:w-[806px] xl:w-[1196px] w-full'>
        <div className='relative bg_linear-purple flex flex-col justify-between h-[647px] md:w-[491px] w-full rounded-[10px] m-auto  py-12 md:px-12 px-6'>
          <div>
            <Text
              as='h1'
              style='text-white text-[28px] font-[600] leaing-[100%] mb-2'
            >
              Contact Information
            </Text>
            <Text
              as='h1'
              style='text-[#FFFFFF] text-[18px] font-[400] leaing-[100%]'
            >
              {`Say something to start a live chat!`}
            </Text>
          </div>
          <div className='flex flex-col gap-[34px]'>
            <Labelledicon text={'081 48 394 028'} icon={<CallSvg />} />
            <Labelledicon text={'graceolori55@gmail.com'} icon={<MailSvg />} />
            <Labelledicon
              text={
                '132 opposite computer village, Ikeja, Lagos state, Nigeria'
              }
              icon={<LocationSvg />}
            />
          </div>
          <div className='flex items-center gap-5'>
            <FacebookSvg />
            <InstagramSvg />
            <XSvg />
            <YoutubeSvg />
          </div>
          <div className='absolute md:bottom-[70px] bottom-[60px] md:right-[70px] right-[40px]'>
            <CustomImage
              src={topEllipse}
              style='md:w-[138px] w-[100px] md:h-[138px] h-[100px]'
              imgStyle='object-contain z-[1000]'
            />
          </div>
          <div className='absolute bottom-0 right-0'>
            <CustomImage
              src={bottomEllipse}
              style='md:w-[180px] w-[120px] md:h-[180px] h-[120px]'
              imgStyle='object-contain'
            />
          </div>
        </div>
      </div>
      <CustomImage
        src={OrImg}
        style='md:w-[640px] w-full h-[18px] m-auto'
        imgStyle='object-contain'
      />
      <Button className='flex items-center w-[163px] h-[36px] rounded-[12px] bg_linear-purple font-[500] text-[15px] mb-10'>
        <CustomerCareSvg />
        Customer Care
      </Button>
    </section>
  )
}
