const Footer = ({ planet }) => {
  return (
    <div className=" flex flex-col md:flex-row gap-x-[11px] px-6 pb-11">
      <div className="flex justify-between items-start pt-2 pb-3 px-6 mb-2 border-t border-solid border-2 border-white border-opacity-20 md:w-1/4 md:flex-col">
        <div className="font-spartan font-bold text-xs leading-5 tracking-tight uppercase text-center text-white opacity-50">
          ROTATION TIME
        </div>
        <div className="font-antonio font-normal text-base leading-6 text-right tracking-tighter uppercase text-white">
          {planet.rotation}
        </div>
      </div>
      <div className="flex justify-between items-start pt-2 pb-3 px-6 mb-2 border-t border-solid border-2 border-white border-opacity-20 md:w-1/4 md:flex-col">
        <div className="font-spartan font-bold text-xs leading-5 tracking-tight uppercase text-center text-white opacity-50">
          REVOLUTION TIME
        </div>
        <div className="font-antonio font-normal text-base leading-6 text-right tracking-tighter uppercase text-white">
          {planet.revolution}
        </div>
      </div>
      <div className="flex justify-between items-start pt-2 pb-3 px-6 mb-2 border-t border-solid border-2 border-white border-opacity-20 md:w-1/4 md:flex-col">
        <div className="font-spartan font-bold text-xs leading-5 tracking-tight uppercase text-center text-white opacity-50">
          RADIUS
        </div>
        <div className="font-antonio font-normal text-base leading-6 text-right tracking-tighter uppercase text-white">
          {planet.radius}
        </div>
      </div>
      <div className="flex justify-between items-start pt-2 pb-3 px-6 mb-2 border-t border-solid border-2 border-white border-opacity-20 md:w-1/4 md:flex-col">
        <div className="font-spartan font-bold text-xs leading-5 tracking-tight uppercase text-center text-white opacity-50">
          AVERAGE TEMP.
        </div>
        <div className="font-antonio font-normal text-base leading-6 text-right tracking-tighter uppercase text-white">
          {planet.temperature}
        </div>
      </div>
    </div>
  );
};

export default Footer;
