import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,Netflix } from "../../assets/index";
import ProjectCard from './ProjectCard';


const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectCard
          title="AWS Data Pipeline"
          des=" Comming Soon !"
          src={projectTwo}
        />
        <ProjectCard
          title="Real Time data Pipeline"
          des=" Comming Soon!"
          src={projectTwo}
        />
        <ProjectCard
          title="Employee Attrition Prediction"
          des="Predict where employee leave your organization or not.For better use we create User Interface where you have to give some paramters on that paramters ML model give prediction "
          src={projectOne}
        />
        <ProjectCard
          title="ETL Data Pipeline"
          des="Created data Pipeline Using Big Data technologies MySql, Confluent KAFKA, AWS S3, Redshift.We Have Raw dataset in Mysql then perform some transformation and at the end we get clean dataset in Redshift"
          src={projectFour}
        />
        <ProjectCard
          title="Batch and Real Time Data Pipeline"
          des="Created Batch and real time Data Pipeline Using Cassandra, Kafka. Pyspark code read data from Cassandra and Continupusly read data and Write in Parquet file in local system!"
          src={projectFive}
        />
        <ProjectCard
          title="NETFLIX RECOMMENDATION SYSTEM"
          des=" This is My college Project Created Recommendation system using ML Algorithms which Show you Movies based on Your Intrest!"
          src={Netflix}
        />
      </div>
    </section>
  );
}

export default Projects