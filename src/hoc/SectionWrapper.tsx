import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component: React.FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        //@ts-ignore
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={"pad max-w-7xl mx-auto relative z-0"}
        >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
