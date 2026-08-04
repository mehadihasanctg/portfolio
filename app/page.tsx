import Landing from "@/components/Landing";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Services />
      <Portfolio />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}