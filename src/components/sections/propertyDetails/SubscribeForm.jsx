import React from 'react'

const SubscribeForm = () => (
  <div className="p-4 border-[#0193FD] border rounded-lg">
    <h3 className="text-md md:text-lg font-semibold mb-2">Receive alerts for new properties</h3>
    <p className="text-sm md:text-sm text-gray-600 mb-3">Get priority alerts for newly available properties via email to ease your search experience.</p>
    <form className="space-y-2">
      <input 
      type="text" 
      placeholder="Name" 
      className="w-full px-3 py-2 placeholder:italic border border-black rounded-xl"
       />

      <input 
      type="tel" 
      placeholder="Phone number" 
      className="w-full px-3 py-2 placeholder:italic border border-black rounded-xl"
      />

      <div className='flex flex-col md:flex-row items-center gap-2'>
        <input type="email" 
        placeholder="Email address" 
        className="w-full px-3 py-2  placeholder:italic border border-black rounded-xl" 
        />

        <button 
        type="submit" 
        className="w-full bg-gradient-to-r from-[#5D14AD] to-[#9747FF] text-white py-2 rounded-xl mt-2">
            Subscribe
        </button>
      </div>
    </form>
  </div>
)

export default SubscribeForm
