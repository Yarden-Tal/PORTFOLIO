import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../../hoc";
import { textVariant } from "../../../utils/motion";
import { testimonials } from "../../../data/data";
import { Testimonial } from "../../../ts/interfaces";
import FeedbackCard from "./FeedbackCard";

const Feedbacks = (): JSX.Element => {
  return (
    <section className={`mt-12 bg-secondary rounded-[20px]`}>
      <div
        className={`bg-primary rounded-2xl pad min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className="sect-subtxt">What others say</p>
          <h2 className="sect-head-txt">Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 pad-x flex flex-wrap gap-7 justify-center lg:justify-start`}>
        {testimonials.map((t: Testimonial, i: number) => (
          <FeedbackCard key={i} index={i} {...t} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Feedbacks, "");
