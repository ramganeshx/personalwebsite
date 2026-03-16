import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-500 ${scrolled ? "navbar-glass" : "bg-transparent"}`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
        >
          <div style={{
            width: 38, height: 38,
            background: "linear-gradient(135deg, #1068a1, #14a8ff)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 15px rgba(20,168,255,0.4)",
            fontSize: "1.1rem",
            fontWeight: 900,
            color: "white",
            fontFamily: "Orbitron, monospace",
            letterSpacing: "0"
          }}>R</div>
          <p className="text-white text-[18px] font-bold cursor-pointer orbitron tracking-wider hidden md:block">
            Ram Ganesh
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-6 items-center flex-shrink-0">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`nav-link-item ${active === link.title ? "active text-white" : "text-secondary"} hover:text-white text-[16px] font-medium cursor-pointer tracking-wide transition-colors duration-200`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/ramganeshx"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "8px 20px",
                background: "linear-gradient(135deg, #1068a1, #0d4f7a)",
                border: "1px solid rgba(20,168,255,0.4)",
                borderRadius: "8px",
                color: "white",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                transition: "all 0.3s ease",
                display: "inline-block",
                boxShadow: "0 0 10px rgba(16,104,161,0.3)"
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(20,168,255,0.6)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 10px rgba(16,104,161,0.3)"}
            >
              GitHub ↗
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border border-blue-900`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === link.title ? "text-white" : "text-secondary"}`}
                  onClick={() => { setToggle(!toggle); setActive(link.title); }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
