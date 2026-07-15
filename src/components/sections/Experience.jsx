const experiences = [
  {
    title: "Frontend Development Journey",
    company: "Learning Phase",
    duration: "2024 - 2025",
    description:
      "Built beginner-friendly projects including a responsive Social Media website using HTML & CSS and a Netflix Clone using HTML, CSS and JavaScript. These projects helped build a strong foundation in responsive layouts, UI design and core JavaScript.",
  },
  {
    title: "Full Stack MERN Developer",
    company: "Personal Projects",
    duration: "2025 - Present",
    description:
      "Building scalable full stack web applications using React, Node.js, Express and MongoDB. Focused on clean UI, reusable components and responsive design.",
  },
  {
    title: "ROHAN - Multi Vendor Marketplace",
    company: "Flagship Project",
    duration: "Current Project",
    description:
      "Developing an Amazon-style multi-vendor marketplace with authentication, seller dashboard, product management, order management and modern responsive UI.",
  },
  {
    title: "Continuous Learning",
    company: "Self Learning Journey",
    duration: "Ongoing",
    description:
      "Continuously improving problem-solving skills, React ecosystem knowledge, backend development and modern web technologies through real-world projects.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-900 py-16 sm:py-20 lg:py-24 text-white"
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
            Professional Journey
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
            Experience &
            <span className="text-emerald-400"> Growth</span>
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
            My journey of building modern web applications, learning new
            technologies and continuously improving as a Full Stack Developer.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative border-l-2 border-slate-700 pl-6 sm:pl-8">
          {experiences.map((item, index) => (
            <div key={index} className="relative mb-10 last:mb-0">
              {/* Timeline Dot */}

              <span
                className="
                  absolute
                  -left-[34px]
                  sm:-left-[42px]
                  top-7
                  h-5
                  w-5
                  rounded-full
                  border-4
                  border-slate-900
                  bg-emerald-500

                  transition-all
                  duration-300

                  hover:scale-125
                  hover:shadow-[0_0_20px_rgba(16,185,129,0.8)]

                  active:scale-125
                  active:shadow-[0_0_20px_rgba(16,185,129,0.8)]
                "
              ></span>

              {/* Card */}

              <div
                className="
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-950
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
                <div
                  className="
                    mb-5
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-emerald-400">
                      {item.company}
                    </p>
                  </div>

                  <span
                    className="
                      self-start
                      rounded-full
                      bg-slate-800
                      px-4
                      py-2
                      text-sm
                      text-slate-300

                      transition-all
                      duration-300

                      hover:bg-emerald-500
                      hover:text-white

                      active:bg-emerald-500
                      active:text-white
                    "
                  >
                    {item.duration}
                  </span>
                </div>

                <p
                  className="
                    text-slate-400
                    leading-7
                    sm:leading-8
                  "
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;