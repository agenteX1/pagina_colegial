import * as Icons from "lucide-react";
import { useState } from "react";

export function Head() {
  const [viewmenu, setviewmenu] = useState(false);
  /* FUNCION PARA OCULTA O DESPLEGAR EL MENU */
  const Toogle = () => {
    setviewmenu;
  };

  return (
    <header className="header">
      <div className="conten-logo">
        <img
          className="img-logo"
          src="https://www.joseacevedo.edu.co/wp-content/uploads/2020/05/Escudo_IEJAG_png-1-915x1024.png"
          alt="simbolo del colegio"
        />
        <h1>I.E Jose Acevedo Gomez</h1>
      </div>
      <button onClick={() => setviewmenu((prev) => !prev)}>
        <Icons.Menu />
      </button>
      {viewmenu && (
        <nav className="nav">
          <li>
            <Icons.House className="house" />
            <a href="">inicio</a>
          </li>
          <li>
            <Icons.University />
            <a href="nuestro-colegio">nuestro colegio</a>
          </li>
          <li>
            <Icons.Target />
            <a href="horizonte institucional">horizonte institucional</a>
          </li>
          <li>
            <Icons.GraduationCap />
            <a href="academia">academia</a>
          </li>
          <li>
            <Icons.FolderKanban />
            <a href="proyectos">proyectos</a>
          </li>
          <li>
            <Icons.Users />
            <a href="convivencia">convivencia</a>
          </li>
          <li>
            <Icons.Brain />
            <a href="izada de bandera">izada de bandera</a>
          </li>
          <li>
            <Icons.Newspaper />
            <a href="comunicados y temas de interes">Noticias</a>
          </li>
          <li>
            <Icons.GlobeLock />
            <a href="redes sociales">redes sociales</a>
          </li>
        </nav>
      )}
    </header>
  );
}
