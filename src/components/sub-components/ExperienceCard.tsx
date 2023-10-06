// ProjectCard.tsx
import { useInView } from "react-intersection-observer";
import { experience } from "../../assets/userinfo";

interface ExperienceCardProps {
  experience: experience;
}

function ExpereinceCard({ experience }: ExperienceCardProps) {
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
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col justify-center">
          <h3
            className={`text-white font-bold text-left text-xl md:text-xl tracking-wider ${
              inView ? "animate-fade-in-top" : ""
            }`}
          >
            {experience.name}
          </h3>
          <h4
            className={` text-stone-400 text-left text-l md:text-l tracking-wider ${
              inView ? "animate-fade-in-top" : ""
            }`}
          >
            {experience.title}
          </h4>
        </div>
        <div>
          <h4
            className={` text-stone-400 text-left text-l md:text-l tracking-wider ${
              inView ? "animate-fade-in-top" : ""
            }`}
          >
            {experience.startDate} -- {experience.endDate}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ExpereinceCard;
