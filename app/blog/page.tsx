import Link from "next/link";

export default function Blog() {
  return (
    <main className="min-h-screen bg-[#E5E5E5] font-sans pt-24 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Page Header */}
        <div className="mb-16">
          <Link href="/" className="text-gray-500 hover:text-black font-semibold flex items-center gap-2 mb-6 transition-colors w-max">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-5xl font-extrabold text-black mb-4 tracking-tight">Blog.</h1>
          <div className="w-20 h-2 bg-black rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 font-medium max-w-2xl">
            My thoughts, tutorials, and deep dives into Python backend engineering, Data Science, and building AI applications.
          </p>
        </div>

        {/* Under Development State */}
        <div className="bg-white p-12 md:p-24 rounded-3xl shadow-sm border border-gray-200 flex flex-col items-center justify-center text-center">
          
          {/* Construction/Development Icon */}
          <div className="w-24 h-24 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center mb-8 shadow-inner">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          
          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Coming Soon</h2>
          <p className="text-lg text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed font-medium">
            This section is currently under development. I'm busy writing some great content about AI and Data Science. Check back soon!
          </p>
          
          {/* Action Button */}
          <Link 
            href="/portfolio" 
            className="bg-black text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-md hover:bg-gray-800 hover:-translate-y-0.5 transition-all"
          >
            Explore My Portfolio
          </Link>
          
        </div>
      </div>
    </main>
  );
}