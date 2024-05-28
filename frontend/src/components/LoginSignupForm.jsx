import React from "react";
import { useState } from "react";
import useLoginSignup from "../hooks/useLoginSignup";
import useLogin from "../hooks/useLogin";
import Button from "./Button";

const LoginSignupForm = ({ type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let link = null

  if (type == "Sign Up") {
    link = "http://localhost:5001/user/signup"
   }
 
   if (type == "Login") {
    link = "http://localhost:5001/user/login"
   }

  const { loginSignup, error, isLoading } = useLoginSignup(link);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    if (type == "Sign Up") {
      await loginSignup(email, password);
    }

    if (type == "Login") {
      await loginSignup(email, password);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md">
        {error && (
          <div className=" bg-red-100 text-red-600 w-full px-3 py-2 border rounded border-red-600">
            {error}
          </div>
        )}
        <form className=" mt-6 bg-stone-100 p-8 rounded-lg shadow-lg w-full">
          <h2 className="text-3xl font-bold mb-6">{type}</h2>

          <div className="mb-4 ">
            <label className="block text-md font-bold mb-2">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full px-3 py-2 border rounded border-gray-200"
            />
          </div>

          <div className="mb-4">
            <label className="block text-md font-bold mb-2">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full px-3 py-2 border rounded border-gray-200"
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button
              label={type}
              type="submit"
              onClick={handleSubmit}
              isLoading={isLoading}
              fullWidth={200}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignupForm;
