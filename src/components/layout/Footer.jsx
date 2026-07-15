import {
  FaGithub,
  FaLinkedin,
  FaHeart,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/rohanguptag9368-hub",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: "mailto:rohangupta989769@gmail.com",
    icon: MdEmail,
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_60%)]"></div>

      {/* Top Line */}

      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 xl:px-10 py-16 sm:py-20">

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-12
            lg:gap-14
          "
        >

          {/* Left */}

          <div className="text-center sm:text-left">

            <h2 className="text-3xl sm:text-4xl font-bold">
              Rohan
              <span className="text-emerald-400">.</span>
            </h2>

            <p
              className="
                mt-6
                max-w-md
                mx-auto
                sm:mx-0
                text-sm
                sm:text-base
                leading-8
                text-slate-400
              "
            >
              Full Stack MERN Developer passionate about building fast,
              scalable and modern web applications with React, Node.js,
              Express and MongoDB.
            </p>

            <div
             className="
  mt-8
  inline-flex
  items-center
  gap-2
  rounded-full
  border
  border-emerald-500/30
  bg-emerald-500/10
  px-4
  py-2
  text-xs
  sm:text-sm
  text-emerald-300
  transition-all
  duration-300
  cursor-pointer
  hover:border-emerald-400
  hover:bg-emerald-500/20
  hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]
  active:border-emerald-400
  active:bg-emerald-500/20
  active:shadow-[0_0_20px_rgba(16,185,129,0.2)]
  active:scale-[0.98]
"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>

              Available for Full-Time Opportunities
            </div>

          </div>

          {/* Navigation */}

          <div className="text-center lg:text-left">

            <h3 className="mb-6 text-xl font-semibold text-white">
              Navigation
            </h3>

            <ul className="space-y-4">

              {navLinks.map((item) => (

                <li key={item.name}>

                  <a
                    href={item.href}
                   className="
                   group
                   inline-flex
                   items-center
                   gap-2
                   text-slate-400
                   transition-all
                   duration-300
                   hover:text-emerald-400
                   active:text-emerald-400
                  "       
                  >
                    {item.name}

                    <FaArrowUpRightFromSquare
                      size={12}
                      className="opacity-0 transition duration-300 group-hover:opacity-100"
                    />

                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Right */}

          <div className="text-center lg:text-left">

            <h3 className="mb-6 text-xl font-semibold text-white">
              Let's Connect
            </h3>

            <div className="space-y-5 text-slate-400">

              <div className="flex items-center justify-center gap-3 lg:justify-start">

                <IoLocationSharp
                  size={20}
                  className="text-emerald-400 flex-shrink-0"
                />

                <span>
                  Aligarh, Uttar Pradesh, India
                </span>

              </div>

              <div className="flex items-center justify-center gap-3 lg:justify-start">

                <MdEmail
                  size={20}
                  className="text-emerald-400 flex-shrink-0"
                />

                <span className="break-all">
                  rohangupta989769@gmail.com
                </span>

              </div>

            </div>

            {/* Social Icons */}

            <div className="mt-8 flex justify-center gap-4 lg:justify-start">

              {socialLinks.map((item) => {

                const Icon = item.icon;

                return (

                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.name}
                    className="
                      rounded-xl
                      border
                      border-slate-800
                      bg-slate-900
                      p-4
                      text-slate-300
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-emerald-500
                      hover:text-emerald-400
                    "
                  >
                    <Icon size={22} />
                  </a>

                );

              })}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div
          className="
            mt-16
            sm:mt-20
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-slate-800
            pt-8
            text-center
            text-sm
            text-slate-500
            md:flex-row
          "
        >

          <p>
            © {new Date().getFullYear()} Rohan Gupta. All rights reserved.
          </p>

          <p className="flex items-center gap-2">

            Built with React & Tailwind CSS

            <FaHeart className="text-emerald-400" />

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;