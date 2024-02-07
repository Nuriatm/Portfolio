"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        
        <li>Next.js</li>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Analysis and Systems Development</li>
        <li>University: Estácio</li>
        <li>E.E Prof Sebastião Fernandes Palma</li>
        
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Font-end Development, Alura.</li>
        <li>Advanced English, CNA</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
        
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
        <Image  src="/images/about-image.png" width={300} height={300}  
        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            
          <h2 className="text-4xl font-bold text-white mb-4 mt-5">About Me</h2>
          <p className="text-base lg:text-lg">
            I am front-end developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, HTML, CSS, and Git. <br></br>
            I'm a quick learner and I am always
            looking to expand my knowledge and skill set. 
          </p>
          
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;