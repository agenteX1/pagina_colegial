import { Contens } from "./contens";
import Hero from "./hero";

export function Home() {
  return (
    <div>
      <Hero />
      <nav className="nav">
        <a href="#inicio">inicio</a>
        <a href="nuestro-colegio">nuestro colegio</a>
        <a href="horizonte institucional">horizonte institucional</a>
        <a href="academia">academia</a>
        <a href="proyectos">proyectos</a>
        <a href="convivencia">convivencia</a>
        <a href="izada de bandera">izada de bandera</a>
        <a href="comunicados y temas de interes">
          comunicados y temas de interes
        </a>
        <a href="redes sociales">redes sociales</a>
        <a href="recuerdos">recuerdos</a>
      </nav>
      <Contens />
    </div>
  );
}
