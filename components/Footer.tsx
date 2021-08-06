import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilTwitterAlt,
  UilEnvelopeAlt,
} from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Abdul Rafey Rizwan</h1>
            <span className="footer__subtitle">Software Engineer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/abdul-rafey-rizwan/"
              target="__blank"
              className="footer__social"
            >
              <UilLinkedinAlt />
            </a>
            <a
              href="https://github.com/zaimeali"
              target="__blank"
              className="footer__social"
            >
              <UilGithubAlt />
            </a>
            <a
              href="https://twitter.com/zaime_ali"
              target="__blank"
              className="footer__social"
            >
              <i className="uil uil-twitter-alt"></i>
              <UilTwitterAlt />
            </a>
            <a href="mailto:zaimeali1997@gmail.com" className="footer__social">
              <UilEnvelopeAlt />
            </a>
          </div>
        </div>

        <p className="footer__copy">
          &#169; Abdul Rafey Rizwan. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
