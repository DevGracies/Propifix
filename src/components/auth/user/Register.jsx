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

const triggerStyle =
  'h-[28px] w-[93px] font-[400] text-[9.72px] rounded-[9.72px] data-[state=active]:text-white data-[state=active]:bg-thick-purple border border-input-border transition-colors duration-1000'
const landlord = 'landlord'
const user = 'user'
const artisan = 'artisan'
const agent = 'house agent'
const caretaker = 'caretaker'

export const Register = () => {
  const router = useRouter()
  return (
    <div className='sm:p-8 p-4 bg-white border rounded-lg flex flex-col gap-4'>
      <Text as='h1' style='text-[29.15px] font-semibold leading-[40.49px]'>
        Create Your Account for Seamless Living Solutions
      </Text>
      <Tabs defaultValue={agent} className='w-full bg-white'>
        <ScrollArea className='w-full whitespace-nowrap'>
          <TabsList className='justify-start items-start flex w-full gap-4 h-fit bg-white mb-2'>
            <TabsTrigger value={agent} className={triggerStyle}>
              House Agent
            </TabsTrigger>
            <TabsTrigger value={user} className={triggerStyle}>
              User
            </TabsTrigger>
            <TabsTrigger value={caretaker} className={triggerStyle}>
              Caretaker
            </TabsTrigger>
            <TabsTrigger value={artisan} className={triggerStyle}>
              Artisan
            </TabsTrigger>
            <TabsTrigger value={landlord} className={triggerStyle}>
              Landlord
            </TabsTrigger>
          </TabsList>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
        <TabsContent value={agent}>
          <HouseAgentForm />
        </TabsContent>
        <TabsContent value={user}>
          <UserForm />
        </TabsContent>
        <TabsContent value={caretaker}>
          <CaretakerForm/>
        </TabsContent>
        <TabsContent value={artisan}>
          <ArtisanForm />
        </TabsContent>
        <TabsContent value={landlord}>
          <LandlordForm/>
        </TabsContent>
      </Tabs>
      <div className='mt-3 sm:w-[65%] w-full flex justify-between gap-4'>
        {/* Back to Homepage  */}
        <div
          className='flex items-center cursor-pointer text-[11.34px] font-normal whitespace-nowrap'
          onClick={() => router.push('/user/login')}
        >
          <ChevronLeft className='w-[20.02px] h-[16.51px]' />
          <span className='underline'>Back to homepage</span>
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
