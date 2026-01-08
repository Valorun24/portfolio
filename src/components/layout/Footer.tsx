export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
        {/* LEFT */}
        <div className="text-center md:text-left">
          <p>
            © {new Date().getFullYear()} <span className="text-white font-semibold">Fajar Wahyu</span>. All rights reserved.
          </p>
        </div>

        {/* RIGHT - SOCIAL LINKS */}
        <div className="flex items-center gap-6">
          <a href="mailto:fajar@example.com" className="hover:text-blue-500 transition">
            Email
          </a>

          <a href="https://www.linkedin.com" target="_blank" className="hover:text-blue-500 transition">
            LinkedIn
          </a>

          <a href="https://github.com" target="_blank" className="hover:text-blue-500 transition">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
