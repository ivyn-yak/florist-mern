import React, { useEffect, useState } from "react";
import axios from "axios";

const GetReviews = () => {
    const [reviews, setReviews] = useState([]);

  const getReviews = async() => {
    const response = await axios.get("http://localhost:5001/reviews")
    setReviews(response.data.data)
    console.log(response)
    console.log(reviews)
  }

  useEffect(()=> {
    getReviews()
  }, [])

  
  return (
    <div>
        {reviews.map((review) => (
            <div key={review.customerName} className="flex justify-center items-center flex-col"> 
                <img 
                src={review.imgURL}
                alt={review.customerName}
                className="rounded-full object-cover w-[120px] h-[120px]"
                />
                <p className="mt-6 max-w-sm text-center info-text">{review.feedback}</p>
                <div className="flex mt-3 justify-center items-center gap-2.5">
                    <img 
                    src={star}
                    width={24}
                    height={24}
                    className="m-0 object-contain"
                    />
                    <p className="text-xl font-serif tracking-wider text-slate-gray">{review.rating}</p>
                </div>
                <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{review.customerName}</h3>
            </div>
        ))}
    </div>
  )
}

export default GetReviews