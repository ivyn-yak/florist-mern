import React, { useEffect, useState } from "react";
import axios from "axios";
import FlowerCard from "./FlowerCard";
// import { Link } from "react-router-dom";

const GetFlowers = () => {
  const [flowers, setFlowers] = useState([]);
  // const [loading, setLoading] = useState([false]);

  const getFlowers = async() => {
    const response = await axios.get("http://localhost:5001/flowers")
    setFlowers(response.data.data)
    console.log(response)
    console.log(flowers)
  }

  useEffect(()=> {
    getFlowers()
  }, [])

  return (
    <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
      {flowers.map((flower) => (
        <div key={flower._id}>
          <FlowerCard 
          imgURL = {flower}
          changeBigImg = {() => {}}
          bigImg = ""
          />
        </div>
      ))}
    </div>
  );
};

export default GetFlowers;
