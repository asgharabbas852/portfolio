import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/NavBar";
//import Particles from "react-tsparticles";
//import particlesConfig from "./components/particles";
//import {loadFull} from "tsparticles";

function App() {

const location = useLocation();
console.log(location);

  // const handleInit = async (main) => {
  //   console.log(main); // Log to check if main is loaded
  //   await loadFull(main);
  // };
  
// const rederParticlesJsInHomePage = location.pathname === "/";
  return (
    <div className="App">
      {/* Particles background */}
     
{/*  rederParticlesJsInHomePage && (   {/* <Particles id="particles" options={particlesConfig} init={handleInit} /> */}

      {/* Navbar */}
      <Navbar />

      {/* Main page content */}

      <div className="App-main-page-content">

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
      
    </div>
  );
}

export default App;
