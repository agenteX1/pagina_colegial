import * as Icons from "lucide-react";
import { useState } from "react";

const enlaces = [
  { nombre: "Inicio", ruta: "/", Icono: Icons.House },
  { nombre: "Nuestro colegio", ruta: "#nosotros", Icono: Icons.Landmark },
  { nombre: "Academia", ruta: "#academia", Icono: Icons.GraduationCap },
  { nombre: "Noticias", ruta: "/noticias", Icono: Icons.Newspaper },
  { nombre: "Comunidad", ruta: "#comunidad", Icono: Icons.Users },
];

export function Head() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header
      id="inicio"
      className="sticky top-0 z-50 border-b border-green-100 bg-white/95 shadow-sm backdrop-blur-xl"
    >
      <div className="mx-auto flex min-h-[82px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <img
            src="https://www.joseacevedo.edu.co/wp-content/uploads/2020/05/Escudo_IEJAG_png-1-915x1024.png"
            alt="Escudo de la Institución Educativa José Acevedo Gómez"
            className="h-14 w-12 shrink-0 object-contain"
          />

          <div className="min-w-0">
            <h1 className="text-sm font-extrabold tracking-tight text-[#008037] sm:text-base">
              I.E. José Acevedo Gómez
            </h1>
            <p className="mt-1 text-[10px] font-semibold tracking-[0.12em] text-gray-500 sm:text-xs">
              EDUCACIÓN QUE TRANSFORMA VIDAS
            </p>
          </div>
        </a>

        <button
          type="button"
          onClick={() => setMenuAbierto((prev) => !prev)}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          className="rounded-xl border border-green-100 p-2.5 text-[#008037] transition hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 md:hidden"
        >
          {menuAbierto ? <Icons.X size={23} /> : <Icons.Menu size={23} />}
        </button>

        <nav
          className={`${
            menuAbierto ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-1 border-b border-green-100 bg-white p-5 shadow-xl md:static md:flex md:flex-row md:items-center md:gap-5 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {enlaces.map(({ nombre, ruta, Icono }) => (
            <a
              key={ruta}
              href={ruta}
              onClick={() => setMenuAbierto(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-gray-600 transition hover:bg-green-50 hover:text-[#008037] md:px-0 md:py-2"
            >
              <Icono size={17} />
              {nombre}
            </a>
          ))}

          <a
            href="#contacto"
            onClick={() => setMenuAbierto(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#008037] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#006b2d] md:mt-0"
          >
            Contáctanos
            <Icons.ArrowUpRight size={17} />
          </a>
        </nav>
      </div>
    </header>
  );
}
