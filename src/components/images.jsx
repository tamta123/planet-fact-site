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
    <div className="flex justify-center mt-16">
      {status === "geology" ? (
        <>
          <img className="relative w-40 h-40 " src={planet.images.planet} />
          <img
            className="absolute bottom-100 w-20 h-30"
            src={planet.images.geology}
          />
        </>
      ) : (
        <img
          className="w-40 h-40 "
          src={imageSrc}
          alt={`${planet.name} ${status}`}
        />
      )}
    </div>
  );
};

export default Images;
