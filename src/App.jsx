import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects"
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <Container/>
      
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>
      <div className="pt-4 text-center">
        <h1 className="text-5xl font-bold text-emerald-400">
          ------------------------------------------------------
        </h1>
      </div>
    </div>
  );
}

export default App;