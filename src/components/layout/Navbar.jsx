
import { useEffect, useState } from "react";
const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
const [activeSection, setActiveSection] = useState("home");
const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];
  useEffect(() => {
  const handleScroll = () => {
    // Navbar background change
    setIsScrolled(window.scrollY > 20);

    // Saare sections
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (
        window.scrollY >= top &&
        window.scrollY < top + height
      ) {
        setActiveSection(id);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  // Page load par bhi run ho
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-lg border-b border-slate-800">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-emerald-400"
        >
          Rohan<span className="text-white">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 transition duration-300 hover:text-emerald-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block rounded-lg bg-emerald-500 px-5 py-2 font-medium transition hover:bg-emerald-600"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-white md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-900 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-slate-300 transition hover:bg-slate-800 hover:text-emerald-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-4 font-semibold text-emerald-400"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;