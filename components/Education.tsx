export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold text-center">
        Education
      </h2>

      <p className="mt-6 text-center text-gray-400 max-w-2xl mx-auto">
        My academic background has built a strong foundation in business,
        finance, and marketing.
      </p>

      <div className="grid gap-8 mt-16 md:grid-cols-2">

        <div className="rounded-2xl border border-blue-500/20 bg-gray-900/60 backdrop-blur-md p-8">
          <h3 className="text-2xl font-semibold text-blue-400">
            🎓 Master of Business Administration (MBA)
          </h3>

          <p className="mt-4 text-lg text-white">
            Marketing
          </p>

          <p className="mt-2 text-gray-400">
            International Islamic University, Chittagong
          </p>

          <p className="mt-2 text-gray-500">
            2008 – 2009
          </p>
        </div>

        <div className="rounded-2xl border border-blue-500/20 bg-gray-900/60 backdrop-blur-md p-8">
          <h3 className="text-2xl font-semibold text-blue-400">
            🎓 Bachelor of Commerce (B.Com)
          </h3>

          <p className="mt-4 text-lg text-white">
            Commerce
          </p>

          <p className="mt-2 text-gray-400">
            National University
          </p>

          <p className="mt-2 text-gray-500">
            2003 – 2006
          </p>
        </div>

      </div>
    </section>
  );
}