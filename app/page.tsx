import { ArrowDownCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 pt-8 sm:pt-20 pb-20 sm:pb-40 text-center">
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight text-gray-800">
        Meet Mangroliya
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 text-gray-600">
        Software Engineer & <br className="sm:hidden" />
        CS Student at Algoma University in Toronto
      </h2>

      <div className="space-y-4 mb-12 text-base sm:text-lg text-gray-700">
        <p>Nice to meet you!</p>
        <p>Passionate about crafting efficient solutions and pushing technological boundaries.</p>
        <p>Aspiring to create impactful innovations that shape our digital future.</p>
      </div>

      <div className="mb-12">
        <a
          href="https://drive.google.com/file/d/13Rd1D40NHhFFnpVVM3xCdlrrjlXVA87-/view?usp=sharing"
          target="_blank"
          download
          className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors text-sm sm:text-base"
        >
          <ArrowDownCircle className="w-5 h-5 mr-2" />
          Download CV
        </a>
      </div>
    </main>
  )
}

