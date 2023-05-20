// import planetData from "../data.json";

const Text = ({ planet, currentDesktop }) => {
  return (
    <div>
      <h2>{planet.name}</h2>
      <p>{currentDesktop.about}</p>
      <span>source:{currentDesktop.source}</span>
    </div>
  );
};

export default Text;
