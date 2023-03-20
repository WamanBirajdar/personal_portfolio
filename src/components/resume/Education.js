import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-5">
          <p className="text-sm text-designColor tracking-[4px]">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold">Higher Education</h2>
        </div>
        <div className="mt-6 ml-14 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="PG Diploma in DBDA"
            subTitle="C-DAC"
            result="2022"
            des="The training provided by C-DAC in order to prepare people to work in Big data sectors of Company."
          />
          <ResumeCard
            title="B.E. in Computer Science Engineering"
            subTitle="University of Pune"
            result="2021"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="HSC in Computer Science "
            subTitle="Maharashtra State Board"
            result="2015"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Maharashtra State Board"
            result="2013"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />

        </div>
      </div>
    </motion.div>
  );
}

export default Education