import React, { useEffect, useState } from "react";
import { getCart } from "../constants/cartApi";
import Table from "../components/Table";
// import { useCart } from "../cart/CartContext";
import { useCartContext } from "../cart/useCartContext";

const DisplayCart = () => {
  // const [cart, setCart] = useState([]);

  // const {userId} = useCart();

  // const getUserCart = async ({ userId }) => {
  //   const response = await getCart({ userId });

  //   if (response.length != 0) {
  //     setCart(response[0].cart);
  //     console.log(response[0].cart);
  //   }
  // };

  // useEffect(() => {
  //   getUserCart({ userId });
  // }, []);

  const {cart} = useCartContext()

  return (
    <section className="max-container mx-auto px-4 mt-16">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-8">
        <div className=" rounded-xl bg-stone-100 p-[30px] col-span-3">
          <h2 className="font-palanquin text-3xl capitalize font-bold lg:max-w-lg">
            Cart
          </h2>
          <p
            className={`font-palanquin text-xl capitalize font-semibold lg:max-w-lg mt-3 ${
               cart.length == 0 ? "" : "hidden"
            }`}
          >
            Your Cart is empty!
          </p>
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
