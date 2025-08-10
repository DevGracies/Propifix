'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader } from 'lucide-react'
import { UserSignInFormSchema } from '@/lib/schema/UserSignInFormSchema'
import { InputField } from '../../custom-ui/InputField'
import { PasswordInput } from '../../custom-ui/PasswordField'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Text } from '../../shared/Text'
import ReCAPTCHA from 'react-google-recaptcha'
import { useLogin } from '@/hooks/auth/login.hook'

export const UserSignInForm = ({userType}) => {
  const [isPending, setIsPending] = useState(false)
  const [isTermsAccepted, setIsTermsAccepted] = useState(false)
  const [isRobot, setIsRobot] = useState(true)

  const loginMutation = useLogin(userType)

  function onChange(value) {
    console.log('Captcha value:', value)
    setIsRobot(false)
  }

  const form = useForm({
    resolver: zodResolver(UserSignInFormSchema),
    defaultValues: {
      full_name: '',
      pwd: '',
      cpwd: '',
      email: '',
    },
  })

  const onSubmit = (values) => {
    setIsPending(true)

    const payload = {
      email: values.email,
      password: values.pwd,
    }

    loginMutation.mutate(payload, {
      onSettled: () => {
        setIsPending(false)
      },
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full flex flex-col gap-4'
      >
        <InputField
          control={form.control}
          name='email'
          placeholder='Enter your email address'
          inputCategory='input'
          inputType='email'
        />
        <PasswordInput
          control={form.control}
          name='pwd'
          placeholder='Enter your password'
        />

        <div className='flex flex-col gap-5 mt-3'>
          {isRobot && (
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={onChange}
            />
          )}
          <Button
            disabled={!isTermsAccepted || isRobot}
            className='h-12 flex items-center justify-center rounded-[12px] bg_linear-purple text-white font-medium text-lg w-full'
          >
            {isPending ? (
              <Loader className='w-5 h-5 text-white animate-spin' />
            ) : (
              'Log In'
            )}
          </Button>
          <div className='text-[9.72px] font-[400] flex items-center'>
            <Checkbox
              onCheckedChange={() => setIsTermsAccepted((prev) => !prev)}
              className='mr-2 border'
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
