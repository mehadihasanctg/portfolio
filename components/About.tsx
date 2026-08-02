export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold text-center">
        About Me
      </h2>

      <p className="mt-8 text-center text-gray-400 leading-8 max-w-3xl mx-auto">
        I have 14 years of experience in Accounts & Finance and over 2 years
        as a Virtual Assistant. I help businesses with data research,
        web research, community management, workflow automation,
        and administrative support.
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-16">

        <div className="rounded-xl bg-gray-900 p-6 text-center">
          <h3 className="text-3xl font-bold text-blue-400">14+</h3>
          <p className="mt-2 text-gray-400">
            Years Experience
          </p>
        </div>

        <div className="rounded-xl bg-gray-900 p-6 text-center">
          <h3 className="text-3xl font-bold text-blue-400">2+</h3>
          <p className="mt-2 text-gray-400">
            Years as VA
          </p>
        </div>

        <div className="rounded-xl bg-gray-900 p-6 text-center">
          <h3 className="text-3xl font-bold text-blue-400">
            Remote
          </h3>
          <p className="mt-2 text-gray-400">
            Worldwide
          </p>
        </div>

        <div className="rounded-xl bg-gray-900 p-6 text-center">
          <h3 className="text-3xl font-bold text-blue-400">
            24/7
          </h3>
          <p className="mt-2 text-gray-400">
            Reliable Support
          </p>
        </div>

      </div>
    </section>
  );
}