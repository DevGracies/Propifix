
'use client'
import React, { useRef, useState, useEffect } from 'react'
import MultiColorHeader from '@/components/shared/MultiColorHeader'
import ArrowButton from '@/components/custom-ui/ArrowButton'
import 'swiper/css'
import { Progress } from '@/components/ui/progress'
import { PropertiesTab } from './PropertiesTab'
import { PROPERTIESAVAILABLE } from '@/lib/constants'

const PropertiesAvailable = ({ feedbackList }) => {
  const [progress, setProgress] = useState(0)
  const [currentTabIndex, setCurrentTabIndex] = useState(0)
  const [activeTab, setActiveTab] = useState(PROPERTIESAVAILABLE[0])

  const handlePrevTab = () => {
    if (currentTabIndex > 0) {
      const newIndex = currentTabIndex - 1
      const newTab = PROPERTIESAVAILABLE[newIndex]
      setCurrentTabIndex(newIndex)
      setActiveTab(newTab)
      updateProgressForTab(newTab)
    }
  }

  const handleNextTab = () => {
    if (currentTabIndex < PROPERTIESAVAILABLE.length - 1) {
      const newIndex = currentTabIndex + 1
      const newTab = PROPERTIESAVAILABLE[newIndex]
      setCurrentTabIndex(newIndex)
      setActiveTab(newTab)
      updateProgressForTab(newTab)
    }
  }

  const updateProgressForTab = (tabValue) => {

    const tabIndex = PROPERTIESAVAILABLE.indexOf(tabValue)
    const progressPerTab = 100 / PROPERTIESAVAILABLE.length
    const newProgress = Math.min(100, (tabIndex + 1) * progressPerTab)

    setProgress(newProgress)
  }

  useEffect(() => {
    updateProgressForTab(PROPERTIESAVAILABLE[0])
  }, [])

  return (
    <div className='mt-10 space-y-8'>
      <div className='flex gap-8 justify-between items-center'>
        <MultiColorHeader
          className='text-[30px] font-semibold tracking-wide md:whitespace-nowrap'
          lighterColor={'#9D71C6'}
          lighterText={'Properties'}
          heavierColor={'#5D14AD'}
          heavierText={'Available'}
        />
        <Progress className='hidden md:flex h-1' value={progress} />
        <div className='flex gap-4'>
          <ArrowButton
            onClick={handlePrevTab}
            className={'rotate-90'}
            backgroundColor={currentTabIndex === 0 ? 'gray' : '#5D14AD'}
          />
          <ArrowButton
            onClick={handleNextTab}
            className={'rotate-[270deg]'}
            backgroundColor={currentTabIndex === PROPERTIESAVAILABLE.length - 1 ? 'gray' : '#5D14AD'}
            arrowColor={'white'}
          />
        </div>
      </div>
      <PropertiesTab 
        setProgress={setProgress} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setCurrentTabIndex={setCurrentTabIndex}
      />
    </div>
  )
}

export default PropertiesAvailable