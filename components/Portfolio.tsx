import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "CoderLegion",
      role: "Community Manager",
      description:
        "Managed a developer-focused community by publishing content, moderating discussions, supporting members, and helping grow the platform.",
      image: "/coderlegion.png",
      link: "https://coderlegion.com/user/Mehadi+Hasan",
    },
    {
      title: "Virtual Assistant Support",
      role: "Virtual Assistant",
      description:
        "Handled email management, scheduling, CRM updates, administrative support, and client communication.",
      image: "/va.png",
      link: "#",
    },
    {
      title: "Lead Generation & Web Research",
      role: "Lead Generation Specialist",
      description:
        "Conducted web research, prospect sourcing, data collection, spreadsheet management, and CRM-ready lead preparation.",
      image: "/lead.png",
      link: "#",
    },
  ];

  return (
    <section
      id="portfolio"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div className="text-center">
        <span className="text-blue-400 uppercase tracking-widest font-semibold">
          Professional Experience
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          Featured Experience
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
          A selection of professional roles where I contributed through
          community management, virtual assistance, and lead generation.
        </p>
      </div>

      <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:-translate-y-2 hover:border-blue-500"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={340}
              className="h-48 w-full object-cover"
            />

            <div className="p-6">
              <p className="text-sm text-blue-400 font-semibold">
                {project.role}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
                >
                  Visit
                </a>

                <button className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-white hover:border-blue-500">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}