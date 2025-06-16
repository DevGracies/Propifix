'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import AnimatedSpinner from '@/components/ui/animated-spinner'

const InspectionPaymentTransferPage = ({
    bankName = 'Access Bank',
    accountNumber = 4983589458,
    beneficiaryName = 'PropiFix',
    amount = 5000
}) => {
  const [copiedField, setCopiedField] = useState(null)

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <div className="min-h-screen mt-24 bg-gray-50 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl text-center font-semibold text-[#9D71C6] mb-8">
            Pay for <span className="text-[#5D14AD]">Inspection</span>
          </h1>
        <div className="bg-white rounded-2xl shadow-sm  p-8 text-center">

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#5D14AD] mb-6">
              Propi<span className="text-black/80 font-medium">Fix</span>
            </h2>
            
            <div className="flex justify-center mb-6">
             <AnimatedSpinner/>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold text-black mb-2">
              WE ARE WAITING FOR YOUR PAYMENT
            </h3>
            <p className="text-[#977CAA] text-sm mb-1">
              Please follow the instructions below and do not refresh or leave this page.
            </p>
            <p className="text-[#977CAA] text-sm">
              Payment confirmation may take up to 2 minutes.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-black mb-6">
              TRANSFER TO THE ACCOUNT BELOW
            </h3>
            
            <div className="space-y-6 text-left">
              <div>
                <p className="text-[#977CAA] text-sm mb-1">Bank Name</p>
                <p className="text-black font-medium">{bankName}</p>
              </div>

              <div>
                <p className="text-[#977CAA] text-sm mb-1">Account Number</p>
                <div className="flex items-center justify-between rounded-lg">
                  <span className="text-black font-mono font-medium">{accountNumber}</span>
                  <Button
                    onClick={() => copyToClipboard({accountNumber}, 'account')}
                    variant="outline"
                    size="sm"
                    className="text-xs bg-[#ECDDF5B2] border-gray-300 hover:bg-[#ECDDF5]"
                  >
                    {copiedField === 'account' ? 'Copied!' : 'Copy Number'}
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-[#977CAA] text-sm mb-1">Beneficiary Name</p>
                <p className="text-black font-medium">{beneficiaryName}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-black mb-4">
              AMOUNT TO TRANSFER
            </h3>
            
            <div className="text-left">
              <p className="text-[#977CAA] text-sm mb-1">Amount to pay</p>
              <div className="flex items-center justify-between rounded-lg">
                <span className="text-black font-semibold text-lg">₦{amount}</span>
                <Button
                  onClick={() => copyToClipboard({amount}, 'amount')}
                  variant="outline"
                  size="sm"
                  className="text-xs bg-[#ECDDF5B2] border-gray-300 hover:bg-[#ECDDF5]"
                >
                  {copiedField === 'amount' ? 'Copied!' : 'Copy Amount'}
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-black font-medium text-sm">
              <strong>N.B:</strong> This screen will be updated after your payment
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-[#977CAA] text-sm">
            <span>This transaction expires in 20 minutes.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InspectionPaymentTransferPage