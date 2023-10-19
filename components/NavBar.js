import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'; // Importa el componente CartWidget

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Mi Tienda</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/categoria1">Categoría 1</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categoria2">Categoría 2</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categoria3">Categoría 3</Link>
          </li>
        </ul>
        <CartWidget /> {/* Agrega el componente CartWidget aquí */}
      </div>
    </nav>
  );
}

export default NavBar;
