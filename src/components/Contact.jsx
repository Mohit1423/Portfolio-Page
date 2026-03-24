import React from 'react';
import { Mail, Send } from 'lucide-react'; // Using lucide-react for icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Contact = ({ ContactRef}) => {
  return (
    <section ref = {ContactRef} id="contact" className="bg-black text-white py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
   
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Let's <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
          Connect
        </span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:mohitj3874@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-purple-400 transition-colors group">
                  <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-purple-900/20">
                    <Mail size={36} />
                  </div>
                  <span>mohitj3874@gmail.com</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Social Profiles</h3>
              <div className="flex gap-4">
                {/* Social Icons */}
                {[
                  { icon: <FaGithub className='w-8 h-8'/>, link: "https://github.com/Mohit1423" },
                  { icon: <FaLinkedin className='w-8 h-8'/>, link: "https://www.linkedin.com/in/mohit-jhunjhunwala-542a27302/" },
                  { icon: <FaInstagram className='w-8 h-8'/>, link: "https://www.instagram.com/arre.mohit" }
                ].map((social, index) => (
                  <a key={index} href={social.link} className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-purple-500 hover:text-purple-500 transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 focus:outline-none focus:border-purple-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 focus:outline-none focus:border-purple-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 focus:outline-none focus:border-purple-500 transition-colors" placeholder="Project Inquiry" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea rows="4" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 focus:outline-none focus:border-purple-500 transition-colors" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full py-4 px-6 cursor-pointer rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;