import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../../../utils/motion";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  role,
  company,
  image,
}): JSX.Element => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-tertiary p-10 rounded-3xl xs:w-[320px] w-full flex flex-col justify-start"
  >
    <p className="text-black font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-primary tracking-wider text-[18px]">{testimonial}</p>
    </div>
    <div className="mt-auto">
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-black font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-primary text-[12px]">
            {role} at {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

export default FeedbackCard;
