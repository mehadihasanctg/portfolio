export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold">
              <span className="text-white">Md </span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Mehadi Hasan
              </span>
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Virtual Assistant, Community Manager, and Accounts &
              Finance Professional helping businesses improve productivity
              through reliable administrative support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>
                <a href="#home" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-blue-400 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Get In Touch
            </h4>

            <div className="mt-5 space-y-3 text-slate-400">

              <p>📧 limonikonic@gmail.com</p>

              <p>🌍 Bangladesh</p>

              <div className="flex gap-4 pt-2">

                <a
                  href="https://www.linkedin.com/in/md-mehadi-hasan-ctg/"
                  target="_blank"
                  className="hover:text-blue-400 transition"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/mehadihasanctg"
                  target="_blank"
                  className="hover:text-blue-400 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://coderlegion.com"
                  target="_blank"
                  className="hover:text-blue-400 transition"
                >
                  CoderLegion
                </a>

              </div>

            </div>
          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-sm text-slate-500">
            © 2026 Md Mehadi Hasan. All rights reserved.
          </p>

          <a
            href="#home"
            className="rounded-full border border-blue-500 px-4 py-2 text-sm text-blue-400 transition hover:bg-blue-500 hover:text-white"
          >
            ↑ Back to Top
          </a>

        </div>

      </div>
    </footer>
  );
}