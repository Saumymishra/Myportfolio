import React from "react";
import { motion } from "framer-motion";
import Myimage from "../assets/profile12.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 max-w-4xl mx-auto text-center flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.5 }} // 👈 allows re-triggering when 50% visible
      >
        About Me
      </motion.h2>

      {/* Profile Image */}
      <motion.img
        src={Myimage}
        alt="Me"
        className="w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 object-cover rounded-full shadow-lg mb-6 border-4 border-purple-500/50"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.5 }}
      />

      {/* Paragraphs */}
      <div className="space-y-4">
        <motion.p
  className="text-white text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-6"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ amount: 0.5 }}
>
  I’m a Full Stack Developer (MERN) building production-ready web applications
  used by real users and clients. I currently work on live products involving
  secure admin dashboards, backend APIs, and end-to-end system integration—
  taking features from idea to deployment with a strong focus on reliability
  and performance.
</motion.p>

<motion.p
  className="text-white text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-6"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ amount: 0.5 }}
>
  With hands-on experience in React, Node.js, Express, MongoDB, and Tailwind CSS,
  I specialize in building scalable full-stack systems with secure
  authentication, role-based access, and clean UI experiences. Whether it’s
  optimizing backend logic, designing admin workflows, or crafting responsive
  interfaces, I focus on shipping clean, maintainable solutions that solve real
  business problems.
</motion.p>

      </div>
    </section>
  );
}
