const FlowerCard = ({ imgURL, changeBigFlowerImg, bigFlowerImg }) => {
  const handleClick = () => {
    if (bigFlowerImg !== imgURL.bigFlowerImg) {
      changeBigFlowerImg(imgURL.bigFlowerImg);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigFlowerImg === imgURL.bigFlowerImg
          ? "border-white-400 "
          : "border-transparent"
      } cursor-pointer max-sm:flex-1 transition-transform duration-300 hover:scale-110`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-stone-200  bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="flower collection"
          width={120}
          height={100}
          className="object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default FlowerCard;
