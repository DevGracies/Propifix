'use client'

import { Text } from '../../shared/Text'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { useRouter } from 'nextjs-toploader/app'
import { ChevronLeft } from 'lucide-react'
import { userTypes } from '@/utils/ConstantEnums'
import { UserSignInForm } from './SignInForm'

const triggerStyle =
  'h-[28px] w-[93px] font-[400] text-[9.72px] rounded-[9.72px] data-[state=active]:text-white data-[state=active]:bg-thick-purple border border-input-border transition-colors duration-1000'

export const SignIn = () => {
  const router = useRouter()
  return (
    <div className='sm:p-8 p-4 bg-white/80 backdrop-blur-sm border rounded-lg flex flex-col gap-4'>
      <Text as='h1' style='text-[29.15px] font-semibold leading-[40.49px]'>
        Log In to Explore Homes and Essential Services.
      </Text>
      <Tabs defaultValue={userTypes.agent} className='w-full'>
        <ScrollArea className='w-full whitespace-nowrap bg-none scrollbar-none'>
          <TabsList className='justify-start items-start flex w-full gap-4 h-fit mb-2 bg-none'>
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
          <UserSignInForm />
        </TabsContent>
        <TabsContent value={userTypes.user}>
          <UserSignInForm />
        </TabsContent>
        <TabsContent value={userTypes.caretaker}>
          <UserSignInForm />
        </TabsContent>
        <TabsContent value={userTypes.artisan}>
          <UserSignInForm />
        </TabsContent>
        <TabsContent value={userTypes.landlord}>
          <UserSignInForm />
        </TabsContent>
      </Tabs>
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
          onClick={() => router.push(`/user/reset-password`)}
        >
          <span className='text-primary-color'>Forgot password?</span>
        </div>
      </div>
    </div>
  )
}
