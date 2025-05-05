'use client'

import { Text } from '@/components/shared/Text'

export const PaymentHeader = () => {
  return (
    <Text
      as='h1'
      style='md:text-[30px] text-[20px] font-[600] leading-[100%] md:mb-8 md:mb-4 mb-2 md:mt-5 mt-0 text-light-purple'
    >
      Payment <span className='text-thick-purple'>Info</span>
    </Text>
  )
}
