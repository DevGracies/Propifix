'use client'

import { Button } from '@/components/ui/button'
import { Text } from '@/components/shared/Text'

export const VerificationBanner = () => {
  return (
    <div className='rounded-[12px] p-4 border border-light-purple border-2 md:min-h-[209px] min-h-[170px] flex flex-col justify-between gap-4'>
      <div className='flex flex-col gap-1'>
        <Text as='h2' style='md:text-[24px] text-[18px] font-[600]'>
          Please verify your phone number
        </Text>
        <Text
          as='h3'
          style='md:text-[16px] text-[13px] font-[400] md:w-[70%] w-full'
        >
          You will be allowed to send more enquiries and access certain
          features.
        </Text>
      </div>
      <Button className='w-[293px] h-[40px] flex items-center justify-center rounded-[12px] bg_linear-purple text-white font-[700] md:text-[16px] text-[13px]'>
        Verify your phone number
      </Button>
    </div>
  )
}
