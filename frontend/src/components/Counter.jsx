const Counter = ({quantity, setQuantity}) => {

    const increment = () => {
        setQuantity(prevQty => prevQty + 1);
      };
    
    const decrement = () => {
    if (quantity > 1) {
        setQuantity(prevQty => prevQty - 1);
    }
    };

  return (
    <div className="flex justify-start items-center mt-3">
      <button
        onClick={decrement}
        className="bg-gray-100  text-gray-700 font-bold w-8 h-8 justify-center items-center flex rounded-full focus:outline-none transition duration-300 ease-in-out hover:bg-gray-200"
      >
        -
      </button>
      <span className=" text-gray-800 font-bold py-2 px-5 justify-center items-center flex">
        {quantity}
      </span>
      <button
        onClick={increment}
        className="bg-gray-100  text-gray-700 font-bold w-8 h-8 justify-center items-center flex rounded-full focus:outline-none transition duration-300 ease-in-out hover:bg-gray-200"
      >
        +
      </button>
    </div>
  )
}

export default Counter