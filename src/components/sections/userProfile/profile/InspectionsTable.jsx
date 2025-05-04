'use client'

import { TableLayout } from '@/components/ui/table-layout'
import { TableCell, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { truncateMiddle } from '@/utils/helpers/TruncateText'
import { Text } from '@/components/shared/Text'

export const InspectionsTable = () => {
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
    <div className='p-4 bg-light-grey my-10 rounded'>
      <Text style='text-[20px] font-[700] mb-4 px-2'>Inspections</Text>
      <TableLayout
        dataLength={data.length}
        hideIndexOnMobile={hideIndexOnMobile}
        totalPageNumber={20}
        activePage={1}
        tableHeadRow={[
          'Inspection ID',
          'Property',
          'User',
          'Agent',
          'Date',
          'Status',
          'Action',
        ]}
        skeletonCount={7}
      >
        {data?.map((info, index) => {
          const { id, user, property, agent, date, status } = info
          return (
            <TableRow
              className='tableRow my-2 rounded-[8px] bg-light-grey pending-table-row'
              key={index}
            >
              {[id, property, user, agent, date, status].map((info, index) => (
                <TableCell
                  className={cn(
                    'font-[400] text-sm bg-light-grey text-neutral-grey',
                    hideIndexOnMobile?.includes(index) && 'md:table-cell hidden'
                  )}
                  key={`${index}_${id}`}
                >
                  {truncateMiddle(info)}
                </TableCell>
              ))}
              <TableCell
                className='font-[600] text-sm bg-light-grey'
                key={index}
              >
                <Button className='cursor-pointer flex items-center w-[58px] h-[31px] rounded bg_linear-purple font-[400] text-sm'>
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
