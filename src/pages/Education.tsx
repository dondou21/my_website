import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
const Education = () => {
  const educations = [{
    institution: 'Adventist University of Central Africa (Rwanda)',
    degree: 'Bachelor - Software Engineering',
    period: '2022 - now (last year)'
  }, {
    institution: 'Université de Lomé (Togo)',
    degree: 'License - Animal Biology and Physiology',
    period: '2011 - 2016'
  }];
  const certificates = [{
    name: 'Google UI/UX Design',
    provider: 'Coursera',
    period: 'Jan–Apr 2023'
  }, {
    name: 'Google Data Analytics',
    provider: 'Coursera',
    period: 'Jun–Nov 2023'
  }, {
    name: 'Software Engineering',
    provider: 'ALX',
    period: 'Apr 2023 – Sept 2024'
  }];
  const languages = ['English', 'French'];
  return <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-2">
          Education & Certifications
        </h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mb-12"></div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <GraduationCap size={24} className="text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-800">Education</h3>
            </div>
            <div className="space-y-6">
              {educations.map((edu, index) => <div key={index} className="border-l-2 border-blue-600 pl-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {edu.institution}
                  </h4>
                  <p className="text-gray-700">{edu.degree}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                </div>)}
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-center mb-6">
                <Award size={24} className="text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">
                  Certifications
                </h3>
              </div>
              <div className="space-y-4">
                {certificates.map((cert, index) => <div key={index}>
                    <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                    <p className="text-gray-700">{cert.provider}</p>
                    <p className="text-gray-500 text-sm">{cert.period}</p>
                  </div>)}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Languages
              </h3>
              <div className="flex gap-3">
                {languages.map((lang, index) => <div key={index} className="flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                    <span className="mr-2">{lang}</span>
                    <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Education;