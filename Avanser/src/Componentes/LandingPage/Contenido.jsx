import React from "react";
import "../../Estilos/Hero.css";

function Hero() {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container text-start text-light">
        <h1 className="display-4 fw-bold">
          Se parte de Nuestra familia <span className="text-primary">AVANSER</span>
        </h1>
        <p className="lead">
             Tu Educacion Es Nuestra Prioridad
        </p>
        <a href="#about" className="btn btn-primary btn-lg mt-3">
          Nuestro Equipo
        </a>
      </div>
    </section>
  );
}

export default Hero;
