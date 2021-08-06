import { UilMoon, UilApps } from "@iconscout/react-unicons";
import { useState } from "react";

const ChangeTheme = () => {
  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => {
    console.log("Nice");
  };

  return (
    <div className="nav__btns" onClick={changeTheme}>
      <UilMoon className="change-theme" />

      <div className="nav__toggle">
        <UilApps />
      </div>
    </div>
  );
};

export default ChangeTheme;
