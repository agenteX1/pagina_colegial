import { Footer } from "./footer";
import { Head } from "./head";

export function Contents({ children }) {
  return (
    <>
      <Head />
      {children}
      <Footer />
    </>
  );
}
