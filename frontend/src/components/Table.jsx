import React, { useEffect, useState } from "react";
import { getFlower } from "../constants/flowerApi";
import Counter from "./Counter";


const Table = ({ cart }) => {
  console.log(cart)
  const [flowers, setFlowers] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const fetchFlowers = async () => {
    const flowerData = await Promise.all(
      cart.map(async (product) => {
        const flower = await getFlower(product.id);
        return { ...product, flower };
      })
    );
    setFlowers(flowerData);
  };

  useEffect(() => {
    fetchFlowers();
  }, [cart]);

  console.log(flowers);

  return (
    <div className={`grid ${cart.length === 0 ? "hidden" : ""}`} >
    <table className="w-full mt-4 text-left grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
      <tr>
        <th className="col-span-3">Product</th>
        <th>Quantity</th>
        <th>Message</th>
        <th>Price</th>
      </tr>
      {flowers.map((flower) => (
        <tr className="text-left justify-start items-center">
          <td>
            <div>
              <div className=" mt-3">
                <img src={flower.flower.imgURL} width={100} height={100} />
              </div>

              <p>{flower.flower.name}</p>
            </div>
          </td>
          <td>
            <Counter quantity={flower.quantity} setQuantity={setQuantity} />
          </td>
          <td>{flower.message}</td>
          <td>{flower.flower.price * flower.quantity}</td>
        </tr>
      ))}
      <tr className=" pt-5 grid-cols-4">
        <th className=" grid-cols-3 justify-end">Total Price</th>
        <th >price</th>
      </tr>

    </table>
    </div>
  );
};

export default Table;
