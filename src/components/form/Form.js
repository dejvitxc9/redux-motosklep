import { useDispatch, useSelector } from "react-redux";
import "./Form.css";
import { useState } from "react";
import { addCar } from "../../redux/carReducer";

function Form() {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [shape, setShape] = useState("Kompakt");
  const [suplier, setSuplier] = useState("Używane Auta S.A.");

  const dispach = useDispatch();

  const formSubmitHandle = (e) => {
    e.preventDefault();

    dispach(
      addCar({ brand: brand, price: price, type: shape, supplier: suplier })
    );

    setBrand("");
    setPrice(0);
    setShape("Kompakt");
    setSuplier("Używane Auta S.A.");
  };

  const name = useSelector((state) => state.user.name);
  const surname = useSelector((state) => state.user.surname);

  return (
    <form
      name="formularz"
      id="formularz"
      onSubmit={formSubmitHandle}
      className="container"
    >
      <div className="row">
        <div className="col-md-4">
          <label htmlFor="carBrand" className="form-label">
            Marka auta
          </label>
          <input
            className="form-control"
            id="carBrand"
            type="text"
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
            }}
          ></input>
        </div>
        <div className="col-md-4">
          <label htmlFor="carPrice" className="form-label">
            Cena
          </label>
          <input
            className="form-control"
            id="carPrice"
            type="number"
            min={10000}
            max={1000000}
            step={10}
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            required
          ></input>
        </div>
        <div className="col-md-4">
          <label htmlFor="carType" className="form-label">
            Nadwozie
          </label>
          <select
            className="form-select"
            id="carType"
            value={shape}
            onChange={(e) => {
              setShape(e.target.value);
            }}
          >
            <option value={"Kompakt"}>Kompakt</option>
            <option value={"Sedan"}>Sedan</option>
            <option value={"Kombi"}>Kombi</option>
            <option value={"Sportowe"}>Sportowe</option>
            <option value={"Van"}>Van</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <label htmlFor="suplier" className="form-label">
            Pośrednik
          </label>
          <select
            className="form-select"
            id="suplier"
            value={suplier}
            onChange={(e) => {
              setSuplier(e.target.value);
            }}
          >
            {name.length > 0 ? (
              <option
                value={`${name} ${surname}`}
              >{`${name} ${surname}`}</option>
            ) : (
              <></>
            )}
            <option value={"Używane Auta S.A."}>Używane Auta S.A.</option>
            <option value={"Marek Kowalczyk"}>Marek Kowalczyk</option>
            <option value={"Paweł Micoń"}>Paweł Micoń</option>
            <option value={"Inne"}>Inne</option>
          </select>
        </div>
        <div className="col-md-4 submitContainer">
          <button type="submit" className="w-100 btn btn-success">
            Dodaj do oferty
          </button>
        </div>
      </div>
    </form>
  );
}
export default Form;
