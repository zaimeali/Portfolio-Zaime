import { ReactChild, ReactChildren } from "react";

interface PropsType {
  children?: ReactChild | ReactChildren;
  title: String;
  subtitle: string;
}

const ContactInformation = ({ children, title, subtitle }: PropsType) => {
  return (
    <div className="contact__information">
      {children}
      <div>
        <h3 className="contact__title">{title}</h3>

        <span className="contact__subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

export default ContactInformation;
