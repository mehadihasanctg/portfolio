export default function About() {
  const stats = [
    {
      title: "14+",
      subtitle: "Years Experience",
      icon: "📊",
    },
    {
      title: "2+",
      subtitle: "Years as Virtual Assistant",
      icon: "💼",
    },
    {
      title: "Worldwide",
      subtitle: "Remote Support",
      icon: "🌍",
    },
    {
      title: "24/7",
      subtitle: "Reliable Service",
      icon: "⚡",
    },
  ];

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div className="text-center">

        <span className="text-blue-400 font-semibold uppercase tracking-widest">
          About Me
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          Helping Businesses Work Smarter
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-slate-400">
          I have over <span className="text-white font-semibold">14 years</span> of
          experience in Accounts & Finance and more than
          <span className="text-white font-semibold"> 2 years</span> as a Virtual
          Assistant. I specialize in web research, lead generation, community
          management, workflow automation, administrative support, and helping
          businesses stay organized and productive.
        </p>

      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            <div className="text-5xl">
              {item.icon}
            </div>

            <h3 className="mt-6 text-3xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-slate-400">
              {item.subtitle}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}