import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
function App() {

  const HeroRef = useRef(null);
  const AboutMeRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactRef = useRef(null);
 
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
  
    <div className='bg-black'>
        <Navbar scrollToSection={scrollToSection} HeroRef={HeroRef} AboutMeRef={AboutMeRef} SkillsRef={SkillsRef} ProjectsRef={ProjectsRef} ContactRef={ContactRef} / >
        <Hero scrollToSection= {scrollToSection} ProjectsRef={ProjectsRef} HeroRef={HeroRef}/>
        <AboutMe AboutMeRef={AboutMeRef}/>
        <Skills SkillsRef={SkillsRef}/>
        <Projects ProjectsRef={ProjectsRef}/>
        <Contact ContactRef={ContactRef}/>
    </div>
    
  )
}

export default App