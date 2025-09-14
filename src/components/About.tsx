import React from 'react';
const About = () => {
  return <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Creative and adaptable UI/UX & Graphics Designer with a strong
              foundation in software engineering and a passion for user-centered
              design. Skilled in creating intuitive interfaces with Figma,
              collaborating closely with development teams, and delivering
              consistent, brand-aligned visuals.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Known for integrity, bold ideas, and a strong sense of
              responsibility to deliver excellence across platforms. I combine
              technical expertise with design sensibility to create engaging
              digital experiences that are both beautiful and functional.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;