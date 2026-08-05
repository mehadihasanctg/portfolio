"use client";

import Image from "next/image";

export default function Landing() {
  return (
    <section
  id="home"
  className="relative min-h-screen flex items-center justify-center px-6 pt-20"
>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-blue-400 text-lg font-semibold">
            👋 Available for Remote Work
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
    Md Mehadi Hasan
  </span>
</h1>

          <h2 className="mt-5 text-xl md:text-2xl font-medium text-slate-300">
  Virtual Assistant • Community Manager • Data Researcher
</h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            I help businesses with virtual assistance, web research,
            data scraping, community management, and workflow automation.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition">
              Hire Me
            </button>

            <a
              href="/Md_Mehadi_Hasan_CV.pdf"
              download
              className="rounded-lg border border-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-blue-500 shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Md Mehadi Hasan"
              fill
              sizes="320px"
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/30 bg-gray-900/60 backdrop-blur-md">
            <span className="text-2xl text-blue-400">↓</span>
          </div>
        </a>
      </div>
    </section>
  );
}