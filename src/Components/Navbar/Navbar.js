import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Import react-scroll
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menu toggle effect
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add("menu-toggle");
      document.documentElement.classList.add("menu-toggle");
    } else {
      document.body.classList.remove("menu-toggle");
      document.documentElement.classList.remove("menu-toggle");
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <Link
          to="home" // ID-ul secțiunii
          smooth={true}
          duration={500}
          spy={true}
          offset={-50}
        >
          <h2>CristinaNailArtist</h2>
        </Link>
      </div>
      <ul className="links">
        <li>
          <Link
            onClick={toggleMenu}
            to="home" // ID-ul secțiunii
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
          >
            <i className="fa-solid fa-house"></i> Home
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleMenu}
            to="my-work" // ID-ul secțiunii "Lucrari"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
          >
            <i className="fa-solid fa-star"></i> Lucrări
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleMenu}
            to="prices" // ID-ul secțiunii "Preturi"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
          >
            <i className="fa-solid fa-rectangle-list"></i> Prețuri
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleMenu}
            to="feedbacks" // ID-ul secțiunii "Recenzii"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
          >
            <i className="fa-solid fa-message"></i> Recenzii
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleMenu}
            to="contact" // ID-ul secțiunii "Contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
          >
            <i className="fa-solid fa-address-book"></i> Contact
          </Link>
        </li>
      </ul>
      <div className="menu-btn" onClick={toggleMenu}>
        <span className="span span1"></span>
        <span className="span span2"></span>
        <span className="span span3"></span>
      </div>
    </nav>
  );
};

export default Navbar;
