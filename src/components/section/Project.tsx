import test from "../../assets/estock.png";
import risfund from "../../assets/risfund.png";
import alquran from "../../assets/alquran.png";
import fis from "../../assets/fis.png";
import travel from "../../assets/travel.jpg";

const portfolio = [
  {
    title: "E-Stock Management App",
    description:
      "A mobile-based application for managing electronic inventory using QR Code technology. This app simplifies stock recording, searching, and real-time inventory monitoring. Developed with React, Kotlin, Firebase, and Tailwind, it offers a responsive interface and modern user experience.",
    image: test,
    tech: ["React", "Kotlin", "Firebase", "Tailwind"],
    link: "https://github.com/Valorun24/estockelektronik",
  },

  {
    title: "Risfund E-Wallet App",
    description:
      "An Android-based digital wallet application designed to manage balances and electronic transactions. Built using Kotlin and Android Studio, the app focuses on usability, data security, and efficient digital transaction processes.",
    image: risfund,
    tech: ["Kotlin", "Android Studio"],
    link: "https://github.com/XCOD33/risfund-ewallet-android",
  },

  {
    title: "Alquran App",
    description:
      "An Android-based Al-Qur’an application that provides easy access to reading the Holy Qur’an digitally. The app features a clean and user-friendly interface and is developed using Kotlin and Android Studio to ensure optimal mobile performance.",
    image: alquran,
    tech: ["Kotlin", "Android Studio"],
    link: "https://github.com/zidniyfak/AlQuran-Android",
  },

  {
    title: "FIS Kursus Online WEB",
    description:
      "A web-based online course platform that supports learning management through structured backend processing. The system manages user data and course materials, and is developed using Python, Flask, and MySQL to deliver a dynamic and scalable web application.",
    image: fis,
    tech: ["Python", "Flask", "MySQL"],
    link: "https://github.com/Valorun24/Website-Kursus-Online-Flask-Python",
  },

  {
    title: "Personal Gallery WEB",
    description:
      "A personal gallery website that showcases photo collections and memorable moments. This website presents images in a clean and visually appealing layout, allowing users to explore personal experiences and travel memories.",
    image: travel,
    tech: ["HTML", "CSS", "JS"],
    link: "https://github.com/Valorun24/valorun24.github.io",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-10 bg-linear-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-7x1 mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          My <span className="text-blue-600">Projects</span>
        </h2>

        {/* Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((project, index) => (
            <div
              key={index}
              className="
                group
                bg-gray-800/70
                rounded-xl
                overflow-hidden
                border border-transparent
                transition
                hover:border-blue-500
                hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]
              "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-52 object-cover
                    transition duration-500
                    group-hover:scale-110
                  "
                />
                {/* OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-black/70
                    flex items-center justify-center
                    opacity-0
                    transition
                    group-hover:opacity-100
                  "
                >
                  <a
                    href={project.link}
                    className="
                      px-6 py-2
                      bg-blue-600
                      rounded-lg
                      font-semibold
                      hover:bg-blue-700
                      transition
                    "
                  >
                    View Project
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        text-xs
                        px-3 py-1
                        rounded-full
                        bg-blue-500/10
                        text-blue-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
