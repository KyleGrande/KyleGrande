// ProjectCard.tsx
import { useInView } from "react-intersection-observer";
import { project } from "../../assets/userinfo";

interface ProjectCardProps {
  project: project;
}

function ProjectCard2({ project }: ProjectCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.01,
  });

  return (
    <div
      ref={ref}
      className={`h-full min-w-96 max-w-96 items-start justify-center 
          px-5 pb-4 mb-10 pt-2 rounded-xl hover:shadow-lg
          hover:shadow-custom-purp duration-500 ease-in-out`}
    >
      <h3
        className={`text-white font-bold  text-right self-end text-l md:text-xl tracking-wider ${
          inView ? "animate-fade-in-bottom" : ""
        }`}
      >
        {project.name}
      </h3>
      <h4
        className={` text-stone-400 text-right self-end text-l md:text-l tracking-wider ${
          inView ? "animate-fade-in-bottom" : ""
        }`}
      >
        {project.subtitle}
      </h4>
    </div>
  );
}

export default ProjectCard2;
