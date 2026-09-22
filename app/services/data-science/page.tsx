import Link from "next/link";

export default function DataScienceService() {
  return (
    <main className="min-h-screen bg-[#E5E5E5] font-sans pt-24 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-12">
          <Link href="/#services" className="text-gray-500 hover:text-black font-semibold flex items-center gap-2 mb-8 transition-colors w-max">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Services
          </Link>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6 tracking-tight leading-tight">Data Science & BI.</h1>
          <div className="w-24 h-2 bg-black rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl leading-relaxed">
            Transform raw, messy data into clear, actionable business intelligence with automated pipelines and interactive dashboards.
          </p>
        </div>

        <div className="bg-black text-white p-10 md:p-14 rounded-3xl mb-16 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-300 leading-relaxed text-lg">Companies sit on mountains of data scattered across spreadsheets and CRMs. Without proper visualization, leadership is forced to make gut decisions rather than data-driven ones.</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#E5E5E5]">The Solution</h2>
              <p className="text-gray-300 leading-relaxed text-lg">I design end-to-end data pipelines that clean and aggregate your data, feeding it into beautiful, interactive dashboards that highlight the exact KPIs your business needs to grow.</p>
            </div>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-black mb-8">What I Deliver</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-2xl font-bold text-black mb-3">Interactive Dashboards</h4>
            <p className="text-gray-600 leading-relaxed">Building intuitive Power BI and Tableau dashboards that allow you to filter, drill down, and visualize complex metrics instantly.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-2xl font-bold text-black mb-3">ETL & Data Cleaning</h4>
            <p className="text-gray-600 leading-relaxed">Automating the extraction, transformation, and loading (ETL) of raw data from multiple sources into a clean, centralized warehouse.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-2xl font-bold text-black mb-3">Predictive Modeling</h4>
            <p className="text-gray-600 leading-relaxed">Applying machine learning algorithms using Pandas and Scikit-learn to forecast trends, customer churn, and operational bottlenecks.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-2xl font-bold text-black mb-3">KPI Strategy</h4>
            <p className="text-gray-600 leading-relaxed">Consulting on which metrics actually matter to your specific industry, cutting out the noise so you can focus on growth.</p>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-black mb-8">Technology Stack</h3>
        <div className="flex flex-wrap gap-4 mb-20">
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">Power BI</span>
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">Tableau</span>
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">Python (Pandas, NumPy)</span>
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">SQL</span>
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">Looker Studio</span>
        </div>

        <div className="bg-white p-12 rounded-3xl shadow-lg border border-gray-200 text-center">
          <h2 className="text-4xl font-extrabold text-black mb-6">Stop guessing. Start measuring.</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Let's build a custom dashboard that gives you real-time visibility into your company's health.</p>
          <Link href="/#contact" className="inline-flex bg-black text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-gray-800 hover:-translate-y-1 transition-all items-center justify-center">Book a Data Strategy Call</Link>
        </div>
      </div>
    </main>
  );
}