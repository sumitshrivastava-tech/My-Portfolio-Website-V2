import Link from "next/link";

export default function Experience() {
  return (
    <main className="min-h-screen bg-[#E5E5E5] font-sans pt-24 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Page Header */}
        <div className="mb-16">
          <Link href="/#about" className="text-gray-500 hover:text-black font-semibold flex items-center gap-2 mb-6 transition-colors w-max">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Home
          </Link>
          <h1 className="text-5xl font-extrabold text-black mb-4 tracking-tight">Experience.</h1>
          <div className="w-20 h-2 bg-black rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 font-medium max-w-2xl">
            My professional journey building scalable backend systems, deploying AI models, and solving complex architectural challenges.
          </p>
        </div>

        {/* Interactive Vertical Timeline */}
        <div className="relative border-l-4 border-gray-300 ml-4 md:ml-6 space-y-12 pb-10">
          
          {/* Experience Node 1: Freelance */}
          <div className="relative pl-10 md:pl-16 group">
            <div className="absolute w-6 h-6 bg-black rounded-full -left-[14px] top-1 group-hover:scale-125 transition-transform duration-300 ring-4 ring-[#E5E5E5]"></div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-black">Freelance Data & AI Consultant</h3>
                  <p className="text-gray-500 font-medium mt-1">Independent</p>
                </div>
                <span className="text-sm font-bold text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full w-max mt-3 md:mt-0">Present</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Partnering with businesses to architect custom AI workflows, optimize data pipelines, and deploy highly concurrent backend microservices. I focus on translating complex data requirements into actionable business intelligence.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-bold text-black border border-gray-300 px-3 py-1 rounded-full">Python</span>
                <span className="text-xs font-bold text-black border border-gray-300 px-3 py-1 rounded-full">FastAPI</span>
                <span className="text-xs font-bold text-black border border-gray-300 px-3 py-1 rounded-full">Machine Learning</span>
              </div>
            </div>
          </div>

          {/* Experience Node 2: Internship */}
          <div className="relative pl-10 md:pl-16 group">
            <div className="absolute w-6 h-6 bg-gray-400 rounded-full -left-[14px] top-1 group-hover:bg-black group-hover:scale-125 transition-all duration-300 ring-4 ring-[#E5E5E5]"></div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-black">Data Analyst Intern</h3>
                  <p className="text-gray-500 font-medium mt-1">Ypsilion IT Solutions Private Ltd, Indore</p>
                </div>
                <span className="text-sm font-bold text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full w-max mt-3 md:mt-0">May 2025 - Jun 2025</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Handled end-to-end data analysis workflows, cleaning raw datasets using SQL and Excel. Built interactive dashboards in Power BI and Tableau to track key metrics and presented data-driven recommendations to support team decisions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-bold text-black border border-gray-300 px-3 py-1 rounded-full">SQL</span>
                <span className="text-xs font-bold text-black border border-gray-300 px-3 py-1 rounded-full">Power BI</span>
                <span className="text-xs font-bold text-black border border-gray-300 px-3 py-1 rounded-full">Tableau</span>
                <span className="text-xs font-bold text-black border border-gray-300 px-3 py-1 rounded-full">Excel</span>
              </div>
            </div>
          </div>

          {/* Experience Node 3: Open Source */}
          <div className="relative pl-10 md:pl-16 group">
            <div className="absolute w-6 h-6 bg-gray-400 rounded-full -left-[14px] top-1 group-hover:bg-black group-hover:scale-125 transition-all duration-300 ring-4 ring-[#E5E5E5]"></div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-black">Open-Source Contributor</h3>
                  <p className="text-gray-500 font-medium mt-1">GirlScript Summer of Code (GSSOC '25)</p>
                </div>
                <span className="text-sm font-bold text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full w-max mt-3 md:mt-0">2025</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Contributed to open-source projects as part of a global developer community[cite: 17]. Utilized Git and GitHub for version control to submit pull requests, resolve technical issues, and collaborate efficiently with other developers[cite: 17].
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-bold text-black border border-gray-300 px-3 py-1 rounded-full">Git</span>
                <span className="text-xs font-bold text-black border border-gray-300 px-3 py-1 rounded-full">GitHub</span>
                <span className="text-xs font-bold text-black border border-gray-300 px-3 py-1 rounded-full">Open Source</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}