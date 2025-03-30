'use client'

import { useEffect, useState } from 'react'
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
import { UploadButton } from '@/components/shared/UploadButton'
import { UserFormSchema } from '@/lib/schema/UserFormSchema'
import { PhoneNumberField } from '@/components/shared/PhoneNumberField'
import { ScrollArea } from '@/components/ui/scroll-area'

export const UserForm = () => {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState('')
  const [isTermsAccepted, setIsTermsAccepted] = useState(false)
  const [isRobot, setIsRobot] = useState(true)
  const [phone, setPhone] = useState('')

  function onChange(value) {
    console.log('Captcha value:', value)
    setIsRobot(false)
  }

  const checkIfPhoneFieldIsValid = () => {
    let isValid = true
    if (!phone) {
      setError('Phone number is required')
      isValid = false
    } else {
      setError('')
    }
    return isValid
  }

  const form = useForm({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      full_name: '',
      pwd: '',
      cpwd: '',
      email: '',
    },
  })

  const onSubmit = (values) => {
    const phoneFieldIsValid = checkIfPhoneFieldIsValid
    if (phoneFieldIsValid) console.log(values)
  }

  useEffect(() => {
    if (Object.keys(form.formState.errors).length > 0) {
      checkIfPhoneFieldIsValid()
    }
  }, [form.formState.errors])

  return (
    <ScrollArea className='h-[400px] relatve'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full flex flex-col gap-4'
        >
          <InputField
            control={form.control}
            name='full_name'
            placeholder='Enter your full name'
            inputCategory='input'
            inputType='text'
          />
          <InputField
            control={form.control}
            name='email'
            placeholder='Enter your email address'
            inputCategory='input'
            inputType='email'
          />
          <PhoneNumberField
            setPhone={setPhone}
            phone={phone}
            error={error}
            setError={setError}
            placeholder='Enter your phone number'
          />
          <PasswordInput
            control={form.control}
            name='pwd'
            placeholder='Create a secure password'
          />
          <PasswordInput
            control={form.control}
            name='cpwd'
            placeholder='Confirm Password'
          />
          <div className='flex flex-col gap-5'>
            <div className='flex flex-wrap gap-2 justify-between items-start'>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={onChange}
              />
              <UploadButton
                handleChange={(e) => console.log(e)}
                label={`e.g., National ID, NIN, Driver’s License`}
                uploadBtnText={'Upload Identification'}
              />
            </div>
            <div className='text-[9.72px] font-[400] flex items-center '>
              <Checkbox
                onCheckedChange={() => setIsTermsAccepted((prev) => !prev)}
                className='mr-2'
              />
              <Text>
                I agree to the Propifix{' '}
                <span className='text-primary-color'>Terms</span> &{' '}
                <span className='text-primary-color'>Conditions</span> and
                confirm that my information is accurate.
              </Text>
            </div>
            <Button
              disabled={!isTermsAccepted || isRobot}
              className='h-12 flex items-center justify-center rounded-[12px] bg_linear-purple text-white font-medium text-lg w-full'
            >
              {isPending ? (
                <Loader className='w-5 h-5 text-white animate-spin' />
              ) : (
                'Sign Up'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </ScrollArea>
  )
}
