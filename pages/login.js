
import Link from 'next/link'
import React, { useState } from "react";
import { useRouter } from 'next/router';
import {toast , ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const login = () => {
  const router = useRouter()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handlerChange=(e)=>{
   
     if(e.target.name == 'email'){
      setEmail(e.target.value)
    }
    else if(e.target.name == 'password'){
      setPassword(e.target.value)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {  email, password };
    let res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let responce = await res.json();
    console.log(responce);

    setEmail("");
    setPassword("");
    if(responce.success){
      localStorage.setItem('token',responce.token)
      toast.success("Your Have Successfully Loged In",{
        position : "bottom-left",
        autoClose : 5000,
        hideProgressBar : false,
        closeOnClick : true,
        pauseOnHover : true,
        draggable : true,
        progress : undefined
      })
      setTimeout(()=>{
        router.push('http://localhost:3002')
      },1000)
    }
    else{
      toast.error("Wrong Credentials",{
        position : "bottom-left",
        autoClose : 5000,
        hideProgressBar : false,
        closeOnClick : true,
        pauseOnHover : true,
        draggable : true,
        progress : undefined
      })
    }
  };
  return (
    <div>
    <ToastContainer
    position="bottom-left"
    autoClose = {5000}
    hideProgressBar = {false}
    newestOnTop = {false}
    closeOnClick
    rtl = {false}
    pauseOnFocusLoss
    draggable
    pauseOnHover/>
      <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="w-full max-w-md space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"> Login/Sign In to your account</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        <Link href={"/signup"}><a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 mx-2">Sign Up </a></Link>
      </p>
    </div>
    <form onSubmit={handleSubmit} class="mt-8 space-y-6"  method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div class="-space-y-px rounded-md shadow-sm">
      
        <div>
          <label for="email" class="sr-only">Email address</label>
          <input value={email} onChange={handlerChange} id="email" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input value={password} onChange={handlerChange} id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password"/>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
        </div>

        <div class="text-sm">
          <Link href={"/forgot"}><a  class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a></Link>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default login