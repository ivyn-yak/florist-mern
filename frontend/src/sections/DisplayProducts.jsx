import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5001/flowers");
    setProducts(response.data.data);
    console.log(response);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section id="products" className="max-container max-sm:mt-12 mt-16">
    <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
        Shop All
        </h2>
        <p className=" mt-1 tracking-wider text-slate-gray font-serif">
        Discover everything you need and more in our extensive selection of products, curated for every need and desire.
        </p>
    </div>
    <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
        <ProductCard key={product.name} {...product} />
        ))}
    </div>
    </section>


  );
};

export default DisplayProducts;
