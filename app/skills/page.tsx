export default function Skills() {
  const skills = [
    {
      category: "Technical Skills",
      items: ["Java", "Javascript ES6", "HTML5/CSS3", "SQL", "PostgreSQL", "MongoDB", "Redis", "Microservices", "Kafka"],
      color: "bg-blue-100",
    },
    {
      category: "Frameworks",
      items: ["Spring Boot", "React.js", "Node.js", "Express", "JUnit", "Spring Cloud", "Hibernate", "Mockito", "Eureka"],
      color: "bg-green-100",
    },
    {
      category: "Tools",
      items: ["Git", "AWS", "Docker", "IntelliJ IDEA", "Eclipse", "Maven", "Unix/Linux", "MS Office", "Agile", "Log4j", "SLF4J", "ELK Stack", "Zipkin", "Resilience4j", "Kubernetes", "Google Cloud", "Ansible", "Jenkins", "Github Actions", "CI / CD"],
      color: "bg-yellow-100",
    },
    {
      category: "Soft Skills",
      items: ["Communication", "Teamwork", "Problem Solver", "Adaptability", "Collaborative"],
      color: "bg-purple-100",
    },
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 sm:py-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-16 text-center text-gray-800">Skills</h1>

      <div className="grid gap-8">
        {skills.map((skillSet, index) => (
          <div key={index} className={`rounded-3xl ${skillSet.color} p-6 sm:p-8 md:p-12 shadow-lg`}>
            <div className="text-gray-800">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{skillSet.category}</h2>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white/40 rounded-full text-sm sm:text-base text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

