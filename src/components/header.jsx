import "./header.css";
import planetData from "../data.json";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

// import Planets from "./planets";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-center py-4 px-6 bg-header-blue border-b-header-border">
      <h1 className="font-antonio font-normal font-medium text-base leading-9 tracking-tight uppercase text-white	">
        THE PLANETS
      </h1>
      <svg
        className="ml-auto cursor-pointer "
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="17"
        onClick={toggleMenu}
      >
        <g fill="#FFF" fillRule="evenodd">
          <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
        </g>
      </svg>
      <div className="relative">
        <ul
          className={`display flex flex-col absolute right-0 top-full ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          {planetData.map((planet) => (
            <li key={planet.name}>
              <Link to={`/${planet.name}`} onClick={toggleMenu}>
                {planet.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
