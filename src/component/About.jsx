import React from "react";
import Myimage from "../assets/profile12.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 max-w-4xl mx-auto text-center flex flex-col items-center"
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text">
        About Me
      </h2>

      {/* Profile Image */}
      <img
        src={Myimage}
        alt="Me"
        className="w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 object-cover rounded-full shadow-lg mb-6 border-4 border-purple-500/50"
      />

      {/* Paragraphs */}
      <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-4 px-2 sm:px-6">
        I’m a creative frontend developer with a passion for crafting sleek,
        interactive websites that balance aesthetics and functionality. My
        journey in web development is fueled by curiosity and a relentless drive
        to solve problems through code—transforming ideas into fast, engaging,
        and user-centric experiences.
      </p>
      <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-6">
        With expertise in React, JavaScript, and Tailwind CSS, I focus on
        building modern, performant interfaces that delight users and meet
        business goals. Whether it’s a pixel-perfect UI, smooth animations, or a
        complex web app, I thrive on pushing the boundaries of what’s possible
        on the web.
      </p>
    </section>
  );
}
