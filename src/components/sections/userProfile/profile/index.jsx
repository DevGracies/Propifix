'use client'

import { MaxWidth } from '@/components/shared/MaxWidth'
import { BackButton } from './BackButton'
import { ProfileHeader } from './ProfileHeader'
import { VerificationBanner } from './VerificationBanner'
import { ProfileStats } from './ProfileStats'
import { InspectionsTable } from './InspectionsTable'
import { AccountCard } from '../account/AccountCard'

export const UserProfile = () => {
  return (
    <MaxWidth className='bg-white pt-28 md:px-[50px] px-4'>
      <BackButton />
      <ProfileHeader />
      <div className='grid lg:grid-cols-2 grid-cols-1 md:gap-[40px] gap-[15px]'>
        <AccountCard />
        <div className='flex flex-col justify-between lg:gap-0 gap-3'>
          <VerificationBanner />
          <ProfileStats />
        </div>
      </div>
      <InspectionsTable />
    </MaxWidth>
  )
}
