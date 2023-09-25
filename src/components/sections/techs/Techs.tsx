import React from "react";
import { Tooltip } from "react-tooltip";
import { BallCanvas } from "../../canvas/canvas";
import { SectionWrapper } from "../../../hoc";
import { technologies } from "../../../data/data";
import { Technology } from "../../../ts/interfaces";

const Techs = (): JSX.Element => {
  return (
    <section className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((t: Technology) => (
        <div
          data-tooltip-id={t.icon}
          data-tooltip-place="top"
          className="w-28 h-28"
          key={t.name}
        >
          <Tooltip
            className="change-color"
            id={t.icon}
            clickable
            data-tooltip-delay-hide={100}
          >
            <a className="hover:text-tertiary" target="_blank" href={t.docsUrl}>
              {t.name}
            </a>
          </Tooltip>
          <BallCanvas icon={t.icon} />
        </div>
      ))}
    </section>
  );
};

export default SectionWrapper(Techs, "");
