export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center">
        Professional Experience
      </h2>

      <p className="mt-6 text-center text-gray-400 max-w-2xl mx-auto">
        Over 14 years of experience in finance, operations, virtual assistance,
        and community management.
      </p>

      <div className="mt-16 space-y-8">

        <div className="rounded-2xl border border-blue-500/20 bg-gray-900/60 backdrop-blur-md p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h3 className="text-2xl font-semibold text-blue-400">
              Community Manager (Virtual Assistant)
            </h3>

            <span className="text-sm bg-blue-600 px-4 py-2 rounded-full mt-3 md:mt-0">
              2024 – Present
            </span>
          </div>

          <p className="mt-4 text-lg text-white">
            CoderLegion
          </p>

          <ul className="mt-6 space-y-2 text-gray-300">
            <li>• Managed developer community engagement.</li>
            <li>• Published and organized technical content.</li>
            <li>• Supported community growth and moderation.</li>
            <li>• Assisted with virtual administration and workflow tasks.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-blue-500/20 bg-gray-900/60 backdrop-blur-md p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h3 className="text-2xl font-semibold text-blue-400">
              Assistant Manager (Accounts & Finance)
            </h3>

            <span className="text-sm bg-blue-600 px-4 py-2 rounded-full mt-3 md:mt-0">
              2010 – 2024
            </span>
          </div>

          <p className="mt-4 text-lg text-white">
            Toywoods (BD) Co. Ltd.
          </p>

          <ul className="mt-6 space-y-2 text-gray-300">
            <li>• Managed accounts payable and receivable.</li>
            <li>• Prepared financial reports and reconciliations.</li>
            <li>• Maintained budgeting and cash flow records.</li>
            <li>• Coordinated with auditors and management.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}