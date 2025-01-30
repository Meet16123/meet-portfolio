export default function Projects() {
  const projects = [
    {
      title: "Ride Sharing App",
      tech: "Springboot, PostgreSQL",
      date: "Aug 2024",
      details: [
        "Developed a scalable backend for a ride-sharing app using Spring Boot, implementing PostGIS for geospatial queries to calculate distances between users and drivers, optimizing ride matching",
        "Implemented a secure authentication system using Spring Security and JWT, ensuring robust user authentication and role-based authorization, significantly enhancing the overall security of the platform",
        "Deployed on AWS using RDS, Elastic Beanstalk and EC2, with automated CI/CD through CodePipeline",
        "Wrote unit and integration tests using JUnit and Mockito, achieving robust test coverage and ensuring the reliability of critical features",
      ],
    },
    {
      title: "E-Learning Platform",
      tech: "Node.js, Express.js, MongoDB",
      date: "Apr 2024",
      details: [
        "Created robust and scalable Backend REST APIs using Node.js and Express.js to support various functionalities for an education platform for over 500 students",
        "Implemented an email authentication system with unique code generation and verification using Node.js, Express, and MongoDB, enhancing security and user trust while reducing account fraud and unauthorized rates by 90%",
        "Developed a user-friendly platform in a team of 2, enhancing access to materials and video tutorials, resulting in a 40% increase in student engagement",
      ],
    },
    {
      title: "Contact App",
      tech: "React, SpringBoot, PostgreSQL",
      date: "Jan 2024",
      details: [
        "Utilized React, Spring Boot, and PostgreSQL to create a contact app with an MVC structure, allowing users to register, manage, and update their profiles efficiently, ensuring a seamless user experience",
        "Learned core Spring Boot concepts and how to create different layers of a Spring Boot application, enhancing my backend development skills and understanding of structured application design",
        "Improved the UI by creating a responsive website with a modern user interface using the Material UI framework, ensuring an exceptional user experience across various devices and screen sizes, and introduced pagination for enhanced usability",
      ],
    },
  ]

  return (
    <section className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold">
              {project.title} ({project.tech})
            </h3>
            <p>{project.date}</p>
            <ul className="list-disc pl-5 space-y-2">
              {project.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

