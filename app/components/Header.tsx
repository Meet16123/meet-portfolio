import { useState, useEffect } from "react"

export default function Header() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <header
      className={`bg-black text-white p-4 transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Meet Mangroliya</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="tel:+1-289-623-3507">+1-289-623-3507</a>
            </li>
            <li>
              <a href="mailto:meet16123@gmail.com">meet16123@gmail.com</a>
            </li>
            <li>
              <a href="https://linkedin.com/meet16123" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Meet16123" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

