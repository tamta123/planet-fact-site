const Buttons = ({ currentDesktop, updateCurrentDesktop, planet }) => {
  return (
    <div className="md:flex flex-col justify-between  px-6 w-full border-solid border-b-2 border-t-2 border-white border-opacity-20 mt-[70px] ">
      <button
        className={`font-spartan h-[50px] font-semibold text-[9px] border-b-4 border-solid text-center tracking-wider  text-white  uppercase `}
        style={{
          opacity: currentDesktop.status === "overview" ? "1" : "0.5",
          borderColor:
            currentDesktop.status === "overview" ? planet.color : "transparent",
        }}
        onClick={() => updateCurrentDesktop("overview")}
      >
        <span>01</span>
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
        <span>02</span>
        Structure
      </button>
      <button
        className={`font-spartan h-[50px] font-semibold text-[9px] border-b-4 border-solid text-center tracking-wider uppercase   text-white`}
        style={{
          opacity: currentDesktop.status === "geology" ? "1" : "0.5",
          borderColor:
            currentDesktop.status === "geology" ? planet.color : "transparent",
        }}
        onClick={() => updateCurrentDesktop("geology")}
      >
        <span>03</span>
        Surface
      </button>
    </div>
  );
};

export default Buttons;
