const experiences = [
  {
    year: "2025",
    role: "Fullstack Web Developer",
    company: "Purwadhika Bandung",
    description: "Learned and explored modern web development practices using React, TypeScript, and Tailwind CSS through project-based learning.",
  },
  {
    year: "2023",
    role: "Frontend Developer",
    company: "Freelance / Campus Project",
    description: "Worked on modern frontend interfaces using React and CSS frameworks. Focused on UI consistency, component-based architecture, and improving user experience across devices.",
  },
  {
    year: "2021 - 2024",
    role: "Student – Informatics",
    company: "Universitas Teknologi Yogyakarta",
    description: "Studied core computer science concepts including web development, databases, and software engineering. Built several small to medium-scale applications as part of coursework.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-linear-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* TITLE */}
        <h2 className="text-4xl font-bold mb-16">
          My <span className="text-blue-500">Experience</span>
        </h2>

        {/* TIMELINE */}
        <div className="relative border-l border-gray-700 pl-10 space-y-14">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* DOT */}
              <span
                className="
                  absolute -left-13 top-1
                  w-4 h-4
                  rounded-full
                  bg-blue-500
                  ring-4 ring-blue-500/20
                "
              />

              {/* YEAR */}
              <span className="inline-block mb-2 px-3 py-1 text-sm rounded-md bg-blue-500/10 text-blue-400">{exp.year}</span>

              {/* CONTENT */}
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-400 mb-3">{exp.company}</p>

              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
