import Hero from "./hero";
import { Contens } from "./contens";
import { ArrowUpRight, BookOpen, HeartHandshake, Sprout } from "lucide-react";

export function Home() {
  return (
    <main>
      {/* Presentación principal */}
      <Hero />

      {/* Galería institucional */}
      <Contens />

      {/* Franja editorial */}
      <section className="relative border-y border-green-100 bg-[#f6f8f4]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-3">
          <div className="flex items-start gap-4 border-b border-green-100 px-6 py-8 sm:px-8 md:border-b-0 md:border-r">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-[#008037] shadow-sm">
              <BookOpen size={23} strokeWidth={1.6} />
            </span>
            <div>
              <h3 className="font-semibold text-[#173d28]">
                Aprender cada día
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                El conocimiento como punto de partida para descubrir nuevas
                posibilidades.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 border-b border-green-100 px-6 py-8 sm:px-8 md:border-b-0 md:border-r">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-[#008037] shadow-sm">
              <HeartHandshake size={23} strokeWidth={1.6} />
            </span>
            <div>
              <h3 className="font-semibold text-[#173d28]">
                Crecer en comunidad
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                La convivencia, el respeto y la colaboración también forman
                parte del aprendizaje.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 px-6 py-8 sm:px-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-[#008037] shadow-sm">
              <Sprout size={23} strokeWidth={1.6} />
            </span>
            <div>
              <h3 className="font-semibold text-[#173d28]">
                Construir el futuro
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Acompañar a cada estudiante en el desarrollo de sus capacidades
                y aspiraciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Invitación a la comunidad */}
      <section
        id="comunidad"
        className="relative bg-white px-5 sm:px-8 sm:py-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative isolate overflow-hidden bg-[#006b2d]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10 sm:h-[28rem] sm:w-[28rem]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-12 h-56 w-56 rounded-full border border-white/10 sm:h-80 sm:w-80"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 h-1.5 w-1/3 bg-white/20"
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl px-7 py-12 sm:px-12 sm:py-16 ">
                <p className="flex items-center gap-3 text-[11px] font-bold tracking-[0.22em] text-green-200 sm:text-xs">
                  <span className="h-px w-8 bg-green-200" />
                  INSTITUCIÓN EDUCATIVA JOSÉ ACEVEDO GÓMEZ
                </p>

                <h2 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  La educación se construye
                  <span className="block text-green-200">entre todos.</span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                  Estudiantes, familias, docentes y comunidad: cada persona
                  aporta a la construcción de un entorno donde aprender tiene
                  sentido y el futuro comienza a tomar forma.
                </p>
              </div>

              <div className="relative px-7 pb-10 sm:px-12 lg:px-0 lg:pb-16 lg:pr-16">
                <a
                  href="#contacto"
                  className="group inline-flex min-h-14 items-center justify-center gap-4 border border-white/50 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#006b2d]"
                >
                  Conecta con nosotros
                  <ArrowUpRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
