import planetData from "../data.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavBtn from "./navBtn";

const Header = ({ toggleMenu, isMenuOpen }) => {
  return (
    <header className="flex z-50 top-0 fixed md:flex-col w-full items-center justify-between py-4 xl:pb-4 xl:pt-0 px-6 bg-[#070724] md:justify-center md:h-auto xl:flex-row md:border-solid md:border-b-2 md:border-white md:border-opacity-10 xl:justify-between xl:pl-[32px] xl:pr-[32px] xl:w-full">
      <h1 className="font-antonio w-full font-medium text-base leading-9 tracking-tight uppercase text-white	xl:text-3xl md:text-center xl:text-left xl:pt-4 md:pb-4 xl:pb-0">
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
      <div className="w-full  fixed top-[63px] left-0 z-20">
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
      <div className="hidden md:flex w-full h-full z-20 items-end">
        <ul className="flex flex-row items-start  justify-around w-full h-full pl-6 pr-6 bg-header-blue z-999 md:flex-row xl:justify-between">
          {planetData.map((planet) => (
            // <div
            //   key={planet.name}
            //   className="flex w-full items-center pb-5 bg-header-blue"
            // >
            //   <li
            //     key={planet.name}
            //     className="font-spartan xl:pt-4 text-center font-semibold text-xs leading-5 tracking-wide uppercase text-white xl:border-t-8 border-solid"
            //     onMouseEnter={handleHoverOn}
            //     onMouseLeave={handleHoverOff}
            //     style={{ borderColor: isHover ? planet.color : "transparent" }}
            //   >
            //     <Link to={`/${planet.name}`}>{planet.name}</Link>
            //   </li>
            // </div>
            <NavBtn planet={planet} />
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
