import Link from "next/link";

export default function CloudArchitectureService() {
  return (
    <main className="min-h-screen bg-[#E5E5E5] font-sans pt-24 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-12">
          <Link href="/#services" className="text-gray-500 hover:text-black font-semibold flex items-center gap-2 mb-8 transition-colors w-max">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Services
          </Link>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6 tracking-tight leading-tight">Cloud Architecture & DevOps.</h1>
          <div className="w-24 h-2 bg-black rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl leading-relaxed">
            Containerize your applications and deploy them reliably with automated CI/CD pipelines, ensuring your software is always live and scalable.
          </p>
        </div>

        <div className="bg-black text-white p-10 md:p-14 rounded-3xl mb-16 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-300 leading-relaxed text-lg">Manual deployments cause human errors, downtime, and massive headaches. Code that works perfectly "on my machine" routinely fails when pushed to live production servers.</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#E5E5E5]">The Solution</h2>
              <p className="text-gray-300 leading-relaxed text-lg">I implement modern DevOps practices, wrapping your applications in Docker containers and automating testing and deployment to cloud providers, creating a zero-stress release process.</p>
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-black mb-8">What I Deliver</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-2xl font-bold text-black mb-3">Containerization</h4>
            <p className="text-gray-600 leading-relaxed">Packaging your applications and dependencies using Docker to ensure consistent environments across development, testing, and production.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-2xl font-bold text-black mb-3">CI/CD Automation</h4>
            <p className="text-gray-600 leading-relaxed">Setting up Continuous Integration and Continuous Deployment pipelines via GitHub Actions to automate testing and code rollouts.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-2xl font-bold text-black mb-3">Cloud Deployments</h4>
            <p className="text-gray-600 leading-relaxed">Architecting and provisioning secure, scalable server infrastructure on AWS or Azure tailored to your specific application needs.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-2xl font-bold text-black mb-3">Orchestration</h4>
            <p className="text-gray-600 leading-relaxed">Managing complex multi-container applications using Docker Compose or Kubernetes for high availability and seamless scaling.</p>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-black mb-8">Technology Stack</h3>
        <div className="flex flex-wrap gap-4 mb-20">
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">Docker & Kubernetes</span>
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">AWS / Azure</span>
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">GitHub Actions (CI/CD)</span>
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">Linux / Bash</span>
        </div>

        <div className="bg-white p-12 rounded-3xl shadow-lg border border-gray-200 text-center">
          <h2 className="text-4xl font-extrabold text-black mb-6">Ready for stress-free deployments?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Let's automate your infrastructure so your team can focus on writing code, not managing servers.</p>
          <Link href="/#contact" className="inline-flex bg-black text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-gray-800 hover:-translate-y-1 transition-all items-center justify-center">Book a DevOps Consultation</Link>
        </div>
      </div>
    </main>
  );
}