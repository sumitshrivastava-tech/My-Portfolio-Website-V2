"use client";

import { useState } from "react";
import Link from "next/link";

// 1. The Project Data Array 
// To add a new project later, just add a new block to this list!
const projectsData = [
  {
    id: 1,
    title: "Ride-Sharing Demand Analytics",
    category: "Data Science",
    description: "Cleaned raw trip data to build an interactive Power BI dashboard tracking ride volume. Designed heatmaps to visualize high-demand pickup locations and extracted actionable insights to optimize driver availability during peak periods.",
    tech: ["Power BI", "Data Cleaning", "Data Visualization"],
    link: "#",
  },
  {
    id: 2,
    title: "Workforce Attrition & KPI Dashboard",
    category: "Data Science",
    description: "Developed a centralized Tableau dashboard enabling HR leadership to track employee turnover and retention rates. Implemented interactive drill-down filters by age, gender, and department to rapidly assess workforce trends.",
    tech: ["Tableau", "KPI Design", "Data Analytics"],
    link: "#",
  },
  {
    id: 3,
    title: "Enterprise RAG Document Search",
    category: "AI & LLM",
    description: "Architected a Retrieval-Augmented Generation pipeline allowing employees to query thousands of internal PDFs securely. Reduced manual document search time by 80%.",
    tech: ["Python", "LangChain", "Pinecone", "OpenAI"],
    link: "#",
  },
  {
    id: 4,
    title: "High-Concurrency Fintech API",
    category: "Backend",
    description: "Built a secure RESTful API using FastAPI to handle real-time transaction processing. Containerized the microservice with Docker for seamless cloud deployment and scaling.",
    tech: ["FastAPI", "Docker", "PostgreSQL"],
    link: "#",
  }
];

const categories = ["All", "AI & LLM", "Backend", "Data Science", "Cloud"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter logic
  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#E5E5E5] font-sans pt-24 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Page Header */}
        <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <Link href="/" className="text-gray-500 hover:text-black font-semibold flex items-center gap-2 mb-6 transition-colors w-max mx-auto md:mx-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 tracking-tight">Portfolio.</h1>
            <div className="w-24 h-2 bg-black rounded-full mb-6 mx-auto md:mx-0"></div>
            <p className="text-xl text-gray-600 font-medium max-w-2xl">
              A selection of case studies demonstrating how I build scalable backend architecture and extract actionable insights from complex data.
            </p>
          </div>
          
          <Link href="/#contact" className="bg-black text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-lg hover:bg-gray-800 hover:-translate-y-1 transition-all flex items-center justify-center w-max mx-auto md:mx-0">
            Start a Project
          </Link>
        </div>

        {/* Dynamic Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-gray-300 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${
                activeFilter === category 
                  ? "bg-black text-white border-2 border-black" 
                  : "bg-white text-black border-2 border-transparent hover:border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
              
              <div className="flex justify-between items-start mb-6">
                <span className="bg-gray-100 text-gray-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
                <Link href={project.link} className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>

              <h3 className="text-3xl font-bold text-black mb-4 leading-tight">{project.title}</h3>
              
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow text-lg">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                {project.tech.map((item, index) => (
                  <span key={index} className="text-xs font-bold text-black border-[2px] border-gray-200 px-4 py-1.5 rounded-full">
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Empty State (If a filter has no projects yet) */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 border-dashed">
            <h3 className="text-2xl font-bold text-black mb-2">Projects in development.</h3>
            <p className="text-gray-500">Check back soon for case studies in this category.</p>
          </div>
        )}

      </div>
    </main>
  );
}