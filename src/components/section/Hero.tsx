import profileImage from "../../assets/fajar.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-start md:items-center
             pt-28 md:pt-0
             bg-linear-to-r from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500">Fajar Wahyu Nugraha</span>
          </h1>

          <h2 className="text-3xl font-semibold mb-6">
            Junior Full Stack Developer<span className="text-blue-500"> |</span>
          </h2>

          <p className="text-gray-400 max-w-xl mb-10">
            A Junior Full Stack Developer passionate about building modern and scalable web applications using React, TypeScript, and modern web technologies. I enjoy creating clean, responsive, and user-focused digital experiences.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg border border-blue-500 bg-blue-600
                         hover:bg-black transition font-semibold"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-blue-500
                         hover:bg-blue-700 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-blue-600">
            <div
              className="w-72 h-72 md:w-80 md:h-80 rounded-full
             border-4 border-blue-500
             overflow-hidden
             float-animation
             hover:scale-105
             transition-all duration-300"
            >
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
