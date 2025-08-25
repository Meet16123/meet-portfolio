import SocialLinks from "../components/SocialLinks";

export default function About() {
  return (
    <>
      <SocialLinks />
      <main className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-gray-800">
          About Me
        </h1>

        <div className="space-y-6 text-lg text-gray-700 mb-12">
          {/* Introduction (simplified) */}
          <p>
            I'm a{" "}
            <span className="font-semibold text-gray-900">
              Computer Science student at Algoma University in Toronto
            </span>
            , passionate about building
            <span className="font-semibold text-gray-900">
              {" "}
              scalable, efficient, and impactful software
            </span>
            .
          </p>

          {/* Focus areas (concise) */}
          <p>
            I’m a{" "}
            <span className="font-semibold text-gray-900">Fullstack Developer</span>{" "}
            with strong interests in
            <span className="font-semibold text-gray-900"> DevOps</span> and{" "}
            <span className="font-semibold text-gray-900">Security</span>—working
            with
            <span className="font-semibold text-gray-900">
              {" "}
              Java, Spring Boot, React.js, Kubernetes, GCP, AWS, Ansible, Node.js,
              Docker, and Microservices
            </span>
            .
          </p>

          {/* Experience & Projects (concise) */}
          <p>
            Through internships, hackathons, and personal projects, I’ve built
            systems like a{" "}
            <span className="font-semibold text-gray-900">
              {" "}
              LinkedIn‑style social platform (microservices, Kafka, Neo4j)
            </span>
            , an
            <span className="font-semibold text-gray-900">
              {" "}
              Uber‑like ride‑sharing backend with geospatial matching
            </span>
            , and a
            <span className="font-semibold text-gray-900">
              {" "}
              secure e‑learning platform
            </span>
            —with a focus on
            <span className="font-semibold text-gray-900">
              {" "}
              performance, security, and scalability
            </span>
            .
          </p>

          {/* Photography Passion */}
          <h2 className="text-2xl font-bold text-gray-800 mt-8">
            Beyond Code: My Love for Photography 📸
          </h2>
          <p>
            When I step away from the keyboard, you’ll often find me{" "}
            <span className="font-semibold text-gray-900">
              capturing moments through my mobile camera
            </span>
            . Photography allows me to{" "}
            <span className="font-semibold text-gray-900">
              see the world differently, appreciate details, and tell compelling
              stories visually
            </span>
            —a creativity that also influences my approach to problem-solving in
            software development. Whether it's
            <span className="font-semibold text-gray-900"> street photography,</span>
            <span className="font-semibold text-gray-900"> landscapes,</span> or{" "}
            <span className="font-semibold text-gray-900">portraits</span>, I love
            exploring new perspectives and experimenting with different styles.
          </p>

          {/* Continuous Learning */}
          <h2 className="text-2xl font-bold text-gray-800 mt-8">
            Always Learning & Exploring 🚀
          </h2>
          <p>
            When I’m not coding or behind the camera, I’m{" "}
            <span className="font-semibold text-gray-900">
              exploring new technologies, collaborating on open-source projects
            </span>{" "}
            and{" "}
            <span className="font-semibold text-gray-900">participating in hackathons</span>{" "}
            to continuously improve my skills and expand my network in the tech
            community.
          </p>

          {/* Closing */}
          <p>
            I’m always looking for opportunities to{" "}
            <span className="font-semibold text-gray-900">
              learn, grow, and contribute
            </span>{" "}
            to exciting projects that make a difference.{" "}
            <span className="text-gray-900 font-semibold">
              Let’s build something amazing together!
            </span>
          </p>
        </div>
      </main>
    </>
  );
}
