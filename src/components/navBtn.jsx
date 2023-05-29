import { useState } from "react";
import { Link } from "react-router-dom";

const NavBtn = ({ planet }) => {
  const [isHover, setIsHover] = useState(false);
  const handleHoverOn = () => {
    setIsHover(true);
  };
  const handleHoverOff = () => {
    setIsHover(false);
  };
  return (
    <div
      key={planet.name}
      className="flex w-full items-center pb-5 bg-header-blue"
    >
      <li
        key={planet.name}
        className="font-spartan xl:pt-4 text-center font-semibold text-xs leading-5 tracking-wide uppercase text-white xl:border-t-8 border-solid"
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}
        style={{ borderColor: isHover ? planet.color : "transparent" }}
      >
        <Link to={`/${planet.name}`}>{planet.name}</Link>
      </li>
    </div>
  );
};

export default NavBtn;
