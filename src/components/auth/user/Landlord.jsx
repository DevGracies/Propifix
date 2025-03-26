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
import { LandlordFormSchema } from '@/lib/schema/LandlordFormSchema'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PhoneNumberField } from '@/components/shared/PhoneNumberField'

export const LandlordForm = () => {
  const [isPending, setIsPending] = useState(false)
  const [isTermsAccepted, setIsTermsAccepted] = useState(false)
  const [isRobot, setIsRobot] = useState(true)
  const [phone, setPhone] = useState('')
  const [nextOfKinPhone, setNextOfKinPhone] = useState('')
  const [caretakerPhone, setcaretakerPhone] = useState('')
  const [error, setError] = useState('')
  const [nextOfKinError, setNextOfKinError] = useState('')
  const [caretakerError, setCaretakerError] = useState('')

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
    if (!nextOfKinPhone) {
      setNextOfKinError(`Next Of Kin's Phone number is required`)
      isValid = false
    } else {
      setNextOfKinError('')
    }
    if (!caretakerPhone) {
      setcaretakerPhone(`Landlord's Phone number is required`)
      isValid = false
    } else {
      setLandlordError('')
    }
    return isValid
  }

  const form = useForm({
    resolver: zodResolver(LandlordFormSchema),
    defaultValues: {
      full_name: '',
      pwd: '',
      cpwd: '',
      email: '',
      property_name: '',
      number_of_house: 0,
      property_address: '',
      years_of_ownership: 0,
      caretaker_full_name: '',
      have_a_caretaker: 'yes',
      next_of_kin_full_name: '',
      relationship: '',
      next_of_kin_email: '',
      next_of_kin_address: '',
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
    <ScrollArea className='h-[527px] relatve'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full flex flex-col gap-4 relative'
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
            name='property_name'
            placeholder='Enter the name of the property (if applicable)'
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
            placeholder='Re-enter your password'
          />
          <InputField
            control={form.control}
            name='number_of_house'
            placeholder='Enter the number of how houses you own?'
            inputCategory='input'
            inputType='number'
          />
          <InputField
            control={form.control}
            name='property_address'
            placeholder='Enter the location of your property'
            inputCategory='input'
            inputType='text'
          />
          <div className='flex flex-col gap-5'>
            <UploadButton
              handleChange={(e) => console.log(e)}
              topLabel={'Upload Identification and Government ID'}
              label={`Upload a valid ID (e.g., National ID, Driver’s License)`}
            />
            <UploadButton
              handleChange={(e) => console.log(e)}
              topLabel={'Upload Utility bills to confirm property ownership'}
            />
          </div>
          <InputField
            control={form.control}
            name='years_of_ownership'
            placeholder='Enter how many year have you being managing each of these  property'
            inputCategory='input'
            inputType='number'
          />
          <InputField
            control={form.control}
            name='have_a_caretaker'
            label={'Do you have a caretaker?'}
            inputCategory='radio'
            radioList={[
              { label: 'Yes', value: 'yes' },
              { label: 'No', value: 'no' },
            ]}
          />
          <div className='flex flex-col gap-4 p-4 border border-thick-purple rounded-[12px]'>
            <Text style='text-[14px] font-[400]'>{`If Yes`}</Text>
            <InputField
              control={form.control}
              name='caretaker_full_name'
              placeholder={`Enter your caretaker’s full name`}
              inputCategory='input'
              inputType='text'
            />
            <PhoneNumberField
              setPhone={setcaretakerPhone}
              phone={caretakerPhone}
              error={caretakerError}
              setError={setCaretakerError}
              placeholder={`Caretaker phone number`}
            />
          </div>
          <Text style='italic text-white font-[700] p-4 bg-thick-purple rounded-[12px]'>
            Note:{' '}
            <span className='font-normal opacity-[0.7]'>
              if the properties are more than 2, send us your above information
              on{' '}
              <span className='underline font-normal opacity-[0.7]'>
                propifix@gmail.com
              </span>
            </span>
          </Text>
          <div className='flex flex-col gap-4'>
            <Text style='text-[14px] font-[500]'>Next of Kin Information</Text>
            <InputField
              control={form.control}
              name='next_of_kin_full_name'
              placeholder={`Enter your next of kin’s full name`}
              inputCategory='input'
              inputType='text'
            />
            <PhoneNumberField
              setPhone={setNextOfKinPhone}
              phone={nextOfKinPhone}
              error={nextOfKinError}
              setError={setNextOfKinError}
              placeholder={`Enter next of kin’s phone number`}
            />
            <InputField
              control={form.control}
              name='next_of_kin_email'
              placeholder={`Enter next of kin's email address`}
              inputCategory='input'
              inputType='email'
            />
            <InputField
              control={form.control}
              name='next_of_kin_address'
              placeholder={`Enter next of kin’s residential address`}
              inputCategory='input'
              inputType='text'
            />
          </div>
          <div className='flex flex-col gap-5'>
            <UploadButton
              handleChange={(e) => console.log(e)}
              label={`Upload a valid ID for verification`}
              uploadBtnText={'Upload Identification'}
              topLabel={'Upload Identification (Optional)'}
            />
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={onChange}
            />
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
