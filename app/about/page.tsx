export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-gray-800">About Me</h1>

      <div className="space-y-6 text-lg text-gray-700 mb-12">
        {/* Introduction */}
        <p>
          I'm a <span className="font-semibold text-gray-900">Computer Science student at Algoma University in Toronto</span>, with a deep passion for
          <span className="font-semibold text-gray-900"> software engineering and problem-solving</span>. My journey in tech has been driven by a desire to build 
          <span className="font-semibold text-gray-900"> scalable, efficient, and impactful applications</span> that push the boundaries of innovation.
        </p>

        {/* Technical Expertise */}
        <p>
          I specialize in <span className="font-semibold text-gray-900">full-stack development</span>, working with technologies like 
          <span className="font-semibold text-gray-900"> Java, Spring Boot, React.js, Node.js, and microservices</span>. I love tackling 
          <span className="font-semibold text-gray-900"> complex problems, optimizing systems</span>, and contributing to projects that create real-world value.
        </p>

        {/* Experience & Projects */}
        <p>
          Beyond coursework, I’ve gained <span className="font-semibold text-gray-900">hands-on experience</span> through internships, hackathons, and personal projects. 
          I’ve built applications like a <span className="font-semibold text-gray-900">ride-sharing platform with geospatial queries</span>, 
          a <span className="font-semibold text-gray-900">secure e-learning platform</span>, and a 
          <span className="font-semibold text-gray-900"> contact management system</span>—all focusing on <span className="font-semibold text-gray-900">performance, security, and scalability</span>.
        </p>

        {/* Photography Passion */}
        <h2 className="text-2xl font-bold text-gray-800 mt-8">Beyond Code: My Love for Photography 📸</h2>
        <p>
          When I step away from the keyboard, you’ll often find me <span className="font-semibold text-gray-900">capturing moments through my mobile camera</span>. 
          Photography allows me to <span className="font-semibold text-gray-900">see the world differently, appreciate details, and tell compelling stories visually</span>—
          a creativity that also influences my approach to problem-solving in software development. Whether it's 
          <span className="font-semibold text-gray-900"> street photography, landscapes, or portraits</span>, I love exploring new perspectives and experimenting with different styles.
        </p>

        {/* Continuous Learning */}
        <h2 className="text-2xl font-bold text-gray-800 mt-8">Always Learning & Exploring 🚀</h2>
        <p>
          When I’m not coding or behind the camera, I’m <span className="font-semibold text-gray-900">exploring new technologies, collaborating on open-source projects,</span> 
          and <span className="font-semibold text-gray-900">participating in hackathons</span> to continuously improve my skills and expand my network in the tech community.
        </p>

        {/* Closing */}
        <p>
          I’m always looking for opportunities to <span className="font-semibold text-gray-900">learn, grow, and contribute</span> to exciting projects that make a difference. 
          <span className="text-gray-900 font-semibold"> Let’s build something amazing together!</span>
        </p>
      </div>
    </main>
  );
}
