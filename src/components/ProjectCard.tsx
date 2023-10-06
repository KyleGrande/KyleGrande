// ProjectCard.tsx
import { useInView } from "react-intersection-observer";
import { project } from "../assets/userinfo";

interface ProjectCardProps {
  project: project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.01,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-start justify-center 
      px-5 pb-4 mb-10 pt-2 rounded-xl hover:shadow-lg
       hover:shadow-custom-purp duration-500 ease-in-out 
}`}
    >
      <h3
        className={`text-white font-bold text-left text-xl md:text-xl tracking-wider ${
          inView ? "animate-fade-in-top" : ""
        }`}
      >
        {project.name}
      </h3>
      <h4
        className={` text-stone-400 text-left text-l md:text-l tracking-wider ${
          inView ? "animate-fade-in-top" : ""
        }`}
      >
        {project.subtitle}
      </h4>
      {/* {project.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={project.name}
          className={`min-h-96 max-h-96 self-start rounded-lg min-w-full
        ${inView ? "animate-fade-in-bottom" : ""}`}
        />
      ))} */}
      <video
        src={project.gif}
        autoPlay
        loop
        muted
        controls
        className={`min-h-96 max-h-96 self-start rounded-lg min-w-full 
        ${inView ? "animate-fade-in-bottom" : ""}`}
      ></video>
    </div>
  );
}

export default ProjectCard;
