import { UilMessage } from "@iconscout/react-unicons";

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

            <a href="#contact" className="button button--flex button--white">
              Contact me
              <UilMessage className="project__icon button__icon" />
            </a>
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
