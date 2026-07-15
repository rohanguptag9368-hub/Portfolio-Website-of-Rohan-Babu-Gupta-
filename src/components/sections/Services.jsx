import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building fast, responsive and modern user interfaces using React, JavaScript, Tailwind CSS and the latest frontend technologies.",
  },
  {
    title: "Full Stack Web Development",
    description:
      "Developing complete web applications with React, Node.js, Express and MongoDB, including authentication, REST APIs and database integration.",
  },
  {
    title: "Responsive Web Design",
    description:
      "Creating websites that provide a seamless experience across desktops, tablets and mobile devices with clean and modern UI.",
  },
  {
    title: "API Integration",
    description:
      "Integrating REST APIs, authentication systems and backend services to deliver dynamic and scalable web applications.",
  },
  {
    title: "Performance Optimization",
    description:
      "Improving website speed, code quality and user experience through reusable components and optimized frontend architecture.",
  },
  {
    title: "UI Implementation",
    description:
      "Converting modern Figma or design concepts into pixel-perfect, responsive and production-ready web interfaces.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-slate-950 py-20 sm:py-24 lg:py-28 text-white"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10">

        {/* Heading */}

        <div className="mb-14 sm:mb-16 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            What I Do
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            My
            <span className="text-emerald-400"> Services</span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-base
              sm:text-lg
              leading-8
              text-slate-400
            "
          >
            I build modern, scalable and responsive web applications with a
            strong focus on clean code, performance and exceptional user
            experience.
          </p>

        </div>

        {/* Services */}

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
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
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
                rounded-2xl
                border
                border-slate-800
                bg-slate-900
                p-6
                sm:p-7
                lg:p-8
                transition-all
                duration-300
                hover:border-emerald-500
                cursor-pointer
              "
            >
              <h3
                className="
                  mb-4
                  text-xl
                  sm:text-2xl
                  font-semibold
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  text-sm
                  sm:text-base
                  leading-7
                  text-slate-400
                "
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;