import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Hero />

      <FadeIn delay={0.1}>
        <About />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Skills />
      </FadeIn>

      <FadeIn delay={0.3}>
        <Experience />
      </FadeIn>

      <FadeIn delay={0.4}>
        <Education />
      </FadeIn>

      <FadeIn delay={0.5}>
        <Services />
      </FadeIn>

      <FadeIn delay={0.6}>
        <Portfolio />
      </FadeIn>

      <FadeIn delay={0.7}>
        <Achievements />
      </FadeIn>

      <FadeIn delay={0.8}>
        <Contact />
      </FadeIn>

      <Footer />
    </>
  );
}