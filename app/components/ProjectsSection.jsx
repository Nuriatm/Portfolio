"use client"
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView, UseInView } from "framer-motion";

const projectsData = [
    {
        id:1,
        title: "Secret Number",
        description: "DESCRIÇÃO",
        image: "/images/projects/numero-project.png",
        tag: ["All"],
        gitUrl: "https://github.com/Nuriatm/NumeroSecreto",
        previewUrl: "https://numero-secreto-ashen-nu.vercel.app/",
    },
    {
        id:2,
        title: "World Wanderer",
        description: "DESCRIÇÃO",
        image: "/images/projects/worl-wanderer-project.png",
        tag: ["All"],
        gitUrl: "https://github.com/Nuriatm/World-Wanderer",
        previewUrl: "https://world-wanderer.vercel.app/",
    },
    {
        id:3,
        title: "MyBank",
        description: "DESCRIÇÃO",
        image: "/images/projects/mybank-project.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Nuriatm/Formulario-cadastro",
        previewUrl: "https://formulario-cadastro-mybank.vercel.app/",
    },
    {
        id:4,
        title: "Age Explorer",
        description: "DESCRIÇÃO",
        image: "/images/projects/age-project.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Nuriatm/AgeExplorer",
        previewUrl: "https://age-explorer.vercel.app/",
    },
]

const ProjectsSection = () => {
    const [tag,setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange= (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
const cardVariants = {
  initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }, 
}
  return (
    <section ref={ref}>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag 
        onClick={handleTagChange} 
        name="All" 
        isSelected={tag === "All"} 
        />
        <ProjectTag 
        onClick={handleTagChange} 
        name="Web" 
        isSelected={tag === "Web"} 
        />
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
           {filteredProjects.map((project, index) => (
             <motion.li 
             key={index}
             variants={cardVariants}
             initial="initial"
             animate={isInView ? "animate" : "initial"}
             transition={{ duration: 0.3, delay: index * 0.4 }}
             className=''>
             <ProjectCard 
             key={project.id} 
             title={project.title} 
             description={project.description} 
             imgUrl={project.image} 
             gitUrl={project.gitUrl}
             previewUrl={project.previewUrl}
             /> 
             </motion.li>
           ))}
           
        </ul>
    </section>
  );
};

export default ProjectsSection