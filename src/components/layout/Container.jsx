const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950 text-white pt-24"
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
          gap-14
          lg:gap-16
          items-center
        "
      >
        {/* Left Content */}

        <div className="text-center lg:text-left">
          <p className="mb-3 text-base sm:text-lg font-medium text-emerald-400">
            👋 Hello, I'm
          </p>

          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-tight
            "
          >
            Rohan <br />

            <span className="text-emerald-400">
              Babu Gupta
            </span>
          </h1>

          <h2
            className="
              mt-6
              text-xl
              sm:text-2xl
              lg:text-3xl
              font-semibold
              text-slate-300
            "
          >
            Full Stack JavaScript Developer
          </h2>

          <p
            className="
              mx-auto
              lg:mx-0
              mt-6
              max-w-xl
              text-base
              sm:text-lg
              leading-8
              text-slate-400
            "
          >
            I build fast, scalable and modern web applications using
            React, Node.js, Express and MongoDB.
            My goal is to create products that people love and help
            businesses grow through technology.
          </p>

          {/* Buttons */}

          <div
            className="
              mt-10
              flex
              flex-col
              sm:flex-row
              gap-4
              sm:gap-5
              justify-center
              lg:justify-start
            "
          >
            {/* View Projects */}

            <a
              href="#projects"
              className="
                w-full
                sm:w-auto
                text-center
                rounded-xl
                bg-emerald-500
                px-8
                py-3
                font-semibold
                transition-all
                duration-300
                hover:bg-emerald-600
                hover:shadow-[0_0_25px_rgba(16,185,129,0.45)]
                active:scale-95
                active:bg-emerald-700
              "
            >
              View Projects
            </a>

            {/* Contact */}

            <a
              href="#contact"
              className="
                w-full
                sm:w-auto
                text-center
                rounded-xl
                border
                border-emerald-500
                px-8
                py-3
                text-emerald-400
                transition-all
                duration-300
                hover:bg-emerald-500
                hover:text-white
                hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]
                active:scale-95
                active:bg-emerald-600
                active:text-white
              "
            >
              Contact Me
            </a>

            {/* Resume */}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full
                sm:w-auto
                text-center
                rounded-xl
                border
                border-slate-700
                px-8
                py-3
                font-semibold
                transition-all
                duration-300
                hover:border-emerald-500
                hover:text-emerald-400
                hover:shadow-[0_0_20px_rgba(16,185,129,0.30)]
                active:scale-95
              "
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Content */}

        <div className="flex justify-center">
          <div
            className="
              w-56
              h-56
              sm:w-64
              sm:h-64
              md:w-72
              md:h-72
              lg:w-80
              lg:h-80
              rounded-full
              bg-gradient-to-br
              from-emerald-500
              to-slate-700
              p-1
              transition-all
              duration-500
              hover:scale-105
              hover:shadow-[0_0_50px_rgba(16,185,129,0.45)]
            "
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-900">
              <span
                className="
                  text-5xl
                  sm:text-6xl
                  lg:text-7xl
                  transition-transform
                  duration-300
                  hover:scale-110
                "
              >
                👨‍💻
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;