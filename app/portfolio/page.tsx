import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      title: "Ride Sharing App",
      tech: "Spring Boot, PostgreSQL, AWS",
      description: "A scalable ride-sharing platform with geospatial capabilities and secure authentication.",
      link: "/portfolio/ride-sharing",
    },
    {
      title: "E-Learning Platform",
      tech: "Node.js, Express.js, MongoDB",
      description: "Educational platform serving 500+ students with robust authentication and content delivery.",
      link: "/portfolio/e-learning",
    },
    {
      title: "Contact App",
      tech: "React, Spring Boot, PostgreSQL",
      description: "Full-stack contact management application with modern UI and efficient data handling.",
      link: "/portfolio/contact-app",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex justify-center space-x-6 py-8 font-mono text-sm">
        <Link href="/" className="hover:underline">
          home
        </Link>
        <Link href="/blog" className="hover:underline">
          blog
        </Link>
        <Link href="/portfolio" className="hover:underline">
          portfolio
        </Link>
      </nav>

      <main className="flex-1 max-w-2xl mx-auto px-4 font-mono">
        <h1 className="text-4xl font-bold mb-12">Portfolio</h1>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <article key={index} className="space-y-2">
              <Link href={project.link} className="group block space-y-1">
                <h2 className="text-lg flex items-center gap-1 group-hover:underline">
                  {project.title} <ArrowUpRight className="w-4 h-4" />
                </h2>
                <p className="text-sm text-gray-500">{project.tech}</p>
                <p className="text-gray-600">{project.description}</p>
              </Link>
            </article>
          ))}
        </div>
      </main>

      <footer className="py-8 text-center font-mono text-sm text-gray-500">© 2024 Meet Mangroliya</footer>
    </div>
  )
}

