export default function Skills() {
  const skills = [
    {
      category: "Technical Skills",
      items: ["Java", "Javascript ES6", "HTML5/CSS3", "SQL", "MongoDB", "Redis", "Microservices", "Kafka"],
    },
    { category: "Frameworks", items: ["Spring Boot", "React.js", "Node.js", "Express", "JUnit", "Spring Cloud"] },
    {
      category: "Tools",
      items: ["Git", "AWS", "Docker", "IntelliJ IDEA", "Eclipse", "Maven", "Unix/Linux", "MS Office", "Agile"],
    },
    {
      category: "Soft Skills",
      items: ["Communication", "Teamwork", "Problem Solver", "Adaptability", "Collaborative", "Critical Thinking"],
    },
  ]

  return (
    <section className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="space-y-4">
        {skills.map((skillSet, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold">{skillSet.category}</h3>
            <p>{skillSet.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

