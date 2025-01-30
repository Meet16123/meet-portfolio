export default function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Algoma University",
      location: "Toronto, CA",
      date: "Expected - Dec 2025",
      gpa: "3.5/4.00",
      courses: [
        "Java",
        "Object-Oriented Programming",
        "Database",
        "Discrete Math I & II",
        "Data Structures & Algorithms",
        "SDLC",
        "Object-Oriented Design",
      ],
      color: "bg-[#e5d4f0]",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Gujarat Technological University",
      location: "Rajkot, IN",
      date: "Aug 2019 – Jun 2022",
      gpa: "8.9/10",
      courses: ["DBMS", "OS", "CN", "Web Technologies", "Personal Development"],
      color: "bg-[#d4eae1]",
    },
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-16 text-center">Education</h1>

      <div className="grid gap-8">
        {education.map((edu, index) => (
          <div key={index} className={`rounded-3xl ${edu.color} p-12`}>
            <div>
              <div className="text-sm mb-2">{edu.date}</div>
              <h2 className="text-4xl font-bold mb-4">{edu.degree}</h2>
              <p className="text-xl mb-2">
                {edu.institution} • {edu.location}
              </p>
              <p className="mb-4">GPA: {edu.gpa}</p>
              <div>
                <h3 className="font-semibold mb-2">Relevant Coursework</h3>
                <p className="text-gray-700">{edu.courses.join(", ")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

