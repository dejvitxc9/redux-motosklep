import { useSelector } from "react-redux";
import "./Car.css";

function Car({ carData }) {
  return (
    <div className="card custom-card col-md-12 m-4">
      <div className="row">
        <img className="col-md-2" src={`images/${carData.type}.png`}></img>
        <h1 className="col-md-10">{carData.brand}</h1>
      </div>
      <div className="row">
        <h2 className="text-danger col-md-6">{carData.price}.00 PLN</h2>
        <p className="text-muted text-end col-md-6">{carData.supplier}</p>
      </div>
    </div>
  );
}
export default Car;
