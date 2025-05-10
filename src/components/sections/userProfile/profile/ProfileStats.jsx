'use client'

import { Text } from '@/components/shared/Text'

export const ProfileStats = () => {
  return (
    <div className='rounded-[12px] bg-thick-purple-30 p-4'>
      <Text as='h2' style='md:text-[16px] text-[14px] font-[600]'>
        Number of Agents that have seen your request
      </Text>
      <Text as='h3' style='md:text-[24px] text-[20px] font-[700]'>
        0 Agents
      </Text>
    </div>
  )
}
