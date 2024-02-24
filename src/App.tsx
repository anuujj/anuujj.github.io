import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Drawer from "./Components/Drawer";
import Footer from "./Components/Footer";

function App() {
  const validPages = ["about", "resume", "projects", "contact"];
  let initialPage = window.location.pathname.substring(1);
  if (initialPage === "" || !validPages.includes(initialPage)) {
    initialPage = "about";
    window.history.replaceState({}, "", "/about");
  }

  const [page, setPage] = useState(initialPage);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const changePage = (newPage: string) => {
    if (newPage === page) return;
    setPage(newPage);
    window.history.pushState(null, "", newPage);
  };

  useEffect(() => {
    const handlePopState = () => {
      const newPage = window.location.pathname.substring(1) || "about";
      setPage(newPage);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
  return (
    <>
      <Drawer
        isOpen={isMenuOpen}
        openFrom="top"
        onClose={() => setMenuOpen(false)}
      >
        <ul>
          <li>about</li>
          <li>resume</li>
        </ul>
      </Drawer>
      <Header
        route={changePage}
        page={page}
        openMenu={() => setMenuOpen(true)}
      />
      {page === "about" && <About />}
      {page === "resume" && <Resume />}
      {page === "projects" && <Projects />}
      {page === "contact" && <Contact />}
      <Footer/>
    </>
  );
}

export default App;
