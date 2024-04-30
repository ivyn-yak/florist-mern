const FlowerCard = ({ imgURL, changeBigImg, bigImg }) => {
  const handleClick = () => {
    if (bigImg !== imgURL.bigFlower) {
      changeBigImg(imgURL.bigFlower);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigImg === imgURL ? "border-pink-100" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src="imgURL.thumbnail"
          alt="flower collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default FlowerCard;
