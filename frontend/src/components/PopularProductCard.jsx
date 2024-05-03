import {star} from "../assets/icons"
const PopularProductCard = ({imgURL, name, price , rating}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full group">
        <img 
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px] transition-transform duration-300 hover:scale-110"
        />
        <div className="mt-8 flex justify-start gap-2.5 ">
            <img 
            src={star}
            alt="rating"
            width={24}
            height={24}
            />
            <p className="font-serif tracking-wider text-xl leading-normal text-slate-gray">{rating}</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin group-hover:underline">{name}</h3>
        <p className="mt-2 font-semibold font-serif tracking-wider text-2xl text-slate-gray leading-normal ">{"$" + price/100}</p>
    </div>
  )
}

export default PopularProductCard