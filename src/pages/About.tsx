

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
    <section>
      <h2>My Story</h2>

      <div className="relative">
        <div className="ablsolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-blue-700"></div>
        <div>

        </div>
      </div>
    </section>
  )
};
export default About;