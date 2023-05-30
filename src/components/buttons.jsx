import { useState } from "react";

const Buttons = ({ currentDesktop, updateCurrentDesktop, planet }) => {
  const [isHoverBtn, setIsHoverBtn] = useState("");
  const handleHoverOn = (e) => {
    setIsHoverBtn(e.target.value);
  };
  const handleHoverOff = () => {
    setIsHoverBtn("");
  };
  return (
    <div className="md:flex flex-col gap-y-[16px] px-6 w-full h-auto mt-6 xl:p-0 ">
      <button
        value={"overview"}
        className={`flex justify-start items-center gap-x-[17px] font-spartan h-[50px] font-semibold text-[9px] xl:text-[12px] border border-solid border-opacity-20 text-center tracking-wider  text-white  uppercase pl-[20px]`}
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}
        style={{
          background:
            isHoverBtn === "overview" && currentDesktop.status !== "overview"
              ? "rgba(216, 216, 216, 0.2)"
              : currentDesktop.status === "overview"
              ? `${planet.color}`
              : "",
          borderColor:
            currentDesktop.status === "overview"
              ? planet.color
              : "rgba(255, 255, 255, 0.2)",
        }}
        onClick={() => updateCurrentDesktop("overview")}
      >
        <span className="xl:text-[12px]">01</span>
        OVERVIEW
      </button>
      <button
        value={"structure"}
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}
        className={`flex justify-start items-center gap-x-[17px] font-spartan h-[50px] font-semibold text-[9px] xl:text-[12px] border border-solid border-opacity-20 text-center tracking-wider uppercase  text-white pl-[20px]`}
        style={{
          background:
            isHoverBtn === "structure" && currentDesktop.status !== "structure"
              ? "rgba(216, 216, 216, 0.2)"
              : currentDesktop.status === "structure"
              ? `${planet.color}`
              : "",
          borderColor:
            currentDesktop.status === "structure"
              ? planet.color
              : "rgba(255, 255, 255, 0.2)",
        }}
        onClick={() => updateCurrentDesktop("structure")}
      >
        <span className="xl:text-[12px]">02</span>
        Structure
      </button>
      <button
        value={"geology"}
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}
        className={`flex justify-start  items-center gap-x-[17px] font-spartan h-[50px] font-semibold text-[9px] xl:text-[12px] border border-solid border-opacity-20 text-center tracking-wider uppercase   text-white pl-[20px]`}
        style={{
          background:
            isHoverBtn === "geology" && currentDesktop.status !== "geology"
              ? "rgba(216, 216, 216, 0.2)"
              : currentDesktop.status === "geology"
              ? `${planet.color}`
              : "",
          borderColor:
            currentDesktop.status === "geology"
              ? planet.color
              : "rgba(255, 255, 255, 0.2)",
        }}
        onClick={() => updateCurrentDesktop("geology")}
      >
        <span className="xl:text-[12px]">03</span>
        Surface
      </button>
    </div>
  );
};

export default Buttons;
