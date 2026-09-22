"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa6";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      setSuccess(true);
      (event.target as HTMLFormElement).reset();
    }
    setIsSubmitting(false);
  }

  return (
    <section id="contact" className="w-full bg-black text-white pt-16 md:pt-24 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-24">
          
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 tracking-tight">Let's build <br/> something great.</h2>
            <div className="w-16 md:w-20 h-2 bg-[#E5E5E5] rounded-full mb-6 md:mb-8"></div>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-md">
              Fill out the form to send me an email, or if you prefer to chat face-to-face, grab a free 30-minute slot on my calendar below.
            </p>
            
            <div className="space-y-6 md:space-y-8">
              <Link 
                href={process.env.NEXT_PUBLIC_CALENDLY_URL || "#"}
                target="_blank"
                className="inline-flex bg-white text-black px-8 py-4 rounded-full text-sm font-bold shadow-lg hover:bg-gray-200 hover:-translate-y-1 transition-all items-center justify-center gap-3 w-full sm:w-max"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Schedule a Free Meeting
              </Link>

              <div className="pt-4 border-t border-gray-800 max-w-md"></div>

              <a href="mailto:sumitshrivastava.dev@gmail.com" className="flex items-center gap-4 text-base md:text-lg font-bold hover:text-gray-300 transition-colors w-max">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                sumitshrivastava.dev@gmail.com
              </a>
              <div className="flex items-center gap-4 text-base md:text-lg font-bold w-max">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaGlobe className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                Remote (Available Globally)
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-8 md:p-10 rounded-3xl border border-gray-800 shadow-2xl">
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white text-black rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">I'll get back to you within 24 hours.</p>
                <button onClick={() => setSuccess(false)} className="mt-8 text-sm font-bold underline hover:text-gray-300">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
                <input type="hidden" name="subject" value="New Inquiry from Portfolio Website" />
                <input type="checkbox" name="botcheck" id="" style={{ display: "none" }} />
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-400">Name</label>
                  <input type="text" name="name" required className="bg-black border border-gray-700 rounded-xl px-4 py-3 md:px-5 md:py-3.5 text-white focus:outline-none focus:border-white transition-colors" placeholder="John Doe" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-400">Email</label>
                  <input type="email" name="email" required className="bg-black border border-gray-700 rounded-xl px-4 py-3 md:px-5 md:py-3.5 text-white focus:outline-none focus:border-white transition-colors" placeholder="john@company.com" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-400">Message</label>
                  <textarea name="message" required rows={4} className="bg-black border border-gray-700 rounded-xl px-4 py-3 md:px-5 md:py-3.5 text-white focus:outline-none focus:border-white transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
                
                <button type="submit" disabled={isSubmitting} className="bg-white text-black font-bold text-sm px-8 py-4 rounded-full mt-2 hover:bg-gray-200 transition-colors flex items-center justify-center disabled:opacity-50 w-full md:w-auto">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}