import {
  Bell,
  ChevronRight,
  Hash,
  MessageSquare,
  PlusCircle,
  Search,
  Send,
  Share2,
  ThumbsUp,
  UserPlus,
  Users,
} from "lucide-react";
import { useState } from "react";

// Datos de publicaciones del muro comunitario
const publicacionesIniciales = [
  {
    id: 1,
    autor: "Prof. Alberto Ramírez",
    rol: "Docente de Matemáticas",
    tiempo: "Hace 2 horas",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    contenido: "¡Felicitaciones a los estudiantes clasificados a la fase departamental de las Olimpiadas Matemáticas! Todo el esfuerzo y la dedicación en las mentorías están dando frutos. 🚀📚",
    likes: 28,
    comentarios: 5,
  },
  {
    id: 2,
    autor: "Sofía Valentina Pérez",
    rol: "Estudiante Grado 11°",
    tiempo: "Hace 4 horas",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    contenido: "Hola a todos, estamos organizando el club de lectura para este fin de semana en la biblioteca escolar. ¿Quién se anima a participar en el debate del libro de este mes?",
    likes: 14,
    comentarios: 8,
  },
];

// Datos de chats grupales disponibles
const gruposIniciales = [
  {
    id: 1,
    nombre: "Club de Robótica e Innovación",
    descripcion: "Espacio para coordinar proyectos con Arduino y programación.",
    miembros: 24,
    categoria: "Tecnología",
    unido: false,
  },
  {
    id: 2,
    nombre: "Preparación ICFES Saber 11°",
    descripcion: "Grupo de estudio intensivo, resolución de simulacros y dudas.",
    miembros: 56,
    categoria: "Académico",
    unido: true,
  },
  {
    id: 3,
    nombre: "Semillero de Teatro y Danza",
    descripcion: "Ensayos, expresión corporal y organización de eventos culturales.",
    miembros: 19,
    categoria: "Cultura",
    unido: false,
  },
  {
    id: 4,
    nombre: "Deportistas I.E.J.A.G.",
    descripcion: "Convocatorias y entrenamientos de fútbol, baloncesto y voleibol.",
    miembros: 42,
    categoria: "Deportes",
    unido: false,
  },
];

export default function Comunidad() {
  const [seccionActiva, setSeccionActiva] = useState("muro");
  const [publicaciones, setPublicaciones] = useState(publicacionesIniciales);
  const [nuevoPost, setNuevoPost] = useState("");
  const [grupos, setGrupos] = useState(gruposIniciales);

  // Estados para crear un nuevo grupo
  const [mostrarModalGrupo, setMostrarModalGrupo] = useState(false);
  const [nombreNuevoGrupo, setNombreNuevoGrupo] = useState("");
  const [descNuevoGrupo, setDescNuevoGrupo] = useState("");
  const [catNuevoGrupo, setCatNuevoGrupo] = useState("General");

  // Manejar creación de publicación
  const handleCrearPost = (e) => {
    e.preventDefault();
    if (!nuevoPost.trim()) return;

    const post = {
      id: Date.now(),
      autor: "Tú (Estudiante)",
      rol: "Comunidad I.E.J.A.G.",
      tiempo: "Justo ahora",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      contenido: nuevoPost,
      likes: 0,
      comentarios: 0,
    };

    setPublicaciones([post, ...publicaciones]);
    setNuevoPost("");
  };

  // Manejar unirse o salir de un grupo
  const toggleUnirseGrupo = (id) => {
    setGrupos(
      grupos.map((g) => (g.id === id ? { ...g, unido: !g.unido, miembros: g.unido ? g.miembros - 1 : g.miembros + 1 } : g))
    );
  };

  // Manejar creación de nuevo grupo
  const handleCrearGrupo = (e) => {
    e.preventDefault();
    if (!nombreNuevoGrupo.trim()) return;

    const nuevoG = {
      id: Date.now(),
      nombre: nombreNuevoGrupo,
      descripcion: descNuevoGrupo || "Nuevo grupo creado por la comunidad.",
      miembros: 1,
      categoria: catNuevoGrupo,
      unido: true,
    };

    setGrupos([nuevoG, ...grupos]);
    setNombreNuevoGrupo("");
    setDescNuevoGrupo("");
    setMostrarModalGrupo(false);
  };

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
            <span>Comunidad Educativa</span>
          </div>

          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Conecta, comparte y <span className="text-green-200">colabora.</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-green-50/90 sm:text-lg">
              El espacio social de la Institución Educativa José Acevedo Gómez para interactuar, debatir y unirse a grupos de interés estudiantil.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Pestañas de Navegación Social */}
        <div className="mb-10 flex border-b border-gray-200">
          <button
            type="button"
            onClick={() => setSeccionActiva("muro")}
            className={`flex items-center gap-2 border-b-2 px-6 py-3.5 text-sm font-bold transition-all ${
              seccionActiva === "muro"
                ? "border-[#008037] text-[#008037]"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            <MessageSquare size={18} />
            Muro Comunitario
          </button>
          <button
            type="button"
            onClick={() => setSeccionActiva("chats")}
            className={`flex items-center gap-2 border-b-2 px-6 py-3.5 text-sm font-bold transition-all ${
              seccionActiva === "chats"
                ? "border-[#008037] text-[#008037]"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            <Users size={18} />
            Chats y Grupos ({grupos.filter((g) => g.unido).length})
          </button>
        </div>

        {/* VISTA 1: MURO COMUNITARIO */}
        {seccionActiva === "muro" && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Columna de Publicaciones */}
            <div className="space-y-6 lg:col-span-8">
              {/* Crear Publicación */}
              <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
                <form onSubmit={handleCrearPost}>
                  <textarea
                    rows="3"
                    value={nuevoPost}
                    onChange={(e) => setNuevoPost(e.target.value)}
                    placeholder="¿Qué quieres compartir con la comunidad escolar hoy?"
                    className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800 placeholder-gray-400 focus:border-[#008037] focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20"
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-400">Comparte con respeto y buena actitud.</span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#008037] px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-[#006b2d]"
                    >
                      <Send size={15} />
                      Publicar
                    </button>
                  </div>
                </form>
              </div>

              {/* Feed de Posts */}
              {publicaciones.map((post) => (
                <div key={post.id} className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img src={post.avatar} alt={post.autor} className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <h3 className="text-base font-bold text-[#153b26]">{post.autor}</h3>
                      <p className="text-xs text-gray-500">
                        {post.rol} • <span className="text-[#008037]">{post.tiempo}</span>
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-gray-700 sm:text-base">{post.contenido}</p>

                  <div className="mt-6 flex items-center gap-6 border-t border-gray-100 pt-4 text-xs font-semibold text-gray-500">
                    <button
                      type="button"
                      onClick={() =>
                        setPublicaciones(
                          publicaciones.map((p) => (p.id === post.id ? { ...p, likes: p.likes + 1 } : p))
                        )
                      }
                      className="flex items-center gap-1.5 transition hover:text-[#008037]"
                    >
                      <ThumbsUp size={16} />
                      {post.likes} Me gusta
                    </button>
                    <div className="flex items-center gap-1.5">
                      <MessageSquare size={16} />
                      {post.comentarios} Comentarios
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar Lateral */}
            <div className="space-y-6 lg:col-span-4">
              <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-[#153b26]">Normas de Convivencia</h3>
                <ul className="mt-4 space-y-3 text-xs leading-relaxed text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#008037]">✓</span> Mantén un lenguaje respetuoso y cordial.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#008037]">✓</span> Comparte información útil y académica.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#008037]">✓</span> Apoya las iniciativas de tus compañeros.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* VISTA 2: CHATS Y GRUPOS */}
        {seccionActiva === "chats" && (
          <div className="space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-[#153b26]">Grupos de la Comunidad</h2>
                <p className="text-sm text-gray-600">Únete a chats grupales de estudio, deportes, tecnología y cultura.</p>
              </div>
              <button
                type="button"
                onClick={() => setMostrarModalGrupo(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#008037] px-5 py-3 text-xs font-bold text-white shadow-md transition hover:bg-[#006b2d]"
              >
                <PlusCircle size={17} />
                Crear Nuevo Grupo
              </button>
            </div>

            {/* Cuadrícula de Grupos */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {grupos.map((grupo) => (
                <div
                  key={grupo.id}
                  className="flex flex-col justify-between rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-lg bg-green-50 px-3 py-1 text-xs font-bold text-[#008037]">
                        {grupo.categoria}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Users size={14} /> {grupo.miembros} miembros
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-[#153b26]">{grupo.nombre}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">{grupo.descripcion}</p>
                  </div>

                  <div className="mt-6 border-t border-gray-100 pt-4">
                    {grupo.unido ? (
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600">
                          ✓ Te has unido al grupo
                        </span>
                        <button
                          type="button"
                          onClick={() => toggleUnirseGrupo(grupo.id)}
                          className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                        >
                          Salir
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => toggleUnirseGrupo(grupo.id)}
                        className="w-full rounded-xl bg-[#008037] py-2.5 text-xs font-bold text-white transition hover:bg-[#006b2d]"
                      >
                        Unirse al Chat Grupal
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal para Crear Grupo */}
        {mostrarModalGrupo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
              <h3 className="text-xl font-bold text-[#153b26]">Crear Nuevo Grupo</h3>
              <p className="mt-1 text-xs text-gray-500">Crea un espacio para debatir y colaborar con otros compañeros.</p>

              <form onSubmit={handleCrearGrupo} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700">Nombre del Grupo</label>
                  <input
                    type="text"
                    required
                    value={nombreNuevoGrupo}
                    onChange={(e) => setNombreNuevoGrupo(e.target.value)}
                    placeholder="Ej. Amantes de la Lectura"
                    className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:border-[#008037] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700">Categoría</label>
                  <select
                    value={catNuevoGrupo}
                    onChange={(e) => setCatNuevoGrupo(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:border-[#008037] focus:bg-white focus:outline-none"
                  >
                    <option value="Académico">Académico</option>
                    <option value="Tecnología">Tecnología</option>
                    <option value="Cultura">Cultura</option>
                    <option value="Deportes">Deportes</option>
                    <option value="General">General</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700">Descripción</label>
                  <textarea
                    rows="3"
                    value={descNuevoGrupo}
                    onChange={(e) => setDescNuevoGrupo(e.target.value)}
                    placeholder="Breve detalle del propósito del grupo..."
                    className="mt-1 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm focus:border-[#008037] focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="mt-6 flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setMostrarModalGrupo(false)}
                    className="rounded-xl bg-gray-100 px-4 py-2.5 text-xs font-bold text-gray-600 transition hover:bg-gray-200"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-[#008037] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#006b2d]"
                  >
                    Crear Grupo
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
