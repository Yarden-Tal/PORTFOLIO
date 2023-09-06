import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../../hoc";
import { projects, projectsTxt } from "../../../data/data";
import { fadeIn, textVariant } from "../../../utils/motion";
import ProjectCard from "./ProjectCard";
import { Project } from "../../../ts/interfaces";

const Projects = (): JSX.Element => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className="sect-subtxt">My work</p>
        <h2 className="sect-head-txt">Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]"
        >
          {projectsTxt}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project: Project, i: number) => (
          <ProjectCard key={`project-${i}`} index={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Projects, "");
