import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";

const Flower = ({ flowerId }) => {
  const [flower, setFlower] = useState([]);

  const getFlower = async () => {
    const response = await axios.get(
      `http://localhost:5001/flowers/${flowerId}`
    );
    setFlower(response.data.flower);
    console.log(response);
  };

  useEffect(() => {
    getFlower();
  }, []);

  return (
    <section className="flex justify-wrap items-center max-xl:flex-col gap-24 max-container mt-16">
      <div className="flex flex-1 justify-center items-center bg-center bg-cover rounded-xl max-sm:p-4 bg-stone-100">
        <img
          src={flower.imgURL}
          width={730}
          height={660}
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          {flower.name}
        </h2>
        <p className="mt-2 font-semibold font-serif tracking-wider text-3xl text-slate-gray leading-normal ">
          {"$" + flower.price / 100}
        </p>

        <ProductForm id={flower._id}/>
      </div>
    </section>
  );
};

export default Flower;
