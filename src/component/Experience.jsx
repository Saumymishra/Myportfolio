import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "Reignite Technologies",
    duration: "Feb 2025 – Mar 2025",
    tech: "HTML, CSS, JavaScript, React, Tailwind",
    details: [
      "Assisted in developing and debugging full-stack web applications using HTML, CSS, JavaScript, and React.js",
      "Implemented new features and optimized existing codebase in collaboration with senior developers",
      "Participated in daily stand-ups and code reviews as part of an Agile development team",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    duration: "Present",
    tech: "HTML, CSS, JavaScript, React, Tailwind, Bootstrap, MongoDB,",
    details: [
      "Designed and developed a ticket trading platform enabling users to swap event tickets securely.",
      "Implemented user authentication, ticket listing, and event/date filtering features.",
      "Focused on user-friendly interface and secure data handling practices.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="max-w-3xl mx-auto relative border-l-2 border-purple-600 pl-6 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Dot + Icon */}
            <div className="absolute -left-[39px] top-6 bg-purple-600 text-white p-1.5 rounded-full shadow-md">
              <Briefcase size={16} />
            </div>

            <h3 className="text-xl font-semibold text-white">
              {exp.role} @{" "}
              <span className="text-purple-400">{exp.company}</span>
            </h3>
            <p className="text-sm text-gray-300">{exp.duration}</p>
            <p className="text-sm italic text-gray-300 mt-1 mb-2">
              Tech: {exp.tech}
            </p>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              {exp.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
