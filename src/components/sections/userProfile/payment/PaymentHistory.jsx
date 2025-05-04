'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { PaymentsTable } from './PaymentTable'
import { Text } from '@/components/shared/Text'

const triggerStyle =
  'md:h-[46px] h-[35px] md:w-[120px] w-[100px] font-[500] text-md rounded-[30px] data-[state=active]:border-primary-blue border border-grey-border transition-colors duration-1000'

const tabs = [
  { title: 'All', value: 'all' },
  { title: 'Complete', value: 'complete' },
  { title: 'Pending', value: 'pending' },
  { title: 'Rejected', value: 'rejected' },
]

export const PaymentHistory = () => {
  return (
    <div className='flex flex-col'>
      <Text
        as='h1'
        style='text-[22px] font-[500] text-inactive-state-color my-4'
      >
        Payment History
      </Text>
      <Tabs defaultValue={tabs[0].value} className='w-full bg-white'>
        <ScrollArea className='w-full whitespace-nowrap scrollbar-none'>
          <TabsList className='justify-start items-start flex md:w-[520px] w-full gap-4 h-fit bg-white mb-2'>
            <TabsTrigger value={tabs[0].value} className={triggerStyle}>
              {tabs[0].title}
            </TabsTrigger>
            <TabsTrigger value={tabs[1].value} className={triggerStyle}>
              {tabs[1].title}
            </TabsTrigger>
            <TabsTrigger value={tabs[2].value} className={triggerStyle}>
              {tabs[2].title}
            </TabsTrigger>
            <TabsTrigger value={tabs[3].value} className={triggerStyle}>
              {tabs[3].title}
            </TabsTrigger>
          </TabsList>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
        <TabsContent value={tabs[0].value}>
          <PaymentsTable />
        </TabsContent>
        <TabsContent value={tabs[1].value}>
          <PaymentsTable />
        </TabsContent>
        <TabsContent value={tabs[2].value}>
          <PaymentsTable />
        </TabsContent>
        <TabsContent value={tabs[3].value}>
          <PaymentsTable />
        </TabsContent>
      </Tabs>
    </div>
  )
}
