//@ts-nocheck
import React from "react";
import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { experiences } from "../../../data/data";
import { SectionWrapper } from "../../../hoc";
import { textVariant } from "../../../utils/motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../../../ts/interfaces";

const ExperienceSection = (): JSX.Element => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <h2 className="sect-head-txt">
          Work Experience.
        </h2>
        <p className="sect-subtxt">
          What I have done so far
        </p>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((e: Experience, i: number) => (
            <ExperienceCard
              key={`experience-${i}`}
              experience={e}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(ExperienceSection, "work");
