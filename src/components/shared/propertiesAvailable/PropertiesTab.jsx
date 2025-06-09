'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { PROPERTIESAVAILABLE } from '@/lib/constants'
import { useEffect } from 'react'
import { PropertyGrid } from './PropertyGrid'

const triggerStyle =
  'font-[600] text-[16px] data-[state=active]:text-thick-purple data-[state=active]:border-b-2 border-thick-purple pb-2 px-0 transition-colors duration-300 rounded-none '

export const PropertiesTab = ({
  setProgress,
  activeTab = PROPERTIESAVAILABLE[0],
  setActiveTab,
  setCurrentTabIndex,
}) => {
  const updateProgressForTab = (tabValue) => {
    const tabIndex = PROPERTIESAVAILABLE.indexOf(tabValue)
    const progressPerTab = 100 / PROPERTIESAVAILABLE.length
    const newProgress = Math.min(100, (tabIndex + 1) * progressPerTab)

    setProgress(newProgress)

    if (setCurrentTabIndex) {
      setCurrentTabIndex(tabIndex)
    }

    if (setActiveTab) {
      setActiveTab(tabValue)
    }
  }

  useEffect(() => {
    updateProgressForTab(activeTab)
  }, [activeTab])

  return (
    <Tabs
      defaultValue={activeTab}
      value={activeTab}
      className='w-full bg-white border-none'
      onValueChange={(value) => updateProgressForTab(value)}
    >
      <ScrollArea className='w-full whitespace-nowrap scrollbar-none'>
        <TabsList className='grid grid-flow-col auto-cols-max gap-4 h-fit bg-white mb-0 justify-start border-none shadow-none px-0 pt-0 pb-6'>
          {PROPERTIESAVAILABLE.map((tab) => (
            <TabsTrigger key={tab} value={tab} className={triggerStyle}>
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>

      {PROPERTIESAVAILABLE.map((tab) => (
        <TabsContent key={tab} value={tab}>
          <PropertyGrid />
        </TabsContent>
      ))}
    </Tabs>
  )
}
