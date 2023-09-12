import React from "react";
import { SectionWrapper } from "../../../hoc";
import { projects, projectsTxt } from "../../../data/data";
import ProjectCard from "./ProjectCard";
import { Project } from "../../../ts/interfaces";

const Projects = (): JSX.Element => {
  return (
    <section>
      <div>
        <p className="sect-subtxt">My work</p>
        <h2 className="sect-head-txt">Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]">
          {projectsTxt}
        </p>
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
