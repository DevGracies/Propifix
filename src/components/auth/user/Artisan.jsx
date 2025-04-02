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
import { ArtisanFormSchema } from '@/lib/schema/ArtisanFormSchema'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PhoneNumberField } from '@/components/shared/PhoneNumberField'
import { useCreateArtisan } from '@/hooks/auth/regsiter.hook'
import { userTypes } from '@/utils/ConstantEnums'

export const ArtisanForm = () => {
  const { mutate: registerArtisan, isPending } = useCreateArtisan()
  const [isTermsAccepted, setIsTermsAccepted] = useState(false)
  const [isRobot, setIsRobot] = useState(true)
  const [phone, setPhone] = useState('')
  const [nextOfKinPhone, setNextOfKinPhone] = useState('')
  const [error, setError] = useState('')
  const [nextOfKinError, setNextOfKinError] = useState('')
  const [identifierImage, setIdentifierImage] = useState('')
  const [portfolioImage, setportfolioImage] = useState('')
  const [nextOfKinIdentifierImage, setNextOfKinIdentifierImage] = useState('')

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
    return isValid
  }

  const documentsSelected = () => {
    let isSelected = false
    const allRequiredAreUploaded = identifierImage && portfolioImage
    if (allRequiredAreUploaded) {
      isSelected = true
    } else {
      toast.error('Upload all required document!')
    }
    return isSelected
  }

  const form = useForm({
    resolver: zodResolver(ArtisanFormSchema),
    defaultValues: {
      full_name: '',
      pwd: '',
      cpwd: '',
      email: '',
      skills: '',
      home_address: '',
      years_of_experience: 0,
      available_on_demand: true,
      next_of_kin_full_name: '',
      relationship: '',
      next_of_kin_email: '',
      next_of_kin_address: '',
    },
  })

  const onSubmit = (values) => {
    const phoneFieldIsValid = checkIfPhoneFieldIsValid
    const imageIsUploaded = documentsSelected()

    if (phoneFieldIsValid && imageIsUploaded) {
      registerArtisan({
        fullName: values.full_name,
        email: values.email,
        password: values.pwd,
        phone: `+${phone}`,
        identifierImage: identifierImage,
        __t: userTypes.artisan,
        skill: values.skills,
        portfolioImages: [portfolioImage],
        homeAddress: values.home_address,
        yoe: values.years_of_experience,
        availableOnDemand: values.available_on_demand,
        next_of_kin: {
          fullName: values.next_of_kin_full_name,
          relationship: values.relationship,
          phone: `+${nextOfKinPhone}`,
          email: values.next_of_kin_email,
          address: values.next_of_kin_address,
          identifierImage: nextOfKinIdentifierImage,
        },
      })
    }
  }

  useEffect(() => {
    if (Object.keys(form.formState.errors).length > 0) {
      checkIfPhoneFieldIsValid()
    }
  }, [form.formState.errors])

  return (
    <ScrollArea className='h-[400px] relative'>
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
            name='skills'
            placeholder='Trade/Skill'
            inputCategory='select'
            selectList={[
              'ERCAAN (Estate Rent and Commission Agents skills of Nigeria)',
              'REDAN (Real Estate Developers skills of Nigeria)',
              'Remassos- The  Real Estate Managers’ skills in Ondo State',
              'AEAN (skills of Estate Agents in Nigeria)',
              'Independent Artisan',
            ]}
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
            name='home_address'
            placeholder='Enter your home address'
            inputCategory='input'
            inputType='text'
          />
          <InputField
            control={form.control}
            name='years_of_experience'
            placeholder='Enter how many year have you being managing each of these  property'
            inputCategory='input'
            inputType='number'
          />
          <div className='flex flex-col gap-5'>
            <UploadButton
              handleChange={(e) => setIdentifierImage(e)}
              topLabel={'Upload Identification and Government ID'}
              label={`Upload a valid ID (e.g., National ID, Driver’s License)`}
            />
            <UploadButton
              handleChange={(e) => setportfolioImage(e)}
              topLabel={'Upload Work Portfolio (Optional)'}
              label={`Upload  images of past work or projects`}
            />
          </div>
          <InputField
            control={form.control}
            name='available_on_demand'
            label={'Are you Available On-demand?'}
            inputCategory='radio'
            radioList={[
              { label: 'Yes', value: true },
              { label: 'No', value: false },
            ]}
          />
          <div className='flex flex-col gap-4'>
            <Text style='text-[14px] font-[500]'>Next of Kin Information</Text>
            <InputField
              control={form.control}
              name='next_of_kin_full_name'
              placeholder={`Enter your next of kin’s full name`}
              inputCategory='input'
              inputType='text'
            />
            <div className='flex flex-col gap-1'>
              <InputField
                control={form.control}
                name='relationship'
                placeholder='Relationship'
                inputCategory='input'
                inputType='text'
              />
              <Text style='text-[10px] italic font-normal'>{`Specify your relationship (e.g., Parent, Sibling, Spouse)`}</Text>
            </div>
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
              handleChange={(e) => setNextOfKinIdentifierImage(e)}
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
