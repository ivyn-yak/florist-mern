import { useState } from "react";
import { useAuthContext } from "../auth/useAuthContext";

const useLoginSignup = (link) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const loginSignup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(link, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password}),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    }
  };

  return { loginSignup, isLoading, error };
};

export default useLoginSignup;
