import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import About from "./pages/About";

function App() {
  const [page, setPage] = useState("about");
  const getPage = () => {
    switch (page) {
      case "about":
        return <About/>;
      case "resume":
        return <h1>Resume</h1>;
      case "projects":
        return <h1>Projects</h1>;
      case "contact":
        return <h1>Contact</h1>;
      default:
        return <h1>About</h1>;
    }
  }
  return <>
  <Header />
  {getPage()}
  </>;
}

export default App;
