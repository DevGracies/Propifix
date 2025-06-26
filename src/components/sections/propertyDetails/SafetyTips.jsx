import React from 'react'

const tips = [
  'Do not make any inspection fee without seeing the agent and property.',
  'Only pay Rental fee, Sales fee or any upfront payment after you verify the Landlord.',
  'Ensure you chat with the Agent in your area.',
  'The Agent does not represent Propifix and Propifix is not liable for any monetary transaction between you and the Agent.'
]

const SafetyTips = () => (
  <div className="bg-[#E8BEFE99] h-full md:h-[380px] p-10 rounded-lg">
    <h2 className="text-2xl md:text-3xl font-semibold text-[#9D71C6] mb-6">Safety <span className='text-[#5D14AD]'>Tips</span></h2>
    <ul className="list-disc pl-4 text-sm md:text-base space-y-6">
      {tips.map((t,i) => <li key={i}>{t}</li>)}
    </ul>
  </div>
)

export default SafetyTips



