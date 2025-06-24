'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const PaymentBackButton = () => {
  const router = useRouter()

  return (
    <div
      className='w-fit flex items-center cursor-pointer text-[11.34px] font-normal whitespace-nowrap text-black group'
      onClick={() => router.push('/user')}
    >
      <ChevronLeft className='w-[20.02px] h-[16.51px] text-black transition-colors duration-500 group-hover:text-primary-color' />
      <span className='underline text-black transition-colors duration-500 group-hover:text-primary-color ml-1'>
        Back to user account
      </span>
    </div>
  )
}
