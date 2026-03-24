import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar({scrollToSection, HeroRef, AboutMeRef, SkillsRef, ProjectsRef, ContactRef}) {
  const [open, setOpen] = useState(false)

  const navLinks = [
    {name : "Home", ref: HeroRef},
    {name: "About", ref: AboutMeRef},
    {name: "Skills", ref: SkillsRef},
    {name: "Projects", ref: ProjectsRef},
    {name: "Contact" , ref: ContactRef}
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      
      {/* Glass Navbar */}
      <div className=" ">
        <div className="flex items-center justify-between h-16   border border-white/10 bg-white/5 backdrop-blur-sm px-6">
          
          {/* Logo */}
          <h1 className="text-xl font-bold bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            MJ
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-300">
            {navLinks.map((item) => (
              <li
                key={item.name}
                className="hover:text-white  cursor-pointer transition"
                onClick={() => scrollToSection(item.ref)}
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* Mobile Icon */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-2 mx-6 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-lg p-6 space-y-4 text-center">
          {navLinks.map((item) => (
            <li
              key={item.name}
              onClick={() => {scrollToSection(item.ref); setOpen(false)}}
              className="block cursor-pointer text-gray-300 hover:text-white transition"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}