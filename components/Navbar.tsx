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
          <h1 className="text-xl font-bold tracking-wide text-white">
            Mehadi<span className="text-blue-500">.</span>
          </h1>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-300 transition hover:text-blue-400"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
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