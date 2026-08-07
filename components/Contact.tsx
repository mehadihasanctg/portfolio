export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Contact Me
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-400">
          Looking for a reliable Virtual Assistant, Community Manager, or Lead
          Generation Specialist? Let's connect and discuss how I can help your
          business grow.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {/* Contact Info */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-md p-8">
          <h3 className="text-2xl font-bold text-white">
            Contact Information
          </h3>

          <div className="mt-8 space-y-6">

            <div>
              <p className="text-sm uppercase tracking-wider text-blue-400">
                Email
              </p>

              <a
                href="mailto:limonikonic@gmail.com"
                className="mt-1 block text-slate-300 hover:text-blue-400 transition"
              >
                limonikonic@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-blue-400">
                WhatsApp
              </p>

              <a
                href="https://wa.me/8801617233445"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-slate-300 hover:text-blue-400 transition"
              >
                +8801617233445
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-blue-400">
                LinkedIn
              </p>

              <a
                href="https://www.linkedin.com/in/md-mehadi-hasan-ctg/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-slate-300 hover:text-blue-400 transition"
              >
                linkedin.com/in/md-mehadi-hasan-ctg
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-blue-400">
                GitHub
              </p>

              <a
                href="https://github.com/mehadihasanctg"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-slate-300 hover:text-blue-400 transition"
              >
                github.com/mehadihasanctg
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-blue-400">
                Location
              </p>

              <p className="mt-1 text-slate-300">
                Chattogram, Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-md p-8">
          <h3 className="text-2xl font-bold text-white">
            Send a Message
          </h3>

          <form
            action="https://formspree.io/f/mgoggybd"
            method="POST"
            className="mt-8 space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white placeholder-slate-500 outline-none transition focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white placeholder-slate-500 outline-none transition focus:border-blue-500"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              required
              className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 p-4 text-white placeholder-slate-500 outline-none transition focus:border-blue-500"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white transition duration-300 hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}