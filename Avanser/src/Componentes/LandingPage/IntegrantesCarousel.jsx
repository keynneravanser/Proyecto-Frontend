import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Estilos/IntegrantesCarousel.css";

const integrantes = [
  {
    nombre: "Laura",
    descripcion: "Desarrolladora Frontend experta en React y diseño UX/UI.",
    imagen: "/Img/integrante1.jpg",
  },
  {
    nombre: "Carlos ",
    descripcion: "Backend Developer especializado en Node.js y bases de datos.",
    imagen: "/Img/integrante2.jpg",
  },
  {
    nombre: "Sofía ",
    descripcion: "Diseñadora gráfica enfocada en identidad visual y branding.",
    imagen: "/Img/integrante3.jpg",
  },
  {
    nombre: "Andrés ",
    descripcion: "QA Tester apasionado por la calidad y automatización de pruebas.",
    imagen: "/Img/integrante4.jpg",
  },
  {
    nombre: "Valentina",
    descripcion: "Gestora de proyectos con experiencia en metodologías ágiles.",
    imagen: "/Img/integrante5.jpg",
  },
  {
    nombre: "Juan ",
    descripcion: "Desarrollador móvil especializado en Flutter y React Native.",
    imagen: "/Img/integrante6.jpg",
  },
  {
    nombre: "Camila ",
    descripcion: "Especialista en marketing digital y estrategias de posicionamiento.",
    imagen: "/Img/integrante7.jpg",
  },
  {
    nombre: "David ",
    descripcion: "DevOps engineer enfocado en CI/CD y optimización de despliegues.",
    imagen: "/Img/integrante8.jpg",
  },
];

const IntegrantesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Nuestro Equipo</h2>
      <Slider {...settings}>
        {integrantes.map((integrante, index) => (
          <div key={index} className="carousel-item">
            <div className="carousel-content">
              <img
                src={integrante.imagen}
                alt={integrante.nombre}
                className="integrante-img"
              />
              <div className="integrante-info">
                <h3>{integrante.nombre}</h3>
                <p>{integrante.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default IntegrantesCarousel;
