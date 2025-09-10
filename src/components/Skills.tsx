import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      skills: [
        { 
          name: 'Laravel', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
          color: 'from-red-500 to-orange-500',
          progress: '80'
        },
        { 
          name: 'PHP', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
          color: 'from-purple-600 to-blue-600',
          progress: '80'
        },
        { 
          name: 'Node.js', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          color: 'from-green-500 to-green-600',
          progress: '50'
        },
        { 
          name: 'Python', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          color: 'from-blue-500 to-yellow-500',
          progress: '0'
        },
        { 
          name: 'Express.js', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          color: 'from-gray-600 to-gray-800',
          progress: '0'
        },
      ]
    },
    {
      title: 'Database',
      skills: [
        { 
          name: 'MySQL', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          color: 'from-blue-600 to-orange-500',
          progress: '100'
        },
        { 
          name: 'PostgreSQL', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
          color: 'from-blue-700 to-blue-900',
          progress: '100'
        },
        { 
          name: 'MongoDB', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          color: 'from-green-600 to-green-800',
          progress: '100'
        },
        { 
          name: 'Redis', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
          color: 'from-red-600 to-red-800',
          progress: '100'
        },
        { 
          name: 'SQLite', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
          color: 'from-blue-500 to-blue-700',
          progress: '100'
        },
      ]
    },
    {
      title: 'Frontend & Tools',
      skills: [
        { 
          name: 'React', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          color: 'from-blue-400 to-blue-600',
          progress: '100'
        },
        { 
          name: 'Vue.js', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
          color: 'from-green-400 to-green-600',
          progress: '100'
        },
        { 
          name: 'JavaScript', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          color: 'from-yellow-400 to-yellow-600',
          progress: '100'
        },
        { 
          name: 'Git', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          color: 'from-orange-500 to-red-500',
          progress: '100'
        },
        { 
          name: 'Docker', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          color: 'from-blue-500 to-blue-700',
          progress: '100'
        },
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { 
          name: 'AWS', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
          color: 'from-orange-400 to-orange-600',
          progress: '100'
        },
        { 
          name: 'Linux', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
          color: 'from-gray-700 to-black',
          progress: '100'
        },
        { 
          name: 'Nginx', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
          color: 'from-green-600 to-green-800',
          progress: '100'
        },
        { 
          name: 'Apache', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
          color: 'from-red-600 to-red-800',
          progress: '100'
        },
        { 
          name: 'Postman', 
          logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
          color: 'from-orange-500 to-orange-700',
          progress: '100'
        },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to build robust and scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-800 text-center mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 hover:border-slate-200"
                    style={{
                      animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                    }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <img 
                          src={skill.logo} 
                          alt={`${skill.name} logo`}
                          className="w-8 h-8 object-contain filter brightness-0 invert"
                          onError={(e) => {
                            // Fallback if image fails to load
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling!.style.display = 'block';
                          }}
                        />
                        <div 
                          className="w-8 h-8 bg-white rounded flex items-center justify-center text-sm font-bold text-slate-700 hidden"
                        >
                          {skill.name.charAt(0)}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800 group-hover:text-slate-900 transition-colors duration-200">
                          {skill.name}
                        </h4>
                        <div className="w-full bg-slate-200 rounded-full h-1 mt-2">
                          <div
                            className={`bg-gradient-to-r ${skill.color} h-1 rounded-full transition-all duration-1000 ease-out group-hover:w-full`}
                            style={{
                              width: `${skill.progress}%`,
                              animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-500 mb-2">5+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">20+</div>
              <div className="text-slate-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">100K+</div>
              <div className="text-slate-600">Users Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;