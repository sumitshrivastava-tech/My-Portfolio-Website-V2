import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="w-full bg-[#E5E5E5] py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-gray-300">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
        
        {/* Left Side: Title & Description */}
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 md:mb-6 tracking-tight">Services.</h2>
          <div className="w-16 md:w-20 h-2 bg-black rounded-full mb-6"></div>
          <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed">
            Transforming complex data and backend architecture into scalable, production-ready solutions for your business.
          </p>
        </div>

        {/* Right Side: Services Grid */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          
          <Link href="/services/ai-integration" className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
            <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-2 relative z-10">AI & LLM Integration</h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow relative z-10">Design and deploy custom AI agents, Retrieval-Augmented Generation (RAG) pipelines, and generative AI features.</p>
            
            {/* Hover Arrow */}
            <div className="hidden md:block absolute bottom-8 right-8 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </Link>

          <Link href="/services/backend-engineering" className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
            <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-2 relative z-10">Backend Engineering</h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow relative z-10">Build highly concurrent, secure, and scalable RESTful APIs and microservices using Python, FastAPI, and Django.</p>
            
            {/* Hover Arrow */}
            <div className="hidden md:block absolute bottom-8 right-8 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </Link>

          <Link href="/services/data-science" className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
            <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-2 relative z-10">Data Science & BI</h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow relative z-10">Transform raw data into clear business intelligence with end-to-end data pipelines and dashboards in Power BI.</p>
            
            {/* Hover Arrow */}
            <div className="hidden md:block absolute bottom-8 right-8 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </Link>

          <Link href="/services/cloud-architecture" className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
            <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-2 relative z-10">Cloud Architecture</h3>
            <p className="text-gray-600 text-sm leading-relaxed flex-grow relative z-10">Containerize applications with Docker and deploy them reliably to AWS or Azure with automated CI/CD pipelines.</p>
            
            {/* Hover Arrow */}
            <div className="hidden md:block absolute bottom-8 right-8 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}