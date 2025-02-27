import React from "react";
import Navbar from "./Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="sections">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        

        <section id="contact">
          <Contact /> 
        </section>

        <section id="footer">
          <Footer /> 
        </section>
      </div>
    </div>
  );
};

export default App;
