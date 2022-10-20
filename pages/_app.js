import { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [cart,setCart] = useState({})
  const [subTotal,setSubTotal] = useState(0)

  useEffect(()=>{
    console.log("yyyy")
    try{
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")))
      }
    }catch(error){
      console.log(error)
      localStorage.clear()
    }     
  })
  const saveCart=(myCart)=>{
    localStorage.setItem("cart",JSON.stringify(myCart))
    let subt = 0
    let keys = Object.keys(myCart)
    for(let i=0; i<keys.length ; i++){
      subt += myCart[keys[i]]["price"] * myCart[keys[i]]["qty "]
    }
    setSubTotal(subt)
  }

  const addToCart=(itemCode,qty,price,name,size,variant)=>{
    let newCart = cart
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else{
      newCart[itemCode] = {qty: 1,price,name,size,variant}
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const removeToCart=(itemCode,qty,price,name,size,variant)=>{
    let newCart = cart
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if(newCart[itemCode].qty<=0){
      delete newCart[itemCode]
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const clearCart=()=>{
    setCart({})
    saveCart({})
  }

  return (<>
  <Navbar  cart={cart} addToCart={addToCart} removeFromCart={removeToCart} subTotal = {subTotal}  clearCart = {clearCart} />
  <Component  cart={cart} addToCart={addToCart} removeFromCart={removeToCart} subTotal = {subTotal} clearCart = {clearCart}  {...pageProps} />
  <Footer/>
  </>)
}

export default MyApp
