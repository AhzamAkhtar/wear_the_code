import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {MdOutlineShoppingCart,} from 'react-icons/md'
import {AiFillCloseCircle,AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai'
import {BsFillBagCheckFill} from 'react-icons/bs'
const Navbar = () => {
  const toggleCart=()=>{
    if(ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if(!ref.current.classList.contains('translate-c-full')){
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef()
  return (
   <div className='flex flex-col md:flex-row md:justify-start justify-center items-center my-2 shadow-xl'>
    <div className='logo mx-5'>
    <a href='/'><Image src="/vercel.svg" width={50} height={50}
    /></a>
    </div>
    <div className='nav'>
        {/*md:text-xl*/}        
       <ul className='flex items-center space-x-6 font-bold md:text-sm'>
            <Link href={"/tshirts"}><a><li>Tshirts</li></a></Link>
            <Link href={"/hoddies"}><a><li>Hoodies</li></a></Link>
            <Link href={"/sticker"}><a><li>Stickers</li></a></Link>
            <Link href={"/mugs"}><a><li>Mugs</li></a></Link>
        </ul>
    </div>
    <div onClick={toggleCart} className='cursor-pointer cart absolute top-2 right-0 mx-5'>
       <MdOutlineShoppingCart className='text-xl md:text-3xl'/>
    </div>
    <div ref={ref} className='w-72 h-full sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform translate-x-full'>
      <h2 className="text-center  font-bold text-xl">Shopping Cart</h2>
      <span onClick={toggleCart} className='absolute top-5 right-2 cursor-pointer text-2xl text-pink-500'>
        <AiFillCloseCircle/>
      </span>
      <ol className='list-decimal'>
        <li>
        <div className='item flex'>
        <div className='w-2/3'>Tshirt - Wear the code</div>
          <div className='flex items-center justify-center w-1/3'>
          <AiOutlineMinusCircle className='mx-3'/>
          <span className='mx-2'>1</span>
          <AiOutlinePlusCircle/>
          </div>
        </div>
        </li>
        <li>
        <div className='item flex'>
        <div className='w-2/3'>Tshirt - Wear the code</div>
          <div className='flex items-center justify-center w-1/3'>
          <AiOutlineMinusCircle className='mx-3'/>
          <span className='mx-2'>1</span>
          <AiOutlinePlusCircle/>
          </div>
        </div>
        </li>
        <li>
        <div className='item flex'>
        <div className='w-2/3'>Tshirt - Wear the code</div>
          <div className='flex items-center justify-center w-1/3'>
          <AiOutlineMinusCircle className='mx-3'/>
          <span className='mx-2'>1</span>
          <AiOutlinePlusCircle/>
          </div>
        </div>
        </li>
        <li>
        <div className='item flex'>
        <div className='w-2/3 '>Tshirt - Wear the code</div>
          <div className='flex items-center justify-center w-1/3'>
          <AiOutlineMinusCircle className='mx-3'/>
          <span className='mx-2'>1</span>
          <AiOutlinePlusCircle/>
          </div>
        </div>
        </li>
        <li>
        <div className='item flex'>
        <div className='w-2/3 '>Tshirt - Wear the code</div>
          <div className='flex items-center justify-center w-1/3'>
          <AiOutlineMinusCircle className='mx-3'/>
          <span className='mx-2'>1</span>
          <AiOutlinePlusCircle/>
          </div>
        </div>
        </li>
        <li>
        <div className='item flex'>
        <div className='w-2/3'>Tshirt - Wear the code</div>
          <div className='flex items-center justify-center w-1/3'>
          <AiOutlineMinusCircle className='mx-3'/>
          <span className='mx-2'>1</span>
          <AiOutlinePlusCircle/>
          </div>
        </div>
        </li>
      </ol>
      <button className='flex mt-16 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none'><BsFillBagCheckFill className="m-1"/>Checkout</button>
    </div>
   </div>
  )
} 


export default Navbar