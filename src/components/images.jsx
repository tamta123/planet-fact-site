import planetData from "../data.json";

const Images = ({ planet, status, currentDesktop }) => {
  const renderImage = () => {
    if (currentDesktop.status === "overview") {
      return currentDesktop.image;
    } else if (currentDesktop.status === "structure") {
      return planet.images.structure;
    } else if (status === "geology") {
      return planet.images.geology;
    }
    return null;
  };
  const imageSrc = renderImage();

  return (
    <div>
      <img src={imageSrc} alt={`${planet.name} ${status}`} />
    </div>
  );
};

export default Images;
