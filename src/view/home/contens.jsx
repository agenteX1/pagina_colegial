import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const galeria = [
  {
    id: "nosotros",
    numero: "01",
    categoria: "NUESTRA ESENCIA",
    titulo: "Una comunidad que deja huella.",
    descripcion:
      "Conoce las personas, la historia y los valores que dan vida a nuestra institución.",
    imagen: "public/ft colegio.jpeg",
    alt: "Comunidad de la institución educativa",
    enlace: "#institucion",
  },
  {
    id: "academia",
    numero: "02",
    categoria: "APRENDER HACIENDO",
    titulo: "El conocimiento abre caminos.",
    descripcion:
      "Experiencias, proyectos y aprendizajes que inspiran nuevas posibilidades.",
    imagen: "public/WhatsApp Image 2026-10-23 at 5.21.48 PM (1).jpeg",
    alt: "Experiencias y actividades académicas",
    enlace: "#academia",
  },
  {
    id: "noticias",
    numero: "03",
    categoria: "VIDA ESCOLAR",
    titulo: "Aquí pasan grandes cosas.",
    descripcion:
      "Momentos, encuentros y actividades que construyen nuestros recuerdos.",
    imagen: "public/el hueso.jpeg",
    alt: "Momentos de la vida institucional",
    enlace: "#noticias",
  },
];

export default function Contens() {
  const carruselRef = useRef(null);
  const [indiceActivo, setIndiceActivo] = useState(0);
  const irA = (indice) => {
    const carrusel = carruselRef.current;
    const tarjeta = carrusel?.children[indice];
    if (!carrusel || !tarjeta) return;
    carrusel.scrollTo({
      left: tarjeta.offsetLeft - carrusel.offsetLeft,
      behavior: "smooth",
    });
    setIndiceActivo(indice);
  };
  const actualizarIndice = () => {
    const carrusel = carruselRef.current;
    if (!carrusel) return;
    const tarjetas = Array.from(carrusel.children);
    let indice = 0,
      menorDistancia = Infinity;
    tarjetas.forEach((tarjeta, i) => {
      const distancia = Math.abs(
        tarjeta.offsetLeft - carrusel.offsetLeft - carrusel.scrollLeft,
      );
      if (distancia < menorDistancia) {
        menorDistancia = distancia;
        indice = i;
      }
    });
    setIndiceActivo(indice);
  };
  return (
    <section
      id="explora"
      className="overflow-hidden bg-[#f8faf6] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 flex flex-col justify-between gap-7 sm:mb-12 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#168044]">
              Conoce más
            </p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#10251a] sm:text-5xl lg:text-6xl">
              Nuestra historia
              <br />
              también se <span className="text-[#168044]">vive.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-gray-600 sm:text-base">
            Cada espacio, cada aprendizaje y cada encuentro hacen parte de lo
            que somos. Te invitamos a descubrir la vida de nuestra comunidad
            educativa.
          </p>
        </div>
        <div
          ref={carruselRef}
          onScroll={actualizarIndice}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Galería de la institución educativa"
        >
          {galeria.map((item) => (
            <article
              key={item.id}
              className="group w-[88%] shrink-0 snap-start sm:w-[70%] lg:w-[calc(33.333%-14px)]"
            >
              <a
                href={item.enlace}
                aria-label={`Conocer más: ${item.titulo}`}
                className="block overflow-hidden rounded-[1.6rem] border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10"
              >
                <div className="relative h-[260px] overflow-hidden bg-gray-100 sm:h-[300px]">
                  <img
                    src={item.imagen}
                    alt={item.alt}
                    loading="lazy"
                    draggable="false"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-5 rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-white backdrop-blur-sm">
                    {item.numero} · {item.categoria}
                  </span>
                  <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#08763b] shadow-md transition-transform group-hover:rotate-45">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-bold leading-snug tracking-tight text-[#10251a] sm:text-2xl">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.descripcion}
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
        <div className="mt-7 flex items-center justify-between border-t border-gray-200 pt-5">
          <div
            className="flex items-center gap-2"
            aria-label={`Diapositiva ${indiceActivo + 1} de ${galeria.length}`}
          >
            {galeria.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => irA(i)}
                aria-label={`Ir a la diapositiva ${i + 1}`}
                aria-current={indiceActivo === i ? "true" : undefined}
                className={`h-2 rounded-full transition-all ${indiceActivo === i ? "w-8 bg-[#08763b]" : "w-2 bg-gray-300 hover:bg-gray-500"}`}
              />
            ))}
            <span className="ml-2 text-xs tabular-nums text-gray-500">
              {String(indiceActivo + 1).padStart(2, "0")} /{" "}
              {String(galeria.length).padStart(2, "0")}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => irA(Math.max(0, indiceActivo - 1))}
              disabled={indiceActivo === 0}
              aria-label="Fotografía anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-[#08763b] hover:text-[#08763b] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() =>
                irA(Math.min(galeria.length - 1, indiceActivo + 1))
              }
              disabled={indiceActivo === galeria.length - 1}
              aria-label="Fotografía siguiente"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-[#08763b] hover:text-[#08763b] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
