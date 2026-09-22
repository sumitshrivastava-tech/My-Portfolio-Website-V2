"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaBars, FaXmark } from "react-icons/fa6";

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen w-full bg-[#E5E5E5] overflow-hidden flex flex-col">
      
      {/* DESKTOP: The Black Diagonal Background */}
      <div 
        className="hidden md:block absolute top-0 right-0 w-full h-full bg-black z-0 pointer-events-none"
        style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 38% 100%)" }}
      ></div>

      {/* MOBILE: The Black Bottom Wedge Background (Lowered to 20% to avoid icon collision) */}
      <div 
        className="md:hidden absolute bottom-0 left-0 w-full h-[20%] bg-black z-0 pointer-events-none"
        style={{ clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0 100%)" }}
      ></div>

      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center px-6 md:px-12 lg:px-20 py-6 md:py-8 w-full max-w-[1920px] mx-auto">
        <div className="text-3xl font-black tracking-tighter text-black z-50">
          <span className="border-b-4 border-black pb-1">SS</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 lg:gap-10 text-sm font-semibold text-white">
          <Link href="/#about" className="hover:text-gray-300 transition-colors">About me</Link>
          <Link href="/#services" className="hover:text-gray-300 transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-gray-300 transition-colors">Portfolio</Link>
          <Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
          <Link href="/research" className="hover:text-gray-300 transition-colors">Research</Link>
          <Link href="/#contact" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors ml-2 shadow-lg">
            CONTACT ME
          </Link>
        </div>

        <div className="lg:hidden z-50">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-black p-2 focus:outline-none">
            {isMobileMenuOpen ? <FaXmark className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-2xl font-black transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-500 transition-colors">About me</Link>
          <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-500 transition-colors">Services</Link>
          <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-500 transition-colors">Portfolio</Link>
          <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-500 transition-colors">Blog</Link>
          <Link href="/research" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-500 transition-colors">Research</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-black text-white px-10 py-4 rounded-full text-lg mt-4 shadow-lg">
            CONTACT ME
          </Link>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-grow flex flex-col md:flex-row items-center justify-center md:justify-start max-w-[1920px] mx-auto w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-20 pt-2 md:-mt-16">
        <div className="w-full md:w-[60%] flex flex-col justify-center z-20 text-left mt-16 md:mt-24">
          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Hi, I am</p>
          <h1 className="text-[3.5rem] leading-[1.1] sm:text-6xl md:text-[5.5rem] font-extrabold text-black tracking-tight md:leading-[1.05] mb-4 md:mb-5">
            Sumit <br className="hidden md:block"/> Shrivastava
          </h1>
          <p className="text-base md:text-lg text-gray-700 md:text-gray-500 font-semibold max-w-[450px] leading-relaxed mb-8">
            Remote Data & AI Consultant | Building Intelligent Cloud and Backend Solutions for clients worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
            <Link href="#contact" className="bg-black text-white px-8 py-4 md:py-3.5 rounded-full text-sm font-bold shadow-lg hover:bg-gray-800 hover:-translate-y-1 transition-all flex items-center justify-center text-center leading-tight w-full sm:w-max">
              Let's Discuss Your Project
            </Link>
            <Link href="/portfolio" className="bg-transparent border-[2.5px] border-black text-black px-8 py-4 md:py-3.5 rounded-full text-sm font-bold hover:bg-black hover:text-white hover:-translate-y-1 transition-all flex items-center justify-center w-full sm:w-max bg-white md:bg-transparent">
              View My Work.
            </Link>
          </div>

          <div className="flex gap-3 sm:gap-4 justify-start flex-wrap mb-4 md:mb-0">
            <Link href="/cv.pdf" target="_blank" className="w-12 h-12 bg-[#E5E5E5] md:bg-white rounded-full shadow-md border border-gray-300 flex items-center justify-center text-black hover:-translate-y-1 transition-all">
              <span className="font-bold text-lg md:text-xl">CV</span>
            </Link>
            <Link href="https://github.com/sumitshrivastava-tech" target="_blank" className="w-12 h-12 bg-[#E5E5E5] md:bg-white rounded-full shadow-md border border-gray-300 flex items-center justify-center text-black hover:-translate-y-1 transition-all">
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/sumitshrivastava-tech" target="_blank" className="w-12 h-12 bg-[#E5E5E5] md:bg-white rounded-full shadow-md border border-gray-300 flex items-center justify-center text-black hover:-translate-y-1 transition-all">
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-12 h-12 bg-[#E5E5E5] md:bg-white rounded-full shadow-md border border-gray-300 flex items-center justify-center text-black hover:-translate-y-1 transition-all">
              <FaXTwitter className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Right Side: Portrait Image (HIDDEN ON MOBILE, VISIBLE ON DESKTOP) */}
        <div className="hidden md:flex absolute bottom-0 right-[12%] w-[35%] max-w-[500px] pointer-events-none justify-center z-10 mt-auto">
          <Image src="/portfolio_dp.png" alt="Sumit Shrivastava" width={500} height={667} className="object-contain object-bottom w-full h-auto drop-shadow-2xl" priority />
        </div>
      </div>
    </section>
  );
}