import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {MdOutlineShoppingCart,MdOutlineAccountCircle} from 'react-icons/md'
import {AiFillCloseCircle,AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai'
import {BsFillBagCheckFill} from 'react-icons/bs'
const Navbar = ({ user ,cart , addToCart, removeFromCart , clearCart , subTotal}) => {
  console.log(cart , addToCart, removeFromCart , clearCart , subTotal)
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
  const [dropdown , setDropdown] = useState(false)
  
  const ref = useRef()
  return (
   <div className='flex flex-col md:flex-row md:justify-start justify-center items-center my-2 shadow-xl'>
    <div className='logo mr-auto md:mx-5'>
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
    <div  className='cursor-pointer cart absolute  right-0 mx-5 flex'>
    <a onMouseOver={()=>setDropdown(true)} onMouseLeave={()=> setDropdown(false)} >
    {dropdown && <div className='absolute right-8 bg-pink-300 top-6 rounded-md px-5 w-36'>
      <ul>
        <Link href=""><a><li className='py-1 hover:text-pink-400 text-sm'>My Account</li> </a></Link>
        <Link href=""><a><li className='py-1 hover:text-pink-400 text-sm'>Orders</li></a></Link>
        <Link href=""><a><li className='py-1 hover:text-pink-400 text-sm'>Logout</li></a></Link>
        
      </ul>
    </div>}
    {user.value && 
    <Link href={"/login"}><MdOutlineAccountCircle  className='text-xl md:text-3xl mx-2' /></Link>}</a>
    {!user.value && <Link href={'/login'}><a>
      <button className='bg-blue-500 px-2 py-1 rounded-md text-sm text-white mx-2'>Login</button>
    </a></Link>}
       <MdOutlineShoppingCart onClick={toggleCart} className='text-xl md:text-3xl items-center'/>
    </div>
    <div ref={ref} className={`w-72 h-full sideCart fixed top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform 
    
    ${Object.keys(cart).length!=0 ? 'translate-x-0' : 'translate-x-full'}`}>
      <h2 className="text-center  font-bold text-xl">Shopping Cart</h2>
      <span onClick={toggleCart} className='absolute top-5 right-2 cursor-pointer text-2xl text-pink-500'>
        <AiFillCloseCircle/>
      </span>
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
      <div className='my-3'>SubTotal : ??? {subTotal}</div>
      <Link href="/checkout"><button className='flex mt-16 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none'><BsFillBagCheckFill className="m-1"/>Checkout</button></Link>
      <button onClick={clearCart} className='flex mt-16 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none'>Clear Cart</button>
      
    </div>
   </div>
  )
} 


export default Navbar