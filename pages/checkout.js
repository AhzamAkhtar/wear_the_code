import React from 'react'
import{AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai'
import {BsFillBagCheckFill} from 'react-icons/bs'
import Link  from 'next/link'
const checkout = ({cart,subTotal,addToCart,removeFromCart}) => {
  return (
    <div className='container m-auto`'>
      <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
      <h2>1. Delivery Details</h2>
      <div className='mx-auto flex'>
        <div className='px-2 w-1/2'>
        <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
        </div>
        <div className='px-2 w-1/2'>
        <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
        </div>
      </div>
      <div className='px-2 full'>
        <div class="relative mb-4">
        <label for="address" class="leading-7 text-sm text-gray-600">Address</label>
        <textarea type="text" id="address" name="address" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
        </div>
        <div className='mx-auto flex'>
        <div className='px-2 w-1/2'>
        <div class="relative mb-4">
        <label for="phone" class="leading-7 text-sm text-gray-600">Phone</label>
        <input type="text" id="phone" name="phone" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
        </div>
        <div className='px-2 w-1/2'>
        <div class="relative mb-4">
        <label for="city" class="leading-7 text-sm text-gray-600">City</label>
        <input type="text" id="city" name="city" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
        </div>
      </div>
      <div className='mx-auto flex'>
        <div className='px-2 w-1/2'>
        <div class="relative mb-4">
        <label for="state" class="leading-7 text-sm text-gray-600">State</label>
        <input type="text" id="state" name="state" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
        </div>
        <div className='px-2 w-1/2'>
        <div class="relative mb-4">
        <label for="pincode" class="leading-7 text-sm text-gray-600">PinCode</label>
        <input type="text" id="pincode" name="pincode" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
        </div>
      </div>

      <h2>2.Review Cart</h2>

      <div className='sideCart  bg-pink-100 px-8 py-10  '>
      <h2 className="text-center  font-bold text-xl">Shopping Cart</h2>
    
      <ol className='list-decimal'>
      {Object.keys(cart).length==0 && <div className='my-4'>No Item In Your Cart</div>}
        {Object.keys(cart).map((k)=>{return <li key={k}>
        <div className='item flex'>
        <div className='w-2/3'>{cart[k].name}</div>
          <div className='flex items-center justify-center w-1/3'>
          <AiOutlineMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className='mx-3'/>
          <span className='mx-2'>{cart[k].qty}</span>
          <AiOutlinePlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}/>
          </div>
        </div>
        </li>
        })}
      </ol>
      <span className='total'>SubTotal : {subTotal}</span>
    </div>
    <div className='mx-4'>
    <Link href="/checkout"><button className='flex mt-16 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none'><BsFillBagCheckFill className="m-1"/>Pay ₹ {subTotal}</button></Link>
    </div>
    </div>
  )
}

export default checkout