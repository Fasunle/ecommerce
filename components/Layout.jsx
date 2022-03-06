import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Nav />
      <main className="relative top-40 md:top-0">{children}</main>
      <Footer />
    </div>
  );
}
