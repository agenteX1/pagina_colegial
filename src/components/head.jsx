import * as Icons from "lucide-react";
import { useState } from "react";

const enlaces = [
  { nombre: "Inicio", ruta: "#inicio" },
  { nombre: "Nuestro colegio", ruta: "#institucion" },
  { nombre: "Academia", ruta: "#explora" },
  { nombre: "Noticias", ruta: "#noticias" },
  { nombre: "Comunidad", ruta: "#comunidad" },
];

export function Head() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-green-100/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <img
            src="https://www.joseacevedo.edu.co/wp-content/uploads/2020/05/Escudo_IEJAG_png-1-915x1024.png"
            alt="Escudo de la Institución Educativa José Acevedo Gómez"
            className="h-12 w-11 shrink-0 object-contain"
          />
          <div className="min-w-0">
            <h1 className="text-sm font-extrabold tracking-tight text-[#10251a] sm:text-base">
              I.E. José Acevedo Gómez
            </h1>
            <p className="mt-1 text-[9px] font-semibold tracking-[0.12em] text-gray-500 sm:text-[10px]">
              EDUCACIÓN QUE TRANSFORMA VIDAS
            </p>
          </div>
        </a>
        <button
          type="button"
          onClick={() => setMenuAbierto((prev) => !prev)}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          className="rounded-full border border-green-100 p-2.5 text-[#08763b] transition hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 md:hidden"
        >
          {menuAbierto ? <Icons.X size={22} /> : <Icons.Menu size={22} />}
        </button>
        <nav
          className={`${menuAbierto ? "flex" : "hidden"} absolute left-3 right-3 top-[calc(100%+8px)] flex-col gap-1 rounded-2xl border border-green-100 bg-white p-4 shadow-xl md:static md:flex md:flex-row md:items-center md:gap-3 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {enlaces.map(({ nombre, ruta }) => (
            <a
              key={ruta}
              href={ruta}
              onClick={() => setMenuAbierto(false)}
              className="rounded-full px-3 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-green-50 hover:text-[#08763b]"
            >
              {nombre}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuAbierto(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#078342] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#006b2d] md:mt-0"
          >
            Contáctanos <Icons.ArrowUpRight size={17} />
          </a>
        </nav>
      </div>
    </header>
  );
}
