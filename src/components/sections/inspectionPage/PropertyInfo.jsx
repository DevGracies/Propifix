'use client'

import React from 'react'

const PropertyInfo = ({
  name,
  location,
  agent,
  inspectionDate,
  inspectionTime,
  fee,
}) => {
  return (
    <div className='shadow rounded-xl p-6 space-y-4 text-sm w-full'>
      <div>
        <strong>Property Name</strong>
        <p>{name}</p>
      </div>
      <div>
        <strong>Location</strong>
        <p>{location}</p>
      </div>
      <div>
        <strong>Agent Name</strong>
        <p>{agent}</p>
      </div>
      <div>
        <strong>Inspection Date & Time</strong>
        <p>
          {inspectionDate} | {inspectionTime}
        </p>
      </div>
      <div>
        <strong>Inspection Fee</strong>
        <p>{fee}</p>
      </div>
    </div>
  )
}

export default PropertyInfo
