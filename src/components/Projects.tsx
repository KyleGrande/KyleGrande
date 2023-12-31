// import { user } from "../assets/userinfo";
import { user } from "../assets/userinfo";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./sub-components/ProjectCard";
import ProjectCard2 from "./sub-components/ProjectCard2";

import { projects } from "../assets/userinfo";

function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: false, // The animation will trigger once
    threshold: 0.01, // The element is in view when 10% of it is visible
  });

  return (
    <>
      <div className="grid grid-col-2 gap-7 bg-custom-linear bg-gradient-to-b from-custom-purp from-5% via-custom-dark to-custom-dark">
        <div
          ref={ref}
          className={` box-shadow-inner flex items-start justify-start p-10  md:p-40 md:pb-0  `}
        >
          <div className="flex flex-col gap-7">
            <h1
              ref={ref}
              className={`text-white font-bold text-left text-5xl md:text-7xl tracking-wider 
            ${inView ? "animate-fade-in-left" : ""}
            `}
            >
              Projects
            </h1>
            <h3
              ref={ref}
              className={`text-sm md:text-md lg:text-2xl text-left tracking-tight text-gray-500 ${
                inView ? "animate-fade-in-left" : ""
              }`}
            >
              Cloud, Web, Mobile, & Data.<br></br> I've done quite a bit.
            </h3>
            <div className="flex flex-col gap-5 md:flex-row justify-start items-start">
              <a
                ref={ref}
                href={user.github}
                target="_blank"
                rel="noopener noreferrer"
                className={` font-bold text-lg md:text-xl tracking-widest border border-gray-300 text-white p-3 hover:shadow-md rounded-lg w-auto text-center px-20 hover:text-custom-purp hover:bg-white
                  ${inView ? "animate-fade-in-left" : ""}`}
              >
                GitHub
              </a>
            </div>
            {/* <br></br>
            <h2
              ref={ref}
              className={`text-white font-bold text-left text-xl md:text-xl tracking-wider 
            ${inView ? "animate-fade-in-top" : ""}
            `}
            >
              Featured Works
            </h2> */}
          </div>
        </div>
        <div className="md:p-40 md:pb-0 md:pt-0">
          <div className="md:p-40 md:pb-0 md:pt-0">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>
        </div>
        <div className="md:p-40 md:pb-0 md:pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 self-center">
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <ProjectCard2 key={index} project={project} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
