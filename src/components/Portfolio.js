import React, { useState, useEffect } from 'react';
import { Github, Mail, Moon, Sun, Code, Brain, Terminal, Globe, ExternalLink } from 'lucide-react';
import SkillCard from './SkillCard';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const skills = {
    programming: ["JavaScript", "Python", "C", "C++", "SQL", "Java", "TypeScript"],
    webDev: ["HTML", "Tailwind CSS", "React", "Nextjs", "Node.js", "Express.js", "MongoDB", "Git", "GitHub", "GitLab", "RESTful APIs", "Next.js"],
    aiMl: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NumPy", "Pandas", "CNN", "RNN", "LSTM", "NLP", "Computer Vision", "LLM"],
    tools: ["Doccano", "VGG Image Annotator", "VS Code", "Google Colab", "Anaconda"]
  };

  const projects = [
    {
      title: "Real-Time Collaborative Document Editor",
      description: "Real-time document editor with collaborative features like live cursors and version control.",
      technologies: ["React", "Node.js", "Express", "Socket.io", "MongoDB"],
      github: "https://github.com/rashed9810/RealTimeDocumentEditor",
      live: "https://realtime-document-editor.demo.com"
    },
    {
      title: "AI-Driven Personal Health Assistant",
      description: "Personal health management system with AI-driven health advice and trend prediction.",
      technologies: ["Angular", "Python", "Flask", "PostgreSQL"],
      github: "https://github.com/rashed9810/AIHealthAssistant",
      live: "https://ai-health-assistant.demo.com"
    },
    {
      title: "Decentralized Voting System",
      description: "Secure voting platform using blockchain technology for transparency and integrity.",
      technologies: ["Svelte", "Rust", "Ethereum"],
      github: "https://github.com/rashed9810/DecentralizedVoting",
      live: "https://decentralized-voting.demo.com"
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white'} transition-all duration-500`}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="h-8 w-8 sm:h-10 sm:w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-xl">RM</div>
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Md. Rashed Miah</h1>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <a href="https://github.com/rashed9810" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:rashed.bcse.edu@gmail.com" className="hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Software Engineer
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
              Crafting innovative solutions at the intersection of web development and artificial intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <SkillCard title="Programming" icon={<Code className="text-blue-600" />} skills={skills.programming} />
            <SkillCard title="Web Development" icon={<Globe className="text-purple-600" />} skills={skills.webDev} />
            <SkillCard title="AI & ML" icon={<Brain className="text-green-600" />} skills={skills.aiMl} />
            <SkillCard title="Tools" icon={<Terminal className="text-orange-600" />} skills={skills.tools} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" 
                       className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 sm:p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"></textarea>
              </div>
              <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;