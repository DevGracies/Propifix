'use client'

import { TableLayout } from '@/components/ui/table-layout'
import { TableCell, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { truncateMiddle } from '@/utils/helpers/TruncateText'
import { Text } from '@/components/shared/Text'

export const PaymentsTable = () => {
  const hideIndexOnMobile = [0, 1, 2, 4]

  const data = [
    {
      id: 'TX-12345',
      date: '5/15/2023',
      amount: '$1,200',
      property: 'Mountain Cabin',
      serviceType: 'Rental',
      status: 'Completed',
    },
    {
      id: 'TX-12346',
      date: '2/28/2023',
      amount: '$2,500',
      property: 'Luxury Villa in Malibu',
      serviceType: 'Booking',
      status: 'Pending',
    },
    {
      id: 'TX-12347',
      date: '7/4/2023',
      amount: '$1,800',
      property: 'Urban Loft',
      serviceType: 'Maintenance',
      status: 'Failed',
    },
    {
      id: 'TX-12348',
      date: '8/12/2023',
      amount: '$3,000',
      property: 'Beach House',
      serviceType: 'Rental',
      status: 'Cancelled',
    },
  ]

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'text-success-100'
      case 'pending':
        return 'text-blue-800'
      case 'failed':
        return 'text-orange-800'
      case 'cancelled':
        return 'text-red-800'
      default:
        return 'text-gray-800'
    }
  }

  const getAction = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'View Receipt'
      case 'pending':
        return 'Pay Now'
      case 'failed':
        return 'Retry Payment'
      case 'cancelled':
        return 'View Details'
      default:
        return 'View Receipt'
    }
  }

  return (
    <div className='border mt-2 mb-8 rounded-xl'>
      <TableLayout
        dataLength={data.length}
        hideIndexOnMobile={hideIndexOnMobile}
        paginationStyle={'px-4 pb-4'}
        tableHeadStyle='p-4 border-b-2 text-inactive-state-color text-sm'
        totalPageNumber={20}
        tableHeadRowStyle='bg-white p-4'
        activePage={1}
        tableHeadRow={[
          'Transaction ID',
          'Date',
          'Amount Paid',
          'Property',
          'Service Type',
          'Status',
          'Action',
        ]}
        skeletonCount={7}
      >
        {data?.map((item, index) => {
          const { id, date, amount, property, serviceType, status } = item
          const statusColor = getStatusColor(status)
          const action = getAction(status)
          return (
            <TableRow
              className='tableRow my-2 rounded-[8px] bg-white pending-table-row p-4'
              key={`${index}_${id}`}
            >
              {[id, date, amount, truncateMiddle(property), serviceType].map(
                (info, index) => (
                  <TableCell
                    key={`${index}_${info}`}
                    className={cn(
                      'font-[400] text-sm bg-white px-4 py-2',
                      hideIndexOnMobile?.includes(index) &&
                        'md:table-cell hidden'
                    )}
                  >
                    {info}
                  </TableCell>
                )
              )}
              <TableCell
                className={cn('font-[400] text-sm bg-white px-4 py-2')}
              >
                <span
                  className={`px-3 py-1 rounded-full text-sm ${statusColor}`}
                >
                  {status}
                </span>
              </TableCell>
              <TableCell
                className={cn('font-[600] text-sm bg-white px-4 py-2')}
              >
                <Text
                  style='text-sm font-[400] underline text-thick-purple'
                  clickFunc={() => {
                    console.log(`Action: ${action} for ${id}`)
                  }}
                >
                  {action}
                </Text>
              </TableCell>
            </TableRow>
          )
        })}
      </TableLayout>
    </div>
  )
}
