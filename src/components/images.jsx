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
    <div className="flex justify-center items-center mt-16 md:mt-40 xl:mt-0 xl:w-1/2">
      {status === "geology" ? (
        <>
          <img
            className="relative w-60 h-60 z-[-10] md:w-80 md:h-80"
            src={planet.images.planet}
          />
          <img
            className="absolute top-[290px] z-[-10] w-30 h-40 md:top-[360px]"
            src={planet.images.geology}
          />
        </>
      ) : (
        <img
          className="w-60 h-60 md:w-80 md:h-80 "
          src={imageSrc}
          alt={`${planet.name} ${status}`}
        />
      )}
    </div>
  );
};

export default Images;
