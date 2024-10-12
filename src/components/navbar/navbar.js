import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import hamMenu from "../../assets/menu-hamburger.png";
import closeMenu from "../../assets/close-menu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const contact_me_text = "Contact Me";

  const scrollToSection = (sectionId, offset = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = offset;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <img
        src={logo}
        alt="JP"
        className="logo"
        onClick={() => scrollToSection("home", -130)}
      />
      <div className="menu">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-130}
          duration={500}
          className="nav-list-item"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-130}
          duration={500}
          className="nav-list-item"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="nav-list-item"
        >
          {" "}
          About
        </Link>
      </div>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={100}
        duration={500}
      >
        <button
          className="nav-contact-btn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          {/* <img src={contactImg} alt="Contact" className="nav-icon-contact" /> */}
          <FontAwesomeIcon icon={faEnvelope} className="nav-icon-contact" />{" "}
          {contact_me_text}
        </button>
      </Link>

      <img
        src={showMenu ? closeMenu : hamMenu}
        alt="JP"
        className="hamburger-menu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div
        className="nav-hamburger-menu"
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-130}
          duration={500}
          className="ham-list-item"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-130}
          duration={500}
          className="ham-list-item"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ham-list-item"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ham-list-item"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
