const About = () => {
  return (
    <section
      id="about"
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
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          lg:gap-16
          items-center
        "
      >
        {/* Left Content */}

        <div className="text-center lg:text-left">
          <p className="font-semibold uppercase tracking-[4px] text-emerald-400">
            About Me
          </p>

          <h2
            className="
              mt-4
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              leading-tight
            "
          >
            Passionate Full Stack Developer
          </h2>

          <p
            className="
              mt-8
              text-base
              sm:text-lg
              leading-7
              sm:leading-8
              text-slate-400
            "
          >
            I'm Rohan Babu Gupta, a Full Stack JavaScript Developer focused
            on building modern, scalable and user-friendly web applications.
            I enjoy solving real-world problems with clean code and intuitive
            user experiences.
          </p>

          <p
            className="
              mt-6
              text-base
              sm:text-lg
              leading-7
              sm:leading-8
              text-slate-400
            "
          >
            My primary stack includes React, Node.js, Express and MongoDB.
            Along with development, I'm passionate about creating products,
            learning new technologies and working towards building impactful
            startups.
          </p>
        </div>

        {/* Right Card */}

        <div
          className="
            rounded-2xl
            border
            border-slate-700
            bg-slate-800
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
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-emerald-400">
                Name
              </h3>

              <p className="mt-1 text-slate-300">
                Rohan Babu Gupta
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-emerald-400">
                Role
              </h3>

              <p className="mt-1 text-slate-300">
                Full Stack JavaScript Developer
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-emerald-400">
                Location
              </h3>

              <p className="mt-1 text-slate-300">
                Aligarh, Uttar Pradesh, India
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-emerald-400">
                Goal
              </h3>

              <p className="mt-1 text-slate-300">
                Build impactful products and successful technology startups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;