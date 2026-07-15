const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Redux Toolkit",
      "React Router",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Vite",
      "Figma",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-16 sm:py-20 lg:py-24 text-white"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
          xl:px-10
        "
      >
        {/* Heading */}

        <div className="mb-14 text-center lg:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-emerald-400">
            My Expertise
          </p>

          <h2
            className="
              mt-3
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              leading-tight
            "
          >
            Skills &
            <span className="text-emerald-400">
              {" "}Technologies
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              sm:text-lg
              leading-7
              sm:leading-8
              text-slate-400
            "
          >
            Technologies I use to build modern, responsive and scalable web
            applications with a strong focus on clean code, performance and
            exceptional user experience.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-6
            lg:gap-8
          "
        >
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900
                p-6
                sm:p-8

                transition-all
                duration-300

                hover:-translate-y-2
                hover:scale-[1.02]
                hover:border-emerald-500
                hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]

                active:border-emerald-500
                active:shadow-[0_0_35px_rgba(16,185,129,0.25)]
                active:scale-[0.98]
              "
            >
              <h3 className="mb-6 text-2xl font-semibold">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-slate-700
                      bg-slate-800
                      px-4
                      py-2
                      text-sm
                      text-slate-300
                      cursor-default

                      transition-all
                      duration-300

                      hover:border-emerald-500
                      hover:bg-emerald-500
                      hover:text-white
                      hover:scale-105

                      active:border-emerald-500
                      active:bg-emerald-500
                      active:text-white
                      active:scale-95
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;