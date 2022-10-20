import React from 'react'

const checkout = () => {
  return (
    <div className='container m-auto`'>
      <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
      <h2>1. Delivery Details</h2>
      <div className='px-2 w-1/2'>
        <div className=' mb-4'>
          <label htmlFor='email' className='leading-7 text-sm text=gray-600'>Email</label>
          <input type="email" id="email" name="email" className='w-full border-gray-300 focus:border-indigo-500 focus:ring-2 py-1 px-3'/> 
        </div>
      </div>
    </div>
  )
}

export default checkout