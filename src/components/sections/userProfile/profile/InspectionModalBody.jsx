'use client'

import { Text } from '@/components/shared/Text'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { ModalWrapper } from '@/components/custom-ui/Modal'
import {
  ActiveInspectionStatusSvg,
  InactiveInspectionStatusSvg,
} from '@/components/svg'

const Card = ({ title, value }) => (
  <div className='flex gap-2 text-[16px]'>
    <Text style='font-[500]'>{title}</Text>
    <Text style='font-[400] text-neutral-grey'>{value}</Text>
  </div>
)

const StatusItem = ({ status, active, isLast }) => {
    return (
      <div className='flex gap-1 relative items-start'>
        {/* Vertical line container */}
        <div className='flex flex-col items-center w-fit gap-0 pe-4 '>
          {/* Status icon */}
          <div className='z-10'>
            {active ? (
              <ActiveInspectionStatusSvg />
            ) : (
              <InactiveInspectionStatusSvg />
            )}
          </div>
  
          {/* Bottom connecting line */}
          {!isLast && (
            <div
              className={`w-0.5 h-10 transition-colors duration-1000 ${ 
                active ? 'bg-thick-purple' : 'bg-none'
              }`}
            />
          )}
        </div>
  
        {/* Status text */}
        <div>
          <Text
            style={`font-[400] ${active ? 'text-thick-purple' : 'text-neutral-grey'} transition-colors duration-1000`}
          >
            {status}
          </Text>
        </div>
      </div>
    )
  }

export const InspectionModalBody = () => {
  const [inspectionStatusIsOpen, setInspectionModal] = useState(false)
  const currentStatus='Pending Confirmation' // Default status

  const data = [
    {
      title: 'ID:',
      value: '123ABC',
    },
    {
      title: 'Property:',
      value: '2-bedroom apartment',
    },
    {
      title: 'User:',
      value: 'Grace Olori',
    },
    {
      title: 'Agent:',
      value: 'Olori Grace',
    },
    {
      title: 'Date:',
      value: 'March 1, 2025',
    },
    {
      title: 'Status:',
      value: currentStatus,
    },
  ]

  const statuses = [
    'Pending Confirmation',
    'Scheduled',
    'In progress',
    'Completed',
    'Cancelled',
  ]

  return (
    <div>
      <div className='flex flex-col gap-2'>
        {data.map((info, index) => (
          <Card key={index} title={info.title} value={info.value} />
        ))}
      </div>
      <div className='mt-6'>
        <Button
          onClick={() => setInspectionModal(true)}
          className='cursor-pointer flex items-center w-[90px] h-[30px] rounded bg_linear-purple font-[400] text-sm'
        >
          View Status
        </Button>
      </div>

      <ModalWrapper
        title='Inspection Status'
        open={inspectionStatusIsOpen}
        setOpen={setInspectionModal}
      >
          <div className='flex flex-col mt-4'>
            {statuses.map((status, index) => {
              const active = status === currentStatus
              const isLast = index === statuses.length - 1

              return (
                <StatusItem
                  key={status}
                  status={status}
                  active={active}
                  isLast={isLast}
                />
              )
            })}
          </div>
      </ModalWrapper>
    </div>
  )
}
