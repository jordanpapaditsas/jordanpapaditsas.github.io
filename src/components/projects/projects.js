import React from "react";
import "./projects.css";
import taskHarbor from "../../assets/task-harbor-test.jfif";
import jrpgBlog from "../../assets/jrpg-blog.png";
import okonomiFlavors from "../../assets/okonomi-flavors.png";
import datapagesVault from "../../assets/datapages-vault.png";

const Projects = () => {
  const handleMoreProjectsBtnClick = () => {
    window.location.href =
      "https://github.com/jordanpapaditsas?tab=repositories";
  };

  return (
    <section id="projects">
      <div className="projects-text">
        <h2>Projects</h2>
      </div>

      <div className="project-images-container">
        <div className="project-card">
          <img src={taskHarbor} alt="Task Harbor" className="project-img" />
          <h3 className="project-title">Task Harbor</h3>
          <div className="project-live-repo">
            <p>
              A Full Stack productivity platform application built with Angular,
              C# and SQL database.
            </p>
            <div className="url">
              {/* <a href="#">LIVE</a> */}
              <a
                className="repo"
                href="https://github.com/jordanpapaditsas/task-harbor"
              >
                REPO
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={jrpgBlog} alt="JRPG Blog" className="project-img" />
          <h3 className="project-title">JRPG Blog</h3>
          <div className="project-live-repo">
            <p>
              A Full Stack blog application built with the MERN stack (MongoDB,
              Express.js, React.js, Node.js).
            </p>
            <div className="url">
              {/* <a href="#">LIVE</a> */}
              <a
                className="repo"
                href="https://github.com/jordanpapaditsas/jrpg-blog"
              >
                REPO
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img
            src={okonomiFlavors}
            alt="Okonomi Flavors"
            className="project-img"
          />
          <h3 className="project-title">Okonomi Flavors</h3>
          <div className="project-live-repo">
            <p>
              Okonomi Flavors is a dynamic Japanese restaurant web app, built
              with HTML, CSS, and JavaScript.
            </p>
            <div className="url">
              <a
                className="live"
                href="https://jordanpapaditsas.github.io/okonomi-flavors/"
              >
                LIVE
              </a>
              <span> | </span>
              <a
                className="repo"
                href="https://github.com/jordanpapaditsas/okonomi-flavors"
              >
                REPO
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img
            src={datapagesVault}
            alt="Datapages Vault"
            className="project-img"
          />
          <h3 className="project-title">Datapages Vault</h3>
          <div className="project-live-repo">
            <p>
              The app is built using HTML, CSS, and JavaScript, providing a
              dynamic table for managing your book collection.
            </p>
            <div className="url">
              <a
                className="live"
                href="https://jordanpapaditsas.github.io/datapages-vault/"
              >
                LIVE
              </a>
              <span> | </span>
              <a
                className="repo"
                href="https://github.com/jordanpapaditsas/datapages-vault"
              >
                REPO
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <button className="see-more-btn" onClick={handleMoreProjectsBtnClick}>
          More Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
