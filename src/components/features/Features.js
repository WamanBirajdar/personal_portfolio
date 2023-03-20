import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';


const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Data Pipelines"
          des="Created data pipelines between various Big data Frameworks and Cloud."
          
         
        />
        <Card
          title="Data Visualization"
          des="I created dashboards using Microsoft Power BI."
          icon={<FaMobile />}
        />
        <Card
          title="Statistic Analysis"
          des="I have good Knowledge of Statistic."
          icon={<SiAntdesign />}
        />
        <Card
          title="ML Model Building"
          des="Hands on diff ML Algorithms, Regression and Classification."
          icon={<FaGlobe />}
        />
        <Card
          title="Data Analyst "
          des=" Interpret data, analyze results using statistical techniques and provide ongoing reports.Acquire data from primary or secondary data sources and maintain databases/data systems."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Database "
          des="Good Knowledge of NoSQL and SQL databases.Practicle hands on "
          icon={<SiProgress />}
        />
      </div>
    </section>
  );
}

export default Features