import planetData from "../data.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Text from "./text";
import Images from "./images";
import Footer from "./footer";

const Planets = () => {
  const { name } = useParams();

  const planet = planetData.find((planet) => planet.name === name);
  console.log(planet);

  const [currentDesktop, setCurrentDesktop] = useState({
    status: "overview",
    image: "",
    about: "",
    source: "",
  });

  const updateCurrentDesktop = (status) => {
    setCurrentDesktop((prevState) => ({
      ...prevState,
      status: status,
      image: planet.images[status],
      about: planet[status].content,
      source: planet[status].source,
    }));
  };

  useEffect(() => {
    if (planet) {
      updateCurrentDesktop("overview");
    }
  }, [planet]);

  console.log(currentDesktop.status.image);

  return (
    <div>
      <div className="flex gap-x-14 py-4 px-6 w-full border-[2px] z-30 border-white">
        <button
          className={`font-spartan font-semibold text-xs text-center tracking-wider uppercase ${
            currentDesktop.status === "overview" ? "active" : ""
          } text-white`}
          onClick={() => updateCurrentDesktop("overview")}
        >
          OVERVIEW
        </button>
        <button
          className={`font-spartan font-semibold text-xs text-center tracking-wider uppercase ${
            currentDesktop.status === "structure" ? "active" : ""
          } text-white`}
          onClick={() => updateCurrentDesktop("structure")}
        >
          Structure
        </button>
        <button
          className={`font-spartan font-semibold text-xs text-center tracking-wider uppercase ${
            currentDesktop.status === "geology" ? "active" : ""
          } text-white`}
          onClick={() => updateCurrentDesktop("geology")}
        >
          Surface
        </button>
      </div>
      <Images planet={planet} status={currentDesktop.status} />
      <Text planet={planet} currentDesktop={currentDesktop} />
      <Footer planet={planet} />
    </div>
  );
};

export default Planets;
