"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg font-semibold">
            👋 Available for Remote Work
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Md Mehadi Hasan
          </h1>

          <h2 className="mt-4 text-2xl text-gray-400">
            Virtual Assistant • Data Researcher • Community Manager
          </h2>

          <p className="mt-6 text-gray-500 leading-8">
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
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 60, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
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
        </motion.div>

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