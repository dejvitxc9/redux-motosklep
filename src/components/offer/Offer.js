import { useSelector } from "react-redux";
import Car from "../carVisualiser/Car";

function Offer() {
  // Retrieve the car data from the Redux store
  const car = useSelector((state) => state.car);

  return (
    <div className="container mr-auto">
      {car.map((carData, index) => (
        <Car key={index} carData={carData} />
      ))}
    </div>
  );
}

export default Offer;
