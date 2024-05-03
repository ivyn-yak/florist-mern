import { star } from "../assets/icons";
import { Link } from "react-router-dom";

const ProductCard = ({ imgURL, name, price, rating, _id }) => {
  return (
    <Link to={`/flowers/view/${_id}`}>
    <div className="flex flex-1 flex-col w-full max-sm:w-full group">
      <div className="flex justify-center items-center bg-center bg-cover rounded-xl max-sm:p-4 bg-stone-100">
        <img
          src={imgURL}
          alt={name}
          className="w-[260px] h-[260px] transition-transform duration-300 group-hover:scale-[1.08]"
        />
      </div>

      <div className="mt-4 flex justify-start gap-2.5 ">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-serif tracking-wider text-xl leading-normal text-slate-gray">
          {rating}
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin group-hover:underline ">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-serif tracking-wider text-2xl text-slate-gray leading-normal ">
        {"$" + price / 100}
      </p>
    </div>
    </Link>
  );
};

export default ProductCard;
