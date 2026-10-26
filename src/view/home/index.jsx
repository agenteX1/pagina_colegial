import {
  ArrowUpRight,
  BookOpen,
  HeartHandshake,
  Sprout,
  Star,
} from "lucide-react";
import Hero from "./hero";
import Contens from "./contens";

const valores = [
  {
    Icono: BookOpen,
    titulo: "Formación académica",
    texto: "Aprendizaje significativo para la vida.",
  },
  {
    Icono: HeartHandshake,
    titulo: "Convivencia y valores",
    texto: "Una comunidad que se respeta y se apoya.",
  },
  {
    Icono: Sprout,
    titulo: "Desarrollo integral",
    texto: "Talento, creatividad y participación.",
  },
  {
    Icono: Star,
    titulo: "Proyección al futuro",
    texto: "Estudiantes preparados para nuevos desafíos.",
  },
];

export function Home() {
  return (
    <main className="overflow-hidden bg-white text-[#12251a]">
      <Hero />
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
        {valores.map(({ Icono, titulo, texto }) => (
          <article
            key={titulo}
            className="group rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-lg hover:shadow-green-900/5"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e4f4e8] text-[#08763b] transition group-hover:bg-[#08763b] group-hover:text-white">
              <Icono size={23} strokeWidth={1.8} />
            </span>
            <h3 className="mt-5 font-bold text-[#14291c]">{titulo}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">{texto}</p>
          </article>
        ))}
      </section>
      <Contens />

      <section
        id="comunidad"
        className="bg-white px-4 py-6 sm:px-8 sm:py-8 lg:py-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="group relative isolate h-[230px] overflow-hidden rounded-[1.5rem] bg-[#064e2a] shadow-lg sm:h-[270px] lg:h-[300px]">
            {/* Fotografía de fondo */}
            <img
              src="/mia colegio.jpeg"
              alt="Comunidad educativa José Acevedo Gómez"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Degradado para mejorar la lectura */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#003b23]/95 via-[#064e2a]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#032616]/30 via-transparent to-transparent" />

            {/* Decoración circular */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -bottom-32 h-64 w-64 rounded-full border border-white/20 sm:h-80 sm:w-80"
            />

            {/* Contenido */}
            <div className="relative z-10 flex h-full items-center px-6 py-5 sm:px-10 sm:py-8 lg:px-14">
              <div className="max-w-[540px]">
                <h2 className="text-2xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-3xl lg:text-4xl">
                  La educación se construye
                  <span className="block text-[#b8efb5]">entre todos.</span>
                </h2>

                <p className="mt-3 max-w-[420px] text-[10px] leading-[1.5] text-white/90 sm:mt-4 sm:text-xs lg:text-sm">
                  Estudiantes, familias, docentes y comunidad: cada persona
                  aporta a la construcción de un entorno donde aprender tiene
                  sentido y el futuro comienza a tomar forma.
                </p>

                <a
                  href="#contacto"
                  className="mt-4 inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-[10px] font-bold text-[#075b2b] shadow-md transition-all duration-300 hover:bg-[#b8efb5] sm:mt-5 sm:px-5 sm:py-2.5 sm:text-xs"
                >
                  Conecta con nosotros
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Home;
