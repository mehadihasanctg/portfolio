export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center">
        Skills & Expertise
      </h2>

      <p className="mt-6 text-center text-gray-400 max-w-2xl mx-auto">
        My core skills developed through years of professional experience.
      </p>

      <div className="grid gap-8 mt-16 md:grid-cols-3">

        <div className="rounded-2xl border bborder-blue-500/20 bg-gray-900/60 backdrop-blur-md p-8">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            💼 Virtual Assistance
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>✅ Virtual Assistance</li>
            <li>✅ Email Management</li>
            <li>✅ CRM Management</li>
            <li>✅ Data Entry</li>
            <li>✅ Calendar Management</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            📊 Research
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>✅ Data Research</li>
            <li>✅ Web Research</li>
            <li>✅ Internet Research</li>
            <li>✅ Lead Generation</li>
            <li>✅ Community Management</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            🛠 Tools
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>✅ Microsoft Excel</li>
            <li>✅ Microsoft Word</li>
            <li>✅ Google Sheets</li>
            <li>✅ Google Docs</li>
            <li>✅ ChatGPT & AI Tools</li>
          </ul>
        </div>

      </div>
    </section>
  );
}