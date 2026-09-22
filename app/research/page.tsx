import Link from "next/link";

export default function Research() {
  return (
    <main className="min-h-screen bg-[#E5E5E5] font-sans pt-24 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Page Header */}
        <div className="mb-16">
          <Link href="/" className="text-gray-500 hover:text-black font-semibold flex items-center gap-2 mb-6 transition-colors w-max">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Home
          </Link>
          <h1 className="text-5xl font-extrabold text-black mb-4 tracking-tight">Research.</h1>
          <div className="w-20 h-2 bg-black rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 font-medium max-w-2xl">
            My academic publications, pre-prints, and explorations into the mathematics and architecture of emerging AI models.
          </p>
        </div>

        {/* Research Papers List */}
        <div className="space-y-8">
          
          {/* Paper 1 */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider w-max">Pre-Print</span>
              <span className="text-sm font-semibold text-gray-500">September 2026</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
              Evaluating Context Retention in Long-Context Large Language Models for Enterprise Data
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
              Sumit Shrivastava, Co-Author Name
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
              <h4 className="text-sm font-bold text-black mb-2 uppercase tracking-wider">Abstract</h4>
              <p className="text-sm text-gray-600 leading-relaxed italic">
                "This paper explores the degradation of information retrieval in Large Language Models when context windows exceed 100k tokens. We propose a hybrid chunking-and-reranking mechanism that improves exact-match retrieval by 18% in proprietary corporate datasets..."
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-gray-800 hover:-translate-y-0.5 transition-all flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Download PDF
              </Link>
              <button className="bg-transparent border-2 border-black text-black px-6 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-black hover:text-white hover:-translate-y-0.5 transition-all">
                Cite (BibTeX)
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}