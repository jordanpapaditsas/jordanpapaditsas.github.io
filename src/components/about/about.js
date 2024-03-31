import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-content-grid">
        <div className="aboutMe-text">
          <div className="aboutMe-title">
            <h2>About Me</h2>
          </div>
          <p className="aboutMe-para">
            Hello there, I'm Jordan and I love to build things. My passion for computers and technology has led me into this Software
            Engineering journey that I've chosen to follow. I've started studying in Athens University of Economics and Business, undergoing an intensive 7-month full-stack coding bootcamp. I've always had the curiosity how everything is
            processed behind, creating what we see as the final product. 
          </p>
          <br/>
          <p className="aboutMe-para">Since I've graduated from the coding bootcamp,
            I've been hooked up on Software Engineering field. I started out as a Frontend Developer and now I'm doing Full Stack Development.</p>
        </div>
        <div className="skills-icons-container">
          <div className="skills-title">
            <h2>Skills</h2>
          </div>
          <div className="skills-row">
            <div className="about-skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
              />
            </div>
            <div className="about-skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="TypeScript"
              />
            </div>
            <div className="about-skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                
                alt="CSharp"
              />
            </div>
            <div className="about-skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                alt="Angular"
              />
            </div>
            <div className="about-skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
              />
            </div>
            <div className="about-skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML"
              />
            </div>
            <div className="about-skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS"
              />
            </div>
            <div className="about-skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg"
                alt="Ionic Framework"
              />
            </div>
            <div className="about-skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
              />
            </div>
            <div className="about-skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                alt="Express.js"
              />
            </div>
            <div className="about-skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                alt="Bootstrap"
              />
            </div>
            <div className="about-skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
              />
            </div>
            <div className="about-skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MySQL"
              />
            </div>
            <div className="about-skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                alt="Docker"
              />
            </div>
            <div className="about-skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
                alt="Webpack"
              />
            </div>
            <div className="about-skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                alt="Linux"
              />
            </div>
            <div className="about-skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
