export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black text-white overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-150 h-50 bg-blue-500/20 blur-[120px]" />
      <div className="max-w-7xl mx-auto px-8">
        {/* Title */}
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mt-4 rounded"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-gray-300 leading-relaxed mb-6">
              I am a <span className="text-white font-semibold">Junior Full Stack Developer</span> with a strong passion for building modern, scalable, and user-friendly web applications. I enjoy turning complex problems into simple,
              elegant solutions.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              I have experience working with modern technologies such as
              <span className="text-blue-400 font-medium"> React, TypeScript, Tailwind CSS, Node.js, and Firebase</span>, and I am continuously learning to improve my skills and stay up to date with industry trends.
            </p>

            <p className="text-gray-400 leading-relaxed">My goal is to grow as a professional developer while contributing to meaningful projects that have a real impact.</p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-3xl font-bold text-blue-500">1+</h3>
              <p className="text-gray-400 mt-2">Years Learning</p>
            </div>

            <div className="p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-3xl font-bold text-blue-500">5+</h3>
              <p className="text-gray-400 mt-2">Projects Built</p>
            </div>

            <div className="p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-3xl font-bold text-blue-500">10+</h3>
              <p className="text-gray-400 mt-2">Technologies Used</p>
            </div>

            <div className="p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-3xl font-bold text-blue-500">100%</h3>
              <p className="text-gray-400 mt-2">Passion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
