import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Blog() {
  const posts = [
    {
      title: "Ride Sharing App Development Journey",
      date: "January 2024",
      excerpt:
        "Building a scalable backend with Spring Boot and implementing geospatial queries for optimal ride matching...",
      link: "/blog/ride-sharing",
    },
    {
      title: "Creating an E-Learning Platform",
      date: "April 2024",
      excerpt:
        "Developing robust REST APIs and implementing secure authentication for an educational platform serving 500+ students...",
      link: "/blog/e-learning",
    },
    {
      title: "Contact App: A Full Stack Project",
      date: "January 2024",
      excerpt:
        "Implementing MVC architecture with React and Spring Boot, focusing on user experience and responsive design...",
      link: "/blog/contact-app",
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
        <h1 className="text-4xl font-bold mb-12">Blog</h1>

        <div className="space-y-12">
          {posts.map((post, index) => (
            <article key={index} className="space-y-2">
              <div className="flex items-baseline gap-4">
                <time className="text-gray-500 text-sm">{post.date}</time>
                <Link href={post.link} className="text-lg hover:underline flex items-center gap-1">
                  {post.title} <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="text-gray-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </main>

      <footer className="py-8 text-center font-mono text-sm text-gray-500">© 2024 Meet Mangroliya</footer>
    </div>
  )
}

