import mongoose from "mongoose";
import { useRouter } from "next/router";
import { useState } from "react";
import Product from "../../modals/Product";

const Post = ({addToCart, product , variants}) => {
  console.log(product)
  console.log(variants)
  const router = useRouter();
  const { slug } = router.query;
  const [pin,setPin] = useState()
  const [service,setService] = useState() 
  const checkServiceAbility= async()=>{
    let pins = await fetch("http://localhost:3000/api/pinCode")
    let pinJson = await pins.json()
    console.log(pinJson)
    if(pinJson.includes(parseInt(pin))){
        setService(true)
    }
    else{
        setService(false)
    }
} 

const onChangePin=(e)=>{
    setPin(e.target.value)
}
const [color,setColor] = useState(product.color)
const [size,setSize] = useState(product.size)
const refreshVariants=(newsize , newcolor)=>{
  let url = `http://localhost:3000/product/${variants[newcolor][newsize]['slug']}`
  window.location = url
}
  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-16 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded"
              src={product.img}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div> 
              <p class="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.  
              </p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div class="flex">
                  <span class="mr-3">Color</span>
                  {Object.keys(variants).includes("red") && Object.keys(variants["red"]).includes(size) && <button onClick={()=>{refreshVariants(size , "red")}}  class={`border-2   bg-red-500 rounded-full w-6 h-6  ${color=="red"?'border-black':'border-gray-300'}`}></button>}
                  {Object.keys(variants).includes("yellow") && Object.keys(variants["yellow"]).includes(size) && <button onClick={()=>{refreshVariants(size , "yellow")}}  class={`border-2  bg-yellow-500 rounded-full w-6 h-6  ${color=="yellow"?'border-black':'border-gray-300'}`}></button>}
                  {Object.keys(variants).includes("orange") && Object.keys(variants["orange"]).includes(size) && <button onClick={()=>{refreshVariants(size , "orange")}}  class={`border-2  bg-orange-500 rounded-full w-6 h-6  ${color=="orange"?'border-black':'border-gray-300'}`}></button>}
                  {Object.keys(variants).includes("pink") && Object.keys(variants["pink"]).includes(size) && <button onClick={()=>{refreshVariants(size , "pink")}}  class={`border-2  bg-pink-500 rounded-full w-6 h-6  ${color=="pink"?'border-black':'border-gray-300'}`}></button>}
                  {Object.keys(variants).includes("blue") && Object.keys(variants["blue"]).includes(size) && <button onClick={()=>{refreshVariants(size , "blue")}}  class={`border-2  bg-blue-500 rounded-full w-6 h-6  ${color=="blue"?'border-black':'border-gray-300'}`}></button>}
                  {Object.keys(variants).includes("green") && Object.keys(variants["green"]).includes(size) && <button onClick={()=>{refreshVariants(size , "green")}}  class={`border-2  bg-green-500 rounded-full w-6 h-6  ${color=="green"?'border-black':'border-gray-300'}`}></button>}
                </div>
                <div class="flex ml-6 items-center">
                  <span class="mr-3">Size</span>
                  <div class="relative">
                    <select value={size} onChange={(e)=>{refreshVariants(e.target.value,color)}} class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      {Object.keys(variants[color]).includes("S") && <option value={"S"}>S</option>}
                      {Object.keys(variants[color]).includes("M") && <option value={"M"}>M</option>}
                      {Object.keys(variants[color]).includes("L") && <option value={"L"}>L</option>}
                      {Object.keys(variants[color]).includes("XL") && <option value={"XL"}>XL</option>}
                    </select>
                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                 {"₹"+product.price}
                </span>
                <button class="flex ml-8 text-white bg-indigo-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Buy Now
                </button>
                <button onClick={()=>{addToCart(slug,1,499,"Wear The Code","XL","Red")}} class="flex ml-4 text-white bg-indigo-500 border-0 py-2 px-6 md:px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add To Cart
                </button>
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="pin mt-6 flex space-x-2 text-sm">
                <input onChange={onChangePin} className="px-2 border-2 border-gray-400 rounded-md" type="text"/>
                <button onClick={checkServiceAbility} className="flex ml-14 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Check</button>
              </div>
              {(!service && service!=null) && <div className="text-red-700 text-sm mt-3">
              Sorry! We Do Not Deliver To This Pincode yet
              </div>}
              {(service && service!=null) && <div className="text-green-700 text-sm mt-3">
              We Do Deliver To This Pin Code
              </div>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context){
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  }
  let product = await Product.findOne({slug : context.query.slug})
  let variants = await Product.find({title : product.title})
  let colorSizeSlug = {}
  for (let item of variants){
    if(Object.keys(colorSizeSlug).includes(item.color)){
      colorSizeSlug[item.color][item.size] = {slug:item.slug}
    }
    else{
      colorSizeSlug[item.color] = {}
      colorSizeSlug[item.color][item.size] = {slug : item.slug}
    }
  }

  return{
    props : {product:JSON.parse(JSON.stringify(product)),variants : JSON.parse(JSON.stringify(colorSizeSlug))
    }
  }
}

export default Post;
