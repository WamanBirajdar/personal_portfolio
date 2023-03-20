import {React,onButtonClick} from "react";
import { motion } from "framer-motion";
import ResumePDFCard from "./ResumePDFCard";


const ResumePDF = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="w-full h-[500px]  border-l-black border-opacity-30 ">
          <ResumePDFCard
            title="Download Resume"
            subTitle="Get more about me."
            result="Download Here"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ResumePDF;
