import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
const Experience = () => {
  const experiences = [{
    company: 'ICC-Church',
    location: 'Rwanda - Kigali',
    position: 'IT Supporter',
    period: 'March 2022 - Present',
    responsibilities: ['Member of the NTIC & Sound team, overseeing projection and audio management.', 'Design flyers and other visual materials for church events.', 'Ensure smooth technical operations during services and events.']
  }, {
    company: 'Freelance / Contract',
    location: 'Remote / Kigali, Rwanda',
    position: 'UI/UX & Graphics Designer',
    period: '2022 – Present',
    responsibilities: ['Designed intuitive user interfaces in Figma, including interactive prototypes and user flows.', 'Collaborated with software developers to bring visual concepts to functional applications.', 'Created branding assets including logos, flyers, book covers, and social media graphics.', 'Ensured design consistency across all digital and print platforms.', 'Delivered assets aligned with brand guidelines while maintaining agility and creativity under tight deadlines.']
  }, {
    company: "CŒUR D'AFRIQUE ASSOCIATION",
    location: 'Togo - Lomé',
    position: 'Project manager',
    period: '2018 - 2021',
    responsibilities: ['Plan, manage, and oversee project execution.', 'Conduct research on potential sponsors and prepare post-project reports.', 'Provide guidance and assistance as a tourist guide.']
  }];
  return <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2">
          Professional Experience
        </h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-12"></div>
        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => <div key={index} className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute -left-2.5 top-0">
                <div className="h-5 w-5 rounded-full bg-blue-600"></div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {exp.company}
                </h3>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 mb-4 text-gray-600 text-sm">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="font-medium text-blue-600 mb-4">{exp.position}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.responsibilities.map((resp, idx) => <li key={idx}>{resp}</li>)}
                </ul>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Experience;