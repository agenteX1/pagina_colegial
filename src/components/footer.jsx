
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export function Footer() {
  const enlaces = [
    { nombre: "Inicio", href: "#inicio" },
    { nombre: "Nuestro colegio", href: "#nosotros" },
    { nombre: "Academia", href: "#academia" },
    { nombre: "Noticias y eventos", href: "#noticias" },
    { nombre: "Comunidad educativa", href: "#comunidad" },
  ];

  const redes = [
  
   
    
  ];

  return (
    <footer id="contacto" className="bg-[#005b29] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-20">

        {/* Identidad institucional */}
        <div>
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="https://www.joseacevedo.edu.co/wp-content/uploads/2020/05/Escudo_IEJAG_png-1-915x1024.png"
              alt="Escudo de la Institución Educativa José Acevedo Gómez"
              loading="lazy"
              className="h-14 w-12 object-contain"
            />

            <div>
              <h2 className="text-sm font-extrabold">
                I.E. José Acevedo Gómez
              </h2>
              <p className="mt-1 text-[10px] tracking-wider text-green-100">
                EDUCACIÓN Y FUTURO
              </p>
            </div>
          </a>

          <p className="mt-6 max-w-xs text-sm leading-7 text-green-50/80">
            Formando estudiantes con valores, conocimiento y compromiso para
            construir un mejor futuro.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="mb-5 text-sm font-extrabold">
            Explora nuestro colegio
          </h3>

          <nav className="flex flex-col gap-3 text-sm text-green-50/80">
            {enlaces.map((enlace) => (
              <a
                key={enlace.nombre}
                href={enlace.href}
                className="transition-colors duration-200 hover:translate-x-1 hover:text-white"
              >
                {enlace.nombre}
              </a>
            ))}
          </nav>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="mb-5 text-sm font-extrabold">
            Información de contacto
          </h3>

          <div className="flex flex-col gap-4 text-sm text-green-50/80">
            <p className="flex items-start gap-3">
              <MapPin
                size={19}
                className="mt-0.5 shrink-0 text-white"
                aria-hidden="true"
              />
              <span>Acevedo, Huila, Colombia</span>
            </p>

            <p className="flex items-start gap-3">
              <Phone
                size={18}
                className="mt-0.5 shrink-0 text-white"
                aria-hidden="true"
              />
              <span>+57 300 000 0000</span>
            </p>

            <p className="flex items-start gap-3">
              <Mail
                size={19}
                className="mt-0.5 shrink-0 text-white"
                aria-hidden="true"
              />
              <span>colegio@email.com</span>
            </p>
          </div>

          <p className="mt-4 text-xs leading-5 text-green-100/70">
            Recuerda actualizar el teléfono y el correo con los datos oficiales.
          </p>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="mb-5 text-sm font-extrabold">
            Nuestra comunidad
          </h3>

          <p className="text-sm leading-7 text-green-50/80">
            Sigue las actividades y novedades de nuestra institución a través
            de sus canales oficiales.
          </p>

          <div className="mt-5 flex gap-3">
            {redes.map(({ nombre, Icono, href }) => (
              <a
                key={nombre}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${nombre}`}
                title={nombre}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 text-white transition duration-200 hover:-translate-y-1 hover:bg-white hover:text-[#008037]"
              >
                <Icono size={19} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-green-50/75 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Institución Educativa José Acevedo Gómez.
            Todos los derechos reservados.
          </p>

          <a
            href="#inicio"
            className="transition hover:text-white"
          >
            Educación con propósito, compromiso y valores.
          </a>
        </div>
      </div>
    </footer>
  );
}
