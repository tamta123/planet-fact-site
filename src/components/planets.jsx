import planetData from "../data.json";
import { useParams } from "react-router-dom";

const Planets = () => {
  const { name } = useParams();

  //    By using the curly braces around name, you are destructuring the returned object and extracting the value of the name
  //     parameter specifically. This syntax allows you to create a variable named name and assign it the value of the name
  //     parameter from the URL.  in the case of const { name } = useParams();, the curly braces indicate that we want to
  //     extract the name property from the returned object and assign it to a variable named name.
  //     This allows us to conveniently access the extracted name value within the Planets component.

  const planet = planetData.find((planet) => planet.name === name);
  console.log(planet.name);

  return <div>Planets</div>;
};

export default Planets;
