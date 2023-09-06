import React from "react";
import { motion } from "framer-motion";
import { services } from "../../../data/data";
import { SectionWrapper } from "../../../hoc";
import { fadeIn, textVariant } from "../../../utils/motion";
import ServiceCard from "./ServiceCard";
import AboutText from "./AboutText";
import { Service } from "../../../ts/interfaces";

const About = (): JSX.Element => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sect-subtxt">Introduction</p>
        <h2 className="sect-head-txt">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='text-white about-txt'
      >
      <AboutText />
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='text-tertiary about-txt'
      >Let's bring ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap md:justify-center gap-10'>
        {services.map((service: Service, index: number) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
