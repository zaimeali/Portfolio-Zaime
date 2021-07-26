import { UilDownloadAlt } from "@iconscout/react-unicons";

const AboutSection = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>

      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img className="about__img" src="/img/about.jpg" alt="About Image" />

        <div className="about__data">
          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            nihil ea nobis sunt sequi perspiciatis itaque asperiores? Possimus
            veniam minus modi distinctio enim cumque quidem, delectus quaerat
            nisi explicabo aspernatur.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">01+</span>
              <span className="about__info-name">
                Years <br /> experience
              </span>
            </div>

            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                Completed <br /> project
              </span>
            </div>

            <div>
              <span className="about__info-title">02+</span>
              <span className="about__info-name">
                Companies <br /> worked
              </span>
            </div>
          </div>

          <div className="about__buttons">
            <a
              href="/pdf/Resume-SE-Abdul-Rizwan.pdf"
              target="__blank"
              className="button button--flex"
            >
              Download CV <UilDownloadAlt className="button__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
