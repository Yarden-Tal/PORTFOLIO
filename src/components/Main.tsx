import React from "react";
import { About, Experience, Techs, Projects, Feedbacks, Contact } from "./components";

const Main = (): JSX.Element => {
  return (
    <main>
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
