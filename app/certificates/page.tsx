export default function Certificates() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold mb-16 text-center">Certificates</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl bg-[#d4eae1] p-12">
          <div>
            <div className="text-sm mb-2">Dec 2023</div>
            <h2 className="text-4xl font-bold mb-4">AWS Certified Cloud Practitioner</h2>
            <p className="text-gray-700 mb-4">
              Comprehensive understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.
            </p>
            <a
              href="https://www.credly.com/badges/0ec60112-1de8-4209-ba06-6dae2998fe42/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Certificate
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-[#e8d4ea] p-12">
          <div>
            <div className="text-sm mb-2">July 2025</div>
            <h2 className="text-4xl font-bold mb-4">KodeKloud DevOps Mastery</h2>
            <p className="text-gray-700 mb-4">
              Gained hands-on experience with key DevOps tools like Git, Jenkins, Docker, Kubernetes, Ansible, Terraform, and Python, enabling automation and streamlining of IT processes effectively. Advanced mastery of DevOps practices including CI/CD pipelines, containerization, orchestration, monitoring, and infrastructure automation.
            </p>
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/HPV9U4L5OM90"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

