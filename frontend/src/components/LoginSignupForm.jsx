import React from "react";
import { useState } from "react";
import Button from "./Button";

const LoginSignupForm = ({type}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (

    <div className="flex justify-center items-center min-h-screen">
      <form className=" bg-stone-100 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6">{type}</h2>

        <div className="mb-4 ">
          <label
            className="block text-md font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full px-3 py-2 border rounded border-gray-200"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-md font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full px-3 py-2 border rounded border-gray-200"
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button label={type} type="submit" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default LoginSignupForm;
