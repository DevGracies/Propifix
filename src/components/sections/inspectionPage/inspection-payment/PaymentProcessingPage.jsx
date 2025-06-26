'use client'
import AnimatedSpinner from "@/components/ui/animated-spinner"

const InspectionPaymentProcessingPage = ({}) => {

  return (
    <div className="min-h-screen mt-16 bg-gray-50 px-4 py-2">
      <div className="w-full mx-auto">
        <div className=" p-8 text-center">
          <h1 className="text-2xl font-semibold text-[#9D71C6] mb-8">
            Pay for <span className="text-[#5D14AD]">Inspection</span>
          </h1>

          <div className="flex flex-col justify-center bg-white h-full md:h-[500px] mb-8 rounded-2xl shadow-lg ">
            <h2 className="text-3xl font-bold text-[#5D14AD] mb-6">
              Propi<span className="text-black/80 font-medium">Fix</span>
            </h2>

            <h3 className="text-[#253058] text-lg mb-10">Your transaction is being processed. Please wait.</h3>
            
            <div className="flex justify-center mb-6">
             <AnimatedSpinner/>
            </div>
          </div>      
        </div>
      </div>
    </div>
  )
}

export default InspectionPaymentProcessingPage