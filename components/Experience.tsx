export default function Experience() {
  const experiences = [
    {
      period: "2024 – Present",
      title: "Community Manager",
      company: "CoderLegion",
      points: [
        "Community Engagement",
        "Content Publishing",
        "Administrative Support",
        "CRM Management",
      ],
    },
    {
      period: "2024 – Present",
      title: "Virtual Assistant Manager",
      company: "Remote Clients Job Applications",
      points: [
        "Job Applications",
        "Others Employees job bid checking",
        "Online Support",
        "Clients daily Supports",
      ],
    },
    {
      period: "2010 – 2024",
      title: "Assistant Manager (Accounts & Finance)",
      company: "Toywoods",
      points: [
        "Financial Reporting",
        "Accounts Management",
        "Team Coordination",
        "Budget & Reconciliation",
      ],
    },
  ];

  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      <div className="text-center">
        <span className="text-blue-400 uppercase tracking-widest font-semibold">
          Career Journey
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          Professional Experience
        </h2>

        <p className="mt-6 text-slate-400 max-w-3xl mx-auto">
          My professional journey across Accounts & Finance, Virtual Assistance,
          and Community Management.
        </p>
      </div>

      <div className="relative mt-20 border-l-2 border-blue-500/40 ml-4">

        {experiences.map((exp) => (
          <div key={exp.title} className="relative mb-14 pl-10">

            <div className="absolute -left-[11px] top-2 h-5 w-5 rounded-full bg-blue-500 border-4 border-slate-950"></div>

            <span className="text-sm text-blue-400 font-semibold">
              {exp.period}
            </span>

            <div className="mt-3 rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">

              <h3 className="text-2xl font-bold text-white">
                {exp.title}
              </h3>

              <p className="mt-1 text-blue-400 font-medium">
                {exp.company}
              </p>

              <ul className="mt-5 space-y-2 text-slate-300">
                {exp.points.map((point) => (
                  <li key={point}>✓ {point}</li>
                ))}
              </ul>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}