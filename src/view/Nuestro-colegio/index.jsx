import {
  Award,
  BookOpen,
  ChevronRight,
  Compass,
  HeartHandshake,
  History,
  GraduationCap,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const hitosHistoricos = [
  {
    año: "Fundación",
    titulo: "Nace un sueño educativo",
    descripcion:
      "Se inician las labores académicas con el compromiso de brindar educación de calidad y acceso al conocimiento para los jóvenes de Acevedo.",
  },
  {
    año: "Crecimiento",
    titulo: "Expansión de la infraestructura",
    descripcion:
      "Construcción y adaptación de nuevas aulas, laboratorios y áreas recreativas para responder a la creciente comunidad estudiantil.",
  },
  {
    año: "Innovación",
    titulo: "Articulación y media técnica",
    descripcion:
      "Implementación de programas pedagógicos modernos, proyectos transversales y formación técnica orientada al desarrollo regional.",
  },
  {
    año: "Actualidad",
    titulo: "Educación que transforma vidas",
    descripcion:
      "Una institución consolidada como referente en valores, rendimiento académico, ciencia, cultura y compromiso social.",
  },
];

const valores = [
  {
    icono: HeartHandshake,
    titulo: "Respeto y Convivencia",
    descripcion:
      "Promovemos la empatía, el diálogo y la tolerancia como bases para una comunidad escolar armónica.",
  },
  {
    icono: GraduationCap,
    titulo: "Excelencia Académica",
    descripcion:
      "Incentivamos la curiosidad intelectual, el pensamiento crítico y la superación personal constante.",
  },
  {
    icono: Users,
    titulo: "Compromiso Social",
    descripcion:
      "Formamos ciudadanos conscientes de su entorno y capacitados para aportar positivamente a su comunidad.",
  },
  {
    icono: Sparkles,
    titulo: "Integridad y Ética",
    descripcion:
      "Guíamos el actuar de nuestros estudiantes mediante principios morales firmes y responsabilidad personal.",
  },
];

export default function Nuestro_colegio() {
  return (
    <div className="min-h-screen bg-[#f8faf7]">
      {/* Banner de Cabecera */}
      <section className="relative overflow-hidden bg-[#006b2d] py-16 text-white sm:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-600/30 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-green-200">
            <a href="/" className="hover:underline">
              Inicio
            </a>
            <ChevronRight size={14} />
            <span>Nuestro Colegio</span>
          </div>

          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Nuestra historia y <span className="text-green-200">propósito.</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-green-50/90 sm:text-lg">
              Conoce las raíces, principios y la visión pedagógica que impulsan
              a la Institución Educativa José Acevedo Gómez en la formación de
              líderes para el futuro.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-20">
        {/* Sección: Reseña Histórica */}
        <section className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#008037]">
              <History size={16} />
              <span>NUESTRA TRAYECTORIA</span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#153b26] sm:text-4xl">
              Una historia construida con esfuerzo, vocación y compromiso.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
              <p>
                La **Institución Educativa José Acevedo Gómez**, ubicada en el
                municipio de Acevedo, Huila, ha sido desde sus inicios un pilar
                fundamental en el desarrollo académico, social y cultural de
                la región.
              </p>
              <p>
                Fundada con el propósito firme de brindar oportunidades de
                aprendizaje integral a niños y jóvenes, la institución ha
                evolucionado constantemente, adaptando sus procesos
                pedagógicos a las exigencias del mundo actual sin perder su
                esencia comunitaria e identidad regional.
              </p>
              <p>
                A lo largo de los años, generaciones de graduados han llevado
                consigo los valores de responsabilidad, trabajo en equipo y
                liderazgo, transformando sus entornos y demostrando que la
                educación es el verdadero motor de cambio.
              </p>
            </div>
          </div>

          {/* Tarjeta destacada de la historia */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-green-100 bg-white p-8 shadow-xl shadow-green-950/5">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-[#008037]">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#153b26]">
                Identidad y Legado
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Llevamos con orgullo el nombre del prócer José Acevedo Gómez,
                inspirando en nuestros estudiantes el amor por la patria, el
                pensamiento crítico y la participación activa en la sociedad.
              </p>
              <div className="mt-6 border-t border-gray-100 pt-6">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Ubicación Institucional
                </span>
                <p className="mt-1 text-sm font-bold text-[#008037]">
                  Acevedo, Huila, Colombia
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección: Misión y Visión */}
        <section className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Misión */}
          <div className="group rounded-3xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#008037] text-white">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold text-[#153b26]">Misión</h3>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Formar seres humanos integrales a través de una educación basada
              en valores, el desarrollo del conocimiento científico, técnico y
              cultural, promoviendo el pensamiento autónomo, la convivencia
              armónica y el compromiso con el desarrollo sostenible de nuestra
              comunidad.
            </p>
          </div>

          {/* Visión */}
          <div className="group rounded-3xl border border-green-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#008037] text-white">
              <Compass size={24} />
            </div>
            <h3 className="text-2xl font-bold text-[#153b26]">Visión</h3>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Consolidarnos como una institución educativa líder en el
              departamento del Huila, reconocida por la excelencia pedagógica,
              la innovación en sus modelos de enseñanza y la formación de
              ciudadanos competentes, éticos y transformadores de la realidad
              social.
            </p>
          </div>
        </section>

        {/* Sección: Línea de tiempo histórica */}
        <section className="mb-20">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#008037]">
              NUESTROS HITOS
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-[#153b26] sm:text-4xl">
              Línea del tiempo institucional
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {hitosHistoricos.map((hito, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:border-green-300 hover:shadow-lg"
              >
                <div>
                  <span className="inline-block rounded-lg bg-green-50 px-3 py-1 text-xs font-bold text-[#008037]">
                    {hito.año}
                  </span>
                  <h4 className="mt-4 text-lg font-bold text-[#153b26]">
                    {hito.titulo}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {hito.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección: Valores Institucionales */}
        <section>
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#008037]">
              PRINCIPIOS QUE NOS GUIAN
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-[#153b26] sm:text-4xl">
              Valores Institucionales
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((v, index) => {
              const IconoVal = v.icono;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-[#008037]">
                    <IconoVal size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-[#153b26]">
                    {v.titulo}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
                    {v.descripcion}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}