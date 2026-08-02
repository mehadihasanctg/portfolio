export default function Services() {
  const services = [
    {
      title: "Virtual Assistant",
      description: "Administrative support, email handling, scheduling, and CRM management.",
      icon: "💼",
    },
    {
      title: "Data Research",
      description: "Accurate web research, company research, and data collection.",
      icon: "📊",
    },
    {
      title: "Web Research",
      description: "Lead generation, market research, and online information gathering.",
      icon: "🌐",
    },
    {
      title: "Community Management",
      description: "Managing online communities, engagement, and moderation.",
      icon: "🤝",
    },
    {
      title: "Workflow Automation",
      description: "Helping businesses save time through smart automation.",
      icon: "🤖",
    },
    {
      title: "Lead Generation",
      description: "Finding quality prospects and building targeted lead lists.",
      icon: "📈",
    },
  ];

  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center">
        My Services
      </h2>

      <p className="mt-6 text-center text-gray-400 max-w-2xl mx-auto">
        I provide reliable virtual assistance and business support services to
        help companies save time and improve productivity.
      </p>

      <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-gray-800 bg-gray-900 p-8 transition hover:-translate-y-2 hover:border-blue-500"
          >
            <div className="text-5xl">{service.icon}</div>

            <h3 className="mt-6 text-2xl font-semibold">
              {service.title}
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}