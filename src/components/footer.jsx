import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Institución Educativa</h2>
          <p>
            Formando estudiantes con valores, conocimiento y compromiso para
            construir un mejor futuro.
          </p>
        </div>

        <div className="footer-section">
          <h3>Enlaces</h3>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#programas">Programas</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <p>📍 Acevedo, Huila, Colombia</p>
          <p>📞 +57 300 000 0000</p>
          <p>✉️ colegio@email.com</p>
        </div>
        <div className="footer-section">
          <h3>Síguenos en:</h3>
          <div className="social-links">
            <FontAwesomeIcon Icon={faHome} />
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">Tik Tok</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Institución Educativa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
