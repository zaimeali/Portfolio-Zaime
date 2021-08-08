import { UilArrowRight } from "@iconscout/react-unicons";

// import Swiper core and required modules
import SwiperCore, { Pagination} from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import PortfolioSlide from "./PortfolioSlide";

// install Swiper modules
SwiperCore.use([Pagination]);

const PortfolioSection = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <Swiper
        className="portfolio__container container"
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        spaceBetween={48}
        loop={true}
        grabCursor={true}
      >
        <SwiperSlide className="portfolio__card">
          <img
            className="portfolio__img"
            src="/img/portfolio1.jpg"
            alt="Project 1"
          />

          <div className="portfolio__info">
            <h3 className="portfolio__title">Modern Website</h3>
            <p className="portfolio__description">
              Website adaptable to all devices, with ui components and animated
              interactions.
            </p>

            <a
              href="#"
              className="button button--flex button--small portfolio__button"
            >
              Demo
              <UilArrowRight className="button__icon" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="portfolio__card">
          <img
            className="portfolio__img"
            src="/img/portfolio1.jpg"
            alt="Project 1"
          />

          <div className="portfolio__info">
            <h3 className="portfolio__title">Modern Website</h3>
            <p className="portfolio__description">
              Website adaptable to all devices, with ui components and animated
              interactions.
            </p>

            <a
              href="#"
              className="button button--flex button--small portfolio__button"
            >
              Demo
              <UilArrowRight className="button__icon" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="portfolio__card">
          <img
            className="portfolio__img"
            src="/img/portfolio1.jpg"
            alt="Project 1"
          />

          <div className="portfolio__info">
            <h3 className="portfolio__title">Modern Website</h3>
            <p className="portfolio__description">
              Website adaptable to all devices, with ui components and animated
              interactions.
            </p>

            <a
              href="#"
              className="button button--flex button--small portfolio__button"
            >
              Demo
              <UilArrowRight className="button__icon" />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default PortfolioSection;
