'use client'

import Image from "next/image"
import Link from "next/link"

const InspectionPaymentCompletedPage = ({}) => {

  return (
    <div className="min-h-screen mt-24 bg-gray-50 px-4 py-8">
      <div className="w-full mx-auto">
        <div className=" p-8 text-center">
          <h1 className="text-2xl font-semibold text-[#9D71C6] mb-8">
            Pay for <span className="text-[#5D14AD]">Inspection</span>
          </h1>

          <div className="flex flex-col justify-center bg-white h-full md:h-[500px] mb-8 rounded-2xl shadow-sm ">
            <h2 className="text-3xl font-bold text-[#5D14AD] mb-6">
              Propi<span className="text-black/80 font-medium">Fix</span>
            </h2>

            <h3 className="text-[#253058] text-lg mb-4">Payment was successfully completed. <br/> Thank you!</h3>
            
            <div className="flex justify-center mb-6">
             <Image
             src={'/images/green-check-celebration.svg'}
             alt="success"
             width={200}
             height={200}
             />
            </div>

            <div className="text-[#7C87AA] space-x-5 mt-10 py-4">
                <Link href={'/'}>HomePage</Link>
                <Link href={'/'}>My Orders</Link>
                <Link href={'/'}>Profile</Link>
            </div>

          </div>      
        </div>
      </div>
    </div>
  )
}

export default InspectionPaymentCompletedPage