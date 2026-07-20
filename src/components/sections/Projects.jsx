import { motion } from "framer-motion";

const projects = [
  {
    title: "ROHAN Marketplace",
    description:
      "A full-stack MERN multi-vendor marketplace with authentication, seller dashboard, product management and order management.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/rohanguptag9368-hub/Rohan-store-frontend",
    live: "https://rohan-store-frontend-433i.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "A premium developer portfolio built with React and Tailwind CSS featuring a modern startup-inspired UI.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/rohanguptag9368-hub/Portfolio-Website-of-Rohan-Babu-Gupta-",
    live: "https://portfolio-website-of-rohan-babu-gup.vercel.app/",
  },
  {
    title: "Netflix Clone",
    description:
      "A responsive Netflix landing page clone created using HTML, CSS and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rohanguptag9368-hub/Netflix-Clone",
    live: "#",
  },
  {
    title: "Social Media Website",
    description:
      "A beginner social media UI project built using HTML and CSS focusing on responsive layouts.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/rohanguptag9368-hub/amazon-ui-",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
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
            Portfolio
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
            Featured
            <span className="text-emerald-400"> Projects</span>
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
            Some of the projects I've built while learning and working with
            modern web technologies.
          </p>
        </div>

        {/* Project Cards */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            lg:gap-8
          "
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -8,
                boxShadow: "0 0 30px rgba(16,185,129,0.15)",
              }}
              whileTap={{
                scale: 0.97,
                borderColor: "#10b981",
                boxShadow: "0 0 30px rgba(16,185,129,0.25)",
              }}
              className="
                group
                rounded-2xl
                border
                border-slate-800
                bg-slate-900
                p-6
                sm:p-8
                transition-all
                duration-300
                hover:border-emerald-500
                cursor-pointer
              "
            >
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p
                className="
                  mt-4
                  text-slate-400
                  leading-7
                  sm:leading-8
                "
              >
                {project.description}
              </p>

              {/* Tech Stack */}

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      rounded-full
                      border
                      border-slate-700
                      bg-slate-800
                      px-4
                      py-2
                      text-sm
                      text-slate-300
                      transition-all
                      duration-300
                      hover:border-emerald-500
                      hover:bg-emerald-500
                      hover:text-white
                    "
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Buttons */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                "
              >
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    w-full
                    sm:w-auto
                    text-center
                    rounded-xl
                    border
                    border-slate-700
                    px-6
                    py-3
                    font-semibold
                    transition
                    hover:border-emerald-500
                    hover:text-emerald-400
                  "
                >
                  GitHub
                </motion.a>

                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    w-full
                    sm:w-auto
                    text-center
                    rounded-xl
                    bg-emerald-500
                    px-6
                    py-3
                    font-semibold
                    transition
                    hover:bg-emerald-600
                  "
                >
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;