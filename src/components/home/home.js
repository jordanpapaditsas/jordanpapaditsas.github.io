import React from "react";
import "./home.css";
// import { Link } from "react-scroll";

const gitHubUrl = "https://github.com/jordanpapaditsas";
const linkedInUrl = "https://www.linkedin.com/in/ipapaditsas/";

const Home = () => {
  return (
    <section id="home">
      <div className="home-content">
        <span className="hello">Hello,</span>
        <span className="intro-text">
          {" "}
          I'm<span className="intro-name"> Jordan Papaditsas</span>
        </span>
        <p className="intro-para">
          A Full Stack Developer who loves coding and problem solving, <br />
          and passionate about building scalable web apps and accessible
          websites.
        </p>
        <div className="links">
          <a className="github-link" href={gitHubUrl}>
            <i class="devicon-github-original"></i>
          </a>
          <a className="linkedIn-link" href={linkedInUrl}>
            <i class="devicon-linkedin-plain colored"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
