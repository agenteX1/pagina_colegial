import { Routes, Route, Outlet } from "react-router-dom";
import { Home } from "../view/home";
import { Contents } from "../components/contents";
import Noticias from "../view/noticias";

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
      </Route>
    </Routes>
  );
}
