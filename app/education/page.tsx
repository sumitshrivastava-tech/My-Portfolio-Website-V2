import Link from "next/link";

export default function Education() {
  return (
    <main className="min-h-screen bg-[#E5E5E5] font-sans pt-24 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Page Header */}
        <div className="mb-16">
          <Link href="/#about" className="text-gray-500 hover:text-black font-semibold flex items-center gap-2 mb-6 transition-colors w-max">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Home
          </Link>
          <h1 className="text-5xl font-extrabold text-black mb-4 tracking-tight">Education.</h1>
          <div className="w-20 h-2 bg-black rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 font-medium max-w-2xl">
            My academic foundation in Computer Science, Artificial Intelligence, and continuous learning through industry certifications.
          </p>
        </div>

        {/* Interactive Vertical Timeline */}
        <div className="relative border-l-4 border-gray-300 ml-4 md:ml-6 space-y-12 pb-10">
          
          {/* Education Node 1: B.Tech */}
          <div className="relative pl-10 md:pl-16 group">
            <div className="absolute w-6 h-6 bg-black rounded-full -left-[14px] top-1 group-hover:scale-125 transition-transform duration-300 ring-4 ring-[#E5E5E5]"></div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-black">B.Tech in Computer Science (AI & ML)</h3>
                  <p className="text-gray-500 font-medium mt-1">Institute Of Engineering & Science, IPS Academy, Indore</p>
                </div>
                <span className="text-sm font-bold text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full w-max mt-3 md:mt-0">Jul 2022 - Jun 2026</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Specializing in Artificial Intelligence and Machine Learning. Building a strong foundation in software engineering, data structures, and advanced predictive modeling while actively participating in hackathons and coding challenges.
              </p>
              
              {/* Highlighted Courses/Certs from Resume */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="text-sm font-bold text-black mb-2 uppercase tracking-wider">Certifications & Bootcamps</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Deloitte Data Analytics Virtual Internship</li>
                  <li>Mathematics for Data Science & GenAI</li>
                  <li>Complete Python with DSA & Data Analyst Bootcamp</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Node 2: Senior Secondary */}
          <div className="relative pl-10 md:pl-16 group">
            <div className="absolute w-6 h-6 bg-gray-400 rounded-full -left-[14px] top-1 group-hover:bg-black group-hover:scale-125 transition-all duration-300 ring-4 ring-[#E5E5E5]"></div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-black">Senior Secondary Education (CBSE)</h3>
                  <p className="text-gray-500 font-medium mt-1">Gomti Nandan Public School, Bina</p>
                </div>
                <span className="text-sm font-bold text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full w-max mt-3 md:mt-0">Jul 2020 - Jul 2022</span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-2">
                Core focus on Mathematics and sciences, building the analytical and logical foundation required for advanced computer science studies.
              </p>
            </div>
          </div>

          {/* Education Node 3: Secondary */}
          <div className="relative pl-10 md:pl-16 group">
            <div className="absolute w-6 h-6 bg-gray-400 rounded-full -left-[14px] top-1 group-hover:bg-black group-hover:scale-125 transition-all duration-300 ring-4 ring-[#E5E5E5]"></div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-black">Secondary Education (CBSE)</h3>
                  <p className="text-gray-500 font-medium mt-1">Nirmal Jyoti Hr. Sec. School, Bina</p>
                </div>
                <span className="text-sm font-bold text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full w-max mt-3 md:mt-0">Apr 2010 - Jul 2020</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}