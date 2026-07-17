import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}