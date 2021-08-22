// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

import { UilStar } from "@iconscout/react-unicons";

// install Swiper modules
SwiperCore.use([Pagination]);

const TestimonialSection = () => {
  return (
    <section className="testimonial section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My Client Saying</span>

      <Swiper
        className="container testimonial__container"
        slidesPerView={2}
        loop
        grabCursor
      >
        <SwiperSlide className="testimonial_content">
          <div className="testimonial__data">
            <div className="testimonial__header">
              <img
                src="/img/testimonial1.jpg"
                alt="First Testimonial"
                className="testimonial__img"
              />
              <div>
                <h3 className="testimonial__name">Sara Smith</h3>
                <span className="testimonial__client">Client</span>
              </div>
            </div>

            <div className="testimonial__star__icons">
              <UilStar className="testimonial__icon-star" />
              <UilStar className="testimonial__icon-star" />
              <UilStar className="testimonial__icon-star" />
              <UilStar className="testimonial__icon-star" />
              <UilStar className="testimonial__icon-star" />
            </div>
          </div>

          <p className="testimonial__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            recusandae quibusdam nisi vel magni cumque, vitae voluptas velit
            autem iure, aperiam quisquam suscipit magnam ullam assumenda sit?
            Aliquid, assumenda atque!
          </p>
        </SwiperSlide>
        <SwiperSlide className="testimonial_content">
          <div className="testimonial__data">
            <div className="testimonial__header">
              <img
                src="/img/testimonial1.jpg"
                alt="First Testimonial"
                className="testimonial__img"
              />
              <div>
                <h3 className="testimonial__name">Sara Smith</h3>
                <span className="testimonial__client">Client</span>
              </div>
            </div>

            <div className="testimonial__star__icons">
              <UilStar className="testimonial__icon-star" />
              <UilStar className="testimonial__icon-star" />
              <UilStar className="testimonial__icon-star" />
              <UilStar className="testimonial__icon-star" />
              <UilStar className="testimonial__icon-star" />
            </div>
          </div>

          <p className="testimonial__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            recusandae quibusdam nisi vel magni cumque, vitae voluptas velit
            autem iure, aperiam quisquam suscipit magnam ullam assumenda sit?
            Aliquid, assumenda atque!
          </p>
        </SwiperSlide>

        <SwiperSlide className="testimonial_content">
          <div className="testimonial__data">
            <div className="testimonial__header">
              <img
                src="/img/testimonial1.jpg"
                alt="First Testimonial"
                className="testimonial__img"
              />
              <div>
                <h3 className="testimonial__name">Sara Smith</h3>
                <span className="testimonial__client">Client</span>
              </div>
            </div>

            <div className="testimonial__star__icons">
              <UilStar className="testimonial__icon-star" />
              <UilStar className="testimonial__icon-star" />
              <UilStar className="testimonial__icon-star" />
              <UilStar className="testimonial__icon-star" />
              <UilStar className="testimonial__icon-star" />
            </div>
          </div>

          <p className="testimonial__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            recusandae quibusdam nisi vel magni cumque, vitae voluptas velit
            autem iure, aperiam quisquam suscipit magnam ullam assumenda sit?
            Aliquid, assumenda atque!
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TestimonialSection;
