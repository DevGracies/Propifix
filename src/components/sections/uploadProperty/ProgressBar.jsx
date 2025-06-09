'use client'

import { TABLABELS } from '@/lib/constants'
import React from 'react'

export const ProgressTabs = ({ activeTab, setActiveTab }) => {
  // Tab labels

  // Constants for consistent styling
  const COLORS = {
    active: 'bg-thick-purple',
    activeText: 'text-white',
    activeBorder: 'border-thick-purple',
    activeLabel: 'text-thick-purple',
    inactive: 'bg-[#D8D8D8]',
    inactiveText: 'text-black',
    inactiveBorder: 'border-[#D8D8D8]',
    inactiveLabel: 'text-black',
    activeBg: 'bg-blue-50',
    inactiveBg: 'bg-white',
  }

  const CircleNumber = ({ number, isActive }) => (
    <span
      className={`
        absolute w-14 h-[3.5rem] rounded-full flex items-center justify-center 
        text-xl font-bold transition-all duration-500
        ${
          isActive
            ? `${COLORS.active} ${COLORS.activeText}`
            : `${COLORS.inactive} ${COLORS.inactiveText}`
        }
      `}
      style={
        number === 1
          ? { right: '0.1rem' }
          : number === 3
          ? { left: '0.1rem' }
          : {}
      }
    >
      {number}
    </span>
  )

  // Label component for each tab
  const TabLabel = ({ number, isActive }) => (
    <div
      className={`
      absolute bottom-0 top-[4rem] text-center text-[18px] font-[500] mt-2 whitespace-nowrap transition-colors duration-500
      ${isActive ? COLORS.activeLabel : COLORS.inactiveLabel}
    `}
    >
      {TABLABELS[number]}
    </div>
  )

  // Helper to determine if a tab should be marked as active
  const isActive = (tabNumber) => activeTab >= tabNumber

  // Helper to determine if a tab is the current active tab
  const isCurrent = (tabNumber) => activeTab === tabNumber

  return (
    <div className='flex flex-col items-center justify-center w-full pb-8'>
      <div className='flex items-center justify-between w-full max-w-4xl'>
        {/* Tab 1 - Right half circle */}
        <div className='relative flex flex-col items-center relative'>
          <div className='w-16 h-16 relative'>
            <div
              onClick={() => setActiveTab(1)}
              className={`
                absolute right-0 w-8 h-16 
                border-r-3 border-t-3 border-b-3 rounded-r-full
                transition-all duration-500 ease-in-out cursor-pointer
                flex items-center justify-end p-2
                ${
                  isActive(1)
                    ? `${COLORS.activeBorder}`
                    : `${COLORS.inactiveBorder}`
                }
                ${isCurrent(1) ? 'z-20' : 'z-10'}
              `}
            >
              <CircleNumber number={1} isActive={isActive(1)} />
            </div>
          </div>
          <TabLabel number={1} isActive={isActive(1)} />
        </div>

        {/* Connector 1-2 */}
        <div
          className={`
            h-1 w-full transition-colors duration-500
            ${isActive(1) ? COLORS.active : COLORS.inactive}
          `}
        />

        {/* Tab 2 - Split circle with vertical gap */}
        <div className='relative flex flex-col items-center relative'>
          <div className='w-16 h-16 relative'>
            {/* Left half of circle */}
            <div
              onClick={() => setActiveTab(2)}
              className={`
                absolute left-0 w-8 h-16 
                border-l-3 border-t-3 border-b-3 rounded-l-full
                transition-all duration-500 ease-in-out cursor-pointer
                flex items-center justify-start
                ${COLORS.inactiveBg}
                ${activeTab >= 2 ? COLORS.activeBorder : COLORS.inactiveBorder}
                ${isCurrent(2) ? 'z-20 border-thick-purple' : 'z-10'}
              `}
            />

            {/* Right half of circle */}
            <div
              onClick={() => setActiveTab(2)}
              className={`
                absolute right-0 w-8 h-16 
                border-r-3 border-t-3 border-b-3 rounded-r-full
                transition-all duration-500 ease-in-out cursor-pointer
                flex items-center justify-end
                ${COLORS.inactiveBg} z-10
                ${activeTab >= 2 ? COLORS.activeBorder : COLORS.inactiveBorder}
                }
              `}
            />

            {/* Number 2 (centered) */}
            <div
              className='absolute inset-0 flex items-center justify-center cursor-pointer z-30'
              onClick={() => setActiveTab(2)}
            >
              <CircleNumber number={2} isActive={isActive(2)} />
            </div>

            {/* Vertical gap line - top portion */}
            <div
              className={`
                absolute left-1/2 transform -translate-x-1/2 top-0 h-1 w-2
                transition-colors duration-500 z-40
                ${isActive(2) ? COLORS.activeBg : COLORS.inactiveBg}
              `}
            />

            {/* Vertical gap line - bottom portion */}
            <div
              className={`
                absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-2 
                transition-colors duration-500 z-40
                ${isActive(2) ? COLORS.activeBg : COLORS.inactiveBg}
              `}
            />
          </div>
          <TabLabel number={2} isActive={isActive(2)} />
        </div>

        {/* Connector 2-3 */}
        <div
          className={`
            h-1 w-full transition-colors duration-500 z-0
            ${isActive(3) ? COLORS.active : COLORS.inactive}
          `}
        />

        {/* Tab 3 - Left half circle */}
        <div className='relative flex flex-col items-center relative'>
          <div className='w-16 h-16 relative'>
            <div
              onClick={() => setActiveTab(3)}
              className={`
                absolute left-0 w-8 h-16 
                border-l-3 border-t-3 border-b-3 rounded-l-full
                transition-all duration-500 ease-in-out cursor-pointer
                flex items-center justify-start
                ${
                  isActive(3)
                    ? `${COLORS.activeBorder} ${COLORS.activeBg}`
                    : `${COLORS.inactiveBorder} ${COLORS.inactiveBg}`
                }
                
              `}
            >
              <CircleNumber number={3} isActive={isActive(3)} />
            </div>
          </div>
          <TabLabel number={3} isActive={isActive(3)} />
        </div>
      </div>
    </div>
  )
}
