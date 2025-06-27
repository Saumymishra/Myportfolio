import React from "react";

export default function Footer() {
  return (
    <footer className="backdrop-blur-md w-full shadow-lg text-white py-6 text-center top-0 left-0">
      <p>
        &copy; {new Date().getFullYear()} Saumy Mishra. All rights reserved.
      </p>
      <p className="text-sm mt-2">
        Built with <span className="text-cyan-400 font-semibold">React</span> and{" "}
        <span className="text-purple-400 font-semibold">Tailwind CSS</span>
      </p>
    </footer>
  );
}
