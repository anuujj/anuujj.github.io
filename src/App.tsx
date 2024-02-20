import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./pages/About";

function App() {
  const [page, setPage] = useState("about");
  const changePage = (page:string) => {
    setPage(page);
    window.history.pushState(null, '', page);
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
      {page==="resume" && <h1>Resume</h1>}
      {page==="projects" && <h1>Projects</h1>}
      {page==="contact" && <h1>Contact</h1>}
    </>
  );
}

export default App;
