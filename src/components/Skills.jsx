import React from 'react'

const skills = [
  { name: "HTML",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node JS",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express JS",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Redux",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },,
  { name: "Postman",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
];

function Skills({SkillsRef}) {
  return (
    <section ref={SkillsRef} className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 py-24" id="skills">

      {/* Section label */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
        <span className="text-xs tracking-[0.3em] uppercase text-purple-400 font-medium">What I Know</span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
      </div>

      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 text-center tracking-tight">
        Skills &{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
          Technologies
        </span>
      </h2>

      <p className="text-gray-400 text-center max-w-xl mb-16 text-base leading-relaxed">
        Technologies I use to build modern, scalable web applications
      </p>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5 w-full max-w-5xl">
        {skills.map((skill, i) => (
          <div
  key={i}
  className="flex flex-col items-center justify-center gap-3 
    p-5 rounded-2xl cursor-default border border-white/10 bg-white/5"
  onMouseEnter={e => {
    e.currentTarget.style.transition = 'transform 0.08s ease-out, box-shadow 0.08s ease-out, border-color 0.08s ease-out';
    e.currentTarget.style.transform = 'scale(1.12)';
    e.currentTarget.style.boxShadow = '0 0 30px rgba(168,85,247,0.4), 0 0 60px rgba(168,85,247,0.15)';
    e.currentTarget.style.borderColor = 'rgba(168,85,247,0.6)';
    const img = e.currentTarget.querySelector('img');
    img.style.transition = 'filter 0.08s ease-out, transform 0.08s ease-out, opacity 0.08s ease-out';
    img.style.filter = 'grayscale(0%) drop-shadow(0 0 10px rgba(255,255,255,0.5))';
    img.style.transform = 'scale(1.2)';
    img.style.opacity = '1';
  }}
  onMouseLeave={e => {
    e.currentTarget.style.transition = 'transform 5.4s ease-out, box-shadow 5.4s ease-out, border-color 5.4s ease-out';
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
    const img = e.currentTarget.querySelector('img');
    img.style.transition = 'filter 5.4s ease-out, transform 5.4s ease-out, opacity 5.4s ease-out';
    // img.style.filter = 'grayscale(100%)';
    img.style.transform = 'scale(1)';
    img.style.opacity = '0.5';
  }}
>
  <img
    src={skill.icon}
    alt={skill.name}
    className="w-12 h-12 object-contain grayscale opacity-50"
  />
  <span className="text-xs text-gray-500 font-medium text-center">
    {skill.name}
  </span>
</div>
        ))}
      </div>

    </section>
  )
}

export default Skills