import { UilMoon, UilApps } from "@iconscout/react-unicons";

const ChangeTheme = () => {
  return (
    <div className="nav__btns">
      <UilMoon className="change-theme" />

      <div className="nav__toggle">
        <UilApps />
      </div>
    </div>
  );
};

export default ChangeTheme;
