'use client'

import { InputField } from '@/components/custom-ui/InputField'
import { Text } from '@/components/shared/Text'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { PricingFormSchema } from '@/lib/schema/PricingFormSchema'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useLoadFormDefaults, useMultiTabForm } from '@/hooks/useMultiTabForm'
import { TABLABELS } from '@/lib/constants'

const WhitePaddingBg = ({ children, className }) => (
  <div className={cn('bg-white p-4 rounded-[12px] shadow-sm', className)}>
    {children}
  </div>
)

export const PricingForm = ({ setActiveTab }) => {
  const { saveTabData } = useMultiTabForm()
  const tabIndex = 2

  const form = useForm({
    resolver: zodResolver(PricingFormSchema),
    defaultValues: {
      SalesPrice: '',
      Condition: '',
      OriginalSalesPrice: '',
      OtherFeesTitle: '',
      HouseCondition: 'newly built',
      availStatus: 'vacant',
      OtherFeesPrice: '',
      OtherTypes: '',
      bedroomType: '',
      AppendTo: '',
      bathroomType: '',
      ToiletType: '',
      AreaSize: '',
    },
  })

  const onSubmit = (values) => {
    console.log(values)
    saveTabData(TABLABELS[tabIndex], values, tabIndex)
    setTimeout(() => setActiveTab((prevState) => prevState + 1), 100)
  }

  const navigateBack = () => {
    saveTabData(TABLABELS[tabIndex], form.getValues(), null)
    setTimeout(() => setActiveTab((prevState) => prevState - 1), 100)
  }

  useLoadFormDefaults(form, TABLABELS[tabIndex])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full flex flex-col gap-4 relative'
      >
        <div className='md:w-[640px] w-full flex flex-col gap-4 relative m-auto'>
          <WhitePaddingBg>
            <div className='grid grid-cols-2 gap-4 mb-4'>
              <InputField
                control={form.control}
                label='Sales Price*'
                name='SalesPrice'
                placeholder='e.g 500,000'
                inputCategory='input'
                inputType='text'
              />
              <InputField
                control={form.control}
                label='Condition'
                name='Condition'
                placeholder='Negotiable or Non-negotiable'
                inputCategory='input'
                inputType='text'
              />
            </div>
            <InputField
              control={form.control}
              label='Original Sales Price*'
              name='OriginalSalesPrice'
              placeholder='e.g 500,000'
              inputCategory='input'
              inputType='text'
            />
          </WhitePaddingBg>
          <div className='flex flex-col gap-3'>
            <Text style='text-[14px] font-[500]'>Other Fees?</Text>
            <WhitePaddingBg className='flex flex-col gap-4'>
              <InputField
                control={form.control}
                label='Title'
                name='OtherFeesTitle'
                placeholder='Enter fee title'
                inputCategory='input'
                inputType='text'
              />
              <InputField
                control={form.control}
                label='Price'
                name='OtherFeesPrice'
                placeholder='Enter fee title'
                inputCategory='input'
                inputType='text'
              />
              <Text style='text-xs text-thick-purple my-5'>
                <span className='font-[600]'> Note:</span>{' '}
                <span className='font-[400]'>
                  Fake or misleading listings will result in account Total
                  package = total price x PropiFix charges: 20%
                </span>
              </Text>
            </WhitePaddingBg>
          </div>
          <WhitePaddingBg>
            <InputField
              control={form.control}
              label='Append To'
              name='AppendTo'
              placeholder='Enter...'
              inputCategory='input'
              inputType='text'
            />
            <Text style='text-xs text-[grey] font-[500] mt-3'>
              /month, /year, /day, /sqm
            </Text>
          </WhitePaddingBg>
          <WhitePaddingBg className='flex flex-col gap-3'>
            <Text style='text-[14px] font-[700] mb-3'>Type</Text>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mb-4'>
              <InputField
                control={form.control}
                label='Bedrooms'
                name='bedroomType'
                placeholder='--Select--'
                inputCategory='select'
                selectList={[{ title: '1 bedroom', value: '1 bedroom' }]}
              />
              <InputField
                control={form.control}
                label='Bathrooms'
                name='bathroomType'
                placeholder='--Select--'
                inputCategory='select'
                selectList={[{ title: '1 bathroom', value: '1 bathroom' }]}
              />
              <InputField
                control={form.control}
                label='Toilets'
                name='ToiletType'
                placeholder='--Select--'
                inputCategory='select'
                selectList={[{ title: '1 toilet', value: '1 toilet' }]}
              />
            </div>
            <InputField
              control={form.control}
              label='Others'
              name='OtherTypes'
              placeholder='Enter...'
              inputCategory='input'
              inputType='text'
            />
          </WhitePaddingBg>
          <WhitePaddingBg>
            <InputField
              control={form.control}
              label='Area Size (SQM)'
              name='AreaSize'
              placeholder='e.g 100'
              inputCategory='input'
              inputType='text'
            />
            <div className='mt-4'>
              <InputField
                control={form.control}
                name='HouseCondition'
                label={'House Condition'}
                inputCategory='radio'
                radioList={[
                  { label: 'Furnished', value: 'furnished' },
                  { label: 'Serviced', value: 'serviced' },
                  { label: 'Newly Built', value: 'newly built' },
                ]}
              />
            </div>
          </WhitePaddingBg>
          <WhitePaddingBg>
            <Text style='text-[14px] font-[500]'>Availability Status</Text>
            <Text style='text-[12px] font-[500] mt-2 text-[grey]'>
              Select the availability
            </Text>
            <InputField
              control={form.control}
              name='availStatus'
              inputCategory='radio'
              radioList={[
                { label: 'vacant', value: 'vacant' },
                { label: 'soon-to-be-vacant', value: 'soon-to-be-vacant' },
                { label: 'Under Renovation', value: 'under renovation' },
              ]}
            />
          </WhitePaddingBg>
        </div>
        <div className='flex items-center justify-between w-full my-14'>
          <Button
            type='button'
            onClick={navigateBack}
            className='h-[42px] flex items-center justify-center rounded-[20px] bg_linear-purple text-white font-medium text-lg w-[150px]'
          >
            <ChevronLeft className='w-5 h-5 text-white' /> Back
          </Button>
          <Button className='ms-auto h-[42px] flex items-center justify-center rounded-[20px] bg_linear-purple text-white font-medium text-lg w-[150px]'>
            Next <ChevronRight className='w-5 h-5 text-white' />
          </Button>
        </div>
      </form>
    </Form>
  )
}
