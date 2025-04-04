'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader } from 'lucide-react'
import { InputField } from '../../custom-ui/InputField'
import { PasswordInput } from '../../custom-ui/PasswordField'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Text } from '../../shared/Text'
import ReCAPTCHA from 'react-google-recaptcha'
import { AdminSignUpFormSchema } from '@/lib/schema/AdminSignUpFormSchema'

export const SignUpForm = () => {
  const [isPending, setIsPending] = useState(false)
  const [isTermsAccepted, setIsTermsAccepted] = useState(false)
  const [isRobot, setIsRobot] = useState(true)

  function onChange(value) {
    console.log('Captcha value:', value)
    setIsRobot(false)
  }

  const form = useForm({
    resolver: zodResolver(AdminSignUpFormSchema),
    defaultValues: {
      full_name: '',
      pwd: '',
      cpwd: '',
      email: '',
    },
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full flex flex-col gap-4 relative max-h-[500px]'
      >
        <InputField
          control={form.control}
          name='email'
          placeholder='Enter your email address'
          inputCategory='input'
          inputType='email'
        />
        <InputField
          control={form.control}
          name='full_name'
          placeholder='Enter your full name'
          inputCategory='input'
          inputType='text'
        />
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
          <PasswordInput
            control={form.control}
            name='pwd'
            placeholder='Create Password'
          />
          <PasswordInput
            control={form.control}
            name='cpwd'
            placeholder='Confirm Password'
          />
        </div>

        <div className='flex flex-col gap-5 mt-3'>
          <Button
            disabled={!isTermsAccepted || isRobot}
            className='mb-4 h-12 flex items-center justify-center rounded-full bg_linear-purple text-white font-medium text-lg w-full'
          >
            {isPending ? (
              <Loader className='w-5 h-5 text-white animate-spin' />
            ) : (
              'Create Account'
            )}
          </Button>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={onChange}
          />
          <div className='text-[9.72px] font-[400] flex items-center mt-4'>
            <Checkbox
              onCheckedChange={() => setIsTermsAccepted((prev) => !prev)}
              className='mr-2'
            />
            <Text>
              I agree to the Propifix{' '}
              <span className='text-primary-color'>Terms</span> &{' '}
              <span className='text-primary-color'>Conditions</span> and confirm
              that my information is accurate.
            </Text>
          </div>
        </div>
      </form>
    </Form>
  )
}
