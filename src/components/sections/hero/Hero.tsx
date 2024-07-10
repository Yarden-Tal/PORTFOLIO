import React from "react";
import { ComputersCanvas } from "../../canvas/canvas";
import AboutCtaButton from "./AboutCtaButton";

const Hero = (): JSX.Element => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto pad-x flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-primary' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`hero-head-txt`}>
            Hi, I'm <span className='text-tertiary'>Yarden</span>
          </h1>
          <p className={`hero-subtxt`}>
            I develop Web Apps <br className='sm:block hidden' />
            and Cross-Platform Applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <AboutCtaButton />
    </section>
  );
};

export default Hero;
