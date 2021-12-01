import { NextPage } from "next";
import Bar from "domain/portfolio/Bar";
import { languages, tools } from "constants/data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "utils/animations";

const Motion: NextPage = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-2"
    >
      <p>練習</p>
    </motion.div>
  );
};

export default Motion;
