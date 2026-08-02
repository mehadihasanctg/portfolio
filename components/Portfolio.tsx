export default function Portfolio() {
  const projects = [
    {
      title: "CoderLegion Community",
      description:
        "Managed developer community engagement, content publishing, and platform growth.",
    },
    {
      title: "Job Sourcing & Lead Generation",
      description:
        "Daily job hunting, check job hunters working progress and time to time giving update to the owner",
    },
    {
      title: "Virtual Assistant Support",
      description:
        "Handled email management, scheduling, CRM updates, and administrative tasks.",
    },
  ];

  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center">
        Featured Projects
      </h2>

      <p className="mt-6 text-center text-gray-400 max-w-2xl mx-auto">
        Here are some of the projects and services I have worked on.
      </p>

      <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-gray-800 bg-gray-900 p-8 transition hover:-translate-y-2 hover:border-blue-500"
          >
            <h3 className="text-2xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              {project.description}
            </p>
            <div className="mt-6 flex gap-3">
  <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700">
    View Project
  </button>

  <button className="rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium hover:border-blue-500">
    Details
  </button>
</div>
          </div>
        ))}
      </div>
    </section>
  );
}