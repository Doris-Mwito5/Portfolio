"use client";
import { useEffect, useState } from 'react';
import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,
  FaLinkedin, FaGithub, FaTwitter, FaInstagram,
  FaCode, FaServer, FaDatabase, FaTools,
  FaCheckCircle, FaPiggyBank, FaLock
} from "react-icons/fa";
import { motion, Variants } from 'framer-motion';

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  interface ContactItem {
    icon: React.ReactNode;
    title: string;
    content: React.ReactNode;
    link?: string;
  }

  const contactItems: ContactItem[] = [
    { 
      icon: <FaMapMarkerAlt className="text-2xl" />, 
      title: "Location", 
      content: "Nairobi, Kenya" 
    },
    { 
      icon: <FaPhoneAlt className="text-2xl" />, 
      title: "Phone", 
      content: "+254 712 345 678", 
      link: "tel:+254712345678" 
    },
    { 
      icon: <FaEnvelope className="text-2xl" />, 
      title: "Email", 
      content: "kawiramwito@example.com", 
      link: "mailto:kawiramwito@example.com" 
    },
    { 
      icon: <div className="text-2xl">🌐</div>, 
      title: "Socials", 
      content: (
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/kawira-mwito-backend-developer/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0e76a8] transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Doris-Mwito5" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition">
            <FaGithub />
          </a>
          <a href="https://x.com/MwitoDoris" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2] transition">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/kawiramwito" target="_blank" rel="noopener noreferrer" className="hover:text-[#C13584] transition">
            <FaInstagram />
          </a>
        </div>
      ) 
    }
  ];

  const skills = [
    { 
      icon: <FaServer className="text-4xl" />, 
      title: "Backend Systems", 
      items: ["Go (Golang)", "Python", "Node.js", "REST/GraphQL"] 
    },
    { 
      icon: <FaDatabase className="text-4xl" />, 
      title: "Data & Storage", 
      items: ["PostgreSQL", "MySQL", "Redis", "MongoDB"] 
    },
    { 
      icon: <FaTools className="text-4xl" />, 
      title: "DevOps", 
      items: ["Docker", "Kubernetes", "AWS", "CI/CD"] 
    },
    { 
      icon: <FaCode className="text-4xl" />, 
      title: "Architecture", 
      items: ["Microservices", "System Design", "Clean Architecture", "DDD"] 
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] text-gray-800 font-sans scroll-smooth">
      {/* Navbar */}
      <header className="bg-white/80 backdrop-blur-md text-gray-800 py-4 px-6 fixed w-full top-0 left-0 z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <span className="text-2xl font-bold relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-500 relative">
                <span className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-white opacity-20 animate-shimmer bg-[length:200%_100%]"></span>
                Kawira Mwito
              </span>
            </span>
          </motion.div>
          <ul className="flex space-x-8 font-medium text-lg">
            {['home', 'about', 'skills', 'projects', 'contact'].map((id, index) => (
              <motion.li 
                key={id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <a
                  href={`#${id}`}
                  className={`transition-all duration-300 px-2 py-1 rounded ${
                    activeSection === id 
                      ? 'text-white bg-emerald-500 shadow-md' 
                      : 'hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center min-h-screen pt-16 px-4 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-teal-100 to-emerald-100 opacity-40 blur-3xl"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-600 to-green-500">
              Hi there, 
            </span>
            <div className="text-4xl mb-6">👋</div>
            <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 font-extrabold">
              I&apos;m DORIS KAWIRA MWITO
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto text-gray-700 mb-8">
            A Software engineer with a passion for building robust backend systems that scale. 
            I thrive at the intersection of technical excellence and continuous learning, 
            currently leveraging Go for high-performance solutions while maintaining 
            adaptability across the evolving tech landscape.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600 sm:text-4xl mb-12"
          >
            About Me
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl shadow-lg border border-teal-100">
              <h3 className="text-xl font-semibold mb-4 text-emerald-700">Professional Journey</h3>
              <p className="text-gray-700 leading-relaxed">
                I&apos;m a passionate backend engineer with a deep interest in solving complex problems and building systems that scale.
                I thrive in environments that value clean code, efficient architecture, and high performance.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl shadow-lg border border-teal-100">
              <h3 className="text-xl font-semibold mb-4 text-emerald-700">Beyond Code</h3>
              <p className="text-gray-700 leading-relaxed">
                Outside work, I love exploring new technologies, contributing to open-source projects, 
                and mentoring aspiring developers. When not coding, you&apos;ll find me hiking or reading about system design patterns.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-8 bg-gradient-to-br from-teal-50 to-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600 sm:text-4xl mb-12"
          >
            My Expertise
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-teal-100 flex flex-col items-center text-center"
              >
                <div className="bg-gradient-to-r from-teal-100 to-emerald-100 p-4 rounded-full mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-emerald-700">{skill.title}</h3>
                <ul className="space-y-1 text-gray-700">
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600 sm:text-4xl mb-12"
          >
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Banking System */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-emerald-500 hover:shadow-xl transition-all"
            >
              <div className="flex items-start mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <FaPiggyBank className="text-emerald-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Core Banking System</h3>
                  <p className="text-emerald-500 text-sm">Financial Operations</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                Full-featured banking application implementing account management, 
                fund transfers, transaction history, and balance verification.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <h4 className="font-medium text-sm text-gray-500 mb-2">Features</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-emerald-500 mr-2 text-xs" />
                      Account management
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-emerald-500 mr-2 text-xs" />
                      Fund transfers
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-emerald-500 mr-2 text-xs" />
                      Transaction ledger
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-gray-500 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs">Go</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs">PostgreSQL</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs">REST API</span>
                  </div>
                </div>
              </div>

              <a 
                href="https://github.com/Doris-Mwito5/Banking" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium"
              >
                <FaGithub className="mr-2" /> View Project
              </a>
            </motion.div>

            {/* Auth Service */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-emerald-400 hover:shadow-xl transition-all"
            >
              <div className="flex items-start mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <FaLock className="text-emerald-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Banking Auth Service</h3>
                  <p className="text-emerald-500 text-sm">JWT Authentication</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                Secure authentication microservice implementing JWT tokens, 
                role-based access control, and refresh token rotation.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <h4 className="font-medium text-sm text-gray-500 mb-2">Features</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-emerald-500 mr-2 text-xs" />
                      Token generation
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-emerald-500 mr-2 text-xs" />
                      Role-based access
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-emerald-500 mr-2 text-xs" />
                      Secure hashing
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-gray-500 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs">Go</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs">JWT</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs">REST API</span>
                  </div>
                </div>
              </div>

              <a 
                href="https://github.com/Doris-Mwito5/banking-auth" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium"
              >
                <FaGithub className="mr-2" /> View Project
              </a>
            </motion.div>

            {/* Todo List App */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-emerald-300 hover:shadow-xl transition-all"
            >
              <div className="flex items-start mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <FaCheckCircle className="text-emerald-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Todo List App</h3>
                  <p className="text-emerald-500 text-sm">Task Management</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                Full-featured task management application with user authentication,
                CRUD operations, and responsive Bootstrap UI.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <h4 className="font-medium text-sm text-gray-500 mb-2">Features</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center">
                      <FaCheckCircle className="text-emerald-500 mr-2 text-xs" />
                      User authentication
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-emerald-500 mr-2 text-xs" />
                      Task CRUD operations
                    </li>
                    <li className="flex items-center">
                      <FaCheckCircle className="text-emerald-500 mr-2 text-xs" />
                      Responsive design
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-gray-500 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs">Django</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs">Bootstrap</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs">PostgreSQL</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs">REST API</span>
                  </div>
                </div>
              </div>

              <a 
                href="https://github.com/Doris-Mwito5/todoList" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-medium"
              >
                <FaGithub className="mr-2" /> View Project
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600 sm:text-4xl mb-4"
          >
            Let&apos;s Connect
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto"
          >
            I&apos;m open to opportunities, collaborations, or just a friendly tech chat!
          </motion.p>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactItems.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-teal-50 to-emerald-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-teal-100"
              >
                <div className="flex flex-col items-center text-gray-800">
                  <div className="bg-white p-3 rounded-full shadow-inner">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-lg mb-1 text-emerald-700">{item.title}</h4>
                  {item.link ? (
                    <a href={item.link} className="text-gray-600 hover:underline">
                      {item.content}
                    </a>
                  ) : (
                    <div className="text-gray-600">{item.content}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 max-w-3xl mx-auto bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl shadow-lg border border-teal-100"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-emerald-700">Send Me a Message</h3>
            <form action="/submit-form" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="text-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-3 px-8 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© {new Date().getFullYear()} Kawira Mwito. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/Doris-Mwito5" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
              <FaGithub className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/kawira-mwito-backend-developer/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://x.com/MwitoDoris" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
              <FaTwitter className="text-xl" />
            </a>
            <a href="https://instagram.com/kawiramwito" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition">
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}