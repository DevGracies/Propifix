'use client'

import { Text } from '@/components/shared/Text'

export const AccountHeader = () => {
  return (
    <Text
      as='h1'
      style='md:text-[30px] text-[20px] font-[600] leading-[100%] md:mb-8 mb-4 mt-5 text-light-purple'
    >
      My <span className='text-thick-purple'>Account</span>
    </Text>
  )
}
