import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index.js";
import { useCart } from "./CartContext";
import NavLink from "./NavLink";
import { getCart } from "../constants/cartApi";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import Button from "./Button";
import { useAuthContext } from "../auth/useAuthContext";

const Nav = () => {
  const { userId, cartProducts, setCartProducts } = useCart();

  const fetchCartCount = async () => {
    const cart = await getCart({ userId });
    setCartProducts(cart[0].cart);
  };

  useEffect(() => {
    fetchCartCount();

    const interval = setInterval(fetchCartCount, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="flex justify-center items-center">
          <img src={headerLogo} alt="Logo" width={60} height={29} />
          <h1 className=" font-serif text-2xl tracking-widest ">
            Petals & Blooms
          </h1>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <NavLink to={item.href}>{item.label}</NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/cart">Cart ({cartProducts.length})</NavLink>
          </li>
        </ul>

        {user && (
          <div>
            <span>{user.email}</span>
            <Button label={"Logout"} onClick={handleLogout} />
          </div>
        )}

        {!user && (
          <div className="max-xl:hidden leading-normal text-lg text-slate-800 font-serif tracking-wider">
            <Link to="/login" className="hover:underline">
              Login
            </Link>

            <span> / </span>

            <Link to="/signup" className="hover:underline">
              Signup
            </Link>
          </div>
        )}

        <div className="hidden max-lg:block ">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
