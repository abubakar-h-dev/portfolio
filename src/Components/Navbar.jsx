import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-xl font-bold">
          Mohamed<span className="text-blue-600">.</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/About" className={linkClass}>About</NavLink>
          <NavLink to="/skill" className={linkClass}>Skills</NavLink>
          <NavLink to="/Projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/Contact" className={linkClass}>Contact</NavLink>

          {/* RESUME BUTTON */}
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
          >
            Resume
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center gap-4 py-6">
            <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/About" className={linkClass}>
              About
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/Skills" className={linkClass}>
              Skills
            </NavLink>

            <NavLink onClick={() => setOpen(false)} to="/Projects" className={linkClass}>
              Projects
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/Contact" className={linkClass}>
              Contact
            </NavLink>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
