import { FC } from "react";

import "./theme-toogle.css";

interface IThemeToggle {
  toggle: boolean;
  handleClick: () => void;
}

export const ThemeToggle: FC<IThemeToggle> = ({ toggle, handleClick }) => {
  return (
    <div className="toggle-wrapper">
      <div
        className={`toggle-option toggle-option${!toggle ? "--active" : ""}`}
        onClick={handleClick}
      >
        Light
      </div>
      <div
        className={`toggle-option toggle-option${toggle ? "--active" : ""}`}
        onClick={handleClick}
      >
        Dark
      </div>
    </div>
  );
};
