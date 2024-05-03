import React, { useState } from "react";
import axios from "axios";
import Counter from "./Counter";
import Button from "./Button";

const Form = ({ id }) => {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const cart = {
      id: id,
      quantity: quantity,
      message: message,
    };

    setMessage("")

    try {
        console.log(cart)
    //   const response = await axios.post(
    //     "https://localhost:5001/updateCart",
    //     cart
    //   );
    //   console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
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
