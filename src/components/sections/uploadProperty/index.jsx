'use client'

import { useEffect, useState } from 'react'
import { ProgressTabs } from './ProgressBar'
import { PropertyForm } from './PropertyForm'
import { PricingForm } from './PricingForm'
import { Pictures } from './Pictures'
import { useMultiTabForm } from '@/hooks/useMultiTabForm'

export const UploadProperty = () => {
  const [activeTab, setActiveTab] = useState(1)
  const { getLastCompletedStep, clearAllData } = useMultiTabForm()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lastStep = getLastCompletedStep()
      // auto-navigate to the last completed step + 1
      setActiveTab(Math.min(lastStep + 1, 2)) // 2 = number of tabs - 1
    }
  }, [])

  return (
    <section data-force-dark-text='true' className='bg-gray-100'>
      <div className='p-3 flex flex-col justify-center items-center gap-10 m-auto lg:w-[985px] w-full'>
        <h1 className='text-[#9D71C6] text-[20px] md:text-[30px] font-semibold mt-28 md:mt-32'>
          Upload<span className='text-[#5D14AD] ms-2'>Property</span>
        </h1>

        <ProgressTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 1 && <PropertyForm setActiveTab={setActiveTab} />}
        {activeTab === 2 && <PricingForm setActiveTab={setActiveTab} />}
        {activeTab === 3 && <Pictures setActiveTab={setActiveTab} />}
      </div>
    </section>
  )
}
