export default function Portfolio() {
  const projects = [
  {
    title: "CoderLegion",
    role: "Community Manager",
    description:
      "Managed a developer-focused community by publishing content, moderating discussions, supporting members, and helping grow the platform.",
    image: "/coderlegion.png",
    link: "https://coderlegion.com",
    featured: true,
  },
  {
    title: "Virtual Assistant Support",
    role: "Virtual Assistant",
    description:
      "Handled email management, scheduling, CRM updates, administrative support, and client communication.",
    image: "/va.jpg",
    link: "#",
    featured: false,
  },
  {
    title: "Lead Generation & Web Research",
    role: "Lead Generation Specialist",
    description:
      "Conducted web research, prospect sourcing, data collection, spreadsheet management, and CRM-ready lead preparation.",
    image: "/lead.jpg",
    link: "#",
    featured: false,
  },
];

  return (
    <section
      id="portfolio"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
  Professional Experience
</h2>

<p className="mt-6 text-center text-slate-400 max-w-3xl mx-auto leading-8">
  A selection of professional roles where I contributed through community
  management, virtual assistance, lead generation, and administrative support.
</p>

      <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-gray-800 bg-gray-900 p-8 transition hover:-translate-y-2 hover:border-blue-500"
          >
            <h3
  style={{
    color: "red",
    fontSize: "32px",
    fontWeight: "bold",
  }}
>
              {project.title}
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              {project.description}
            </p>

            <div className="mt-6 flex gap-3">
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition">
                View Project
              </button>

              <button className="rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-white hover:border-blue-500 hover:text-blue-400 transition">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
</h3>