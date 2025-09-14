import React from 'react';
const Projects = () => {
  const projects = [{
    title: 'ALX Portfolio Project – Recycling App',
    role: 'UI/UX Designer & Backend developer',
    period: 'September 2024',
    description: 'A recycling application with user-friendly interface and brand colors.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Azure', 'Google Maps API'],
    image: "/CVs.png"
  }, {
    title: 'Church Management System',
    role: 'Software Engineer',
    period: 'March 2023 - April 2024',
    description: 'A comprehensive system for church management with responsive interface.',
    technologies: ['Tailwind CSS', 'Figma', 'Database Design', 'Frontend Development'],
    image: "/CVs_%281%29.png"
  }, {
    title: 'Book Cover Design',
    role: 'Designer',
    period: 'October 2024 & May 2025',
    description: "Created book covers for 'Il Faut Que Le Chrétien Croit' and 'Celui Qui Détruit La Foi'.",
    technologies: ['Graphic Design'],
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
  }];
  return <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2">
          Relevant Projects
        </h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-12"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{project.role}</p>
                <p className="text-gray-500 text-sm mb-3">{project.period}</p>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {tech}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;