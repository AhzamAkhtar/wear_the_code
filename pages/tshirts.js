import React from "react";
import Link from "next/link";
import Product from "../modals/Product"
import mongoose from "mongoose";

const tshirts = ({products}) => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {Object.keys(products).map((item)=>{
            return <Link key={products[item]._id} href={`product/${products[item].slug}`}>
              <div class="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-2">
                <a class="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="m-auto md:mx-0 h-[30vh] md:h-[36vh] block"
                    src={products[item].img}
                  />
                </a>
                <div class="mt-4 text-center md:text-left">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    {products[item].title}
                  </h2>
                  <p class="mt-1">{"₹"+products[item].price}</p>
                  <div className="mt-2">
                  {products[item].size.includes("S") && <span className="border border-gray-600 px-1 mx-1">S</span>}
                  {products[item].size.includes("M") && <span className="border border-gray-600 px-1 mx-1">M</span>}
                  {products[item].size.includes("L") && <span className="border border-gray-600 px-1 mx-1">L</span>}
                  {products[item].size.includes("XL") && <span className="border border-gray-600 px-1 mx-1">XL</span>}
                  {products[item].size.includes("XXL") && <span className="border border-gray-600 px-1 mx-1">XXL</span>}
                  </div>
                </div>
                <div className="mt-1">
                  {products[item].color.includes("red") && <button className="border-2 border-gray-300 ml1- bg-red-500 rounded-full 
                  w-6 h-6 focus:outline-none mx-2"/>}
                  {products[item].color.includes("orange") && <button className="border-2 border-gray-300 ml1- bg-orange-500 rounded-full 
                  w-6 h-6 focus:outline-none mx-1 mt-2"/>}
                  {products[item].color.includes("yellow") && <button className="border-2 border-gray-300 ml1- bg-yellow-300 rounded-full 
                  w-6 h-6 focus:outline-none mx-1 mt-2"/>}
                  {products[item].color.includes("pink") && <button className="border-2 border-gray-300 ml1- bg-pink-500 rounded-full 
                  w-6 h-6 focus:outline-none mx-1 mt-2"/>}
                  {products[item].color.includes("blue") && <button className="border-2 border-gray-300 ml1- bg-blue-700 rounded-full 
                  w-6 h-6 focus:outline-none mx-1 mt-2"/>}
                  {products[item].color.includes("green") && <button className="border-2 border-gray-300 ml1- bg-green-700 rounded-full 
                  w-6 h-6 focus:outline-none mx-1 mt-2"/>}
                
                </div>
              </div>
            </Link>})}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
    
  }
  let products = await Product.find();
    let tshirts = {}
    for (let item of products){
        if(item.title in tshirts){
            if(!tshirts[item.title].color.includes(item.color) && item.availableQty > 0){
                tshirts[item.title].color.push(item.color)
            }
            if(!tshirts[item.title].size.includes(item.size)&& item.availableQty>0){
                tshirts[item.title].size.push(item.size)
            }
        }
        else {
            tshirts[item.title] = JSON.parse(JSON.stringify(item))
            if(item.availableQty>0){
                tshirts[item.title].color = [item.color]
                tshirts[item.title].size = [item.size]
            }
        }
    }
  return {
    props: {products : JSON.parse(JSON.stringify(tshirts))},
  };
}

export default tshirts;
