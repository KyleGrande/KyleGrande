// import { user } from "../assets/userinfo";
import { user } from "../assets/userinfo";
import { useInView } from "react-intersection-observer";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../assets/userinfo";

function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: false, // The animation will trigger once
    threshold: 0.01, // The element is in view when 10% of it is visible
  });

  return (
    <>
      <div className="grid grid-col-2 gap-7 bg-custom-linear bg-custom-dark">
        <div
          ref={ref}
          className={` box-shadow-inner flex items-end justify-end p-10  md:p-40 md:pb-0  `}
        >
          <div className="flex flex-col gap-7">
            <h1
              ref={ref}
              className={`text-white font-bold text-right text-5xl md:text-7xl tracking-wider 
            ${inView ? "animate-fade-in-right" : ""}
            `}
            >
              Experience
            </h1>
            <h3
              ref={ref}
              className={`text-sm md:text-md lg:text-2xl text-right tracking-tight text-gray-500 ${
                inView ? "animate-fade-in-right" : ""
              }`}
            >
              Co-Founder & Contributor.<br></br>
            </h3>
            <div className="flex flex-col gap-5 md:flex-row justify-end items-end">
              <button
                onClick={() => window.open(user.resume, "_blank")}
                className={` border border-gray-300 text-white p-3 hover:shadow-md rounded-lg w-auto text-center px-20 hover:text-custom-purp hover:bg-white
            ${inView ? "animate-fade-in-right" : ""}`}
              >
                <a
                  href={user.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-lg md:text-xl tracking-widest "
                >
                  Resume
                </a>
              </button>
            </div>
            <br></br>
            {/* <h2
              ref={ref}
              className={`text-white font-bold text-right text-xl md:text-xl tracking-wider 
            ${inView ? "animate-fade-in-top" : ""}
            `}
            >
              Featured Works
            </h2> */}
          </div>
        </div>
        <div className="md:p-40 pb-0 pt-0">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Experience;
