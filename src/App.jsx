import "./App.css";
import { Contents } from "./components/contents";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
