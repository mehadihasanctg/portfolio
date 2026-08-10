"use client";

import Image from "next/image";

export default function Landing() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* Left Content */}
        <div>
          {/* Background Glow */}
          <div className="pointer-events-none absolute -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            👋 Available for Remote Work
          </span>

          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-white">Hi, I'm</span>
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Md Mehadi Hasan
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-slate-300">
            Virtual Assistant • Community Manager • Lead Generation Specialist
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            I help businesses save time and grow faster through reliable
            virtual assistance, community management, lead generation,
            web research, CRM management, and administrative support.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {/* Hire Me */}
            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Hire Me
            </a>

            {/* Download CV */}
            <a
              href="/Md_Mehadi_Hasan_CV.pdf"
              download="Md_Mehadi_Hasan_CV.pdf"
              className="rounded-xl border border-slate-600 px-7 py-3 font-semibold text-white transition hover:border-blue-500 hover:bg-slate-800"
            >
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-center">
              <h3 className="text-3xl font-bold text-blue-400">14+</h3>
              <p className="mt-2 text-sm text-slate-400">
                Years Experience
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-center">
              <h3 className="text-3xl font-bold text-blue-400">2+</h3>
              <p className="mt-2 text-sm text-slate-400">
                Years as VA
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-center">
              <h3 className="text-3xl font-bold text-blue-400">100%</h3>
              <p className="mt-2 text-sm text-slate-400">
                Remote Ready
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-center">
              <h3 className="text-3xl font-bold text-blue-400">24h</h3>
              <p className="mt-2 text-sm text-slate-400">
                Response
              </p>
            </div>

          </div>
        </div>

        {/* Right Profile Image */}
        <div className="flex justify-center">
          <div className="relative">

            {/* Blue Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl scale-125" />

            {/* Animated Ring */}
            <div className="absolute -inset-2 rounded-full border-2 border-blue-500/30 animate-pulse" />

            {/* Image */}
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-blue-500 bg-slate-900 shadow-[0_0_60px_rgba(59,130,246,0.35)]">

              <Image
                src="/profile.jpg"
                alt="Md Mehadi Hasan"
                fill
                sizes="(max-width: 768px) 320px, 320px"
                priority
                className="object-cover transition duration-500 hover:scale-105"
              />

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}