import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const validPages = ["about", "resume", "projects", "contact"];
  let initialPage = window.location.pathname.substring(1);
  if (initialPage === "" || !validPages.includes(initialPage)) {
    initialPage = "about";
    window.history.replaceState({}, "", "/about");
  }

  const [page, setPage] = useState(initialPage);
  const changePage = (newPage:string) => {
    if(newPage === page) return; 
    setPage(newPage);
    window.history.pushState(null, '', newPage);
  };

  useEffect(() => {
    const handlePopState = () => {
      const newPage = window.location.pathname.substring(1) || 'about';
      setPage(newPage);
    };
  
    window.addEventListener('popstate', handlePopState);
  
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  return (
    <>
      <Header route={changePage} page={page}/>
      {page==="about" && <About />}
      {page==="resume" && <Resume />}
      {page==="projects" && <Projects />}
      {page==="contact" && <Contact />}
    </>
  );
}

export default App;
