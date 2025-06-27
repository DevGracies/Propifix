'use client'

import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import { Text } from '@/components/shared/Text'

export const PasswordUpdated = () => {
  const router = useRouter()

  return (
    <div className='sm:p-8 p-4 bg-white/80 backdrop-blur-sm border rounded-lg flex flex-col gap-4'>
      <Text as='h1' style='text-[29.15px] font-semibold leading-[40.49px]'>
        Password updated!
      </Text>
      <div className='w-full flex flex-col gap-4'>
        <Text as='h1' style='`text-[14px] font-[500]'>
          Your password has been updated.
        </Text>
        <div className='flex flex-col gap-5'>
          <Button
            onClick={() => router.push('/user/login')}
            className='h-12 flex  cursor-pointer  items-center justify-center rounded-[12px] bg_linear-purple text-white font-medium text-lg w-full'
          >
            Sign In
          </Button>
          <div className='w-full flex justify-between gap-4 items-center flex-wrap'>
            {/* Back to Homepage  */}
            <div
              className='md:flex hidden items-center cursor-pointer text-[11.34px] font-normal whitespace-nowrap text-black group'
              onClick={() => router.push('/')}
            >
              <ChevronLeft className='w-[20.02px] h-[16.51px] text-black transition-colors duration-500 group-hover:text-primary-color' />
              <span className='underline text-black transition-colors duration-500 group-hover:text-primary-color ml-1'>
                Back to homepage
              </span>
            </div>

            {/* Footer Navigation */}
            <div
              className='flex gap-x-1 cursor-pointer text-[11.34px] font-normal whitespace-nowrap'
              onClick={() => router.push(`/user/register`)}
            >
              <span>Don't have an account?</span>
              <span className='text-primary-color'>Sign Up</span>
            </div>

            <div
              className='cursor-pointer text-[11.34px] font-normal'
              onClick={() => router.push(`/user/login`)}
            >
              <span className='text-primary-color'>Go back to sign in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
