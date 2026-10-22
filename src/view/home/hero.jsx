import * as Icons from "lucide-react";

const valores = [
  {
    Icon: Icons.BookOpen,
    titulo: "Formación académica",
    descripcion: "Aprendizaje significativo para la vida.",
  },
  {
    Icon: Icons.UsersRound,
    titulo: "Convivencia y valores",
    descripcion: "Una comunidad que se respeta y se apoya.",
  },
  {
    Icon: Icons.Leaf,
    titulo: "Desarrollo integral",
    descripcion: "Talento, creatividad y participación.",
  },
  {
    Icon: Icons.Star,
    titulo: "Proyección al futuro",
    descripcion: "Estudiantes preparados para nuevos desafíos.",
  },
];

export default function Hero() {
  return (
    <>
      {/* PORTADA PRINCIPAL */}
      <section
        id="inicio"
        className="relative mx-auto mt-3 h-[390px] max-w-[1500px] overflow-hidden rounded-[1.5rem] bg-[#052f1b] text-white shadow-sm sm:mx-5 sm:h-[430px] lg:mx-8 lg:h-[470px]"
      >
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2000&q=90"
          alt="Estudiantes en una institución educativa"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Degradados */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031f12]/95 via-[#06351f]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031f12]/50 via-transparent to-transparent" />

        {/* Texto principal */}
        <div className="relative z-10 flex h-full items-center px-6 sm:px-10 lg:px-14">
          <div className="max-w-[590px]">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[9px] font-semibold tracking-[0.16em] backdrop-blur-sm sm:text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9de9b9]" />
              UNA COMUNIDAD QUE INSPIRA
            </div>

            <h1 className="text-4xl font-extrabold leading-[0.99] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Educación
              <span className="block text-[#a3e9bd]">que transforma</span>
              vidas
            </h1>

            <p className="mt-4 max-w-[370px] text-xs leading-[1.5] text-white/90 sm:text-sm">
              Formamos personas con valores, pensamiento crítico y compromiso
              con su entorno, construyendo juntos un mejor futuro.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="#institucion"
                className="inline-flex items-center gap-2 rounded-full bg-[#078342] px-4 py-2.5 text-[10px] font-bold text-white shadow-lg transition hover:bg-[#09964b] sm:px-5 sm:text-xs"
              >
                Conoce nuestro colegio
                <Icons.ArrowRight size={15} />
              </a>

              <a
                href="#video-institucional"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/10 px-4 py-2.5 text-[10px] font-bold text-white backdrop-blur-sm transition hover:bg-white/20 sm:text-xs"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[#064e2a]">
                  <Icons.Play size={10} fill="currentColor" />
                </span>
                Ver video
              </a>
            </div>
          </div>
        </div>

        {/* Indicadores sobre la fotografía */}
        <div className="absolute bottom-3 right-3 z-20 hidden items-center gap-1 rounded-[1.2rem] border border-white/15 bg-[#172522]/70 px-3 py-3 backdrop-blur-md sm:flex lg:bottom-4 lg:right-5 lg:px-5 lg:py-4">
          {[
            {
              Icon: Icons.Landmark,
              titulo: "+ 40 años",
              texto: "de historia",
            },
            {
              Icon: Icons.UsersRound,
              titulo: "Comunidad",
              texto: "comprometida",
            },
            {
              Icon: Icons.BookOpen,
              titulo: "Educación",
              texto: "integral",
            },
          ].map(({ Icon, titulo, texto }) => (
            <div
              key={titulo}
              className="flex w-[78px] flex-col items-center text-center lg:w-[90px]"
            >
              <Icon size={23} className="mb-2 fill-white/90" />
              <p className="text-[10px] font-bold lg:text-xs">{titulo}</p>
              <p className="text-[9px] text-white/90 lg:text-[10px]">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TARJETAS DE VALORES INSTITUCIONALES */}
      <section
        id="valores"
        className="mx-auto grid max-w-[1400px] grid-cols-2 gap-3 px-5 py-5 sm:mx-8 sm:grid-cols-4 sm:gap-4 sm:px-0 sm:py-6"
      >
        {valores.map(({ Icon, titulo, descripcion }) => (
          <article
            key={titulo}
            className="rounded-2xl border border-white bg-white/80 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-950/5 sm:p-5 lg:p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dff2e5] text-[#08763b] shadow-sm sm:h-11 sm:w-11">
              <Icon size={23} strokeWidth={2.2} />
            </div>

            <h2 className="mt-3 text-xs font-extrabold tracking-tight text-[#10242c] sm:text-sm">
              {titulo}
            </h2>

            <p className="mt-1 whitespace-normal text-[10px] leading-[1.5] text-gray-600 sm:text-xs">
              {descripcion}
            </p>
          </article>
        ))}
      </section>

      {/* PRESENTACIÓN DE LA INSTITUCIÓN */}
      <section
        id="institucion"
        className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20"
      >
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#e5eee4] px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-[#42654d]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#168044]" />
            NUESTRA ESENCIA
          </div>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#102c1d] sm:text-4xl lg:text-5xl">
            Un lugar para aprender, crecer y construir el futuro.
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
            Creemos en el potencial de cada estudiante. Promovemos una formación
            integral que combina aprendizaje, convivencia, responsabilidad y
            compromiso con nuestra comunidad.
          </p>

          <a
            href="#comunidad"
            className="mt-6 inline-flex items-center gap-2 font-bold text-[#08763b] transition-all hover:gap-4"
          >
            Conoce nuestra comunidad
            <Icons.ArrowRight size={18} />
          </a>
        </div>

        <div
          id="video-institucional"
          className="rounded-[1.8rem] border border-green-100 bg-white p-3 shadow-xl shadow-green-900/10"
        >
          <div className="flex items-center gap-2 px-3 pb-4 pt-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#078342]" />
            <span className="text-xs font-bold tracking-[0.16em] text-[#08763b]">
              VIDEO INSTITUCIONAL
            </span>
          </div>

          <video
            className="aspect-video w-full rounded-[1.3rem] bg-gray-950 object-cover"
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
