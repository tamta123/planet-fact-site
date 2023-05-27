const Buttons = ({ currentDesktop, updateCurrentDesktop, planet }) => {
  return (
    <div className="md:flex flex-col gap-y-[16px] px-6 w-full h-auto mt-6 xl:p-0 ">
      <button
        className={`flex justify-start items-center gap-x-[17px] font-spartan h-[50px] font-semibold text-[9px] border border-solid border-opacity-20 text-center tracking-wider  text-white  uppercase pl-[20px]`}
        style={{
          background:
            currentDesktop.status === "overview" ? `${planet.color}` : "",
          borderColor:
            currentDesktop.status === "overview"
              ? planet.color
              : "rgba(255, 255, 255, 0.2)",
        }}
        onClick={() => updateCurrentDesktop("overview")}
      >
        <span>01</span>
        OVERVIEW
      </button>
      <button
        className={`flex justify-start items-center gap-x-[17px] font-spartan h-[50px] font-semibold text-[9px] border border-solid border-opacity-20 text-center tracking-wider uppercase  text-white pl-[20px]`}
        style={{
          background:
            currentDesktop.status === "structure" ? `${planet.color}` : "",
          borderColor:
            currentDesktop.status === "structure"
              ? planet.color
              : "rgba(255, 255, 255, 0.2)",
        }}
        onClick={() => updateCurrentDesktop("structure")}
      >
        <span>02</span>
        Structure
      </button>
      <button
        className={`flex justify-start  items-center gap-x-[17px] font-spartan h-[50px] font-semibold text-[9px] border border-solid border-opacity-20 text-center tracking-wider uppercase   text-white pl-[20px]`}
        style={{
          background:
            currentDesktop.status === "geology" ? `${planet.color}` : "",
          borderColor:
            currentDesktop.status === "geology"
              ? planet.color
              : "rgba(255, 255, 255, 0.2)",
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
