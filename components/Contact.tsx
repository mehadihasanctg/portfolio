export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center">
        <span className="text-blue-400 uppercase tracking-widest font-semibold">
          Get In Touch
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          Contact Me
        </h2>

        <p className="mt-6 text-center text-gray-400 max-w-2xl mx-auto">
          Interested in working together? Feel free to reach out through any of
          the platforms below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-16">

        {/* Contact Info */}
        <div className="rounded-2xl border border-blue-500/20 bg-gray-900/60 backdrop-blur-md p-8">

          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            Contact Information
          </h3>

          <div className="space-y-5 text-gray-300">

            <p>
              📧 <strong>Email:</strong><br />
              <a
                href="mailto:limonikonic@gmail.com"
                className="text-blue-400 hover:underline"
              >
                limonikonic@gmail.com
              </a>
            </p>

            <p>
              📱 <strong>WhatsApp:</strong><br />
              <a
                href="https://wa.me/8801617233445"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                +8801617233445
              </a>
            </p>

            <p>
              💼 <strong>LinkedIn:</strong><br />
              <a
                href="https://www.linkedin.com/in/md-mehadi-hasan-ctg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/md-mehadi-hasan-ctg/
              </a>
            </p>

            <p>
              💼 <strong>Freelancer:</strong><br />
              <a
                href="https://www.freelancer.com.bd/u/mehadilimon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                freelancer.com/u/mehadilimon
              </a>
            </p>

            <p>
              📍 <strong>Location:</strong><br />
              Chattogram, Bangladesh
            </p>

          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border border-blue-500/20 bg-gray-900/60 backdrop-blur-md p-8">

          <h3 className="text-2xl font-semibold text-blue-400 mb-6">
            Send a Message
          </h3>

          <form
            action="https://formspree.io/f/mgoggybd"
            method="POST"
            className="space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-lg bg-gray-900 border border-gray-700 p-3 text-white placeholder-gray-400 caret-white outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-lg bg-gray-900 border border-gray-700 p-3 text-white placeholder-gray-400 caret-white outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full rounded-lg bg-gray-900 border border-gray-700 p-3 text-white placeholder-gray-400 caret-white outline-none focus:border-blue-500 resize-none"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}