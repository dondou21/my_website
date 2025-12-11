

const About = () => {
  const events = [
    {
      year: "1990s - Early Life",
      title: "Birth and Early childhood ",
      descriotion:"Born in Lomé, Togo, where my personal and academic journey began. From a family of 4 brothers and 3 sisters, I learned the values of cooperation and resilience early on.",
      position: "left",
    },
    {
      year: "2010 - Secondary Education",
      title: "High School completion",
      descriotion:" My academic journey began at Lycée Moderne d’Adidogomé, where I completed my secondary education in 2010 with a focus on mathematics, chemistry, and biology.",
      position: "right",
    },
    {
      year: "2011-2015 - Bachelor's Degree",
      title: "University of Lome ",
      descriotion:"Later that year, I joined the University of Lomé and pursued a degree in Animal Biology, graduating in 2015. During this period, I developed a deep interest in scientific exploration—from the history of the Earth and the Big Bang to modern biotechnology.\nFollowing university, I experienced a period of professional uncertainty while seeking internships and employment. During this time, I took on temporary work such as delivery services, which helped sustain me while I continued building my aspirations.",
      position: "left",
    },
    {
      year: "2017- Humanitarian Leadership",
      title: "COEUR D'AFRIQUE  Co-Founder ",
      descriotion:"In 2017, together with my brother and close friends, I co-founded the humanitarian organization COEUR D’AFRIQUE, where I served as a Project Manager. Our mission focused on education, health, and sports development. We worked across urban centers and rural communities to empower students through digital literacy initiatives and to support women and elders in health-oriented activities.",
      position: "right",
    },
    {
      year: "2021-Present- Move to rwanda",
      title: "Language and Integration ",
      descriotion:"After the COVID-19 period, I relocated to Rwanda, where I enrolled in a language center and strengthened my English skills. It was during this time that my long-standing passion for technology resurfaced. I began taking online courses in UI/UX design and software development, eventually enrolling at the Adventist University of Central Africa (AUCA) to formalize my path in the IT field. Today, I proudly identify myself as an IT professional committed to continuous growth.",
      position: "left",
    },
  ];

  return (
    <section className="py-16">
      
      <div className="relative">
        <h2 className="text-3xl font-bold text-center mb-2 py-10">My Journey</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
          {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-blue-700"></div>
        <div className="space-y-16 ">
          {events.map((event, index) => (
            <div 
             key={index}
             className={`relative flex items-center 
              ${event.position === "left" ? "justify-start":"justify-end"}
              `}
            >
              <div className={`w-[45%] bg-white shadow-md p-6 rounded-xl border`}>
                <h3 className="font-bold text-lg mb-2 text-blue-800">{event.year}</h3>
                <p className="font-semibold mb-3 text-green-600 text-xl">{event.title}</p>
                <p className="text-gray-600">{event.descriotion}</p>
              </div>
               <div className="absolute flex font-bold text-xl text-green-600 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-4 border-green-500 rounded-full justify-center">{index}</div>
            </div>
          ))}
        </div>
      </div>

       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold text-center mb-2 pt-48">About Me</h2>
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
    </section>
  )
};
export default About;