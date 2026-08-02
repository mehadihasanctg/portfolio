import Image from "next/image";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Achievements
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          My official marathon achievement reflects discipline, consistency,
          endurance, and commitment—qualities I bring to every professional
          challenge.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* Certificate */}
        <div className="rounded-2xl overflow-hidden border border-gray-800 bg-white shadow-xl">

          <div className="relative aspect-[1.41/1]">
            <Image
              src="/marathon-certificate.jpg"
              alt="Elite Marathon Certificate"
              fill
              className="object-contain"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>

        </div>

        {/* Details */}
        <div>

          <span className="inline-block rounded-full bg-blue-600/20 text-blue-400 px-4 py-2 text-sm">
            🏅 Official Achievement
          </span>

          <h3 className="text-3xl font-bold mt-6">
            Elite Marathon 2024
          </h3>

          <p className="text-gray-400 mt-6 leading-8">
            Successfully completed the Elite Marathon 2024 (21.1 KM Half Marathon).
            This achievement represents determination, perseverance, discipline,
            and the ability to stay committed to long-term goals.
          </p>

          <div className="mt-10 space-y-4">

            <div className="flex justify-between border-b border-gray-800 pb-3">
              <span className="text-gray-400">Distance</span>
              <span>21.1 KM Half Marathon</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-3">
              <span className="text-gray-400">Event</span>
              <span>Elite Marathon 2024</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-3">
              <span className="text-gray-400">Date</span>
              <span>7 December 2024</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 pb-3">
              <span className="text-gray-400">Finishing Time</span>
              <span className="text-blue-400 font-semibold">03:42:46</span>
            </div>

          </div>

          <div className="flex flex-wrap gap-3 mt-10">

            <span className="px-4 py-2 rounded-full bg-gray-900 border border-gray-700">
              🏃 Endurance
            </span>

            <span className="px-4 py-2 rounded-full bg-gray-900 border border-gray-700">
              🎯 Discipline
            </span>

            <span className="px-4 py-2 rounded-full bg-gray-900 border border-gray-700">
              💪 Commitment
            </span>

            <span className="px-4 py-2 rounded-full bg-gray-900 border border-gray-700">
              🏅 Goal Achiever
            </span>

          </div>

          <a
            href="/marathon-certificate.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold"
          >
            View Full Certificate
          </a>

        </div>

      </div>
    </section>
  );
}