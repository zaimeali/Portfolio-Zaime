import {
  UilWebGrid,
  UilArrow,
  UilServerNetwork,
  UilMobileAndroid,
  UilPalette,
  UilArrowRight,
  UilTimes,
  UilCheckCircle,
} from "@iconscout/react-unicons";
import { useState } from "react";

interface PropsData {
  firstTitle: string;
  secondTitle?: string;
  type: string;
  list?: string[];
}

interface IconData {
  type?: string;
}

const IconDisplay = ({ type = "" }: IconData) => {
  if (type === "design") {
    return <UilPalette className="services__icon" />;
  } else if (type === "frontend") {
    return <UilArrow className="services__icon" />;
  } else if (type === "backend") {
    return <UilServerNetwork className="services__icon" />;
  } else if (type === "mobile") {
    return <UilMobileAndroid className="services__icon" />;
  } else {
    return <UilWebGrid className="services__icon" />;
  }
};

const ServiceContent = ({
  firstTitle,
  secondTitle = "",
  type,
  list = [],
}: PropsData) => {
  const [show, setShow] = useState(false);

  const displayModal = () => {
    setShow(!show);
  };

  return (
    <div className="services__content">
      <div>
        <IconDisplay type={type} />
        <h3>
          {firstTitle} {secondTitle && <br />} {secondTitle}
        </h3>
      </div>

      <span
        className="button button--flex button--small button--link services__button"
        onClick={displayModal}
      >
        View More
        <UilArrowRight className="button__icon" />
      </span>

      {show && (
        <div className="services__modal active-modal">
          <div className="services__modal-content">
            <h4 className="services__modal-title">
              {firstTitle} {secondTitle && <br />} {secondTitle}
            </h4>

            <UilTimes
              className="services__modal-close"
              onClick={displayModal}
            />

            <ul className="services__modal-services grid">
              {list &&
                list.map((item, index) => (
                  <li className="services__modal-service" key={index}>
                    <UilCheckCircle className="services__modal-icon" />
                    <p>{item}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceContent;
