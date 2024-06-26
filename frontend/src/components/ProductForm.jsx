import React, { useState } from "react";
import Counter from "./Counter";
import Button from "./Button";
import { useCartContext } from "../cart/useCartContext";
import {useAuthContext} from "../auth/useAuthContext";
import { getCart, updateCart, createCart } from "../constants/cartApi";

const Form = ({ id }) => {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const { cart, dispatch } = useCartContext();
  const {user} = useAuthContext();
  const userId = user?.id

  const item = {
    id: id,
    quantity: quantity,
    message: message,
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const processCart = async (newCart) => {
    try {
      const response = await getCart({ userId });

      console.log(userId, newCart)

      if (response.length > 0) {
        const res = await updateCart({ userId, newCart });
      } else {
        const res = await createCart({ userId, newCart });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setQuantity(1)

    const newCart = [...cart, item];

    dispatch({ type: "ADD", payload: item });
    localStorage.setItem("cart", JSON.stringify(newCart))

    processCart(newCart)
    
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
