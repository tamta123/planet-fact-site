import planetData from "../data.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Text from "./text";
import Images from "./images";
import Footer from "./footer";

const Planets = ({ status, isMenuOpen }) => {
  const { name } = useParams();

  const planet = planetData.find((planet) => planet.name === name);

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

  return (
    <>
      <div className="flex justify-between  px-6 w-full border-solid border-b-2 border-t-2 border-white border-opacity-20 mt-[70px] md:hidden">
        <button
          className={`font-spartan h-[50px] font-semibold text-[9px] border-b-4 border-solid text-center tracking-wider  text-white  uppercase `}
          style={{
            opacity: currentDesktop.status === "overview" ? "1" : "0.5",
            borderColor:
              currentDesktop.status === "overview"
                ? planet.color
                : "transparent",
          }}
          onClick={() => updateCurrentDesktop("overview")}
        >
          OVERVIEW
        </button>
        <button
          className={`font-spartan h-[50px] font-semibold text-[9px] border-b-4 border-solid text-center tracking-wider uppercase  text-white`}
          style={{
            opacity: currentDesktop.status === "structure" ? "1" : "0.5",
            borderColor:
              currentDesktop.status === "structure"
                ? planet.color
                : "transparent",
          }}
          onClick={() => updateCurrentDesktop("structure")}
        >
          Structure
        </button>
        <button
          className={`font-spartan h-[50px] font-semibold text-[9px] border-b-4 border-solid text-center tracking-wider uppercase   text-white`}
          style={{
            opacity: currentDesktop.status === "geology" ? "1" : "0.5",
            borderColor:
              currentDesktop.status === "geology"
                ? planet.color
                : "transparent",
          }}
          onClick={() => updateCurrentDesktop("geology")}
        >
          Surface
        </button>
      </div>
      <div className="xl:flex xl:flex-row justify-between xl:mt-40 xl:h-[582px] xl:w-100vw">
        <Images planet={planet} status={currentDesktop.status} />
        <Text
          planet={planet}
          status={status}
          currentDesktop={currentDesktop}
          updateCurrentDesktop={updateCurrentDesktop}
        />
      </div>
      <Footer planet={planet} />
    </>
  );
};

export default Planets;
