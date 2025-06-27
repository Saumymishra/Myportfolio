import { useEffect } from "react";
import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/Projects";
import SkillsSection from "./component/SkillsSection";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Silk from "./component/Silk";
import GooeyNav from "./component/GooeyNav";

export default function App() {
  const items = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "My Skills", href: "#skillssection" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    // Always scroll to top on reload
    window.scrollTo(0, 0);

    // Disable automatic scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-black via-gray-900 to-black text-white font-sans scroll-smooth">
      {/* Silk Background */}
      <Silk
        speed={5}
        scale={1}
        color="#7B7481"
        noiseIntensity={1.5}
        rotation={0}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div style={{ position: "relative" }}>
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
        <main>
          <Hero />
          <About />
          <Projects />
          <SkillsSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
