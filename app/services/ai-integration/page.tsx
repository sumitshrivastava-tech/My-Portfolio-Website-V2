import Link from "next/link";

export default function AIIntegrationService() {
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
            AI & LLM Integration.
          </h1>
          <div className="w-24 h-2 bg-black rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl leading-relaxed">
            Stop losing hours to manual workflows. I design and deploy intelligent, custom AI pipelines that turn your proprietary data into a competitive advantage.
          </p>
        </div>

        {/* The "Why" - Business Value */}
        <div className="bg-black text-white p-10 md:p-14 rounded-3xl mb-16 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Businesses have massive amounts of internal data (PDFs, customer logs, internal docs) but no way to interact with it efficiently. Off-the-shelf AI tools pose privacy risks and lack specific business context.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#E5E5E5]">The Solution</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                I build secure, private AI systems using Retrieval-Augmented Generation (RAG). Your team gets an intelligent assistant that knows your exact business data, citing sources with every answer it provides.
              </p>
            </div>
          </div>
        </div>

        {/* Core Deliverables Grid */}
        <h3 className="text-3xl font-bold text-black mb-8">What I Deliver</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-2xl font-bold text-black mb-3">RAG Pipelines</h4>
            <p className="text-gray-600 leading-relaxed">
              Connecting Large Language Models to your private databases and documents so they can answer highly specific domain questions without hallucinating.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-2xl font-bold text-black mb-3">Autonomous AI Agents</h4>
            <p className="text-gray-600 leading-relaxed">
              Designing multi-step AI agents that don't just chat, but execute tasks—like formatting reports, scraping competitor pricing, or triaging customer support tickets.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-2xl font-bold text-black mb-3">API Wrapping & Microservices</h4>
            <p className="text-gray-600 leading-relaxed">
              Taking your newly trained AI models and wrapping them in blazing-fast, secure FastAPI endpoints so they can be plugged directly into your existing software.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:-translate-y-1 transition-all duration-300">
            <h4 className="text-2xl font-bold text-black mb-3">Prompt Engineering & Guardrails</h4>
            <p className="text-gray-600 leading-relaxed">
              Structuring robust system prompts and validation layers to ensure the AI behaves predictably, ethically, and stays strictly on-brand.
            </p>
          </div>
        </div>

        {/* Tech Stack Focus */}
        <h3 className="text-3xl font-bold text-black mb-8">Technology Stack</h3>
        <div className="flex flex-wrap gap-4 mb-20">
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">Python</span>
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">OpenAI / Anthropic APIs</span>
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">LangChain & LlamaIndex</span>
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">Vector DBs (Pinecone, Chroma)</span>
          <span className="bg-white border-2 border-black text-black px-6 py-2.5 rounded-full font-bold shadow-sm">HuggingFace</span>
        </div>

        {/* Targeted CTA */}
        <div className="bg-white p-12 rounded-3xl shadow-lg border border-gray-200 text-center">
          <h2 className="text-4xl font-extrabold text-black mb-6">Ready to integrate AI into your business?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's jump on a quick 30-minute discovery call to discuss your data, your bottlenecks, and how custom AI architecture can drive ROI.
          </p>
          <Link 
            href="/#contact" 
            className="inline-flex bg-black text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-gray-800 hover:-translate-y-1 transition-all items-center justify-center"
          >
            Book an AI Scoping Call
          </Link>
        </div>

      </div>
    </main>
  );
}