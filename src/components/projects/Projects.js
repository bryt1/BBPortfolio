import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectE } from "../../assets/index";
import ProjectsCard from './ProjectsCard';



//bb test
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";


const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="CLICK ON THE GLOBE ICON TO CHECK OUT SOME OF MY PORTFOLIO"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-commerce Website"
          des=" Developement of a E-commerce Website for a camera and accessories store!"
          src={projectE}
          url = {<a href="https://popocameras.com" target="_">
      <  FaGlobe />
      </a>}
        />
        <ProjectsCard
          title="One Page Website"
          des="Developement of a One Page website for a Document solution company!"
          src={projectTwo}
          url = {<a href="http://www.eids-gh.com/" target="_">
          <  FaGlobe />
          </a>}
        />
        <ProjectsCard
          title="Intranet"
          des=" I developed a an Intranet for a Life Insurance Company with Microsoft Sharepoint!(URL is kept private)"
          src={projectOne}
        />
        <ProjectsCard
          title="DISCLAIMER AND AML SOFTWARE"
          des=" I developed a Compliance Software for a Life Insurance Company(URL is kept private)"
          src={projectOne}
        />
        <ProjectsCard
          title="VISITOR'S MANAGEMENT SOFTWARE"
          des=" I developed a VMS Software for a Life Insurance Company(URL is kept private)"
          src={projectOne}
        />
        <ProjectsCard
          title="SOFTWARE DASHBOARD"
          des="  I developed a Software Dashboard for a Life Insurance Company(URL is kept private)"
          src={projectOne}
        />
      </div>
    </section>
  );
}

export default Projects