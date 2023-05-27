const Footer = ({ planet }) => {
  return (
    <div className=" flex flex-col md:flex-row gap-x-[11px] px-6 pb-11 md:pt-[20px] xl:pl-[165px] xl:pr-[165px] xl:gap-[30px] xl:pb-0">
      <div className="flex justify-between items-start pt-2 pb-3 px-6 mb-2 border-t border-solid border-2 border-white border-opacity-20 md:w-1/4 md:flex-col xl:pt-[20px] xp:pl-[23px] xl:pb-[27px] xl:justify-start">
        <div className="font-spartan font-bold text-xs leading-5 tracking-tight uppercase text-center text-white opacity-50">
          ROTATION TIME
        </div>
        <div className="font-antonio font-normal text-base leading-6 text-right tracking-tighter uppercase text-white xl:text-3xl">
          {planet.rotation}
        </div>
      </div>
      <div className="flex justify-between items-start pt-2 pb-3 px-6 mb-2 border-t border-solid border-2 border-white border-opacity-20 md:w-1/4 md:flex-col xl:pt-[20px] xp:pl-[23px] xl:pb-[27px] xl:justify-start">
        <div className="font-spartan font-bold text-xs leading-5 tracking-tight uppercase text-center text-white opacity-50">
          REVOLUTION TIME
        </div>
        <div className="font-antonio font-normal text-base leading-6 text-right tracking-tighter uppercase text-white xl:text-3xl">
          {planet.revolution}
        </div>
      </div>
      <div className="flex justify-between items-start pt-2 pb-3 px-6 mb-2 border-t border-solid border-2 border-white border-opacity-20 md:w-1/4 md:flex-col xl:pt-[20px] xp:pl-[23px] xl:pb-[27px] xl:justify-start">
        <div className="font-spartan font-bold text-xs leading-5 tracking-tight uppercase text-center text-white opacity-50">
          RADIUS
        </div>
        <div className="font-antonio font-normal text-base leading-6 text-right tracking-tighter uppercase text-white xl:text-3xl">
          {planet.radius}
        </div>
      </div>
      <div className="flex justify-between items-start pt-2 pb-3 px-6 mb-2 border-t border-solid border-2 border-white border-opacity-20 md:w-1/4 md:flex-col xl:pt-[20px] xp:pl-[23px] xl:pb-[27px] xl:justify-start">
        <div className="font-spartan font-bold text-xs leading-5 tracking-tight uppercase text-center text-white opacity-50 ">
          AVERAGE TEMP.
        </div>
        <div className="font-antonio font-normal text-base leading-6 text-right tracking-tighter uppercase text-white xl:text-3xl">
          {planet.temperature}
        </div>
      </div>
    </div>
  );
};

export default Footer;
