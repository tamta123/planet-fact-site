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
  console.log(`border-[${planet.color}]`);

  return (
    <>
      <div className="flex justify-between  px-6 w-full border-solid border-2 border-white border-opacity-20">
        <button
          className={`font-spartan h-[50px] font-semibold text-[9px] border-b-4 border-solid text-center tracking-wider opacity-50 uppercase ${
            currentDesktop.status === "overview"
              ? `opacity-100 border-[red]`
              : "border-transparent"
          } text-white`}
          onClick={() => updateCurrentDesktop("overview")}
        >
          OVERVIEW
        </button>
        <button
          className={`font-spartan h-[50px] font-semibold text-[9px] border-b-4 border-solid text-center tracking-wider opacity-50 uppercase ${
            currentDesktop.status === "structure"
              ? `opacity-100 border-[${planet.color}]`
              : "border-transparent"
          } text-white`}
          onClick={() => updateCurrentDesktop("structure")}
        >
          Structure
        </button>
        <button
          className={`font-spartan h-[50px] font-semibold text-[9px] border-b-4 border-solid text-center tracking-wider opacity-50 uppercase ${
            currentDesktop.status === "geology"
              ? `opacity-100 border-[${planet.color}]`
              : "border-transparent"
          } text-white`}
          onClick={() => updateCurrentDesktop("geology")}
        >
          Surface
        </button>
      </div>
      <Images planet={planet} status={currentDesktop.status} />
      <Text planet={planet} currentDesktop={currentDesktop} />
      <Footer planet={planet} />
    </>
  );
};

export default Planets;
