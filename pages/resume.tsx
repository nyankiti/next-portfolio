import { NextPage } from "next";
import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";

const Resume: NextPage = () => {

  return (
    <motion.div 
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-2"
    >
    
      <div className="grid gap-6 md:grid-cols-2">
        {/* 学歴、職歴など */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">Academy of Technology (2017-2021)</p>
            <p className="my-3">
              I am currently pursuing B.tech in Computer Science Engineering
              from Academy of Technology
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Software Developer Jr.</h5>
            <p className="font-semibold">Tata Consultancy Services</p>

          </div>
        </motion.div>
      </div>

      {/* 技術スタック */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;