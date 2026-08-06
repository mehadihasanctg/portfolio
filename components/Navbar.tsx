"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a href="#home">
          <h1 className="text-2xl font-extrabold tracking-wide">
  <span className="text-white">Md</span>{" "}
  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
    Mehadi Hasan
  </span>
</h1>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-slate-300 font-medium transition duration-300 hover:text-blue-400 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-2.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:scale-105"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

            {open && (
        <div className="border-t border-slate-800 bg-slate-900/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col p-5">
            {menu.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-slate-300 hover:text-blue-400"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}