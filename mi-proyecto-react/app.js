import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Aquí coloca el resto del contenido de tu página */}
    </div>
  );
}
import React from 'react';

import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom si estás utilizando enrutamiento

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Mi Tienda</Link> {/* Utiliza Link en lugar de a para navegar */}
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
      </div>
    </nav>
  );
}

export default NavBar;

