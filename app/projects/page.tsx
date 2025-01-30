import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Ride Sharing App",
      tech: "Spring Boot, PostgreSQL, AWS",
      date: "Aug 2024",
      description:
        "Built a scalable ride-sharing backend using Spring Boot with geospatial queries, secure authentication, and AWS deployment for optimized ride matching and reliability.",
      color: "bg-[#e5d4f0]",
      link: "https://github.com/Meet16123/Ride-Sharing-App",
    },
    {
      title: "E-Learning Platform",
      tech: "Node.js, Express.js, MongoDB",
      date: "Apr 2024",
      description:
        "Created robust and scalable Backend REST APIs using Node.js and Express.js to support various functionalities for an education platform for over 500 students.",
      color: "bg-[#d4eae1]",
      link: "https://sankalya.com/",
    },
    {
      title: "Contact App",
      tech: "React, Spring Boot, PostgreSQL",
      date: "Jan 2024",
      description:
        "Utilized React, Spring Boot, and PostgreSQL to create a contact app with an MVC structure, allowing users to register, manage, and update their profiles efficiently.",
      color: "bg-[#f3e7d0]",
      link: "https://github.com/Meet16123/Contact-API",
    },
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-16 text-center">Projects</h1>
  
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div key={index} className={`rounded-3xl ${project.color} p-12`}>
            <div>
              <div className="text-sm mb-2">{project.date}</div>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
                {/* Arrow is now always visible */}
                <ArrowUpRight className="w-6 h-6" />
              </Link>
              <p className="text-xl mb-2">{project.tech}</p>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}  