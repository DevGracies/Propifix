import React from 'react'
import { FileText } from 'lucide-react'

const PaymentSummary = ({
    propertyName = "4-Bedroom Semi-Detached Duplex",
    location = "Chevron, Lekki, Lagos.",
    agent = "Grace Olori",
    inspectionFee = "5,000",
    paymentMethod = "Debit Card",
    totalAmount = "5,000"
}) => {
  return (
    <div className="bg-[#E8D5F2] rounded-2xl p-6 max-w-sm mx-auto relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#7C3AED] rounded-b-full"></div>
      
      <div className="pt-4 pb-6">
        <h2 className="text-md text-center md:text-lg font-semibold text-gray-800">Payment Summary</h2>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex justify-start items-center">
          <span className="w-1/2 text-gray-500 text-sm">Property Name</span>
          <span className="w-1/2 text-gray-800 font-medium text-xs md:text-sm max-w-[180px]">
            {propertyName}
          </span>
        </div>
        
        <div className="flex justify-start items-center">
          <span className="w-1/2 text-gray-500 text-sm">Location</span>
          <span className="w-1/2 text-gray-800 font-medium text-xs md:text-sm max-w-[180px]">
            {location}
          </span>
        </div>
        
        <div className="flex justify-start items-center">
          <span className="w-1/2 text-gray-500 text-sm">Agent Name</span>
          <span className="w-1/2 text-gray-800 font-medium text-xs md:text-sm max-w-[180px]">
            {agent}
          </span>
        </div>
        
        <div className="flex justify-start items-center">
          <span className="w-1/2 text-gray-500 text-sm">Inspection Fee</span>
          <span className="w-1/2 text-gray-800 font-medium text-xs md:text-sm max-w-[180px]">
            ₦{inspectionFee}.00
          </span>
        </div>
        
        <div className="flex justify-start items-center">
          <span className="w-1/2 text-gray-500 text-sm">Payment Method</span>
          <span className="w-1/2 text-gray-800 font-medium text-xs md:text-sm max-w-[180px]">
            {paymentMethod}
          </span>
        </div>
      </div>

      <div className="border-b border-dashed border-gray-400 mb-6"></div>

      <div className="flex justify-between items-center gap-2">
        <div>
          <p className="text-gray-500 text-xs md:text-sm mb-1">Total Amount to be Paid</p>
          <p className="text-lg md:text-2xl font-bold text-gray-900">
            ₦ {totalAmount}<span className="text-base">.00</span>
          </p>
        </div>
        
        <div className="bg-[#9B7CB8] rounded-lg p-3">
          <FileText className="w-3 h-3 md:w-6 md:h-6 text-white" />
        </div>
      </div>
    </div>
  )
}

export default PaymentSummary