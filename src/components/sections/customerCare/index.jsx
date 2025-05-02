'use client'

import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/shared/Text'
import { CustomerCareSchema } from '@/lib/schema/CustomerCareSchema'
import { InputField } from '@/components/custom-ui/InputField'
import { Loader } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const CustomerCare = () => {
  const isPending = false
  const form = useForm({
    resolver: zodResolver(CustomerCareSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      tel: '',
      email: '',
      subject: 'Property Inquiry',
    },
  })

  const onSubmit = async (values) => {
    console.log(values)
  }

  return (
    <section className='bg-[ghostwhite] p-3 flex flex-col justify-center items-center gap-10'>
      <Text
        as='h1'
        style='text-center text-[40px] text_linear-purple font-[700] leading-[120%] pt-28 md:pt-32'
      >
        Customer Care
      </Text>
      <Text
        as='h2'
        style='text-center text-[18px] font-[500] leading-[120%] mb-4'
      >
        {`We’d love to hear from you! Whether you have feedback, or need assistance, our team is here to help.`}
      </Text>
      <div className='bg-white md:mx-[6rem] mx-0 py-12 md:px-12 px-6 rounded-[10px] md:w-[788px] w-full min-h-[677px] flex flex-col gap-[30px] mb-10'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-full flex flex-col gap-[40px]'
          >
            <div className='grid md:grid-cols-2 grid-cols-1 gap-[40px]'>
              <InputField
                hideTopBorder={true}
                control={form.control}
                autoFocus
                inputStyle={'not-italic rounded-none'}
                label={'First Name'}
                name='first_name'
                placeholder='Enter your first name'
                inputCategory='input'
                inputType='text'
              />
              <InputField
                hideTopBorder={true}
                control={form.control}
                label={'Last Name'}
                inputStyle={'not-italic rounded-none'}
                autoFocus
                name='last_name'
                placeholder='Enter your last name'
                inputCategory='input'
                inputType='text'
              />
              <InputField
                hideTopBorder={true}
                control={form.control}
                inputStyle={'not-italic rounded-none'}
                label={'Email'}
                name='email'
                placeholder='Enter your email address'
                inputCategory='input'
                inputType='email'
              />
              <InputField
                hideTopBorder={true}
                control={form.control}
                inputStyle={'not-italic rounded-none'}
                label={'Phone Number'}
                autoFocus
                name='tel'
                placeholder='Enter your Phone Number'
                inputCategory='input'
                inputType='tel'
              />
            </div>
            <InputField
              hideTopBorder={true}
              control={form.control}
              inputStyle={'not-italic rounded-none'}
              name='subject'
              label={'Select Subject?'}
              inputCategory='radio'
              radioList={[
                { label: 'Property Inquiry', value: 'Property Inquiry' },
                { label: 'Customer Support', value: 'Customer Support' },
                { label: 'General Inquiry', value: 'General Inquiry' },
                { label: 'Feedback/Complaint', value: 'Feedback/Complaint' },
              ]}
            />
            <InputField
              hideTopBorder={true}
              inputStyle={'not-italic rounded-none'}
              control={form.control}
              autoFocus
              label='Message'
              name='message'
              placeholder='Write your message..'
              inputCategory='input'
              inputType='tel'
            />
            <Button className='h-12 flex items-center justify-center rounded-[12px] bg_linear-purple text-white font-medium text-lg w-[214px] h-[54px] ms-auto'>
              {isPending ? (
                <Loader className='w-5 h-5 text-white animate-spin' />
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  )
}
