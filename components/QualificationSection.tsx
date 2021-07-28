import { UilGraduationCap, UilBriefcaseAlt } from "@iconscout/react-unicons";
import { useState } from "react";
import QualificationDataEven from "./QualificationDataEven";
import QualificationDataOdd from "./QualificationDataOdd";

const QualificationSection = () => {
  const [showEducation, setShowEducation] = useState(true);
  const [showExperience, setShowExperience] = useState(false);

  const education = [
    {
      title: "Software Engineering",
      subtitle: "NED University of Engineering and Technology",
      dateStart: "2016",
      dateEnd: "2020",
    },
    {
      title: "MERN Stack Bootcamp",
      subtitle: "Learn Code Online",
      dateStart: "2021",
      dateEnd: "2021",
    },
    {
      title: "Software Engineering",
      subtitle: "NED University of Engineering and Technology",
      dateStart: "2016",
      dateEnd: "2020",
    },
    {
      title: "MERN Stack Bootcamp",
      subtitle: "Learn Code Online",
      dateStart: "2021",
      dateEnd: "2021",
    },
  ];

  const experience = [
    {
      title: "Software Engineering",
      subtitle: "NED University of Engineering and Technology",
      dateStart: "2016",
      dateEnd: "2020",
    },
    {
      title: "MERN Stack Bootcamp",
      subtitle: "Learn Code Online",
      dateStart: "2021",
      dateEnd: "2021",
    },
    {
      title: "Software Engineering",
      subtitle: "NED University of Engineering and Technology",
      dateStart: "2016",
      dateEnd: "2020",
    },
  ];

  const displayJourney = () => {
    if (showEducation) {
      setShowEducation(false);
      setShowExperience(true);
    } else {
      setShowExperience(false);
      setShowEducation(true);
    }
  };

  return (
    <section className="qualification section pb-200" id="journey">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className="qualification__button button--flex cursor-pointer"
            onClick={displayJourney}
          >
            <UilGraduationCap
              className={`qualification__icon ${
                showEducation && "qualification__active"
              }`}
            />
            Education
          </div>
          <div
            className="qualification__button button--flex cursor-pointer"
            onClick={displayJourney}
          >
            <UilBriefcaseAlt
              className={`qualification__icon ${
                showExperience && "qualification__active"
              }`}
            />
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {showEducation && (
            <div
              className={`qualification__content ${
                showEducation && "qualification__active"
              }`}
            >
              {education &&
                education.map(
                  ({ title, subtitle, dateStart, dateEnd }, index) =>
                    index % 2 === 0 ? (
                      <QualificationDataEven
                        key={index}
                        title={title}
                        subtitle={subtitle}
                        dateStart={dateStart}
                        dateEnd={dateEnd}
                        isLast={education.length - 1 === index}
                      />
                    ) : (
                      <QualificationDataOdd
                        key={index}
                        title={title}
                        subtitle={subtitle}
                        dateStart={dateStart}
                        dateEnd={dateEnd}
                        isLast={education.length - 1 === index}
                      />
                    )
                )}
            </div>
          )}

          {showExperience && (
            <div
              className={`qualification__content ${
                showExperience && "qualification__active"
              }`}
            >
              {experience &&
                experience.map(
                  ({ title, subtitle, dateStart, dateEnd }, index) =>
                    index % 2 === 0 ? (
                      <QualificationDataEven
                        key={index}
                        title={title}
                        subtitle={subtitle}
                        dateStart={dateStart}
                        dateEnd={dateEnd}
                        isLast={experience.length - 1 === index}
                      />
                    ) : (
                      <QualificationDataOdd
                        key={index}
                        title={title}
                        subtitle={subtitle}
                        dateStart={dateStart}
                        dateEnd={dateEnd}
                        isLast={experience.length - 1 === index}
                      />
                    )
                )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
