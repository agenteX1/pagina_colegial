import { ArrowUpRight, Camera, BookOpen, Landmark } from "lucide-react";

const galeria = [
  {
    id: "nosotros",
    numero: "01",
    categoria: "NUESTRA ESENCIA",
    titulo: "Una comunidad que deja huella.",
    descripcion:
      "Conoce las personas, la historia y los valores que dan vida a nuestra institución.",
    imagen: "/lamine sena.jpg",
    alt: "Comunidad de la institución educativa",
    Icono: Landmark,
    enlace: "#nosotros",
    estilo: "lg:col-span-7 lg:row-span-2",
    imagenEstilo: "h-[340px] sm:h-[440px] lg:h-full lg:min-h-[610px]",
  },
  {
    id: "academia",
    numero: "02",
    categoria: "APRENDER HACIENDO",
    titulo: "El conocimiento abre caminos.",
    descripcion:
      "Experiencias, proyectos y aprendizajes que inspiran nuevas posibilidades.",
    imagen: "/mia colegio.jpeg",
    alt: "Experiencias y actividades académicas",
    Icono: BookOpen,
    enlace: "#academia",
    estilo: "lg:col-span-5",
    imagenEstilo: "h-[280px] sm:h-[340px] lg:h-[295px]",
  },
  {
    id: "noticias",
    numero: "03",
    categoria: "VIDA ESCOLAR",
    titulo: "Aquí pasan grandes cosas.",
    descripcion:
      "Momentos, encuentros y actividades que construyen nuestros recuerdos.",
    imagen: "/Gemini_Generated_Image_y9fxjny9fxjny9fx.jpg",
    alt: "Momentos de la vida institucional",
    Icono: Camera,
    enlace: "#noticias",
    estilo: "lg:col-span-5",
    imagenEstilo: "h-[280px] sm:h-[340px] lg:h-[295px]",
  },
];

function FotoInstitucional({ item }) {
  const Icono = item.Icono;

  return (
    <article
      id={item.id}
      className={`group relative isolate overflow-hidden bg-[#123c27] ${item.estilo}`}
    >
      <a
        href={item.enlace}
        aria-label={`Explorar ${item.titulo}`}
        className="relative block h-full min-h-full"
      >
        <img
          src={item.imagen}
          alt={item.alt}
          loading="lazy"
          className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] ${item.imagenEstilo}`}
        />

        {/* Degradado fotográfico para mejorar la lectura */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/5 transition-opacity duration-300 group-hover:from-black/90" />

        {/* Número editorial */}
        <span className="absolute left-5 top-5 z-10 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-white sm:left-7 sm:top-7">
          <span className="h-px w-7 bg-white/80" />
          {item.numero}
        </span>

        {/* Contenido sobre la fotografía */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white sm:p-7 lg:p-8">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-green-200 sm:text-xs">
            <Icono size={15} strokeWidth={1.7} />
            {item.categoria}
          </div>

          <div className="flex items-end justify-between gap-4">
            <div className="max-w-xl">
              <h3 className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                {item.titulo}
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-white/80 sm:text-base">
                {item.descripcion}
              </p>
            </div>

            <span className="mb-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/60 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#008037]">
              <ArrowUpRight size={21} strokeWidth={1.6} />
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}

export function Contens() {
  return (
    <section
      id="explora"
      className="overflow-hidden bg-white px-5  sm:px-8 sm:py-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Encabezado editorial */}
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-[#008037]">
              <span className="h-px w-8 bg-[#008037]" />
              INSTITUCIÓN EDUCATIVA JOSÉ ACEVEDO GÓMEZ
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-[#153b26] sm:text-5xl lg:text-6xl">
              Nuestra historia
              <br />
              también se <span className="text-[#008037]">vive.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-gray-600 sm:text-base">
            Cada espacio, cada aprendizaje y cada encuentro hacen parte de lo
            que somos. Te invitamos a descubrir la vida de nuestra comunidad
            educativa.
          </p>
        </div>

        {/* Galería asimétrica */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12">
          {galeria.map((item) => (
            <FotoInstitucional key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
