import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top px-5 p-3 "
        style={{
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(6px)",
          zIndex: 10,
          width: "100%",
          margin: 0,
          padding: "0 2rem",
        }}
      >
        <div className="container-fluid p-0 m-0">
          <a className="navbar-brand fw-bold text-primary fs-3" href="#">
            AVANSER
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-0">
              <li className="nav-item">
                <a className="nav-link active text-white" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-primary ms-3"
                  onClick={goToLogin}
                >
                  Iniciar Sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}
export default Navbar;
