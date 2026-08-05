export default function Skills() {
  const skills = [
    { name: "Virtual Assistance", level: 96 },
    { name: "Lead Generation", level: 95 },
    { name: "Community Management", level: 92 },
    { name: "Web Research", level: 94 },
    { name: "Data Entry", level: 95 },
    { name: "CRM Management", level: 90 },
  ];

  const tools = [
    "Microsoft Excel",
    "Microsoft Word",
    "Google Sheets",
    "Google Docs",
    "ChatGPT",
    "Gemini",
    "Canva",
    "Notion",
    "Trello",
    "Slack",
  ];

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div className="text-center">

        <span className="text-blue-400 font-semibold uppercase tracking-widest">
          Skills & Expertise
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          What I Do Best
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-400">
          My professional skills developed through 14+ years of experience in
          Accounts & Finance and over 2 years of Virtual Assistance,
          Community Management, Lead Generation, and Web Research.
        </p>

      </div>

      <div className="grid gap-12 mt-20 lg:grid-cols-2">

        {/* Left */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <h3 className="text-2xl font-bold text-white mb-8">
            Core Skills
          </h3>

          <div className="space-y-7">

            {skills.map((skill) => (

              <div key={skill.name}>

                <div className="flex justify-between mb-2">

                  <span className="font-medium text-slate-300">
                    {skill.name}
                  </span>

                  <span className="text-blue-400 font-semibold">
                    {skill.level}%
                  </span>

                </div>

                <div className="h-3 rounded-full bg-slate-800 overflow-hidden">

                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    style={{ width: `${skill.level}%` }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Right */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <h3 className="text-2xl font-bold text-white mb-8">
            Tools & Platforms
          </h3>

          <div className="grid grid-cols-2 gap-4">

            {tools.map((tool) => (

              <div
                key={tool}
                className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-center text-slate-300 transition duration-300 hover:border-blue-500 hover:text-white hover:-translate-y-1"
              >
                {tool}
              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}