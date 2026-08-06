export default function Services() {
  const services = [
    {
      title: "Virtual Assistance",
      icon: "💼",
      description:
        "Professional administrative support including email management, calendar scheduling, file organization, and daily business operations.",
    },
    {
      title: "Lead Generation",
      icon: "🎯",
      description:
        "Targeted prospect research, LinkedIn sourcing, contact list building, and CRM-ready lead generation for business growth.",
    },
    {
      title: "Web Research",
      icon: "🌐",
      description:
        "Accurate internet research, company research, competitor analysis, and data collection for informed business decisions.",
    },
    {
      title: "Community Management",
      icon: "👥",
      description:
        "Managing online communities through content publishing, member engagement, moderation, and customer interaction.",
    },
    {
      title: "CRM Management",
      icon: "📋",
      description:
        "Maintaining customer databases, updating CRM records, organizing pipelines, and ensuring accurate client information.",
    },
    {
      title: "AI Tools & Productivity",
      icon: "🤖",
      description:
        "Leveraging ChatGPT, Gemini, Claude, and AI-powered tools to improve productivity and automate repetitive tasks.",
    },
  ];

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Services I Offer
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-slate-400 text-lg leading-8">
          I help businesses, startups, and entrepreneurs save time,
          improve productivity, and grow faster through reliable virtual
          assistance and business support services.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-md p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-4xl transition duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
              {service.icon}
            </div>

            <h3 className="mt-8 text-2xl font-bold text-white">
              {service.title}
            </h3>

            <p className="mt-5 leading-7 text-slate-400">
              {service.description}
            </p>

            <div className="mt-8">
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                Available for Remote Work
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}