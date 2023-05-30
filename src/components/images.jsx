const Images = ({ planet, status }) => {
  const renderImage = () => {
    if (status === "overview") {
      return planet.images.planet;
    } else if (status === "structure") {
      return planet.images.internal;
    } else if (status === "geology") {
      return planet.images.geology;
    }
    return null;
  };

  const imageSrc = renderImage();

  return (
    <div
      className={`flex justify-center items-center px-4 md:h-[30vh] mt-16 md:mt-40 xl:mt-0 xl:w-1/2 ${
        status === "overview"
          ? "planet-enter-animation"
          : status === "structure"
          ? "structure-enter-animation"
          : ""
      }`}
    >
      {status === "geology" ? (
        <>
          <img
            className="relative z-[-10] sm:scale-[10%] md:scale-[60%] xl:scale-[100%]  xl:translate-y-[28%] md:translate-y-[5%]"
            src={planet.images.planet}
          />
          <img
            className={`absolute top-[390px] z-[-10] w-32 h-40 md:top-[360px] md:translate-y-[5%] ${
              status === "geology" ? "geology-enter-animation" : ""
            }`}
            src={planet.images.geology}
          />
        </>
      ) : (
        <img
          className="md:transform sm:scale-[10%] md:scale-[60%] xl:translate-y-[28%] md:translate-y-[5%] xl:scale-[100%] "
          src={imageSrc}
          alt={`${planet.name} ${status}`}
        />
      )}
    </div>
  );
};

export default Images;
