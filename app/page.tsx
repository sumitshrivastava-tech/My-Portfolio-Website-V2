import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-sans text-black relative">
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}