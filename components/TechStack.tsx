export default function TechStack() {
  const techStack = [
    "Python", "FastAPI", "Docker", "AWS", "Machine Learning", 
    "Power BI", "Tableau", "PostgreSQL", "LangChain", "OpenAI API",
    "React", "Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions"
  ];
  
  // Duplicate the array to ensure smooth infinite scrolling
  const scrollingTech = [...techStack, ...techStack];

  return (
    <section className="w-full bg-white py-12 md:py-16 border-t border-gray-200 overflow-hidden flex flex-col items-center">
      <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest mb-8 text-center px-4">
        Powered by Industry-Standard Infrastructure
      </p>
      
      <div className="relative w-full max-w-[1400px] flex overflow-x-hidden">
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* The scrolling badges */}
        <div className="flex animate-infinite-scroll whitespace-nowrap gap-4 md:gap-6 items-center px-4">
          {scrollingTech.map((tech, index) => (
            <span key={index} className="px-6 py-2.5 md:py-3 bg-gray-50 border border-gray-200 rounded-full text-sm md:text-base font-bold text-gray-700 shadow-sm whitespace-nowrap">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}