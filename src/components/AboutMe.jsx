import React from "react";
import MagicRings from "./MagicRings";
function AboutMe({ AboutMeRef }) {
  const stats = [
    { icon: "⚡", value: "15+", label: "Technologies", color: "text-cyan-400" },
    {
      icon: "🚀",
      value: "10+",
      label: "Projects Built",
      color: "text-purple-400",
    },
    { icon: "🎯", value: "2+", label: "Years Coding", color: "text-pink-400" },
    {
      icon: "🔥",
      value: "100%",
      label: "Commitment",
      color: "text-fuchsia-400",
    },
  ];

  return (
    <>
      <div 
        ref={AboutMeRef}
        className="bg-black"
        style={{ width: "100%", height: "100vh", position: "absolute" }}
      >
        <MagicRings
          color="#fc42ff"
          colorTwo="#42fcff"
          ringCount={4}
          speed={1}
          attenuation={10}
          lineThickness={2}
          baseRadius={0.5}
          radiusStep={0.1}
          scaleRate={0.1}
          opacity={1}
          blur={0}
          noiseAmount={0.1}
          rotation={0}
          ringGap={2}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={false}
          mouseInfluence={0.2}
          hoverScale={1.2}
          parallax={0.05}
          clickBurst={false}
        />
      </div>
      <div className="  relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
          <span className="text-xs tracking-[0.3em] uppercase text-purple-400 font-medium">
            About Me
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 text-center tracking-tight">
          Who I{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
            Am
          </span>
        </h2>

        <p className="text-gray-400 text-center max-w-xl mb-14 text-base leading-relaxed">
          A backend-focused developer who loves building robust systems and
          clean APIs. I bridge logic and design to ship products that actually
          work.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center p-5 rounded-2xl 
                border bg-white/5 backdrop-blur-md
                transition-all duration-300 group cursor-default
                ${i === 0 ? "border-white/10 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]" : ""}
                ${i === 1 ? "border-white/10 hover:border-purple-400/70 hover:bg-purple-500/10 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]" : ""}
                ${i === 2 ? "border-white/10 hover:border-pink-400/70 hover:bg-pink-500/10 hover:shadow-[0_0_25px_rgba(244,114,182,0.3)]" : ""}
                ${i === 3 ? "border-white/10 hover:border-fuchsia-400/70 hover:bg-fuchsia-500/10 hover:shadow-[0_0_25px_rgba(232,121,249,0.3)]" : ""}
              `}
            >
              {/* Icon with unique animation per card */}
              <span
                className={`text-2xl mb-2 inline-block transition-transform duration-300
                ${i === 0 ? "group-hover:animate-[shake_0.4s_ease-in-out]" : ""}
                ${i === 1 ? "group-hover:animate-[spin_0.6s_linear]" : ""}
                ${i === 2 ? "group-hover:animate-[bounce_0.5s_ease-in-out]" : ""}
                ${i === 3 ? "group-hover:animate-[ping_0.6s_ease-out]" : ""}
              `}
              >
                {stat.icon}
              </span>

              <span
                className={`text-3xl font-extrabold ${stat.color} 
                     group-hover:scale-125 transition-transform duration-300`}
              >
                {stat.value}
              </span>
              <span className="text-xs text-gray-400 mt-1 text-center group-hover:text-white transition-colors duration-300">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutMe;
