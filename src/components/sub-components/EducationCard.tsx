// ProjectCard.tsx
import { useInView } from "react-intersection-observer";
import { education } from "../../assets/userinfo";

interface EducationCardProps {
  education: education;
}

function EducationCard({ education }: EducationCardProps) {
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
      <div className="flex flex-row-reverse justify-between items-center w-full">
        <div className="flex flex-col justify-center">
          <h3
            className={`text-white font-bold text-right text-xl md:text-xl tracking-wider ${
              inView ? "animate-fade-in-top" : ""
            }`}
          >
            {education.name}
          </h3>
          <h4
            className={` text-stone-400 text-right text-l md:text-l tracking-wider ${
              inView ? "animate-fade-in-top" : ""
            }`}
          >
            {education.degree} in {education.focus}
          </h4>
        </div>
        <div>
          <h4
            className={` text-stone-400 text-right text-l md:text-l tracking-wider ${
              inView ? "animate-fade-in-top" : ""
            }`}
          >
            {education.startDate} -- {education.endDate}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
