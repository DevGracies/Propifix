import React from 'react'

const AnimatedSpinner = () => {
  return (
    <>
      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div className="relative w-24 h-24">
        <div
          className="absolute inset-0"
          style={{ animation: 'spin-slow 3.0s linear infinite' }}
        >
          {[...Array(8)].map((_, i) => {
            const angle = (360 / 8) * i
            const radius = 42
            const x = Math.cos((angle * Math.PI) / 180) * radius
            const y = Math.sin((angle * Math.PI) / 180) * radius
            return (
              <div
                key={i}
                className="absolute w-3 h-3 bg-[#5D14AD] rounded-full"
                style={{
                  top: `calc(50% + ${y}px - 6px)`,
                  left: `calc(50% + ${x}px - 6px)`,
                }}
              />
            )
          })}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-sm shadow-lg rounded-full py-5 px-3 italic font-bold text-[#5D14AD]">
            Propi<span className="text-[#5D14AD]/80 font-medium">Fix</span>
          </h2>
        </div>
      </div>
    </>
  )
}

export default AnimatedSpinner
