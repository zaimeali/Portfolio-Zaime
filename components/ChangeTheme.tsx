import { UilMoon, UilApps, UilSun } from "@iconscout/react-unicons";
import { useState } from "react";

const ChangeTheme = () => {
  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => {
    isDark
      ? document.body.classList.remove("dark-theme")
      : document.body.classList.add("dark-theme");

    setIsDark(!isDark);
  };

  const displayMenu = () => {
    if (typeof window !== "undefined") {
      const navMenu = document.getElementById("nav-menu");
      navMenu?.classList.add("show-menu");
    }
  };

  return (
    <div className="nav__btns">
      {isDark ? (
        <UilSun className="change-theme" onClick={changeTheme} />
      ) : (
        <UilMoon className="change-theme" onClick={changeTheme} />
      )}

      <div className="nav__toggle" onClick={displayMenu}>
        <UilApps />
      </div>
    </div>
  );
};

export default ChangeTheme;
