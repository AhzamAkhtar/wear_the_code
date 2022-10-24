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
            {products.map((item)=>{
            return <Link key={item._id} href={`product/${item.slug}`}>
              <div class="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-2">
                <a class="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="m-auto md:mx-0 h-[30vh] md:h-[36vh] block"
                    src={item.img}
                  />
                </a>
                <div class="mt-4 text-center md:text-left">
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    {item.title}
                  </h2>
                  <p class="mt-1">{"₹"+item.price}</p>
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
  return {
    props: {products : JSON.parse(JSON.stringify(products))},
  };
}

export default tshirts;
