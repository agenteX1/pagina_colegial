import * as Icons from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="relative isolate flex min-h-[590px] items-center overflow-hidden bg-[#008037] text-white sm:min-h-[650px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#003d1a]/95 via-[#005b29]/85 to-[#008037]/30" />

        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-3 text-[10px] font-extrabold tracking-[0.22em] text-green-200 sm:text-xs">
              <span className="h-0.5 w-8 bg-white" />
              INSTITUCIÓN EDUCATIVA · ACEVEDO, HUILA
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              El futuro comienza con una{" "}
              <span className="text-green-200">gran educación.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Formamos personas con conocimiento, valores y compromiso,
              preparadas para construir un mejor futuro y transformar su
              comunidad.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#nosotros"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-extrabold text-[#008037] shadow-lg transition hover:-translate-y-1 hover:bg-green-50"
              >
                Conoce nuestro colegio
                <Icons.ArrowRight size={19} />
              </a>

              <a
                href="#institucion"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-white/50 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <Icons.PlayCircle size={21} />
                Ver video institucional
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="institucion"
        className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20"
      >
        <div>
          <div className="flex items-center gap-3 text-xs font-extrabold tracking-[0.2em] text-[#008037]">
            <span className="h-0.5 w-8 bg-[#008037]" />
            NUESTRA ESENCIA
          </div>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#006b2d] sm:text-5xl">
            Una institución que deja huella.
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600">
            Creemos en el potencial de cada estudiante. Promovemos una formación
            integral que combina aprendizaje, convivencia, responsabilidad y
            compromiso con nuestra comunidad.
          </p>

          <a
            href="#nosotros"
            className="mt-7 inline-flex items-center gap-2 font-bold text-[#008037] transition hover:gap-4"
          >
            Conoce nuestra historia
            <Icons.ArrowRight size={18} />
          </a>
        </div>

        <div className="rounded-3xl border border-green-100 bg-white p-3 shadow-xl shadow-green-900/10">
          <div className="flex items-center gap-2 px-3 pb-4 pt-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#008037]" />
            <span className="text-xs font-extrabold tracking-[0.16em] text-[#008037]">
              VIDEO INSTITUCIONAL
            </span>
          </div>

          <video
            className="aspect-video w-full rounded-2xl bg-gray-950 object-cover"
            src="/video webb.mp4"
            controls
            preload="metadata"
          >
            Tu navegador no puede reproducir este video.
          </video>
        </div>
      </section>
    </>
  );
}
