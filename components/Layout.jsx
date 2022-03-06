import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
