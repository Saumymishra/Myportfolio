import React from "react";
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 max-w-3xl mx-auto text-center"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text">
        Contact Me
      </h2>

      <p className="text-white text-sm sm:text-base md:text-lg mb-8">
        Have a project in mind or just want to say hello? Let’s get in touch!
      </p>

      {/* Contact Icons */}
      <div className="flex justify-center flex-wrap gap-6 mb-8">
        <a
          href="https://www.linkedin.com/in/saumy-mishra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-400 transition"
        >
          <FaLinkedin size={26} />
        </a>
        <a
          href="https://github.com/Saumymishra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white transition"
        >
          <FaGithub size={26} />
        </a>
        <a
          href="https://www.instagram.com/_saumy._/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-400 transition"
        >
          <FaInstagram size={26} />
        </a>
        <a
          href="mailto:saumymishra08@gmail.com"
          className="text-white hover:text-green-400 transition"
        >
          <FaEnvelope size={26} />
        </a>
      </div>

      {/* Contact Form */}
      <form className="flex flex-col gap-4 max-w-md mx-auto w-full mb-8">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="p-3 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 py-3"
        >
          Send Message
        </button>
      </form>

      {/* Download CV */}
      <a
        href="/saumy.pdf" // Adjust path as needed
        download
        className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 py-3 px-6 inline-block"
      >
        Download My CV
      </a>
    </section>
  );
}
