import React from "react";
import { Navbar, Hero } from "./components";

const Top = (): JSX.Element => {
  return (
    <div className="relative bg-primary">
      <header className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </header>
    </div>
  );
};

export default Top;
