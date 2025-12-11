import { useRef } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Skill from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sections = {
    Hero: heroRef,
    About: aboutRef,
    Skills: skillsRef,
    Projects: projectsRef,
    Contact: contactRef,
  };

  return (
    <>
      <Nav sections={sections} />
      <div ref={heroRef}><Hero sections={sections} /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={skillsRef}><Skill /></div>
      <div ref={projectsRef}><Project /></div>
      <div ref={contactRef}><Contact /></div>
      <Footer />
    </>
  );

}
