import {
  Award,
  BookOpen,
  ChevronRight,
  GraduationCap,
  Medal,
  Star,
  Trophy,
  UserCheck,
  Users,
} from "lucide-react";
import { useState } from "react";

// Datos de Máximos Puntajes ICFES
const mejoresIcfes = [
  {
    id: 1,
    nombre: "Jose Luis Capera",
    año: "Promoción 2026",
    puntaje: "339 / 500",
    destaque: "Mejor ICFES institucional",
    foto: "public/Capera.jpeg",
  },
  {
    id: 2,
    nombre: "Isabella Arguello",
    año: "Promoción 2026",
    puntaje: "338 / 500",
    destaque: "",
    carrera: "",
    foto: "public/isabella.jpeg",
  },
  {
    id: 3,
    nombre: "Camila Muñoz Plazas",
    año: "Promoción 2026",
    puntaje: "332 / 500",
    destaque: "Puntaje Sobresaliente Ciencias Sociales",
    carrera: "",
    foto: "public/camila.jpeg",
  },
];

// Datos de Rectores y Coordinadores
const directivosHistoricos = [
  {
    id: 1,
    nombre: "Lucas Meneses",
    cargo: "Rector Institucional",
    periodo: "2026 - Presente",
    logro:
      "Lideró la modernización tecnológica y la articulación con programas técnicos.",
    foto: "public/rector.jpeg",
  },
  {
    id: 2,
    nombre: "Mayra Zapata Lizcano",
    cargo: "Coordinadora",
    periodo: "2026 - Presente",
    logro:
      "Diseñó el plan de fortalecimiento pedagógico Saber 11 y proyectos transversales.",
    foto: "public/cordi.jpeg",
  },
];

// Datos de Docentes Destacados
const docentesDestacados = [
  {
    id: 1,
    nombre: "Marcela Cristina Rodríguez",
    area: "Ciencias Naturales",
    reconocimiento: "Docente del Año 2026",
    descripcion:
      "Reconocido por su pedagogía innovadora y constante preparación de los estudiantes para pruebas de estado.",
    foto: "public/profe cristina.jpeg",
  },
  {
    id: 2,
    nombre: "Sandro Guaca",
    area: "ciencias sociales",
    reconocimiento: "catalizador de las ciencias pilíticas y representante para las campañas de elecciones de el gobierno estudiantil",
    descripcion:
      ".",
    foto: "public/WhatsApp Image 2026-10-23 at 5.21.48 PM.jpeg",
  },
  {
    id: 3,
    nombre: "",
    area: "",
    reconocimiento: "",
    descripcion:
      "",
    foto: "",
  },
];

export default function Academia() {
  const [tabActiva, setTabActiva] = useState("icfes");

  return (
    <div className="min-h-screen bg-[#f8faf7]">
      {/* Banner de Cabecera */}
      <section className="relative overflow-hidden bg-[#006b2d] py-16 text-white sm:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-600/30 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-green-200">
            <a href="/" className="hover:underline">
              Inicio
            </a>
            <ChevronRight size={14} />
            <span>Academia</span>
          </div>

          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Excelencia académica y{" "}
              <span className="text-green-200">reconocimientos.</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-green-50/90 sm:text-lg">
              Homenaje a los estudiantes destacados en las pruebas ICFES, a
              nuestros maestros ejemplares y a los directivos que han guiado con
              éxito el rumbo institucional.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Pestañas de Selección */}
        <div className="mb-12 flex flex-wrap justify-center gap-3 border-b border-gray-200 pb-6">
          <button
            type="button"
            onClick={() => setTabActiva("icfes")}
            className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all ${
              tabActiva === "icfes"
                ? "bg-[#008037] text-white shadow-lg shadow-green-900/20"
                : "bg-white text-gray-600 border border-gray-200 hover:border-green-300 hover:bg-green-50/50"
            }`}
          >
            <Trophy size={18} />
            Mejores Puntajes ICFES
          </button>

          <button
            type="button"
            onClick={() => setTabActiva("docentes")}
            className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all ${
              tabActiva === "docentes"
                ? "bg-[#008037] text-white shadow-lg shadow-green-900/20"
                : "bg-white text-gray-600 border border-gray-200 hover:border-green-300 hover:bg-green-50/50"
            }`}
          >
            <Award size={18} />
            Docentes Destacados
          </button>

          <button
            type="button"
            onClick={() => setTabActiva("directivos")}
            className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all ${
              tabActiva === "directivos"
                ? "bg-[#008037] text-white shadow-lg shadow-green-900/20"
                : "bg-white text-gray-600 border border-gray-200 hover:border-green-300 hover:bg-green-50/50"
            }`}
          >
            <UserCheck size={18} />
            Rectores y Coordinadores
          </button>
        </div>

        {/* SECCIÓN 1: MEJORES ICFES */}
        {tabActiva === "icfes" && (
          <section className="space-y-8">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#008037]">
                CUADRO DE HONOR
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#153b26]">
                Orgullo Estudiantil - Pruebas Saber 11°
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Estudiantes que dejaron en alto el nombre de la Institución
                Educativa José Acevedo Gómez.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {mejoresIcfes.map((estudiante) => (
                <div
                  key={estudiante.id}
                  className="group relative overflow-hidden rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-green-950/5"
                >
                  <div className="relative mb-5 aspect-square overflow-hidden rounded-2xl bg-gray-100">
                    <img
                      src={estudiante.foto}
                      alt={estudiante.nombre}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-[#008037] px-3 py-1 text-xs font-extrabold text-white shadow-md">
                      <Medal size={14} />
                      {estudiante.puntaje}
                    </div>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#008037]">
                    {estudiante.año}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-[#153b26]">
                    {estudiante.nombre}
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-green-700 bg-green-50 inline-block px-2.5 py-1 rounded-md">
                    {estudiante.destaque}
                  </p>
                  <p className="mt-3 text-xs text-gray-500">
                    Sigue su camino en:{" "}
                    <span className="font-semibold text-gray-700">
                      {estudiante.carrera}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECCIÓN 2: DOCENTES DESTACADOS */}
        {tabActiva === "docentes" && (
          <section className="space-y-8">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#008037]">
                VOCACIÓN Y ENSEÑANZA
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#153b26]">
                Nuestros Maestros Ejemplares
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Docentes cuya labor pedagógica ha dejado una huella imborrable
                en las aulas.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {docentesDestacados.map((docente) => (
                <div
                  key={docente.id}
                  className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition duration-300 hover:shadow-xl"
                >
                  <div className="mb-5 aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                    <img
                      src={docente.foto}
                      alt={docente.nombre}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-[#008037]">
                    <Star size={14} fill="currentColor" />
                    {docente.area}
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-[#153b26]">
                    {docente.nombre}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-gray-500">
                    {docente.reconocimiento}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {docente.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECCIÓN 3: RECTORES Y COORDINADORES */}
        {tabActiva === "directivos" && (
          <section className="space-y-8">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#008037]">
                LIDERAZGO INSTITUCIONAL
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-[#153b26]">
                Rectores y Equipo Directivo
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Líderes que han transformado y guiado la gestión académica de la
                institución.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {directivosHistoricos.map((directivo) => (
                <div
                  key={directivo.id}
                  className="flex flex-col gap-6 rounded-3xl border border-green-100 bg-white p-7 shadow-sm sm:flex-row sm:items-center"
                >
                  <img
                    src={directivo.foto}
                    alt={directivo.nombre}
                    className="h-32 w-32 shrink-0 rounded-2xl object-cover"
                  />
                  <div>
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-[#008037]">
                      {directivo.periodo}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-[#153b26]">
                      {directivo.nombre}
                    </h3>
                    <p className="text-sm font-semibold text-gray-500">
                      {directivo.cargo}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {directivo.logro}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
