import React from 'react';
import { Download, Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { certificates, projects, skills } from './data';
import profileImage from './Profile.jpg';
import resume from './Ayush_resume.pdf'; 


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-[#0056b6]">AG.</span>
            <div className="space-x-6">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-[#0056b6] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Hi, I'm Ayush Goswami
            </h1>
            <p className="text-xl text-gray-600">
              Software Engineer | Full-Stack Development | Machine Learning & AI Enthusiast
            </p>
            <div className="flex space-x-4">
              <a
                href={resume}
                className="inline-flex items-center px-6 py-3 bg-[#0056b6] text-white rounded-lg hover:bg-[#004494] transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-[#0056b6] text-[#0056b6] rounded-lg hover:bg-[#0056b6] hover:text-white transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={profileImage}
              alt="Ayush Goswami"
              className="w-64 h-64 rounded-full mx-auto object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
            I am a dedicated and curious software developer with a solid foundation in full-stack development, 
            machine learning, and real-time data processing. Currently pursuing a B. Tech in 
            Computer Science Engineering at VIT Chennai, I am eager to apply my knowledge in building impactful solutions 
            while continuously learning and growing in the field. Expected graduation: 2026.
            </p>
            
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[#0056b6] pl-4">
                  <h4 className="text-xl font-medium">Vellore Institute of Technology (VIT Chennai)</h4>
                  <p className="text-gray-600">B. Tech in Computer Science Engineering</p>
                  <p className="text-gray-500">Expected graduation: 2026</p>
                </div>
                <div className="border-l-4 border-[#0056b6] pl-4">
                  <h4 className="text-xl font-medium">Navyug Convent Sr. sec. School</h4>
                  <p className="text-gray-600">12th Grade</p>
                  <p className="text-gray-500">2022 — 83%</p>
                </div>
                <div className="border-l-4 border-[#0056b6] pl-4">
                  <h4 className="text-xl font-medium">Amity International School</h4>
                  <p className="text-gray-600">10th Grade</p>
                  <p className="text-gray-500">2020 — 90%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#0056b6] hover:underline"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold text-[#0056b6]">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="mailto:ayushhhgos@gmail.com"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#0056b6]"
            >
              <Mail className="w-5 h-5" />
              <span>ayushhhgos@gmail.com</span>
            </a>
            <a
              href="tel:+918375935484"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#0056b6]"
            >
              <Phone className="w-5 h-5" />
              <span>+91 8375935484</span>
            </a>
            <a
              href="https://github.com/Ayush4998"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#0056b6]"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-goswami-4564a9278/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-[#0056b6]"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">Ayush Goswami</p>
          <p className="text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;