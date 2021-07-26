import SkillData from "./SkillData";

{/* prettier-ignore */}
import {
  UilBracketsCurly,
  UilAngleDown,
  UilServerNetwork,
  UilCog,
} from "@iconscout/react-unicons";
import React from "react";

const SkillsSection = () => {
  const frontEnd = [
    {
      name: "HTML",
      percent: "90",
      percentClass: "skills__html",
    },
    {
      name: "CSS",
      percent: "80",
      percentClass: "skills__css",
    },
    {
      name: "JavaScript",
      percent: "80",
      percentClass: "skills__js",
    },
    {
      name: "React",
      percent: "70",
      percentClass: "skills__react",
    },
  ];

  const displaySkill = (id: string) => {
    const element = document.getElementById(id);
    if (element?.classList.contains("skills__open")) {
      element?.classList.remove("skills__open");
      element?.classList.add("skills__close");
    } else {
      element?.classList.add("skills__open");
      element?.classList.remove("skills__close");
    }
  };

  const isOpen = () => {
    const check = document.getElementsByClassName("skills__open")[0];
    check.classList.remove("skills__open");
    check.classList.add("skills__close");
  };

  const clickSkill = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as Element;

    const parent = element.parentElement as Element;
    const id = parent.id;

    isOpen();

    displaySkill(id);
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="section__subtitle">My Technical Level</div>

      <div className="skills__container container grid">
        <div>
          <div className="skills__content skills__open" id="skill-1">
            <div onClick={clickSkill} className="skills__header">
              <UilBracketsCurly className="skills__icon" />

              <div>
                <h1 className="skills__title">Frontend Development</h1>
                <span className="skills__subtitle">More than 2 years</span>
              </div>

              <UilAngleDown className="skills__arrow" />
            </div>

            <div className="skills__list grid">
              {frontEnd.map(({ name, percent, percentClass }, index) => (
                <SkillData
                  key={index}
                  name={name}
                  percent={percent}
                  percentClass={percentClass}
                />
              ))}
            </div>
          </div>

          <div className="skills__content skills__close" id="skill-2">
            <div onClick={clickSkill} className="skills__header">
              <UilServerNetwork className="skills__icon" />

              <div>
                <h1 className="skills__title">Backend Development</h1>
                <span className="skills__subtitle">More than 2 years</span>
              </div>

              <UilAngleDown className="skills__arrow" />
            </div>

            <div className="skills__list grid">
              {frontEnd.map(({ name, percent, percentClass }, index) => (
                <SkillData
                  key={index}
                  name={name}
                  percent={percent}
                  percentClass={percentClass}
                />
              ))}
            </div>
          </div>

          <div className="skills__content skills__close" id="skill-3">
            <div onClick={clickSkill} className="skills__header">
              <UilCog className="skills__icon" />

              <div>
                <h1 className="skills__title">Software Tools</h1>
                <span className="skills__subtitle">More than 2 years</span>
              </div>

              <UilAngleDown className="skills__arrow" />
            </div>

            <div className="skills__list grid">
              {frontEnd.map(({ name, percent, percentClass }, index) => (
                <SkillData
                  key={index}
                  name={name}
                  percent={percent}
                  percentClass={percentClass}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
