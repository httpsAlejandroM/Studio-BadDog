import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

 

  return (
    <div className='sticky-top'>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
        <div className="container ">
          <Link className="navbar-brand" to="/">
            <img src="/dist/assets/bad-dog-studio-logo.png" alt="logo bad dog" />
          </Link>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-lg-auto">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/"? "active" : ""}`} to="/">Inicio</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="/sitios" className={`nav-link dropdown-toggle ${location.pathname === "/sitios"? "active" : ""}`}   data-bs-toggle="dropdown" aria-expanded="false">
                  Sitios
                </Link>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/sitios#ultimosproyectos">Ultimos proyectos</a></li>
                  <li><a className="dropdown-item" href="/sitios#singlepage">Single page</a></li>
                  <li><a className="dropdown-item" href="/sitios#multipage">Multi page</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/clientes"? "active" : ""}`} to="/clientes">Clientes</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/comencemos"? "active" : ""}`} to="/comencemos">Comencemos</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/interes"? "active" : ""}`} to="/interes">¿Interesado?</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar