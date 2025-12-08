import React from 'react';
import { CheckCircle } from 'lucide-react';
const Skills = () => {
  const skillCategories = [{
    title: 'Design',
    skills: ['Design Consistency & Brand Identity', 'Visual Branding (Logos, Flyers, Social Media Graphics)', 'UI/UX Design (Figma, Prototyping, Wireframing)']
  }, {
    title: 'Development',
    skills: ['Front-End Development (HTML, CSS, Tailwind CSS, JavaScript)', 'React, React-router', 'Word Press, WIX']
  }];
  return <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2">
          Core Competencies
        </h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-12"></div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map(category => <div key={category.title} className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map(skill => <li key={skill} className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{skill}</span>
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Skills;