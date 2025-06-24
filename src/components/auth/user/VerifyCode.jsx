'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronLeft, Loader } from 'lucide-react'
import { InputField } from '../../custom-ui/InputField'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { useRouter } from 'nextjs-toploader/app'
import { VerifyCodeFormSchema } from '@/lib/schema/VerifyCodeFormSchema'
import { Text } from '@/components/shared/Text'

export const VerifyCodeForm = () => {
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(VerifyCodeFormSchema),
    defaultValues: {
      code: '',
    },
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className='sm:p-8 p-4 bg-white/80 backdrop-blur-sm border rounded-lg flex flex-col gap-4'>
      <Text as='h1' style='text-[29.15px] font-semibold leading-[40.49px]'>
        Enter verification code
      </Text>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full flex flex-col gap-4'
        >
          <InputField
            control={form.control}
            label='We have sent a 6-digit verification code to your email (gr****@gmail.com). Check your inbox and enter the code below.'
            name='code'
            placeholder='Enter code'
            inputCategory='input'
            inputType='text'
          />

          <div className='flex flex-col gap-5 mt-12'>
            <Button className='h-12 flex items-center justify-center rounded-[12px] bg_linear-purple text-white font-medium text-lg w-full'>
              {isPending ? (
                <Loader className='w-5 h-5 text-white animate-spin' />
              ) : (
                'Verify'
              )}
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
        </form>
      </Form>
    </div>
  )
}
