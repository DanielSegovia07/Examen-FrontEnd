import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
      <div className="container-fluid">
        <Link className="navbar-brand fs-2" to="/" style={{ fontWeight: 'bold' }}>
          Examen
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item" style={{ marginRight: '20px' }}>
              <Link className="nav-link text-white fs-5" to="/button">
                Ejercicio 1 - Botón
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: '20px' }}>
              <Link className="nav-link text-white fs-5" to="/counter">
                Ejercicio 2 - Contador
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: '20px' }}>
              <Link className="nav-link text-white fs-5" to="/names">
                Ejercicio 3 - Lista Estática
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: '20px' }}>
              <Link className="nav-link text-white fs-5" to="/crud">
                Ejercicio 4 - CRUD
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
