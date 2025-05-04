'use client'


import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { useRouter } from 'nextjs-toploader/app'
import { PaymentsTable } from './PaymentTable'
import { Text } from '@/components/shared/Text'

const triggerStyle =
  'h-[46px] w-[128px] font-[500] text-[17px] rounded-[30px] data-[state=active]:border-grey-border border border-primary-blue transition-colors duration-1000'

const tabs = [
  { title: 'All', value: 'all' },
  { title: 'Complete', value: 'complete' },
  { title: 'Pending', value: 'pending' },
  { title: 'Rejected', value: 'rejected' },
]

export const PaymentHistory = () => {
  return (
    <div className='sm:p-8 p-4 bg-white border rounded-lg flex flex-col gap-4'>
      <Text as='h1' style='text-[22px] font-[500]'>
        Payment History
      </Text>
      <Tabs defaultValue={tabs[0].value} className='w-full bg-white'>
        <ScrollArea className='w-full whitespace-nowrap scrollbar-none'>
          <TabsList className='justify-start items-start flex w-full gap-4 h-fit bg-white mb-2'>
            <TabsTrigger value={tabs[0].value} className={triggerStyle}>
              tabs[0].title
            </TabsTrigger>
            <TabsTrigger value={tabs[1].value} className={triggerStyle}>
              tabs[1].title
            </TabsTrigger>
            <TabsTrigger value={tabs[2].value} className={triggerStyle}>
              tabs[2].title
            </TabsTrigger>
            <TabsTrigger value={tabs[3].value} className={triggerStyle}>
              tabs[3].title
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
      </Tabs>
    </div>
  )
}
