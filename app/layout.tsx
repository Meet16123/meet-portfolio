import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import MovingBackground from "./components/MovingBackground"
import type React from "react" // Import React

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Meet Mangroliya - Portfolio",
  description: "Software Engineer & CS Student",
  icons: {
    icon: '/favicon.svg',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="min-h-screen flex flex-col relative overflow-hidden">
          <MovingBackground />
          <div className="relative z-10 flex-grow">
            <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-8 py-4 sm:py-8 px-4 font-medium text-gray-800">
              <Link href="/" className="hover:text-gray-600 transition-colors py-2">
                Home
              </Link>
              <Link href="/about" className="hover:text-gray-600 transition-colors py-2">
                About
              </Link>
              <Link href="/experience" className="hover:text-gray-600 transition-colors py-2">
                Experience
              </Link>
              <Link href="/projects" className="hover:text-gray-600 transition-colors py-2">
                Projects
              </Link>
              <Link href="/certificates" className="hover:text-gray-600 transition-colors py-2">
                Certificates
              </Link>
              <Link href="/education" className="hover:text-gray-600 transition-colors py-2">
                Education
              </Link>
              <Link href="/skills" className="hover:text-gray-600 transition-colors py-2">
                Skills
              </Link>
            </nav>
            {children}
          </div>
          <footer className="relative z-10 py-8 text-center">
            <div className="flex justify-center gap-8">
              <Link
                href="https://www.linkedin.com/in/meetmangroliya16123/"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/Meet16123"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="mailto:meet16123@gmail.com" className="text-gray-700 hover:text-gray-900 transition-colors">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

