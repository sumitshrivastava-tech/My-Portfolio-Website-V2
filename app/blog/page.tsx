import Link from "next/link";

export default function Blog() {
  return (
    <main className="min-h-screen bg-[#E5E5E5] font-sans pt-24 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Page Header */}
        <div className="mb-16">
          <Link href="/" className="text-gray-500 hover:text-black font-semibold flex items-center gap-2 mb-6 transition-colors w-max">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Home
          </Link>
          <h1 className="text-5xl font-extrabold text-black mb-4 tracking-tight">Blog.</h1>
          <div className="w-20 h-2 bg-black rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 font-medium max-w-2xl">
            My thoughts, tutorials, and deep dives into Python backend engineering, Data Science, and building AI applications.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Blog Post Card 1 */}
          <Link href="#" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Engineering</span>
              <span className="text-xs font-semibold text-gray-400">Sep 15, 2026</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">Structuring FastAPI Applications for Production</h3>
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
              A comprehensive guide to organizing your routers, dependencies, and database models in FastAPI to ensure your application remains scalable.
            </p>
            <div className="flex items-center text-sm font-bold text-black gap-1">
              Read Article 
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </Link>

          {/* Blog Post Card 2 */}
          <Link href="#" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">AI & ML</span>
              <span className="text-xs font-semibold text-gray-400">Aug 28, 2026</span>
            </div>
            <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">Optimizing RAG Pipelines with Pinecone</h3>
            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
              How to reduce hallucination and improve retrieval speed by fine-tuning chunking strategies and integrating vector databases.
            </p>
            <div className="flex items-center text-sm font-bold text-black gap-1">
              Read Article 
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}