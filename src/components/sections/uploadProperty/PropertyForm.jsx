'use client'

import { InputField } from '@/components/custom-ui/InputField'
import { Text } from '@/components/shared/Text'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form } from '@/components/ui/form'
import { useLoadFormDefaults, useMultiTabForm } from '@/hooks/useMultiTabForm'
import { CATEGORIES, FEATURES, TABLABELS } from '@/lib/constants'
import { PropertyFormSchema } from '@/lib/schema/PropertyFormSchema'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const WhitePaddingBg = ({ children }) => (
  <div className='bg-white p-4 rounded-[12px] shadow-sm'>{children}</div>
)

export const PropertyForm = ({ setActiveTab }) => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0])
  const [selectedFeatures, setSelectedFeatures] = useState([FEATURES[0]])
  const { saveTabData } = useMultiTabForm()
  const tabIndex = 1

  const addToSelectedFeatures = (isChecked, val) => {
    const filteredSelectedFeatures = selectedFeatures.filter(
      (feat) => feat.toLowerCase() !== val.toLowerCase()
    )

    setSelectedFeatures((prevState) => {
      if (isChecked) {
        return [...prevState, val]
      } else {
        return filteredSelectedFeatures
      }
    })
  }

  const form = useForm({
    resolver: zodResolver(PropertyFormSchema),
    defaultValues: {
      title: '',
      typeOfProperty: '',
      subtypeOfProperty: '',
      ownership: '',
      state: '',
      lg: '',
      desc: '',
    },
  })

  const onSubmit = (values) => {
    console.log(values)
    saveTabData(
      TABLABELS[tabIndex],
      { ...values, category: activeCategory, features: selectedFeatures },
      tabIndex
    )
    setTimeout(() => setActiveTab((prevState) => prevState + 1), 100)
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
            <InputField
              control={form.control}
              label='Title*'
              name='title'
              placeholder='e.g Newly Built 3 bedroom Duplex in Lekki'
              inputCategory='input'
              inputType='text'
            />
          </WhitePaddingBg>
          <WhitePaddingBg>
            <div className='flex flex-col gap-3'>
              <Text style='text-[14px] font-[500]'>Categories*</Text>
              <div className='flex flex-wrap gap-8'>
                {CATEGORIES?.map((cat, index) => (
                  <span
                    key={index}
                    className={cn(
                      'cursor-pointer text-center w-[115px] h-[35px] rounded-[12px] text-[14px] font-[400] flex items-center justify-center border',
                      cat === activeCategory && 'bg-thick-purple text-white'
                    )}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </WhitePaddingBg>
          <WhitePaddingBg>
            <InputField
              control={form.control}
              label='Ownership Proof*'
              name='ownership'
              placeholder='Upload a valid document proving ownership or authorization'
              inputCategory='select'
              selectList={[
                { title: 'Deed of Ownership', value: 'Deed of Ownership' },
                {
                  title: 'Letter of Authorization',
                  value: 'Letter of Authorization',
                },
                { title: 'Tenancy Agreement', value: 'Tenancy Agreement' },
                {
                  title: 'Certificate of Occupamcy',
                  value: 'Certificate of Occupamcy',
                },
                { title: 'Receipt (Signed)', value: 'Receipt (Signed)' },
                {
                  title: 'Sublease Agreement',
                  value: 'Sublease Agreement',
                },
              ]}
            />
          </WhitePaddingBg>
          <WhitePaddingBg>
            <div className='grid grid-cols-2 gap-4'>
              <InputField
                control={form.control}
                label='State'
                name='state'
                placeholder='e.g lagos'
                inputCategory='input'
                inputType='text'
              />
              <InputField
                control={form.control}
                label='Local Government'
                name='lg'
                placeholder='e.g Ikorodu'
                inputCategory='input'
                inputType='text'
              />
            </div>
          </WhitePaddingBg>
          <WhitePaddingBg>
            <div className='grid grid-cols-2 gap-4'>
              <InputField
                control={form.control}
                label='Type of property*'
                name='typeOfProperty'
                placeholder='--Enter type of property--'
                inputCategory='input'
                inputType='text'
              />
              <InputField
                control={form.control}
                label='Sub type of property*'
                name='subtypeOfProperty'
                placeholder='-enter subtype of property-'
                inputCategory='input'
                inputType='text'
              />
            </div>
          </WhitePaddingBg>
          <WhitePaddingBg>
            <InputField
              control={form.control}
              name='desc'
              label='Description*'
              placeholder='Describe your property...'
              inputCategory='textArea'
              inputStyle='h-[130px]'
              inputType='text'
            />
            <div className='flex flex-col gap-3 mt-4'>
              <Text style='text-[14px] font-[500]'>Features</Text>
              <div className='grid md:grid-cols-3 grid-cols-2 gap-4'>
                {FEATURES?.map((fea, index) => (
                  <div
                    className='text-[14px] font-[400] flex items-center'
                    key={index}
                  >
                    <Checkbox
                      checked={selectedFeatures?.includes(fea)}
                      onCheckedChange={(e) => addToSelectedFeatures(e, fea)}
                      className='mr-2'
                    />
                    <span>{fea}</span>
                  </div>
                ))}
              </div>
            </div>
          </WhitePaddingBg>
        </div>
        <div className='flex items-center justify-between w-full my-14'>
          <Button className='ms-auto h-[42px] flex items-center justify-center rounded-[20px] bg_linear-purple text-white font-medium text-lg w-[150px]'>
            Next <ChevronRight className='w-5 h-5 text-white' />
          </Button>
        </div>
      </form>
    </Form>
  )
}
