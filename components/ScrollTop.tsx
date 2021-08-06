import { Link } from "react-scroll";

import { UilArrowUp } from "@iconscout/react-unicons";

const ScrollTop = () => {
  return (
    <Link to="home" className="scrollup" id="scroll-up">
      <UilArrowUp className="scrollup__icon" />
    </Link>
  );
};

export default ScrollTop;
