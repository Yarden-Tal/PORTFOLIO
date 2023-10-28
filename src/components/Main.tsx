import React from "react";
import {
  About,
  Experience,
  Techs,
  Projects,
  Feedbacks,
  Contact,
} from "./components";
import { useTheme } from "../context/ColorThemeContext";

const Main = (): JSX.Element => {
  return (
    <main
      className={`${
        useTheme().isDarkMode ? "bg-secondaryDark" : "bg-neutral-300"
      }`}
    >
      <About />
      <Experience />
      <Techs />
      <Projects />
      <Feedbacks />
      <Contact />
    </main>
  );
};

export default Main;
