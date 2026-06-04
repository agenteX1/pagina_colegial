import { useState } from "react";
import "./App.css";
import { Contents } from "./components/contents";
import { Footer } from "./components/footer";
import { Head } from "./components/head";

function App() {
  return (
    <>
      <Head />
      <Contents />
      <Footer />
    </>
  );
}

export default App;
