import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
        
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 md:mb-6 tracking-tight">About Me.</h2>
          <div className="w-16 md:w-20 h-2 bg-black rounded-full"></div>
        </div>

        <div className="md:w-2/3 flex flex-col gap-6 text-base md:text-lg text-gray-700 leading-relaxed font-medium">
          <p>
            I recently graduated with a B.Tech in Computer Science (AI & ML) from IES IPS Academy Indore. As a freelance Data & AI Consultant, I thrive on building intelligent, production-ready solutions that solve real-world business challenges. 
          </p>
          <p>
            For me, technology is a lifelong pursuit. I am driven by a mindset of continuous learning—improving my craft daily by engineering ambitious projects, publishing research papers on emerging AI concepts, and sharing insights through technical blogs. Whether I am designing agentic AI workflows or scaling cloud infrastructure, my focus is always on delivering robust, high-impact results that drive innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-2 mb-4">
            <Link href="/experience" className="bg-transparent border-[2.5px] border-black text-black px-8 py-3 md:py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-black hover:text-white hover:-translate-y-1 transition-all flex items-center justify-center w-full sm:w-max min-w-[150px]">
              Experience
            </Link>
            <Link href="/education" className="bg-transparent border-[2.5px] border-black text-black px-8 py-3 md:py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-black hover:text-white hover:-translate-y-1 transition-all flex items-center justify-center w-full sm:w-max min-w-[150px]">
              Education
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 mt-4">
            <div className="border-l-4 border-black pl-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-r-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <h4 className="text-lg md:text-xl font-bold text-black">Artificial Intelligence</h4>
              <p className="text-sm mt-1.5 text-gray-600 leading-snug">Gen AI, RAG, Agentic AI, LLMs, Machine Learning</p>
            </div>
            <div className="border-l-4 border-black pl-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-r-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <h4 className="text-lg md:text-xl font-bold text-black">Backend Engineering</h4>
              <p className="text-sm mt-1.5 text-gray-600 leading-snug">Python, FastAPI, Django, Flask, RESTful APIs</p>
            </div>
            <div className="border-l-4 border-black pl-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-r-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <h4 className="text-lg md:text-xl font-bold text-black">Data & Analytics</h4>
              <p className="text-sm mt-1.5 text-gray-600 leading-snug">Power BI, Tableau, Looker Studio, Excel, Pandas</p>
            </div>
            <div className="border-l-4 border-black pl-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-r-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <h4 className="text-lg md:text-xl font-bold text-black">Cloud & DevOps</h4>
              <p className="text-sm mt-1.5 text-gray-600 leading-snug">AWS, Azure, Docker, Kubernetes, CI/CD Pipelines</p>
            </div>
            <div className="border-l-4 border-black pl-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-r-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <h4 className="text-lg md:text-xl font-bold text-black">Databases</h4>
              <p className="text-sm mt-1.5 text-gray-600 leading-snug">SQL, PostgreSQL, MongoDB, Redis, Pinecone</p>
            </div>
            <div className="border-l-4 border-black pl-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-r-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <h4 className="text-lg md:text-xl font-bold text-black">Core Practices</h4>
              <p className="text-sm mt-1.5 text-gray-600 leading-snug">System Design, Data Structures, Open Source</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}