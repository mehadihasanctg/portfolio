export default function Testimonials() {
  const testimonials = [
    {
      name: "Joseph",
      country: "🇺🇸",
      rating: "4.0",
      project: "Professional Job Hunter Required",
      review: "We worked a little on a project.",
    },
    {
      name: "Van Thi",
      country: "🇻🇳",
      rating: "5.0",
      project: "Site Verifier Needed",
      review:
        "Professional work quality and communication throughout the project!",
    },
    {
      name: "Sanjay",
      country: "🇦🇺",
      rating: "5.0",
      project: "Virtual Assistant / Daily Office Support",
      review:
        "Excellent work and highly reliable virtual assistant. Communication was clear and timely, tasks were handled professionally, and daily office support was managed very efficiently. From email handling and data management to CMS updates and general admin tasks, everything was completed accurately and on time. Very proactive, detail-oriented, and easy to work with. I would definitely hire again and strongly recommend for any virtual assistant or admin support role.",
    },
    {
      name: "Mikko",
      country: "🇩🇪",
      rating: "5.0",
      project: "Shopify Product and Price Update",
      review:
        "Great work! Good in communication, trustful work, all in all the perfect Partner for any expert project!",
    },
    {
      name: "Donald",
      country: "🇭🇰",
      rating: "5.0",
      project: "Text Processing Project",
      review: "He is a very good freelancer!",
    },
  ];

  return (
    <section
      id="testimonials"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="text-center">
        <span className="text-blue-400 uppercase tracking-widest font-semibold">
          Client Feedback
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          Real Client Testimonials
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-slate-400">
          Feedback from clients I have worked with on different freelance
          projects.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            key={`${testimonial.name}-${testimonial.project}`}
            className="rounded-2xl border border-slate-800 bg-slate-900/80 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {testimonial.country} {testimonial.name}
                </h3>

                <p className="mt-2 text-pink-500 tracking-wide">
                  ★★★★★
                  <span className="ml-2 text-slate-400">
                    {testimonial.rating}
                  </span>
                </p>
              </div>
            </div>

            <h4 className="mt-6 font-semibold text-blue-400">
              {testimonial.project}
            </h4>

            <p className="mt-4 leading-7 text-slate-300">
              “{testimonial.review}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}