import html from "../../assets/html.png";
import css from "../../assets/css.png";
import ts from "../../assets/ts.png";
import js from "../../assets/js.png";
import py from "../../assets/py.png";
import kt from "../../assets/kt.png";
import figma from "../../assets/figma.png";
import react from "../../assets/react.png";

const skills = [
  { name: "Figma", image: figma },
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: js },
  { name: "TypeScript", image: ts },
  { name: "Python", image: py },
  { name: "Kotlin", image: kt },
  { name: "React", image: react },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-linear-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-16">
          Tools & <span className="text-blue-500">Skills</span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                group
                bg-gray-800/70
                rounded-xl
                h-32
                flex flex-col items-center justify-center
                gap-4
                transition
                duration-300
                hover:-translate-y-2
                hover:border
                hover:border-blue-500
                hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]
              "
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="
                  w-20 h-20 object-contain
                  transition
                  group-hover:scale-110
                "
              />

              <p className="text-sm font-medium text-gray-200">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
