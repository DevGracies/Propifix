'use client'

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {  CreditCard, Info } from 'lucide-react'
import {  useRef } from 'react'
import PaymentSummary from './PaymentSummary'

const InspectionPaymentPage = () => {
  const methods = useForm()
  const expiryRef = useRef(null)

  const formatCardNumber = (value) => {
    const digits = value.replace(/\D/g, '')
    const limitedDigits = digits.slice(0, 16)
    return limitedDigits.replace(/(\d{4})(?=\d)/g, '$1 ')
  }

  const formatCCV = (value) => {
    return value.replace(/\D/g, '').slice(0, 4)
  }

  const formatExpiryDate = (value) => {
    const digits = value.replace(/\D/g, '')
    
    if (digits.length === 0) return ''
    if (digits.length <= 2) {
      const month = parseInt(digits)
      if (month > 12) return '12'
      return digits
    }
    
    const month = digits.slice(0, 2)
    const year = digits.slice(2, 4)
    return `${month}/${year}`
  }

  const handleExpiryChange = (value, onChange) => {
    const formatted = formatExpiryDate(value)
    onChange(formatted)
    
    const digits = value.replace(/\D/g, '')
    if (digits.length === 2 && !value.includes('/')) {
      const monthValue = digits
      if (parseInt(monthValue) <= 12) {
        onChange(`${monthValue}/`)
      }
    }
  }

return (
    <div className="min-h-screen w-full bg-gray-50 mt-16 px-4 py-2">
      <div className="max-w-5xl mx-auto ">
        <div className='flex items-center gap-2 mb-8 ml-2'>
          <Link href={'/inspection'}>
          <button className='cursor-pointer'>
            <Image src={'/icons/left-arrow-button.svg'} alt='button' width={30} height={20}/> 
          </button>
          </Link>
          <p className='font-medium text-md md:text-lg'>Back</p>
        </div>

        <h1 className="text-lg md:text-2xl font-semibold text-[#9D71C6] ml-4 mb-8">
          Pay for <span className="text-[#5D14AD]">Inspection</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-2xl p-8 shadow-xl">
          <div className="lg:col-span-2">
            <div className="">
              <Form {...methods}>
                <div className="space-y-6">
                  <h3 className="text-xl md:text-3xl font-bold text-[#5D14AD] mb-8">
                    Propi<span className="text-black/80 font-medium">Fix</span>
                  </h3>

                  <div className="space-y-2 mb-8">
                    <div className="text-sm md:text-lg font-medium text-black flex items-center gap-3">
                      <span className='text-white bg-[#5D14AD] p-2 rounded-md'>
                        <CreditCard className="w-3 h-3 md:w-5 md:h-5"/>
                      </span>
                      Payment
                    </div>
                    <p className="text-sm text-gray-500">
                      For the payment to be processed, please enter the information completely.
                    </p>
                  </div>

                  <FormField
                    name="fullName"
                    control={methods.control}
                    render={({ field }) => (
                      <FormItem>
                        <div className='flex items-center gap-1'>
                          <FormLabel className="text-gray-700 text-xs md:text-base">Full Name</FormLabel>
                          <Info className='w-3 h-3 md:w-4 md:h-4 text-[#5D14AD]'/>
                        </div>
                        <FormControl>
                          <Input 
                            type="text" 
                            className="border-gray-300 bg-gray-50 focus:ring-2 focus-visible:ring-purple-500 h-12" 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="cardNumber"
                    control={methods.control}
                    render={({ field }) => (
                      <FormItem>
                        <div className='flex items-center gap-1'>
                          <FormLabel className="text-gray-700 text-xs md:text-base">Card Number</FormLabel>
                          <Info className='w-3 h-3 md:w-4 md:h-4 text-[#5D14AD]'/>
                        </div>
                        <div className="text-xs text-gray-500 mb-2">
                          Enter the 16-digit number on<br/>the front of the card.
                        </div>
                        <FormControl>
                          <Input 
                            placeholder="1 2 3 4    - - - -    - - - -    - - - -" 
                            className="border-gray-300 bg-gray-50 focus:ring-2 focus-visible:ring-purple-500 font-mono tracking-wider h-12"
                            value={field.value || ''}
                            onChange={(e) => {
                              const formatted = formatCardNumber(e.target.value)
                              field.onChange(formatted)
                            }}
                            maxLength={19} 
                            inputMode="numeric"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      name="ccv"
                      control={methods.control}
                      render={({ field }) => (
                        <FormItem>
                          <div className='flex items-center gap-1'>
                            <FormLabel className="text-gray-700 text-xs md:text-base">CCV</FormLabel>
                            <Info className='w-3 h-3 md:w-4 md:h-4 text-[#5D14AD]'/>
                          </div>
                          <FormControl>
                            <Input 
                              placeholder="- - -" 
                              className="border-gray-300 bg-gray-50 focus:ring-2 focus-visible:ring-purple-500 font-mono h-12"
                              value={field.value || ''}
                              onChange={(e) => {
                                const formatted = formatCCV(e.target.value)
                                field.onChange(formatted)
                              }}
                              maxLength={3}
                              inputMode="numeric"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      name="expiry"
                      control={methods.control}
                      render={({ field }) => (
                        <FormItem>
                          <div className='flex items-center gap-1'>
                            <FormLabel className="text-gray-700 text-xs md:text-base">Expiration Date</FormLabel>
                            <Info className='w-3 h-3 md:w-4 md:h-4 text-[#5D14AD]'/>
                          </div>
                          <FormControl>
                            <Input 
                              ref={expiryRef}
                              placeholder="M M  /  Y Y" 
                              className="border-gray-300 bg-gray-50 focus:ring-2 focus-visible:ring-purple-500 font-mono h-12"
                              value={field.value || ''}
                              onChange={(e) => {
                                handleExpiryChange(e.target.value, field.onChange)
                              }}
                              maxLength={5}
                              inputMode="numeric"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Payment Buttons */}
                  <div className="space-y-4 pt-6">
                   <Link href={'/inspection-payment-transfer'}>
                   <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#5D14AD] to-[#9747FF] text-white font-semibold hover:opacity-90 transition h-12"
                    >
                      Complete Payment
                    </Button>
                   </Link>

                    <div className="flex items-center justify-center text-sm text-gray-500">
                      OR
                    </div>

                    <div className="text-center text-sm text-gray-500 mb-2">
                      Use
                    </div>

                   <Link href={'/inspection-payment-transfer'}>
                   <Button
                      type="button"
                      className="w-full bg-gradient-to-r from-[#5D14AD] to-[#9747FF] text-white font-semibold hover:opacity-90 transition h-12"
                    >
                      Bank Transfer
                    </Button>
                   </Link>
                  </div>
                </div>
              </Form>
            </div>
          </div>

          <div className="lg:col-span-1 mt-0 lg:mt-36">
            <PaymentSummary/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InspectionPaymentPage