import React, { useRef, useState } from "react";
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_07nvvi5", // replace with your EmailJS service ID
        "template_acjwo54", // replace with your EmailJS template ID
        form.current,
        "Q8E7uekNErlrVUoUC" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

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
        {/* ... your icons ... */}
      </div>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 max-w-md mx-auto w-full mb-8"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-3 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-3 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="p-3 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 py-3"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p className="text-center text-white mb-6">{status}</p>
      )}

      {/* Download CV */}
      <a
        href="/Myportfolio/saumy.pdf"
        download
        className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 py-3 px-6 inline-block"
      >
        Download My CV
      </a>
    </section>
  );
}
