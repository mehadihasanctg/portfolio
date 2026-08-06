import Image from "next/image";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="text-center">
        <span className="text-blue-400 uppercase tracking-widest font-semibold">
          Professional Experience
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          Featured Experience
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
          A summary of my professional work across Community Management,
          Virtual Assistance, Lead Generation, and Administrative Support.
        </p>
      </div>

      {/* Featured Project */}

      <div className="mt-20 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">

        <div className="grid lg:grid-cols-2">

          <Image
            src="/coderlegion.png"
            alt="CoderLegion"
            width={900}
            height={700}
            className="w-full h-full object-cover"
          />

          <div className="p-10 flex flex-col justify-center">

            <span className="inline-block w-fit rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
              ⭐ Featured Experience
            </span>

            <h3 className="mt-6 text-4xl font-bold text-white">
              Community Manager
            </h3>

            <p className="mt-2 text-blue-400 font-semibold text-lg">
              CoderLegion
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              Managed a developer-focused community by publishing content,
              moderating discussions, supporting members, encouraging
              engagement, and helping grow the platform.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="rounded-xl bg-slate-800 p-4">
                ✅ Community Engagement
              </div>

              <div className="rounded-xl bg-slate-800 p-4">
                ✅ Content Publishing
              </div>

              <div className="rounded-xl bg-slate-800 p-4">
                ✅ Member Support
              </div>

              <div className="rounded-xl bg-slate-800 p-4">
                ✅ Platform Growth
              </div>

            </div>

            <a
              href="https://coderlegion.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 w-fit rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Visit Website →
            </a>

          </div>

        </div>

      </div>

      {/* Other Experience */}

      <div className="grid gap-8 mt-14 md:grid-cols-2">

        <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-blue-500 transition">

          <Image
            src="/va.png"
            alt="Virtual Assistant"
            width={700}
            height={400}
            className="h-56 w-full object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold text-white">
              Virtual Assistant
            </h3>

            <p className="mt-4 text-slate-400 leading-7">
              Provided remote administrative support including email
              management, scheduling, CRM updates, documentation,
              client communication, and daily operational assistance.
            </p>

          </div>

        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-blue-500 transition">

          <Image
            src="/lead.png"
            alt="Lead Generation"
            width={700}
            height={400}
            className="h-56 w-full object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold text-white">
              Lead Generation & Web Research
            </h3>

            <p className="mt-4 text-slate-400 leading-7">
              Conducted prospect research, data collection, CRM-ready lead
              preparation, spreadsheet management, and market research
              for business growth.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}