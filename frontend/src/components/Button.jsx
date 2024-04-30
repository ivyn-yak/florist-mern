const Button = ({ label, iconURL, fullWidth }) => {
  return (
    <button
      className={`flex font-serif tracking-wider justify-center items-center gap-2 px-7 py-4 border text-lg leading-none bg-pink-100 rounded-full ${
        fullWidth && "w-full"
      } border-gray-100`}
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
