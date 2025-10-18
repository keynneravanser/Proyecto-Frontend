// src/components/LandingPage.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Componentes
import Navbar from "../Componentes/NavBar";
import PiePagina from "../Componentes/footer";
import IntegrantesCarousel from "../Componentes/LandingPage/IntegrantesCarousel";
import Hero from "../Componentes/LandingPage/Contenido";
import About from "../Componentes/LandingPage/AcercaNosotros";

// Estilos css
import "../Estilos/PiePagina.css"
import "../Estilos/LandingPage.css"


const Landing = () => {
  return (

    <div>
      <Navbar />
      <Hero />
      <About />
      <IntegrantesCarousel />
      <PiePagina />




    </div>









  );
};








export default Landing;


