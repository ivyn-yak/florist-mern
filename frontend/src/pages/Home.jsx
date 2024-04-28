import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5001/flowers")
      .then((response) => {
        setFlowers(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (<div className="p-4">
    <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold underline">Flowers</h1>
        <Link to="/flowers/create">
        </Link>
    </div>
  </div>);
};

export default Home;
