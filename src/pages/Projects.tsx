
import { useNavigate } from 'react-router-dom';
const Projects = () => {
  const navigate = useNavigate();
 
  const projects = [
    {
    title: 'Apart Finding',
    role: 'UI/UX Designer',
    period: 'March 2023',
    description: 'It is a portofolio project did while purchasing my UI/UX certificate .',
    technologies: ['Figma'],
    image: "/images/apart.png",
    path: "https://www.figma.com/design/SmLwliBsaGDSTMCJ9PZrGD/Apart-finding?node-id=0-1&p=f&t=nNd5xO5lYqIdmlZB-0"
  },
    {
    title: 'ALX Portfolio Project – Recycling App',
    role: 'UI/UX Designer & Backend developer',
    period: 'September 2024',
    description: 'A recycling application with user-friendly interface and brand colors.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Azure', 'Google Maps API'],
    image: "/images/CVs.png",
    path: "https://github.com/dondou21/RecycleWithTech"
  },
   {
    title: 'The platform',
    role: 'UI/UX Designer',
    period: 'March 2023',
    description: 'Our innovative online space aims to connect individuals, artists, and organizations, fostering solidarity and positive change in our communities.',
    technologies: ['Figma'],
    image: "/images/Platform.png",
    path: "https://www.figma.com/design/Uk2tYlglRaD9jyMfZOyIrg/Ze-Platform?node-id=0-1&p=f&t=RcR0eoDszyv5gBvA-0"
  },
   {
    title: 'Revibes',
    role: 'UI/UX Designer & Frontend Developer',
    period: 'April 2024',
    description: 'Revibes is a tech-driven platform focused on revolutionizing recycling by making it easy for individuals to donate unwanted items from the comfort of their homes and purchase second-hand goods in our online flea market',
    technologies: ['Figma', 'Database Design'],
    image: "/images/Revibes.png",
    path: "https://www.figma.com/design/AFyslTYTQONhC1ox1wwsf7/Revibes?t=rvPJNLgpqVPbBTdy-0"
  },
  
  {
    title: 'Book Cover Design',
    role: 'Designer',
    period: 'October 2024 & May 2025',
    description: "Created book covers for 'Il Faut Que Le Chrétien Croit' and 'Celui Qui Détruit La Foi'.",
    technologies: ['Graphic Design', 'Canva', 'Photoshop'],
    image: "/images/Book.png",
    path: "https://www.canva.com/design/DAGKpL61w_8/CpiXyFLav7fQNdxicIY-sw/edit?continue_in_browser=true"
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
                <img src={project.image} alt={project.title} onClick={() => ( navigate(`${project.path}`)) } className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105" />
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