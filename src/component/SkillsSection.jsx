import React, { useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiFigma, SiTailwindcss, SiCanva } from "react-icons/si";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "Canva", icon: <SiCanva className="text-blue-400" /> },
];

const SkillsSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 150;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="skillssection"
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 max-w-5xl mx-auto text-center flex flex-col items-center relative"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text">
        My Skills
      </h2>

      <p className="text-white text-sm sm:text-base md:text-lg mb-8 max-w-2xl px-2">
        Here’s a quick snapshot of the core technologies and design tools I love
        using to create beautiful, user-focused web experiences.
      </p>

      <div className="relative w-full">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 z-10"
          aria-label="Scroll left"
        >
          <FiChevronLeft className="text-white text-xl sm:text-2xl" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 z-10"
          aria-label="Scroll right"
        >
          <FiChevronRight className="text-white text-xl sm:text-2xl" />
        </button>

        {/* Skills Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto px-6 sm:px-10 scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center bg-white/10 p-4 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
              style={{ minWidth: "90px" }}
            >
              <div className="text-3xl sm:text-4xl mb-2">{skill.icon}</div>
              <p className="text-xs sm:text-sm font-semibold text-gray-300 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
