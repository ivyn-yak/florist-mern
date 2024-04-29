import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index.js";

const Nav = () => {
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
              <a
                href={item.href}
                className=" leading-normal text-lg text-slate-gray font-serif tracking-wider hover:underline "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#login"
          className=" max-xl:hidden leading-normal text-lg text-slate-800 font-serif tracking-wider hover:underline "
        >
          Login / Sign In
        </a>

        <div className="hidden max-lg:block ">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
