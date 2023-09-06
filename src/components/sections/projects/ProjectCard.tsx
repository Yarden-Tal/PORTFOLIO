import { motion } from "framer-motion";
import React from "react";
import { github } from "../../../assets/assets";
import { fadeIn } from "../../../utils/motion";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { Tag } from "../../../ts/interfaces";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}): JSX.Element => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        //@ts-ignore
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-primary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={`${name.toLowerCase()} image`}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <Link
              to={sourceCodeLink}
              target="_blank"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain hover:outline-1 hover:outline outline-white hover:rounded-full"
              />
            </Link>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag: Tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
