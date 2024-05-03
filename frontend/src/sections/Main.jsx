import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { stats } from "../constants";
import { bigFlower1 } from "../assets/images";
import FlowerCard from "../components/FlowerCard"
import { mainFlowers } from "../constants";

const Main = () => {
  const [bigFlowerImg, setBigFlowerImg] = useState(bigFlower1);

  // const getFlowers = async() => {
  //   const response = await axios.get("http://localhost:5001/flowers")
  //   setFlowers(response.data.data)
  //   console.log(response)
  //   console.log(flowers)
  // }

  // useEffect(()=> {
  //   getFlowers()
  // }, [])

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-serif text-lime-500 tracking-wider">
          Our Summer Flowers
        </p>
        <h1 className="mt-10 font-palanquin text-[75px] leading-[100px] max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The Freshest Flowers
          </span>
          <br />
          <span className="inline-block mt-3">In Store</span>
        </h1>
        <p className="font-serif text-slate-gray tracking-wider text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Customise your bouquet of flowers for every occasion.
        </p>

        <Button label="Shop Now" iconURL={arrowRight}></Button>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold ">{stat.value}</p>
              <p className="leading-7 font-serif text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigFlowerImg}
          alt="shoe collection"
          width={470}
          height={450}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {mainFlowers.map((flower) => (
            <div key={flower.thumbnail}>
              <FlowerCard imgURL={flower} changeBigFlowerImg={(flower) => setBigFlowerImg(flower)} bigFlowerImg={bigFlowerImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
