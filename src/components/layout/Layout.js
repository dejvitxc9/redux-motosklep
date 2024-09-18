import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"images/redux.png"} className="App-logo" alt="logo" />
        <Link to={"/glowna"} className="page">
          Strona główna
        </Link>
        <Link to={"/dodaj"} className="page">
          Dodawanie
        </Link>
        <Link to={"/oferta"} className="page">
          Oferty
        </Link>
        <img src={"images/redux.png"} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <Outlet />
      </main>
    </div>
  );
}
