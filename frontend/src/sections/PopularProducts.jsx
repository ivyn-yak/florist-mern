import React, { useEffect, useState } from "react";
import axios from "axios";
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
  const [popProducts, setPopProducts] = useState([]);

  const getPopProducts = async() => {
    const response = await axios.get("http://localhost:5001/flowers")
    setPopProducts(response.data.data)
    console.log(response)
  }

  useEffect(()=> {
    getPopProducts()
  }, [])

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Popular Products</h2>
        <p className="lg:max-w-lg mt-2 tracking-wider text-slate-gray font-serif">Discover our most sought-after products.</p>
      </div>
      <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {popProducts.map((product) => (
          <PopularProductCard 
          key={product.name}
          {...product}
          />
        ))}
      </div>

    </section>
  )
}

export default PopularProducts