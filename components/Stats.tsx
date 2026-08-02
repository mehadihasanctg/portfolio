export default function Stats() {
  const stats = [
    {
      number: "14+",
      title: "Years Experience",
    },
    {
      number: "4000+",
      title: "Employees Supported",
    },
    {
      number: "14 Cr+",
      title: "Monthly Transactions",
    },
    {
      number: "Remote",
      title: "Worldwide Support",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 -mt-8 pb-20">
      <div className="grid gap-6 md:grid-cols-4">

        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-blue-500/20 bg-gray-900/60 backdrop-blur-md p-8 text-center transition hover:-translate-y-2 hover:border-blue-500"
          >
            <h2 className="text-4xl font-bold text-blue-400">
              {item.number}
            </h2>

            <p className="mt-3 text-gray-300">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}