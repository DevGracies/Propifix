'use client'

import { Text } from '../../shared/Text'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { useRouter } from 'nextjs-toploader/app'
import { UserForm } from './User'
import { ChevronLeft } from 'lucide-react'
import { HouseAgentForm } from './HouseAgent'
import { CaretakerForm } from './Caretaker'
import { ArtisanForm } from './Artisan'
import { LandlordForm } from './Landlord'
import { userTypes } from '@/utils/ConstantEnums'

const triggerStyle =
  'h-[28px] w-[93px] font-[400] text-[9.72px] rounded-[9.72px] data-[state=active]:text-white data-[state=active]:bg-thick-purple border border-input-border transition-colors duration-1000'

export const Register = () => {
  const router = useRouter()
  return (
    <div className='sm:p-8 p-4 bg-white border rounded-lg flex flex-col gap-4'>
      <Text as='h1' style='text-[29.15px] font-semibold leading-[40.49px]'>
        Create Your Account for Seamless Living Solutions
      </Text>
      <Tabs defaultValue={userTypes.agent} className='w-full bg-white'>
        <ScrollArea className='w-full whitespace-nowrap scrollbar-none'>
          <TabsList className='justify-start items-start flex w-full gap-4 h-fit bg-white mb-2'>
            <TabsTrigger value={userTypes.agent} className={triggerStyle}>
              House Agent
            </TabsTrigger>
            <TabsTrigger value={userTypes.user} className={triggerStyle}>
              User
            </TabsTrigger>
            <TabsTrigger value={userTypes.caretaker} className={triggerStyle}>
              Caretaker
            </TabsTrigger>
            <TabsTrigger value={userTypes.artisan} className={triggerStyle}>
              Artisan
            </TabsTrigger>
            <TabsTrigger value={userTypes.landlord} className={triggerStyle}>
              Landlord
            </TabsTrigger>
          </TabsList>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
        <TabsContent value={userTypes.agent}>
          <HouseAgentForm />
        </TabsContent>
        <TabsContent value={userTypes.user}>
          <UserForm />
        </TabsContent>
        <TabsContent value={userTypes.caretaker}>
          <CaretakerForm />
        </TabsContent>
        <TabsContent value={userTypes.artisan}>
          <ArtisanForm />
        </TabsContent>
        <TabsContent value={userTypes.landlord}>
          <LandlordForm />
        </TabsContent>
      </Tabs>
      <div className='mt-3 sm:w-[65%] w-full flex justify-between gap-4 z-[1000]'>
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
          onClick={() => router.push(`/user/login`)}
        >
          <span>Have an account?</span>
          <span className='text-primary-color'>Sign In</span>
        </div>
      </div>
    </div>
  )
}
