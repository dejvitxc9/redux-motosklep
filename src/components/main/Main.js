import { useDispatch, useSelector } from "react-redux";
import { setName, setSurname, setEmail } from "../../redux/userReducer";
import { useState } from "react";

function Main() {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.user.name);
  const surname = useSelector((state) => state.user.surname);
  const email = useSelector((state) => state.user.email);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Opisz siebie</h2>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              Imię
            </label>
            <input
              type="text"
              id="userName"
              className="form-control"
              value={name}
              onChange={(e) => {
                dispatch(setName(e.target.value));
              }}
              maxLength={31}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="userSurname" className="form-label">
              Nazwisko
            </label>
            <input
              type="text"
              id="useruserSurnameName"
              className="form-control"
              value={surname}
              onChange={(e) => {
                dispatch(setSurname(e.target.value));
              }}
              maxLength={31}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              id="userEmail"
              className="form-control"
              value={email}
              onChange={(e) => {
                dispatch(setEmail(e.target.value));
              }}
              maxLength={31}
            ></input>
          </div>
        </div>
        <div className="col-md-6">
          <h2>Twoje dane</h2>
          <div className="row">
            <p className="display-6">Imię: {name}</p>
            <p className="display-6">Nazwisko: {surname}</p>
            <p className="display-6">Email: {email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
