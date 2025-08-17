import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Project />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
