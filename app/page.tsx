import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/40 blur-3xl"></div>

        <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-blue-500/40 blur-3xl"></div>
      </div>

      <Navbar />

      <Landing />

      <Stats />

      <About />

      <Services />

      <Skills />

      <Education />

      <Experience />

      <Achievements />

      <Portfolio />

      <Contact />

      <Footer />
    </main>
  );
}