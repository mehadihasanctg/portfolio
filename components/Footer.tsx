export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <h3 className="text-xl font-bold">
            Md Mehadi Hasan
          </h3>

          <p className="text-gray-400 text-sm mt-1">
            Community Manager • Virtual Assistant • Accounts & Finance Professional
          </p>
        </div>

        <div className="text-center md:text-right">

          <p className="text-gray-400 text-sm">
            © 2026 Md Mehadi Hasan
          </p>

          <p className="text-gray-500 text-xs mt-2">
            Built with Next.js & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}