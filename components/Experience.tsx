export default function Experience() {
  const experiences = [
    {
      period: "2024 – Present",
      title: "Community Manager",
      company: "CoderLegion",
      points: [
        "Managed developer community engagement and moderation.",
        "Published technical content and platform updates.",
        "Provided member support and resolved community issues.",
        "Contributed to community growth and user retention.",
      ],
    },
    {
      period: "2024 – Present",
      title: "Virtual Assistant",
      company: "Remote Clients",
      points: [
        "Managed email, calendar, and administrative tasks.",
        "Performed lead generation and web research.",
        "Maintained CRM records and client databases.",
        "Provided daily operational and customer support.",
      ],
    },
    {
      period: "2010 – 2024",
      title: "Assistant Manager (Accounts & Finance)",
      company: "Toywoods",
      points: [
        "Prepared financial reports and budget analysis.",
        "Managed accounts payable and receivable processes.",
        "Supervised finance team and daily operations.",
        "Performed bank reconciliation and financial compliance.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div className="text-center">
        <span className="text-blue-400 uppercase tracking-[0.3em] font-semibold">
          Career Journey
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          Professional Experience
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-400">
          Over 14 years of professional experience spanning Accounts &
          Finance, Virtual Assistance, Community Management, and Business
          Operations.
        </p>
      </div>

      <div className="relative mt-20 border-l-2 border-blue-500/30 ml-5">
        {experiences.map((exp) => (
          <div key={exp.title} className="relative mb-14 pl-10">
            <div className="absolute -left-[13px] top-2 h-6 w-6 rounded-full border-4 border-slate-950 bg-blue-500 shadow-lg shadow-blue-500/40"></div>

            <span className="text-sm font-semibold tracking-wide text-blue-400">
              {exp.period}
            </span>

            <div className="mt-3 rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-md p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.20)]">
              <h3 className="text-2xl font-bold text-white">
                {exp.title}
              </h3>

              <p className="mt-2 font-medium text-blue-400">
                {exp.company}
              </p>

              <ul className="mt-6 space-y-3 text-slate-300">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-blue-400">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}