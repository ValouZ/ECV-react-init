import { useState } from "react";
import lightIcon from "../../assets/light.svg";
import darkIcon from "../../assets/dark.svg";

function ThemeButton() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.querySelector("body").classList.add("dark");
    } else {
      setTheme("light");
      document.querySelector("body").classList.remove("dark");
    }
  };

  return (
    <button onClick={toggleTheme} className="theme-button">
      <img src={theme == "light" ? lightIcon : darkIcon} />
    </button>
  );
}

export default ThemeButton;
