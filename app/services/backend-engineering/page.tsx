import Link from "next/link";

export default function BackendEngineeringService() {
  return (
    <main className="min-h-screen bg-[#E5E5E5] font-sans pt-24 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Navigation & Breadcrumb */}
        <div className="mb-12">
          <Link href="/#services" className="text-gray-500 hover:text-black font-semibold flex items-center gap-2 mb-8 transition-colors w-max">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Services
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6 tracking-tight leading-tight">
            Backend Engineering.
          </h1>
          <div className="w-24 h-2 bg-black rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl leading-relaxed">
            Build highly concurrent, secure, and scalable RESTful APIs that power your applications without breaking under pressure.
          </p>
        </div>

        {/* The "Why" - Business Value */}
        <div className="bg-black text-white p-10 md:p-14 rounded-3xl mb-16 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                As your user base grows, slow legacy systems and poorly structured monolithic backends lead to app crashes, security vulnerabilities, and frustrating user experiences.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#E5E5E5]">The Solution</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                I build robust, decoupled microservices and custom APIs using modern Python frameworks. This ensures your platform handles high traffic effortlessly while remaining easy to scale and maintain.
              </p>
            </div>
          </div>
        </div>

        {/* Core Deliverables Grid */}
        <h3 className="text-3xl font-bold text-black mb-8">What I Deliver</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-2xl font-bold text-black mb-3">Custom RESTful APIs</h4>
            <p className="text-gray-600 leading-relaxed">Designing lightning-fast endpoints using FastAPI and Django to connect your frontend, mobile apps, and third-party integrations flawlessly.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-2xl font-bold text-black mb-3">Microservices Architecture</h4>
            <p className="text-gray-600 leading-relaxed">Breaking down heavy, slow monolithic apps into nimble, independent microservices that can be updated and scaled individually.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-2xl font-bold text-black mb-3">Database Optimization</h4>
            <p className="text-gray-600 leading-relaxed">Structuring relational (SQL) and NoSQL databases for maximum read/write efficiency, integrating caching layers like Redis to eliminate lag.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-2xl font-bold text-black mb-3">Security & Authentication</h4>
            <p className="text-gray-600 leading-relaxed">Implementing enterprise-grade security protocols, OAuth, and JWT authentication to ensure your users' data is locked down and compliant.</p>
          </div>
        </div>

        {/* Tech Stack Focus */}
        <h3 className="text-3xl font-bold text-black mb-8">Technology Stack</h3>
        <div className="flex flex-wrap gap-4 mb-20">
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">Python</span>
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">FastAPI</span>
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">Django / Flask</span>
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">PostgreSQL & MySQL</span>
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">Redis</span>
        </div>

        {/* Targeted CTA */}
        <div className="bg-white p-12 rounded-3xl shadow-lg border border-gray-200 text-center">
          <h2 className="text-4xl font-extrabold text-black mb-6">Need a backend that scales?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's discuss your current architecture and map out a modern, robust backend solution for your next big launch.
          </p>
          <Link href="/#contact" className="inline-flex bg-black text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-gray-800 hover:-translate-y-1 transition-all items-center justify-center">
            Book an Architecture Call
          </Link>
        </div>

      </div>
    </main>
  );
}