import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Nav from "./components/Nav.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./cart/CartContext.jsx";
import { AuthContextProvider } from "./auth/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <CartContextProvider>
        <Nav />
        <App />
      </CartContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
