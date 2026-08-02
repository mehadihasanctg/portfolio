export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-white">
          Md Mehadi Hasan
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
  <li><a href="#">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#">Contact</a></li>
</ul>

        <button className="rounded-lg bg-blue-600 px-5 py-2 font-semibold hover:bg-blue-700">
          Hire Me
        </button>
      </nav>
    </header>
  );
}