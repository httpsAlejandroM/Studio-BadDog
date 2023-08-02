import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  //const collapseElementList = document.querySelectorAll('.collapse')
  //const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))

  const collapseElementList = document.querySelector("#navbarNavDropdown")
  const collapser = document.querySelector(".navbar-toggler")

    const  collapseHandler = () => {
    collapser.classList.add("collapsed")
    collapser.setAttribute("aria-expanded", "false")
    collapseElementList.classList.remove("show")
   }

  return (
    <div className='sticky-top'>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
        <div className="container ">
          <Link className="navbar-brand" to="/" onClick={collapseHandler} >
            <img src="https://i.ibb.co/88mqstj/bad-dog-studio-logo.png" alt="logo bad dog" />
          </Link>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-lg-auto">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/"? "active" : ""}`} onClick={collapseHandler} to="/">Inicio</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="/sitios" className={`nav-link  ${location.pathname === "/sitios"? "active" : ""}`} onClick={collapseHandler} >
                  Sitios
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/clientes"? "active" : ""}`} onClick={collapseHandler} to="/clientes">Clientes</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/comencemos"? "active" : ""}`} onClick={collapseHandler} to="/comencemos">Comencemos</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/interes"? "active" : ""}`} onClick={collapseHandler} to="/interes">¿Interesado?</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
