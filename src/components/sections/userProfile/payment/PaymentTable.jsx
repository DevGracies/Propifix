'use client'

import { TableLayout } from '@/components/ui/table-layout'
import { TableCell, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { truncateMiddle } from '@/utils/helpers/TruncateText'

export const PaymentsTable = () => {
  const hideIndexOnMobile = [0, 2, 3, 4]

  const data = [
    {
      id: 1,
      user: 'Emily Wilson',
      property: 'Mountain Cabin',
      agent: 'Jennifer Lopez',
      date: '5/15/2023',
      status: 'Approved',
      action: 'View Details',
    },
    {
      id: 2,
      user: 'Robert Garcia',
      property: 'Luxury Villa in Malibu',
      agent: 'Chris Evans',
      date: '2/28/2023',
      status: 'Pending',
      action: 'View Details',
    },
    {
      id: 3,
      user: 'David Smith',
      property: 'Urban Loft',
      agent: 'Taylor Swift',
      date: '7/4/2023',
      status: 'Completed',
      action: 'View Details',
    },
  ]
  return (
    <div className='p-4 border my-10 rounded-lg'>
      <TableLayout
        dataLength={data.length}
        hideIndexOnMobile={hideIndexOnMobile}
        totalPageNumber={20}
        tableHeadRowStyle='bg-white'
        activePage={1}
        tableHeadRow={[
          'Transaction ID',
          'Date',
          'Amount Paid',
          'Property/Service Name',
          'Service Type',
          'Status',
          'Action',
        ]}
        skeletonCount={7}
      >
        {data?.map((info, index) => {
          const { id, user, property, agent, date, status } = info
          return (
            <TableRow
              className='tableRow my-2 rounded-[8px] bg-white pending-table-row'
              key={index}
            >
              {[id, property, user, agent, date, status].map((info, index) => (
                <TableCell
                  className={cn(
                    'font-[400] text-[16px] bg-white text-neutral-grey',
                    hideIndexOnMobile?.includes(index) && 'md:table-cell hidden'
                  )}
                  key={index}
                >
                  {truncateMiddle(info)}
                </TableCell>
              ))}
              <TableCell
                className='font-[600] text-[16px] bg-white'
                key={index}
              >
                <Button className='cursor-pointer flex items-center w-[58px] h-[31px] rounded bg_linear-purple font-[400] text-[16px]'>
                  View
                </Button>
              </TableCell>
            </TableRow>
          )
        })}
      </TableLayout>
    </div>
  )
}
