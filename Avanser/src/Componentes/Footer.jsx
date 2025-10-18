import React from "react";
import "../Estilos/PiePagina.css"

const PiePagina = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección de logo y descripción */}
        <div className="footer-brand">
          <h2 className="footer-logo">Avanser</h2>
          <p className="footer-description">
            Tu Educacion Es Nuestra Prioridad
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="footer-links">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer-contact">
          <h4>Contáctanos</h4>
          <p>📧 contacto@avanser.com</p>
          <p>📞 +57 300 000 0000</p>
          <p>📍 Popayan, Colombia</p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Avanser. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default PiePagina;
