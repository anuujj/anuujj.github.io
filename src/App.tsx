import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Drawer from "./Components/Drawer";
import Footer from "./Components/Footer";
import Navlist from "./Components/Navlist";

function App() {
  const validPages = ["about", "resume", "projects", "contact"];
  let initialPage = window.location.pathname.substring(1);
  if (initialPage === "" || !validPages.includes(initialPage)) {
    initialPage = "about";
    window.history.replaceState({}, "", "/about");
  }

  const [page, setPage] = useState(initialPage);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef<{ closeDrawer: () => void }>(null);
  const handleMenuSelection = (newPage: string) => {
    if (drawerRef.current) {
      drawerRef.current.closeDrawer();
    }
    changePage(newPage);
  };
  const changePage = (newPage: string) => {
    if (newPage === page) return;

    if (page === "about") {
      window.history.pushState(null, "", newPage);
    } else if (newPage !== "about") {
      window.history.replaceState(["/about"], "", newPage);
    } else {
      window.history.replaceState({}, "", newPage);
    }
    setPage(newPage);
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
        ref={drawerRef}
        isOpen={isMenuOpen}
        openFrom="top"
        onClose={() => setMenuOpen(false)}
      >
        <Navlist route={handleMenuSelection} page={page} />
      </Drawer>
      <Header
        route={changePage}
        page={page}
        openMenu={() => setMenuOpen(true)}
      />
      {page === "about" && <About route={changePage} />}
      {page === "resume" && <Resume />}
      {page === "projects" && <Projects />}
      {page === "contact" && <Contact />}
      <Footer />
    </>
  );
}

export default App;
