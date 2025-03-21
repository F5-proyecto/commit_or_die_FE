import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import HomeIcon from "../assets/img/home-icon.svg";
import NavButton from "./NavButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Recursos",
      path: "#",
      dropdown: [
        { name: "FrontEnd", path: "/services/front-end" },
        { name: "BackEnd", path: "/services/back-end" },
        { name: "Testing", path: "/services/testing" },
      ],
    },
    { name: "Contacto", path: "/contacto" },
    { name: "Testimonios", path: "/testimonios" },
    { name: "Sobre Nosotros", path: "/sobre-nosotros" },
  ];

  return (
    <header className="relative flex items-center justify-between p-4 bg-blue-1 text-blue-3 font-afacad border-b-2 border-blue-3">
      <Link
        to="/"
        className="flex items-center space-x-2 transition transform hover:scale-110"
      >
        <img src={HomeIcon} alt="Home" className="w-6 h-6" />
      </Link>

      <button
        className="block md:hidden focus:outline-none"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <nav className="hidden md:flex space-x-6 relative">
        {navItems.map((item) =>
          item.dropdown ? (
            <Dropdown key={item.name} tabs={item} />
          ) : (
            <Link key={item.path} to={item.path} className="hover:underline">
              {item.name}
            </Link>
          )
        )}
      </nav>

      <div className="hidden md:flex space-x-4">
        <NavButton
          to="/login"
          className="border-1 border-blue-3 text-blue-3 text-xs bg-white 
        rounded-md p-2 transition transform hover:scale-110 cursor-pointer"
        >
          Inicia Sesión
        </NavButton>
        <NavButton
          to="/registro"
          className="text-white text-xs bg-blue-3 ç
        rounded-md p-2 transition transform hover:scale-110 cursor-pointer"
        >
          Registro
        </NavButton>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-blue-1 shadow-lg md:hidden z-50">
          <nav className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <div className="font-bold text-xl">{item.name}</div>
                    <div className="flex flex-col pl-4">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="hover:underline text-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="hover:underline text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="flex flex-col space-y-2 p-4 px-6">
            <NavButton
              to="/login"
              className="border border-blue-3 text-blue-3 text-xs bg-white 
    w-full rounded-md p-2 transition transform hover:scale-105"
              onClickCloseMenu={() => setIsMenuOpen(false)}
            >
              Inicia Sesión
            </NavButton>
            <NavButton
              to="/registro"
              className="text-white text-xs bg-blue-3 
    w-full rounded-md p-2 transition transform hover:scale-105"
              onClickCloseMenu={() => setIsMenuOpen(false)}
            >
              Registro
            </NavButton>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
