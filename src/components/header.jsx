import "./header.css";
import planetData from "../data.json";
import { Routes, Route, Link } from "react-router-dom";
// import Planets from "./planets";

const Header = () => {
  return (
    <header>
      <h1>planets</h1>
      <ul>
        {planetData.map((planet) => (
          <li key={planet.name}>
            <Link to={`/${planet.name}`}>{planet.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
