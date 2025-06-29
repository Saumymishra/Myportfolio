import React from "react";
import RotatingText from "./RotatingText";
import SplitText from "./SplitText";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-12 relative overflow-hidden"
    >
      <div className="absolute " />

      <SplitText
        text="Hello, I'm Saumy Mishra!"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-white bg-clip-text"
        delay={110}
        duration={2}
        ease="elastic.out(1, 0.3)"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.2}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={() => {}}
      />

      <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-md sm:max-w-lg md:max-w-xl mb-6 px-2 sm:px-0">
        <RotatingText
          texts={[
            "Frontend Developer & UI Enthusiast",
            "Turning Ideas into Pixel-Perfect Experiences",
            "Bringing Creativity to Code",
            "Transforming Concepts into Reality",
            "Turning Ideas into Stunning Designs",
            "Innovate, Create, and Inspire",
          ]}
          rotationInterval={3000}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-120%", opacity: 0 }}
          splitBy="characters"
          mainClassName="inline-block"
          elementLevelClassName="inline-block"
          auto={true}
          loop={true}
        />
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* View My Work Button */}
        <a
          href="#projects"
          className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 text-sm sm:text-base"
        >
          View My Work
        </a>

        {/* Download CV Button */}
        <a
          href="/Myportfolio/saumy.pdf"
          download
          className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 text-sm sm:text-base"
        >
          Download My CV
        </a>
      </div>
    </section>
  );
}
