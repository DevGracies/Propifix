'use client'

import { AccountInfo } from './AccountInfo'
import { Button } from '@/components/ui/button'
import { ProfileImage } from '../profile/ProfileImage'
import { Text } from '@/components/shared/Text'
import { CustomImage } from '@/components/shared/Image'
import profileBg from '../../../../../public/User_profile_bg.png'
import { useRouter } from 'next/navigation'

export const AccountCard = ({account}) => {
  const router = useRouter()

  const {
    fullName = 'N/A',
    phone = 'N/A',
    email = 'N/A',
    _id
  } = account || {}

  return (
    <div className='p-6 rounded-[12px] flex md:flex-row justify-between flex-col-reverse relative gap-4'>
      <div className='border-thick-purple border-3 p-[0.1rem] rounded-[12px] absolute top-0 left-0 bottom-0 right-0 z-10'>
        <div className='relative w-full h-full'>
          <CustomImage
            src={profileBg}
            style='w-full h-full rounded-[12px]'
            imgStyle='object-cover rounded-[12px]'
          />
          {/* Dark overlay */}
          <div className='absolute inset-0 bg-black/70 rounded-[12px]' />
        </div>
      </div>
      <div className='z-[10] flex flex-col gap-3 justify-between'>
        <AccountInfo title={`User's Name`} value={fullName} />
        <AccountInfo title={'Phone Number'} value={phone} />
        <AccountInfo title={'Email'} value={email} />
        <Button
          onClick={() => router.push(`/user/${_id || ''}`)}
          className='bg-white text-black rounded-[12px] w-[185px] text-center text-[16px]'
        >
          <Text style='underline'>Edit account info</Text>
        </Button>
      </div>
      <ProfileImage />
    </div>
  )
}
