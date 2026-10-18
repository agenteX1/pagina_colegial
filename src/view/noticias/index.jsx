import {
  ArrowUpRight,
  Calendar,
  Clock,
  Search,
  Tag,
  Newspaper,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const noticiasData = [
  {
    id: 1,
    categoria: "ACADÉMICO",
    fecha: "15 Oct 2026",
    tiempoLectura: "3 min de lectura",
    titulo: "Destacada participación institucional en la Feria de Ciencia y Tecnología",
    resumen:
      "Nuestros estudiantes de media técnica presentaron proyectos de robótica e innovación enfocados en solucionar necesidades ambientales de nuestra comunidad en Acevedo.",
    imagen:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    destacada: true,
  },
  {
    id: 2,
    categoria: "VIDA ESCOLAR",
    fecha: "12 Oct 2026",
    tiempoLectura: "2 min de lectura",
    titulo: "Jornada de integración y fortalecimiento de valores institucionales",
    resumen:
      "A través de actividades deportivas y culturales, la comunidad educativa compartió una jornada centrada en el respeto, el trabajo en equipo y la convivencia pacífica.",
    imagen:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    destacada: false,
  },
  {
    id: 3,
    categoria: "INSTITUCIONAL",
    fecha: "08 Oct 2026",
    tiempoLectura: "4 min de lectura",
    titulo: "Inician inscripciones y matrículas para el próximo año lectivo",
    resumen:
      "Conoce las fechas clave, la documentación requerida y el paso a paso para formar parte de la familia de la Institución Educativa José Acevedo Gómez.",
    imagen:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    destacada: false,
  },
  {
    id: 4,
    categoria: "CULTURA",
    fecha: "01 Oct 2026",
    tiempoLectura: "3 min de lectura",
    titulo: "Encuentro folclórico y expresión artística estudiantil",
    resumen:
      "Una muestra llena de talento, música y danza tradicional donde los alumnos expresaron el orgullo cultural de nuestra región.",
    imagen:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
    destacada: false,
  },
];

const categorias = [
  "Todas",
  "Académico",
  "Vida Escolar",
  "Institucional",
  "Cultura",
];

export default function Noticias() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  const noticiaPrincipal = noticiasData.find((n) => n.destacada) || noticiasData[0];

  const noticiasFiltradas = noticiasData.filter((noticia) => {
    const coincideCategoria =
      categoriaActiva === "Todas" ||
      noticia.categoria.toLowerCase() === categoriaActiva.toLowerCase();
    const coincideBusqueda =
      noticia.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      noticia.resumen.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

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
            <span>Noticias y Eventos</span>
          </div>

          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Novedades y actualidad{" "}
              <span className="text-green-200">institucional.</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-green-50/90 sm:text-lg">
              Mantente informado con los acontecimientos, reconocimientos,
              eventos y noticias más relevantes de nuestra comunidad educativa.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Noticia Principal / Destacada */}
        {categoriaActiva === "Todas" && !busqueda && noticiaPrincipal && (
          <section className="mb-16">
            <div className="mb-4 flex items-center gap-2 text-xs font-bold tracking-widest text-[#008037]">
              <Newspaper size={16} />
              <span>NOTICIA DESTACADA</span>
            </div>

            <article className="group relative overflow-hidden rounded-3xl border border-green-100 bg-white shadow-xl shadow-green-950/5 transition duration-300 hover:shadow-2xl lg:grid lg:grid-cols-12 lg:items-stretch">
              <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-auto">
                <img
                  src={noticiaPrincipal.imagen}
                  alt={noticiaPrincipal.titulo}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-full bg-[#008037] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                  {noticiaPrincipal.categoria}
                </span>
              </div>

              <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-5">
                <div>
                  <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-[#008037]" />
                      {noticiaPrincipal.fecha}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="text-[#008037]" />
                      {noticiaPrincipal.tiempoLectura}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-bold leading-snug text-[#153b26] sm:text-3xl">
                    {noticiaPrincipal.titulo}
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {noticiaPrincipal.resumen}
                  </p>
                </div>

                <div className="mt-8 border-t border-gray-100 pt-6">
                  <a
                    href={`#noticia-${noticiaPrincipal.id}`}
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-[#008037] transition hover:gap-3"
                  >
                    Leer noticia completa
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </article>
          </section>
        )}

        {/* Filtros y Buscador */}
        <section className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Categorías */}
          <div className="flex flex-wrap gap-2">
            {categorias.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoriaActiva(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 ${
                  categoriaActiva === cat
                    ? "bg-[#008037] text-white shadow-md shadow-green-800/20"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-green-300 hover:bg-green-50/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Buscador */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Buscar noticias..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:border-[#008037] focus:outline-none focus:ring-2 focus:ring-green-500/20"
            />
          </div>
        </section>

        {/* Grilla de Noticias */}
        {noticiasFiltradas.length > 0 ? (
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {noticiasFiltradas.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-950/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={item.imagen}
                    alt={item.titulo}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold tracking-wider text-[#008037] backdrop-blur-sm shadow-sm">
                    <Tag size={12} />
                    {item.categoria}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} className="text-[#008037]" />
                        {item.fecha}
                      </span>
                      <span>•</span>
                      <span>{item.tiempoLectura}</span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold leading-snug text-[#153b26] transition-colors group-hover:text-[#008037]">
                      {item.titulo}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">
                      {item.resumen}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-gray-100 pt-4">
                    <a
                      href={`#noticia-${item.id}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#008037] transition hover:gap-3"
                    >
                      Leer artículo
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center">
            <p className="text-base font-semibold text-gray-600">
              No se encontraron noticias con los criterios seleccionados.
            </p>
            <button
              type="button"
              onClick={() => {
                setCategoriaActiva("Todas");
                setBusqueda("");
              }}
              className="mt-4 rounded-xl bg-[#008037] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#006b2d]"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </main>
    </div>
  );
}