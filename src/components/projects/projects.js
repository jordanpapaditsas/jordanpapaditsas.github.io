import React from "react";
import "./projects.css";
// import taskHarbor from '../../assets/task-harbor.png';
import jrpgBlog from "../../assets/jrpg-blog.png";
import okonomiFlavors from "../../assets/okonomi-flavors.png";
import datapagesVault from "../../assets/datapages-vault.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-text">
        <h2>Projects</h2>
        <hr className="hr" />
      </div>
      <div className="project-images-container">
        {/* <img src={taskHarbor} alt="Task Harbor" className='project-img'/> */}
        <div className="project-card">
          <h3 className="project-title">JRPG Blog</h3>
          <div className="project-live-repo">
            <div className="url">
              {/* <a href="#">LIVE</a> */}
              <a
                className="repo"
                href="https://github.com/jordanpapaditsas/jrpg-blog"
              >
                REPO
              </a>
            </div>
            <p>
              A full-stack blog application built with the MERN stack (MongoDB,
              Express.js, React.js, Node.js). The project includes CRUD
              operations, user authentication,Form validations, Database for
              storing data, and JSON Web Token (JWT) validations.
            </p>
          </div>
          <img src={jrpgBlog} alt="JRPG Blog" className="project-img" />
        </div>

        <div className="project-card">
          <h3 className="project-title">Okonomi Flavors</h3>
          <div className="project-live-repo">
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

            <p>
              Okonomi Flavors is a dynamic Japanese restaurant web app, built
              with HTML, CSS, and JavaScript. It is developed with the Webpack
              module bundler to create an interactive user experience. The web
              app features a home page, a menu page, a contact us form with
              validation, and local storage to store form submissions as JSON
              objects.
            </p>
          </div>
          <img
            src={okonomiFlavors}
            alt="Okonomi Flavors"
            className="project-img"
          />
        </div>

        <div className="project-card">
          <h3 className="project-title">Datapages Vault</h3>
          <div className="project-live-repo">
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

            <p>
              DataPages Vault is a web library application that allows you to
              keep track of your reading list, categorizing books you want to
              read and marking them as read or unread. The app is built using
              HTML, CSS, and JavaScript, providing a dynamic table for
              displaying your book collection.
            </p>
          </div>
          <img
            src={datapagesVault}
            alt="Datapages Vault"
            className="project-img"
          />
        </div>
        {/* <button className='see-more-btn'>See More</button> */}
      </div>
    </section>
  );
};

export default Projects;
