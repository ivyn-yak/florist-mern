import React, { useEffect, useState } from "react";
import { getCart } from "../constants/cartApi";
import Table from "../components/Table";

const DisplayCart = () => {
  const [cart, setCart] = useState([]);

  const userId = "2";

  const getUserCart = async ({ userId }) => {
    const response = await getCart({ userId });

    if (response.length == 0) {
      console.log("cart is empty");
    } else {
      setCart(response[0].cart);
      console.log(response[0].cart);
    }
  };

  useEffect(() => {
    getUserCart({ userId });
  }, []);

  return (
    <section className="max-container mx-auto px-4 mt-16">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-8">
        <div className=" rounded-xl bg-stone-100 p-[30px] col-span-3">
          <h2 className="font-palanquin text-3xl capitalize font-bold lg:max-w-lg">
            Cart
          </h2>
          <Table cart={cart} />
        </div>

        <div className=" rounded-xl bg-stone-100 p-[30px] col-span-2">
          <h2 className="font-palanquin text-3xl capitalize font-bold lg:max-w-lg">
            Add-Ons
          </h2>
        </div>
      </div>
    </section>
  );
};

export default DisplayCart;
