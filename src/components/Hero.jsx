import React from 'react'
import DarkVeil from './DarkVeil'
import Navbar from './Navbar'
import TextType from './TextType';
import { Download } from 'lucide-react';
import GradientText from './GradientText';



function Hero({scrollToSection,HeroRef,ProjectsRef}) {
  return (
    <>
    <div ref={HeroRef} style={{ width: '100%', height: '100vh', position: 'absolute' }}>
            <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.5}
            scanlineFrequency={0}
            warpAmount={0}
            />

    </div>
    
   <section className="relative min-h-screen flex items-center justify-center px-6 text-center overflow-hidden">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full top-[-100px] left-[-100px] animate-pulse" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[95vw]">

        {/* Badge */}
        <div className="mb-8 mt-2 inline-flex items-center gap-2 px-8 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-md text-purple-200 backdrop-blur-md animate-fadeIn">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Available for work
        </div>

        {/* BIG Heading — scales UP on large screens */}
        <h1 className="font-bold text-white leading-[1.05] tracking-tight
          text-[12vw] sm:text-[11vw] md:text-[10vw] lg:text-[9vw] xl:text-[8vw]">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 text-transparent bg-clip-text 
            hover:scale-105 transition duration-300 inline-block">
            <GradientText
              colors={["#5227FF","#FF9FFC","#B19EEF"]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class font-extrabold font-extrabold text-white leading-[1.05] tracking-tight
          text-[12vw] sm:text-[11vw] md:text-[10vw] lg:text-[9vw] xl:text-[8vw]"
            >
              Mohit
            </GradientText>
          </span>
        </h1>

        {/* Gradient line */}
        <div className="mx-auto mt-4 h-[3px] w-[50vw] max-w-sm bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />

        {/* Typing text */}
        <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-300 h-14">
          <TextType 
            text={["Backend Developer", "Frontend Developer", "Full Stack Developer"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
            deletingSpeed={50}
          />
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed animate-fadeIn delay-200">
          I build modern, scalable web applications with clean UI and smooth user experiences.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={()=>scrollToSection(ProjectsRef)} className="w-full sm:w-auto px-10 py-4 rounded-xl text-lg
            bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold
            hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] 
            transition-all cursor-pointer duration-300">
            Explore Work →
          </button>
          <a href="/resume.pdf" download>
              <button className="w-full sm:w-auto px-10 py-4 rounded-xl text-lg
                border border-gray-600 text-gray-300 font-semibold
                hover:bg-white/10 hover:border-purple-200  hover:scale-105
                transition-all cursor-pointer duration-300 flex items-center gap-3 justify-center">
                <Download/> Download Resume
              </button>
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
    </section> 
    </>
    
    
  )
}

export default Hero


