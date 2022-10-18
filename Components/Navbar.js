import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {MdOutlineShoppingCart} from 'react-icons/md'
const Navbar = () => {
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
            <Link href={"/"}><a><li>Hoodies</li></a></Link>
            <Link href={"/"}><a><li>Stickers</li></a></Link>
            <Link href={"/"}><a><li>Mugs</li></a></Link>
        </ul>
    </div>
    <div className='cart absolute top-2 right-0 mx-5'>
       <MdOutlineShoppingCart className='text-xl md:text-3xl'/>
    </div>
   </div>
  )
} 


export default Navbar