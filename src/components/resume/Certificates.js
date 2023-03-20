import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";
import { python,sqlb,sqli,jp,google} from "../../assets/index";
import CertificatesCard from './CertificatesCard.js';
const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Training</p>
          <h2 className="text-4xl font-bold">Certificates</h2>
        </div>
        <div className="grid grid-cols-1 py-4 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <CertificatesCard
          title="ETL Data Pipeline"
          des="Created data Pipeline Using Big Data technologies MySql, Confluent KAFKA, AWS S3, Redshift.We Have Raw dataset in Mysql then perform some transformation and at the end we get clean dataset in Redshift"
          src={python}
        />
        <CertificatesCard
          title="ETL Data Pipeline"
          des="Created data Pipeline Using Big Data technologies MySql, Confluent KAFKA, AWS S3, Redshift.We Have Raw dataset in Mysql then perform some transformation and at the end we get clean dataset in Redshift"
          src={sqlb}
        />
        <CertificatesCard
          title="ETL Data Pipeline"
          des="Created data Pipeline Using Big Data technologies MySql, Confluent KAFKA, AWS S3, Redshift.We Have Raw dataset in Mysql then perform some transformation and at the end we get clean dataset in Redshift"
          src={sqli}
        />
        <CertificatesCard
          title="ETL Data Pipeline"
          des="Created data Pipeline Using Big Data technologies MySql, Confluent KAFKA, AWS S3, Redshift.We Have Raw dataset in Mysql then perform some transformation and at the end we get clean dataset in Redshift"
          src={jp}
        />
        <CertificatesCard
          title="ETL Data Pipeline"
          des="Created data Pipeline Using Big Data technologies MySql, Confluent KAFKA, AWS S3, Redshift.We Have Raw dataset in Mysql then perform some transformation and at the end we get clean dataset in Redshift"
          src={google}
        />
      </div>
      </div>
    </motion.div>
  );
};

export default Experience;
