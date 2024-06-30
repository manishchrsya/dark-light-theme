import { useEffect, useState } from "react";

import { ThemeToggle } from ".";

import "./layout.css";

const HeaderLayout = () => {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12;
      hours = hours ? hours : 12; // The hour '0' should be '12'

      const minutesStr = minutes < 10 ? "0" + minutes : minutes;

      const clockTime = `${hours}:${minutesStr} ${ampm}`;
      setTime(clockTime);
    }, 1000);
  }, []);

  return (
    <div className="layout-header">
      <div className="layout-header-clock">{time}</div>
      <div className="layout-header-notch">
        <div className="camera-lens" />
      </div>
      <div className="layout-header-connectivity">
        <i className="ri-signal-wifi-fill" />
      </div>
    </div>
  );
};

const FooterLayout = () => {
  return <div className="layout-footer"></div>;
};

const BodyLayout = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  const theme = toggle ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="layout-body">
      <div className="moon-wrapper">
        {theme === "dark" ? (
          <i className="ri-moon-fill moon"></i>
        ) : (
          <i className="ri-sun-fill sun"></i>
        )}
      </div>
      <h3 className="heading">Choose a style</h3>
      <p className="paragraph">
        Pop or subtle. Day or night customize your interface
      </p>
      <ThemeToggle handleClick={handleClick} toggle={toggle} />
    </div>
  );
};

export const ScreenLayout = () => {
  return (
    <div className="layout">
      <HeaderLayout />
      <BodyLayout />
      <FooterLayout />
    </div>
  );
};
