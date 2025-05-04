'use client'

import { Text } from '@/components/shared/Text'

export const AccountInfo = ({ title, value }) => {
  return (
    <div className='flex flex-col gap-1'>
      <Text style='md:text-[24px] text-[18px] font-[600] text-white'>
        {title}
      </Text>
      <Text style='md:text-[16px] text-[13px] font-[400] text-white'>
        {value}
      </Text>
    </div>
  )
}
