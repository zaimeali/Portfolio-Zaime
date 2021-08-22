// Icons
import {
  UilPhone,
  UilEnvelope,
  UilMapMarker,
  UilMessage,
} from "@iconscout/react-unicons";

// Components
import ContactInformation from "./ContactInformation";

const ContactSectionSecond = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="container contact__container flex__row">
        <div className="w__30 contact__information__wrapper">
          <ContactInformation title="Call Me" subtitle="+1 959-901-2073">
            <UilPhone className="contact__icon" />
          </ContactInformation>

          <ContactInformation title="Email" subtitle="zaimeali1997@gmail.com">
            <UilEnvelope className="contact__icon" />
          </ContactInformation>

          <ContactInformation
            title="Location"
            subtitle="Hartford, United States"
          >
            <UilMapMarker className="contact__icon" />
          </ContactInformation>
        </div>

        <form action="" className="contact__form grid w__70">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Name
              </label>
              <input type="text" className="contact__input" />
            </div>
            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Email
              </label>
              <input type="email" className="contact__input" />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="" className="contact__label">
              Project
            </label>
            <input type="text" className="contact__input" />
          </div>
          <div className="contact__content">
            <label htmlFor="" className="contact__label">
              Message
            </label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className="contact__input"
            ></textarea>
          </div>

          <div>
            <button className="button button--flex">
              Send Message
              <UilMessage className="button__icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSectionSecond;
