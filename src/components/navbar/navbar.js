import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo1.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
import hamMenu from "../../assets/menu-hamburger.png";
import closeMenu from "../../assets/close-menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="JP" className="logo" />
      <div className="menu">
        <Link activeClass="active"to="home"spy={true}smooth={true}offset={-130}duration={500}className="nav-list-item">Home</Link>
        <Link activeClass="active"to="projects"spy={true}smooth={true}offset={-130}duration={500}className="nav-list-item">Projects</Link>
        <Link activeClass="active"to="about" spy={true}smooth={true}offset={-100}duration={500}className="nav-list-item"> About</Link>
      </div>
      <Link activeClass="active"to="contact"spy={true}smooth={true} offset={100}duration={500}><button className="nav-contact-btn"onClick={() => {document.getElementById("contact").scrollIntoView({ behavior: "smooth" });}}>
          <img src={contactImg} alt="Contact" className="nav-icon-contact" />Contact Me</button></Link>

      <img src={showMenu ? closeMenu : hamMenu} alt="JP" className="hamburger-menu" onClick={() => setShowMenu(!showMenu)} />
      <div className="nav-hamburger-menu" style={{ display: showMenu ? 'flex': 'none' }}>
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-130} duration={500} className="ham-list-item" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-130} duration={500} className="ham-list-item" onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500} className="ham-list-item" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={100} duration={500} className="ham-list-item" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
