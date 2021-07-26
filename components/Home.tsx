import SocialMedia from "./SocialMedia";
import HomeImage from "./HomeImage";

import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilTwitterAlt,
  UilEnvelopeAlt,
  UilMessage,
  UilMouseAlt,
  UilArrowDown,
} from "@iconscout/react-unicons";

import { Link } from "react-scroll";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <SocialMedia
              url="https://www.linkedin.com/in/abdul-rafey-rizwan/"
              classes="home__social-icon"
            >
              <UilLinkedinAlt className="w-20 h-20" />
            </SocialMedia>

            <SocialMedia
              url="https://github.com/zaimeali"
              classes="home__social-icon"
            >
              <UilGithubAlt className="w-20 h-20" />
            </SocialMedia>

            <SocialMedia
              url="https://twitter.com/zaime_ali"
              classes="home__social-icon"
            >
              <UilTwitterAlt className="w-20 h-20" />
            </SocialMedia>

            <SocialMedia
              url="mailto:zaimeali1997@gmail.com"
              classes="home__social-icon"
            >
              <UilEnvelopeAlt className="w-20 h-20" />
            </SocialMedia>
          </div>

          <div className="home__img">
            <HomeImage />
          </div>

          <div className="home__data">
            <h1 className="home__title">Hi, I am Abdul Rafey Rizwan 👋</h1>
            <h3 className="home__subtitle">Full Stack Developer 👨‍💻</h3>
            <p className="home__description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis alias inventore excepturi, fugit quod nesciunt fugiat?
              Odit, tempore ipsum, itaque consectetur cupiditate quo sapiente
              nesciunt voluptatum quos voluptate perferendis hic.
            </p>
            <Link
              to="contact"
              className="button button--flex button__flex cursor-pointer"
            >
              Contact Me <UilMessage className="button__icon" />
            </Link>
          </div>
        </div>

        <div className="home__scroll">
          <Link
            to="about"
            className="home__scroll-button button--flex cursor-pointer"
          >
            <UilMouseAlt className="home__scroll-mouse" />

            <span className="home__scroll-name">Scroll down</span>

            <UilArrowDown className="home__scroll-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
