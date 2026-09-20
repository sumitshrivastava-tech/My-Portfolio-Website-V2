import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#E5E5E5] overflow-hidden flex flex-col">
      {/* 
        The Black Diagonal Background 
        Using clip-path to create the angle starting from roughly 40% at the top down to 25% at the bottom 
      */}
      <div 
        className="absolute top-0 right-0 w-[70%] h-full bg-black z-0"
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
      ></div>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center px-12 py-8 w-full max-w-7xl mx-auto">
        {/* Logo Placeholder */}
        <div className="text-2xl font-black tracking-tighter text-black">
          SS
        </div>
        
        {/* Nav Links */}
        <div className="flex items-center gap-8 text-sm font-medium text-white">
          <Link href="#about" className="hover:text-gray-300 transition-colors">About me</Link>
          <Link href="#services" className="hover:text-gray-300 transition-colors">Services</Link>
          <Link href="#portfolio" className="hover:text-gray-300 transition-colors">Portfolio</Link>
          <Link 
            href="#contact" 
            className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors"
          >
            CONTACT ME
          </Link>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex items-center max-w-7xl mx-auto w-full px-12">
        
        {/* Left Side: Text Content */}
        <div className="w-1/2 flex flex-col gap-2">
          <p className="text-xl font-medium text-gray-800">Hi, I am</p>
          <h1 className="text-6xl md:text-7xl font-bold text-black tracking-tight mt-2">
            Sumit <br/> Shrivastava
          </h1>
          <p className="text-lg text-gray-500 mt-2 font-medium">
            AI/ML Engineer / Python Backend Developer
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            {/* Replace # with your actual links */}
            <Link href="#" className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-black hover:bg-gray-400 transition-colors">
              @
            </Link>
            <Link href="#" className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-black hover:bg-gray-400 transition-colors">
              Gh
            </Link>
            <Link href="#" className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-black hover:bg-gray-400 transition-colors">
              In
            </Link>
          </div>
        </div>

        {/* Right Side: Portrait */}
        {/* You will need to drop a transparent PNG of yourself into the public folder named 'portrait.png' */}
        <div className="absolute bottom-0 right-[10%] w-[45%] max-w-[600px]">
          {/* 
            <Image 
              src="/portrait.png" 
              alt="Sumit Shrivastava" 
              width={600} 
              height={800} 
              className="object-contain object-bottom w-full h-auto drop-shadow-2xl"
              priority
            /> 
          */}
          <div className="w-full h-[600px] bg-gray-800/50 rounded-t-full border border-dashed border-gray-600 flex items-center justify-center text-gray-400">
             [Insert Your Transparent Portrait PNG Here]
          </div>
        </div>
      </div>
    </main>
  );
}