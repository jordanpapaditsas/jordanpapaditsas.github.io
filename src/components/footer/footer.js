import React from "react";
import "./footer.css";

const gitHubUrl = "https://github.com/jordanpapaditsas";
const linkedInUrl = "https://www.linkedin.com/in/ipapaditsas/";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="footer">
      <div className="footer-container">
        <div className="links">
          <a className="github-link" href={gitHubUrl}>
            <i className="devicon-github-original"></i>
          </a>
          <a className="linkedIn-link" href={linkedInUrl}>
            <i className="devicon-linkedin-plain colored"></i>
          </a>
        </div>
        <p className="footer-text">Jordan Papaditsas {currentYear}</p>
      </div>
    </section>
  );
};

export default Footer;
