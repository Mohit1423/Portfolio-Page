import React from 'react';
import { ExternalLink, ExternalLinkIcon } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { FaGithub } from 'react-icons/fa';
import Reherse from '../assets/Reherse.png';
import JobPortal from '../assets/JobPortal.png';
import CompressDecompress from '../assets/CompressDecompress.png';
import FirefoxExtension from '../assets/FirefoxExtension.png';
const projects = [
  {
    id: "01",
    title: "Reherse-AI_Interview_Trainer",
    description: "Reherse is an intelligent web application that helps users practice and improve their job interview skills through AI-generated questions, speech-to-text analysis, webcam-based behavior analysis, and detailed performance feedback.",
    tags: ["ReactJS", "NodeJS", "MongoDB", "Tailwind CSS", "JavaScript", "Redux","Cloudinary"],
    image: Reherse, 
    liveLink: "https://reherse-ai-interview-trainer.vercel.app",
    codeLink: "https://github.com/Mohit1423/Reherse-AI_Interview_Trainer",
  },
  {
    id: "02",
    title: "JobPortal",
    description: "A full-stack job portal with recruiter and job-seeker roles, enabling end-to-end job posting and application flow while demonstrating authentication, state management, and client-server communication",
    tags: ["ReactJS", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "NodeJS","CookieJS","Cloudinary"],
    image: JobPortal,
    liveLink: "https://job-portal-six-amber.vercel.app",
    codeLink: "https://github.com/Mohit1423/Job-Portal",
  },
  {
    id: "03",
    title: "Compression-Decompression",
    description: "Web application for compressing and decompressing files with advanced algorithms and user-friendly.",
    tags: ["React", "Tailwind CSS", "NodeJS", "Express.js", "MongoDB", "Tailwind CSS","RLE and Huffmann"],
    image: CompressDecompress,
    liveLink: "https://compression-decompression.vercel.app",
    codeLink: "https://github.com/Mohit1423/Compression-Decompression",
  },
  {
    id: "04",
    title: "Mail Tracking Extension",
    description: "Easily track when your emails are opened using a simple Firefox extension and your own private tracking server. Works seamlessly with Gmail and Yahoo Mail, with a clean dashboard and real-time updates.",
    tags: ["Firefox Extension", "HTML", "CSS", "JavaScript","NodeJS"],
    image: FirefoxExtension,
    liveLink: "https://github.com/infinitin007/Mail-Tracker-Extension",
    codeLink: "https://github.com/infinitin007/Mail-Tracker-Extension",
  },

];

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-[#111111] rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col  h-full">
      {/* Image Container with Hover Overlay */}
      <div className="relative h-60 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Project Number Badge (Top Right) */}
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white/70 text-xs font-bold px-2.5 py-1 rounded-full border border-white/10">
          {project.id}
        </div>

        {/* HOVER OVERLAY: This is the effect you requested */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a 
            href={project.liveLink}
            className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors"
          >
            <ExternalLinkIcon size={16} />
            Live Demo
          </a>
          <a 
            href={project.codeLink}
            className="flex items-center gap-2 bg-[#1a1a1a] text-white px-5 py-2 rounded-full font-semibold text-sm border border-white/10 hover:bg-[#252525] transition-colors"
          >
            <FaGithub size={16} />
            Code
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        
        {/* Tech Stack Tags */}
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-[#1a1a1a] text-white/80 text-[11px] font-medium rounded-md border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = ({ProjectsRef}) => {
  return (
    <section ref={ProjectsRef} className="bg-black min-h-screen py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
          Project's
        </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and passion for 
            creating exceptional web experiences.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid px-16 py-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#060010"
                borderRadius={40}
                glowRadius={50}
                glowIntensity={1}
                coneSpread={30}
                animated={false}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
                >
            <ProjectCard key={project.id} project={project} />
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;