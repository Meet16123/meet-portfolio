import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Work() {
  const projects = [
    {
      title: "Ride Sharing App",
      category: "Backend Development",
      description: "A scalable backend solution with Spring Boot and PostgreSQL",
      color: "bg-[#e5d4f0]",
      link: "/projects/ride-sharing",
    },
    {
      title: "E-Learning Platform",
      category: "Full Stack Development",
      description: "Educational platform serving 500+ students",
      color: "bg-[#d4eae1]",
      link: "/projects/e-learning",
    },
    {
      title: "Contact App",
      category: "Web Development",
      description: "Full-stack contact management application",
      color: "bg-[#f3e7d0]",
      link: "/projects/contact-app",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3e7d0] via-[#e8f0e5] to-[#d4eae1]">
      <nav className="flex justify-center space-x-8 py-8 font-medium text-[#1a4d3f]">
        <Link href="/" className="hover:text-[#0f2f26] transition-colors">
          Home
        </Link>
        <Link href="/work" className="hover:text-[#0f2f26] transition-colors">
          Work <span className="text-xs align-super">7</span>
        </Link>
        <Link href="/about" className="hover:text-[#0f2f26] transition-colors">
          About
        </Link>
        <Link href="/play" className="hover:text-[#0f2f26] transition-colors">
          Play
        </Link>
        <Link href="/notes" className="hover:text-[#0f2f26] transition-colors">
          Notes
        </Link>
        <Link href="/contact" className="hover:text-[#0f2f26] transition-colors">
          Contact
        </Link>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-[#1a4d3f] text-5xl font-bold mb-16 text-center">Selected Work</h1>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} className="group">
              <div className={`rounded-3xl ${project.color} p-12 transition-transform group-hover:-translate-y-2`}>
                <div className="flex justify-between items-start">
                  <div className="text-[#1a4d3f]">
                    <div className="text-sm mb-2">{project.category}</div>
                    <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
                    <p className="text-[#1a4d3f]/80">{project.description}</p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

