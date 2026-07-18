import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SkillsMarquee from "./components/SkillsMarquee";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import CurrentWork from "./components/CurrentWork";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <SkillsMarquee />
        <About />
        <Expertise />
        <Experience />
        <CurrentWork />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
