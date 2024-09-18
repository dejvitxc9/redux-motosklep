import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/form/Form";
import Car from "./components/carVisualiser/Car";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Offer from "./components/offer/Offer";
import Main from "./components/main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="glowna" element={<Main />}></Route>
          <Route path="dodaj" element={<Form />}></Route>
          <Route path="oferta" element={<Offer />}></Route>
          <Route path="*" element={<Form />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
