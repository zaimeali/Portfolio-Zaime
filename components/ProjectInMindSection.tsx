import { UilMessage } from "@iconscout/react-unicons";

import { Link } from "react-scroll";

const ProjectInMindSection = () => {
  return (
    <section className="project section">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">You have a new project</h2>

            <p className="project__description">
              Contact me now and get 30% discount on the project
            </p>

            <Link
              to="contact"
              className="button button--flex button--white"
              smooth={true}
              duration={100}
            >
              Contact me
              <UilMessage className="project__icon button__icon" />
            </Link>
          </div>

          <img
            src="/img/project.png"
            alt="Project Image"
            className="project__img"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectInMindSection;
