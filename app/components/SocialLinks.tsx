import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function SocialLinks() {
  return (
    <div className="fixed top-4 right-4 sm:top-8 sm:right-8 z-20 flex flex-col gap-3">
      <Link
        href="https://www.linkedin.com/in/meetmangroliya16123/"
        className="text-gray-600 hover:text-blue-600 transition-all duration-300 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="w-5 h-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        href="https://github.com/Meet16123"
        className="text-gray-600 hover:text-gray-900 transition-all duration-300 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-5 h-5" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link 
        href="mailto:meet16123@gmail.com" 
        className="text-gray-600 hover:text-red-600 transition-all duration-300 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110"
      >
        <Mail className="w-5 h-5" />
        <span className="sr-only">Email</span>
      </Link>
    </div>
  )
}
