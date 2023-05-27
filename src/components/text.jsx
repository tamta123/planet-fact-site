import Buttons from "./buttons";
const Text = ({ planet, currentDesktop, updateCurrentDesktop }) => {
  return (
    <div className="md:flex md:flex-row md:mt-16 xl:flex-col xl:mt-0 xl:items-center xl:justify-center xl:w-1/2">
      <div className="px-4 mt-16 mb-7 md:w-1/2 md:flex md:flex-col md:items-start md:px-8 md:mt-0 xl:w-ful xl:p-0">
        <h2 className="text-4xl font-normal leading-10 text-center uppercase text-white font-antonio mb-4 xl:text-7xl">
          {planet.name}
        </h2>
        <p className="text-xs font-normal leading-5 text-center text-white font-spartan mb-8 md:text-left xl:text-base xl:leading-[25px] xl:p-0">
          {currentDesktop.about}
        </p>
        <div className="flex gap-[4px] items-center justify-center text-xs font-normal leading-6 text-white font-spartan mix-blend-normal opacity-50">
          <span>source:</span>
          <a
            href={currentDesktop.source}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold ml-1 underline"
          >
            Wikipedia
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="#FFF"
              d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
              opacity=".5"
            />
          </svg>
        </div>
      </div>
      <div className="hidden md:flex w-[52%] xl:flex">
        <Buttons
          currentDesktop={currentDesktop}
          updateCurrentDesktop={updateCurrentDesktop}
          planet={planet}
        />
      </div>
    </div>
  );
};

export default Text;
