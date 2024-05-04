import React from 'react'
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="leading-normal text-lg text-slate-gray font-serif tracking-wider hover:underline"
    >
      {children}
    </Link>
  );
};
export default NavLink