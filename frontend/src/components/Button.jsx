const Button = ({ label, iconURL, fullWidth, backgroundColor, textColor, borderColor, onClick }) => {
  return (
    <button
      className={`flex font-serif tracking-wider justify-center items-center gap-2 px-7 py-4 border text-lg leading-none
      ${backgroundColor 
        ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-pink-100  hover:bg-pink-200  hover:border-gray-300  hover: border-2 transition-colors duration-200"
      } rounded-full ${
        fullWidth && "w-full"
      } border-gray-100 transition-transform duration-200 hover:scale-105`}
      onClick={onClick}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5 "
        />
      )}
    </button>
  );
};

export default Button;
