'use client'

import { MaxWidth } from '@/components/shared/MaxWidth'
import { AccountHeader } from './AccountHeader'
import { AccountSchema } from '@/lib/schema/AccountSchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { InputField } from '@/components/custom-ui/InputField'
import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'
import { Text } from '@/components/shared/Text'

export const UserAccount = () => {
  const form = useForm({
    resolver: zodResolver(AccountSchema),
    defaultValues: {
      user_name: '',
      country_code: '',
      pwd: '',
      cpwd: '',
      email: '',
      phone_number: '',
    },
  })

  const onSubmit = (values) => {
    console.log(values)
  }
  const isPending = false

  return (
    <MaxWidth className='bg-white pt-28 md:px-[50px] px-4 mb-20'>
      <div className='md:w-[515px] w-full'>
        <AccountHeader />
        <div className='rounded-[12px] md:p-6 p-4 shadow-[0_0_0_2px_transparent,0_0_0_4px_rgba(1,147,253,0.3)]'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='w-full flex flex-col gap-4'
            >
              <div>
                <Text style='md:text-[20px] text-[18px] font-[700] mb-3'>
                  My Profile
                </Text>
                <InputField
                  inputStyle='border border-black h-[35px] rounded-[33px]  mb-4'
                  control={form.control}
                  name='user_name'
                  inputCategory='input'
                  label={`User's name`}
                  labelStyle='text-[16px] font-[600]'
                  placeholder='Olori Grace'
                />
                <InputField
                  inputStyle='border border-black h-[35px] rounded-[33px]  mb-4'
                  control={form.control}
                  name='pwd'
                  inputCategory='input'
                  placeholder='Enter your new password'
                  label={
                    <div className='flex items-center gap-1 flex-wrap'>
                      <span className='text-[16px] font-[600]'>Password*</span>
                      <span className='text-destructive text-[12px] font-[400]'>
                        N.B: Enter password only if you are changing it
                      </span>
                    </div>
                  }
                />
                <InputField
                  inputCategory='input'
                  inputStyle='border border-black h-[35px] rounded-[33px]  mb-4'
                  control={form.control}
                  name='cpwd'
                  placeholder='Confirm Password'
                />
              </div>
              <div>
                <Text style='md:text-[20px] text-[18px] font-[700] mb-3'>
                  Contact
                </Text>
                <InputField
                  inputStyle='border border-black h-[35px] rounded-[33px]  mb-4'
                  control={form.control}
                  name='country_code'
                  labelStyle='text-[16px] font-[600]'
                  label={`Country Code`}
                  placeholder='Nigeria (+234)'
                  inputType='text'
                  inputCategory='input'
                />
                <InputField
                  inputStyle='border border-black h-[35px] rounded-[33px]  mb-4'
                  control={form.control}
                  name='phone_number'
                  labelStyle='text-[16px] font-[600]'
                  label={`Phone Number*`}
                  placeholder='08157488586'
                  inputType='text'
                  inputCategory='input'
                />
                <div className='flex gap-4 items-end w-full'>
                  <div className='flex-grow'>
                    <InputField
                      inputStyle='border border-black h-[35px] rounded-[33px] w-full'
                      control={form.control}
                      name='email'
                      labelStyle='text-[16px] font-[600]'
                      placeholder='www.graceolori55@gmail.com'
                      label='Email Address*'
                      inputCategory='input'
                      inputType='email'
                    />
                  </div>
                  <Button className='h-[35px] flex-shrink-0 flex items-center justify-center rounded-[12px] bg_linear-purple text-white font-medium text-lg w-[146px]'>
                    {isPending ? (
                      <Loader className='w-5 h-5 text-white animate-spin' />
                    ) : (
                      'Submit'
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </MaxWidth>
  )
}
