import Link from "next/link";
import Image from "next/image";

export default function Research() {
  return (
    <main className="min-h-screen bg-[#E5E5E5] font-sans pt-24 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Page Header */}
        <div className="mb-16">
          <Link href="/" className="text-gray-500 hover:text-black font-semibold flex items-center gap-2 mb-6 transition-colors w-max">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
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
            
            {/* Meta Tags & Badges */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider w-max">Published</span>
                <span className="text-sm font-semibold text-gray-500">2026</span>
              </div>
              
              {/* Badges (Colab & DOI) */}
              <div className="flex items-center gap-3">
                <Link 
                  href="https://colab.research.google.com/github/sumitshrivastava-tech/SBLA-Cortical/blob/main/SBLA_Cortical_v09_Demo.ipynb" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-80 transition-opacity flex items-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://colab.research.google.com/assets/colab-badge.svg" 
                    alt="Open In Colab" 
                    className="h-[24px] w-auto"
                  />
                </Link>
                <Link 
                  href="https://doi.org/10.5281/zenodo.23499684" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:opacity-80 transition-opacity flex items-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://zenodo.org/badge/DOI/10.5281/zenodo.23499684.svg" 
                    alt="DOI Badge" 
                    className="h-[24px] w-auto"
                  />
                </Link>
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight">
              SBLA-Cortical Unifying 158-Bit Ternary Synapses O1 Dendritic Fast-Weight Memory and Homeostatic Spiking Predictive Coding for Ultra-Efficient Foundation Models
            </h3>
            
            {/* Authors */}
            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
              Sumit Shrivastava
            </p>
            
            {/* Abstract */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
              <h4 className="text-sm font-bold text-black mb-2 uppercase tracking-wider">Abstract</h4>
              <p className="text-sm text-gray-600 leading-relaxed italic">
                "This paper introduces a novel approach to ultra-efficient foundation models by unifying 158-bit ternary synapses with dendritic fast-weight memory. By leveraging homeostatic spiking predictive coding, the proposed SBLA-Cortical architecture significantly reduces computational overhead while maintaining robust learning capabilities."
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link 
                href="https://zenodo.org/records/23499684" 
                target="_blank"
                className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-gray-800 hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View on Zenodo
              </Link>
              <Link 
                href="https://www.researchgate.net/publication/416465449_SBLA-Cortical_Unifying_158-Bit_Ternary_Synapses_O1_Dendritic_Fast-Weight_Memory_and_Homeostatic_Spiking_Predictive_Coding_for_Ultra-Efficient_Foundation_Models" 
                target="_blank"
                className="bg-transparent border-2 border-black text-black px-6 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-black hover:text-white hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                Read on ResearchGate
              </Link>
            </div>

            {/* Document Preview Area */}
            <div className="mt-8 border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
               
               {/* Preview Toolbar */}
               <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                 <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Document Preview</span>
                 
                 <div className="flex items-center gap-4">
                   {/* Full Screen Link */}
                   <a 
                     href="/documents/SBLA_Cortical_Sumit_Shrivastava_2026.pdf" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-xs font-bold text-gray-600 hover:text-black flex items-center gap-1.5 transition-colors"
                   >
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                     Full Screen
                   </a>
                   
                   {/* Download Link */}
                   <a 
                     href="/documents/SBLA_Cortical_Sumit_Shrivastava_2026.pdf" 
                     download="SBLA_Cortical_Sumit_Shrivastava_2026.pdf"
                     className="text-xs font-bold text-black hover:text-gray-600 flex items-center gap-1.5 transition-colors"
                   >
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                     Download PDF
                   </a>
                 </div>
               </div>

               {/* iFrame PDF Embed */}
               <iframe 
                 src="/documents/SBLA_Cortical_Sumit_Shrivastava_2026.pdf" 
                 className="w-full h-[500px] md:h-[700px]"
                 title="SBLA-Cortical Research Paper Preview"
                 allowFullScreen
               />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
