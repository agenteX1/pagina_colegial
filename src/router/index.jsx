import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "../view/home";
import { Contents } from "../components/contents";
import Noticias from "../view/noticias";
import Nuestro_colegio from "../view/Nuestro-colegio";
import Academia from "../view/academia";
import Comunidad from "../view/comunidad/Comunidad";

export default function Router() {
  return (
    <Routes>
      <Route
        element={
          <Contents>
            <Outlet />
          </Contents>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/Nuestro-colegio" element={<Nuestro_colegio />}/>
        <Route path="/Academia" element={<Academia />}/>
        <Route path="/comunidad" element={<Comunidad />}/>
      </Route>
    </Routes>
  );
}
