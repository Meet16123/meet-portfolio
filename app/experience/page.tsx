export default function Experience() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-16 text-center">Experience</h1>

      <div className="rounded-3xl bg-[#d4eae1] p-12 mb-8">
        <div>
          <div className="text-sm mb-2">May 2025 – Aug 2025</div>
          <h2 className="text-4xl font-bold mb-4">Summer Information Security Intern (InfoSec Team)</h2>
          <p className="text-xl mb-2">Moneris • Toronto, CA</p>
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li>
              Assisted in completing a PCI DSS assessment by evaluating diverse control requirements to achieve full compliance
            </li>
            <li>
              Developed and launched a SharePoint site for the PCI DSS team to centralize documentation and tracking, and supported the SailPoint IAM upgrade project to streamline user provisioning
            </li>
            <li>
              Initiated a PKI automation project by designing CI/CD pipelines with Kubernetes cert-manager and Ansible to automate certificate issuance, renewal, and revocation
            </li>
          </ul>
        </div>
      </div>

      <div className="rounded-3xl bg-[#e5d4f0] p-12">
        <div>
          <div className="text-sm mb-2">Dec 2022 – Apr 2023</div>
          <h2 className="text-4xl font-bold mb-4">Full Stack Developer Intern</h2>
          <p className="text-xl mb-2">DEVTOWN • Bangalore, IN (Remote)</p>
          <ul className="list-disc pl-5 space-y-4 text-gray-700">
            <li>
              Engineered 20+ responsive course features in interactive course catalogue to improve participation and
              redesigned the website to improve experience for more than 1500 students across all courses
            </li>
            <li>
              Optimized web applications including a task manager, weather tracker, and secure login system,
              demonstrating comprehensive proficiency in Node.js, Express, React
            </li>
            <li>Applied Git version control to improve software development efficiency in the team by 30%</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

