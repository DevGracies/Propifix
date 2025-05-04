'use client'

import { MaxWidth } from '@/components/shared/MaxWidth'
import { PaymentBackButton } from './PaymentBackButton'
import { Text } from '@/components/shared/Text'
import {
  CirclePlusSvg,
  DeleteSvg,
  PurpleWalletSvg,
  SettingsSvg,
} from '@/components/svg'
import { PaymentHeader } from './PaymentHeader'
import { PaymentHistory } from './PaymentHistory'

export const UserPayment = () => {
  return (
    <MaxWidth className='bg-white pt-28 md:px-[50px] px-4 flex flex-col md:gap-0 gap-4'>
      <PaymentBackButton />
      <PaymentHeader />
      <div className='flex flex-wrap gap-5'>
        <div className='flex flex-col justify-between md:w-[328px] w-full gap-3 min-h-[103px] rounded-[5px] p-4 bg-light-purple-200'>
          <Text as='h5' style='text-[16px] font-[400]'>
            Total Spents
          </Text>
          <Text as='h3' style='text-[22px] font-[500]'>
            ₦430,000,000.00
          </Text>
          <Text as='h6' style='text-[10px] font-[400]'>
            as of 16-Febuary 2025
          </Text>
        </div>
        <div className='flex flex-col justify-between md:w-[328px] w-full gap-3 min-h-[103px] rounded-[5px] p-4 bg-thick-grey-200'>
          <Text as='h5' style='text-[16px] font-[400]'>
          Pending Payments
          </Text>
          <Text as='h3' style='text-[22px] font-[500]'>
            ₦430,000,000.00
          </Text>
          <Text as='h6' style='text-[10px] font-[400]'>
            as of 16-Febuary 2025
          </Text>
        </div>
        <div className='bg-white-80 border flex flex-col gap-3 justify-between md:w-[328px] w-full min-h-[103px] rounded-[5px] p-4'>
          <div className='flex justify-between items-center'>
            <Text as='h5' style='text-[16px] font-[400]'>
            Payment Method
            </Text>
            <CirclePlusSvg />
          </div>
          <div className="flex items-center justify-between">
            <div className='text-[500] font-[16px] flex item-center gap-3 '>
              <PurpleWalletSvg />
              {'1502********4832'}
            </div>
            <div className='flex gap-3 items-center'>
              <SettingsSvg />
              <DeleteSvg />
            </div>
          </div>
        </div>
      </div>
      <PaymentHistory />
    </MaxWidth>
  )
}
