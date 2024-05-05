import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Counter from "./Counter";
import Button from "./Button";
import { useAddToCart, useCart } from "./CartContext";
import { getCart, createCart, updateCart } from "../constants/cartApi";

const Form = ({ id }) => {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const { cartProducts } = useCart();
  const addToCart = useAddToCart();

  const userId = "2";

  const cart = {
    id: id,
    quantity: quantity,
    message: message,
  };

  const processCart = async () => {
    try {
      const response = await getCart({ userId });
      if (response.length > 0) {
        const res = await updateCart({ userId, cartProducts });
      } else {
        const res = await createCart({ userId, cartProducts });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    processCart();
    console.log(cartProducts);
  }, [cartProducts]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    addToCart(cart);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="mt-6 font-bold font-palanquin text-2xl capitalize lg:max-w-lg">
        Quantity
      </h3>

      <Counter quantity={quantity} setQuantity={setQuantity} />

      <div className="mt-6 font-bold font-palanquin capitalize lg:max-w-lg">
        <span className=" text-2xl ">Message</span>
        <span className="text-[14px] text-slate-gray font-serif ">
          {" "}
          (Optional)
        </span>
      </div>

      <textarea
        className="mt-2 appearance-none border rounded w-[90%] py-2 px-3 text-gray-700 font-serif  leading-normal focus:outline-none focus:shadow-outline"
        id="message"
        rows="4"
        placeholder="Enter your text here"
        onChange={handleChange}
        value={message}
      ></textarea>

      <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Add to Cart" type="submit" />
      </div>
    </form>
  );
};

export default Form;
