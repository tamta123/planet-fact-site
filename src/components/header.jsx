import planetData from "../data.json";
import { Routes, Route, Link } from "react-router-dom";

// import Planets from "./planets";

const Header = ({ toggleMenu, isMenuOpen }) => {
  return (
    <header className="flex z-50 top-0 fixed md:flex-col w-full items-center justify-between py-4 px-6 bg-[#070724] md:justify-center md:h-auto xl:flex-row md:border-solid md:border-b-2 md:border-white md:border-opacity-10 xl:justify-between xl:pl-[32px] xl:pr-[32px] ">
      <h1 className="font-antonio w-full font-medium text-base leading-9 tracking-tight uppercase text-white	xl:text-3xl">
        THE PLANETS
      </h1>
      <svg
        className="ml-auto cursor-pointer md:hidden "
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="17"
        onClick={toggleMenu}
      >
        <g fill="#FFF" fillRule="evenodd">
          <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
        </g>
      </svg>
      <div className="w-full  sm:fixed sm:top-[63px] sm:left-0 z-20 transition-all duration-500 ease-in">
        {isMenuOpen ? (
          <ul className="flex flex-col items-start w-full pl-6 pr-6 bg-header-blue z-900 ">
            {planetData.map((planet) => (
              <div
                key={planet.name}
                className="flex w-full items-center pb-5 pt-5 border-solid border-b-2 border-white border-opacity-10  bg-header-blue"
              >
                <div
                  className="w-4 h-4 rounded-full mr-6 "
                  style={{ backgroundColor: planet.color }}
                ></div>
                <li
                  key={planet.name}
                  className="font-spartan text-center font-semibold text-xs leading-5 tracking-wide uppercase text-white "
                >
                  <Link to={`/${planet.name}`} onClick={toggleMenu}>
                    {planet.name}
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
      <div className="hidden md:flex w-full z-20  xl:w-2/4">
        <ul className="flex flex-row items-start w-full pl-6 pr-6 bg-header-blue z-999 md:flex-row">
          {planetData.map((planet) => (
            <div
              key={planet.name}
              className="flex w-full items-center pb-5 pt-5   bg-header-blue"
            >
              <li
                key={planet.name}
                className="font-spartan text-center font-semibold text-xs leading-5 tracking-wide uppercase text-white "
              >
                <Link to={`/${planet.name}`}>{planet.name}</Link>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
