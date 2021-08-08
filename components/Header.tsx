import ChangeTheme from "./ChangeTheme";

import { Link } from "react-scroll";

import {
  UilBracketsCurly,
  UilHome,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilScenery,
  UilMessage,
  UilTimes,
  UilMap,
} from "@iconscout/react-unicons";

export default function Header() {
  const displayMenu = () => {
    if (typeof window !== "undefined") {
      const navMenu = document.getElementById("nav-menu");
      navMenu?.classList.remove("show-menu");
    }
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="home" className="nav__logo">
          Abdul Rafey <UilBracketsCurly className="nav__logo-icon" />
        </Link>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to="home"
                className="nav__link"
                id="home-button"
                smooth={true}
                duration={100}
                activeClass="active-link"
                spy={true}
              >
                <UilHome className="nav__icon" /> Home
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="about"
                className="nav__link"
                smooth={true}
                duration={100}
                activeClass="active-link"
                spy={true}
              >
                <UilUser className="nav__icon" /> About Me
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="skills"
                className="nav__link"
                smooth={true}
                duration={100}
                activeClass="active-link"
                spy={true}
              >
                <UilFileAlt className="nav__icon" /> Skills
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="journey"
                className="nav__link"
                smooth={true}
                duration={100}
                activeClass="active-link"
                spy={true}
              >
                <UilMap className="nav__icon" /> Journey
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="services"
                className="nav__link"
                smooth={true}
                duration={100}
                activeClass="active-link"
                spy={true}
              >
                <UilBriefcaseAlt className="nav__icon" /> Services
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="portfolio"
                className="nav__link"
                smooth={true}
                duration={100}
                activeClass="active-link"
                spy={true}
              >
                <UilScenery className="nav__icon" /> Portfolio
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="contact"
                className="nav__link"
                smooth={true}
                duration={100}
                activeClass="active-link"
                spy={true}
              >
                <UilMessage className="nav__icon" /> Contact Me
              </Link>
            </li>
          </ul>

          <UilTimes className="nav__close" onClick={displayMenu} />
        </div>

        <ChangeTheme />
      </nav>
    </header>
  );
}
