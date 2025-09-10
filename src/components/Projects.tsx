import React, { useState } from 'react';
import { ExternalLink, Github, Eye, X, Calendar, Users, Star } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      detailedDescription: 'This comprehensive e-commerce platform was built to handle high-traffic online retail operations. The system includes a modern React frontend with server-side rendering, a robust Node.js backend API, and PostgreSQL database for reliable data management.',
      features: [
        'User authentication and authorization system',
        'Shopping cart and wishlist functionality',
        'Secure payment processing with Stripe integration',
        'Real-time inventory management',
        'Admin dashboard with analytics',
        'Order tracking and management',
        'Product search and filtering',
        'Responsive design for all devices'
      ],
      challenges: 'The main challenge was implementing real-time inventory updates across multiple user sessions while maintaining data consistency and preventing overselling.',
      duration: '4 months',
      teamSize: '3 developers',
      role: 'Full-Stack Developer & Team Lead'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Socket.io.',
      image: 'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tech: ['React', 'Socket.io', 'MongoDB', 'Express', 'Material-UI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      detailedDescription: 'A modern project management application designed for agile teams. Features real-time collaboration, intuitive drag-and-drop interfaces, and comprehensive project tracking capabilities.',
      features: [
        'Real-time collaboration with Socket.io',
        'Drag-and-drop task management',
        'Team member assignment and notifications',
        'Project timeline and milestone tracking',
        'File sharing and commenting system',
        'Custom project templates',
        'Time tracking and reporting',
        'Integration with popular tools'
      ],
      challenges: 'Implementing real-time synchronization across multiple users while maintaining optimal performance and handling network interruptions gracefully.',
      duration: '3 months',
      teamSize: '2 developers',
      role: 'Frontend Developer'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and beautiful visualizations. Integrated with multiple weather APIs.',
      image: 'https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tech: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Vuetify'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      detailedDescription: 'An elegant weather dashboard that provides comprehensive weather information with beautiful data visualizations and interactive maps for weather enthusiasts and professionals.',
      features: [
        'Current weather conditions and forecasts',
        'Interactive weather maps',
        'Historical weather data charts',
        'Location-based weather alerts',
        'Multiple city comparison',
        'Weather trend analysis',
        'Customizable dashboard widgets',
        'Offline data caching'
      ],
      challenges: 'Integrating multiple weather APIs while handling rate limits and ensuring data accuracy across different sources.',
      duration: '2 months',
      teamSize: '1 developer',
      role: 'Solo Developer'
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media managers. Tracks engagement, follower growth, and provides actionable insights.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tech: ['React', 'D3.js', 'Python', 'Flask', 'Twitter API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      detailedDescription: 'A powerful analytics platform that helps social media managers understand their audience, track performance metrics, and optimize their content strategy across multiple platforms.',
      features: [
        'Multi-platform social media integration',
        'Real-time engagement tracking',
        'Audience demographics analysis',
        'Content performance metrics',
        'Automated reporting system',
        'Competitor analysis tools',
        'Custom dashboard creation',
        'Export capabilities for presentations'
      ],
      challenges: 'Managing API rate limits across multiple social media platforms while providing real-time data updates and maintaining user privacy.',
      duration: '5 months',
      teamSize: '4 developers',
      role: 'Backend Developer'
    },
    {
      title: 'Learning Management System',
      description: 'An educational platform with course creation tools, video streaming, progress tracking, and interactive assessments for online learning.',
      image: 'https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS S3', 'Chakra UI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      detailedDescription: 'A comprehensive learning management system designed for educational institutions and corporate training programs. Features advanced course creation tools and student progress tracking.',
      features: [
        'Course creation and management tools',
        'Video streaming with adaptive quality',
        'Interactive quizzes and assessments',
        'Student progress tracking',
        'Discussion forums and messaging',
        'Certificate generation system',
        'Mobile-responsive design',
        'Integration with payment systems'
      ],
      challenges: 'Implementing scalable video streaming while maintaining quality across different devices and network conditions.',
      duration: '6 months',
      teamSize: '5 developers',
      role: 'Full-Stack Developer'
    },
    {
      title: 'Portfolio Website Builder',
      description: 'A drag-and-drop website builder specifically designed for creative professionals to showcase their work with beautiful templates and customization options.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'AWS', 'Styled Components'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      detailedDescription: 'An intuitive website builder that empowers creative professionals to create stunning portfolio websites without coding knowledge. Features drag-and-drop functionality and professional templates.',
      features: [
        'Drag-and-drop page builder',
        'Professional template library',
        'Custom domain support',
        'SEO optimization tools',
        'Image gallery management',
        'Contact form builder',
        'Analytics integration',
        'Mobile optimization'
      ],
      challenges: 'Creating a flexible drag-and-drop system that generates clean, performant code while maintaining design consistency.',
      duration: '4 months',
      teamSize: '3 developers',
      role: 'Frontend Lead'
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on that showcase my skills and passion for creating amazing digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                project.featured ? 'ring-2 ring-blue-100' : ''
              }`}
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  {project.featured && (
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 p-2 rounded-full">
                    <Eye className="h-4 w-4 text-slate-700" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium text-sm">Click to view details</span>
                  <div className="flex space-x-2">
                    <a 
                      href={project.liveUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-blue-600 transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a 
                      href={project.githubUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-slate-700 transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors duration-200"
              >
                <X className="h-6 w-6 text-slate-700" />
              </button>
              {selectedProject.featured && (
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Featured
                  </span>
                </div>
              )}
            </div>

            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">
                    {selectedProject.title}
                  </h2>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">Technical Challenge</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {selectedProject.challenges}
                    </p>
                  </div>
                </div>

                <div className="lg:w-80">
                  <div className="bg-slate-50 rounded-xl p-6 space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Project Details</h4>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm">
                          <Calendar className="h-4 w-4 text-slate-500 mr-2" />
                          <span className="text-slate-600">Duration: {selectedProject.duration}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Users className="h-4 w-4 text-slate-500 mr-2" />
                          <span className="text-slate-600">Team: {selectedProject.teamSize}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-slate-500">Role: </span>
                          <span className="text-slate-600 font-medium">{selectedProject.role}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col space-y-3">
                      <a 
                        href={selectedProject.liveUrl}
                        className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live Demo
                      </a>
                      <a 
                        href={selectedProject.githubUrl}
                        className="flex items-center justify-center border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-800 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;