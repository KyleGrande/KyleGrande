// import { user } from "../assets/userinfo";
import { user } from "../assets/userinfo";
import { useInView } from "react-intersection-observer";
import EducationCard from "./sub-components/EducationCard";
import { educations } from "../assets/userinfo";

function Education() {
  const [ref, inView] = useInView({
    triggerOnce: false, // The animation will trigger once
    threshold: 0.01, // The element is in view when 10% of it is visible
  });

  return (
    <>
      <div className="grid grid-col-2 gap-7 bg-custom-dark">
        <div
          ref={ref}
          className={` box-shadow-inner flex items-start justify-start p-10  md:p-40 md:pb-0   `}
        >
          <div className="flex flex-col gap-7">
            <h1
              ref={ref}
              className={`text-white font-bold text-left text-5xl md:text-7xl tracking-wider 
            ${inView ? "animate-fade-in-left" : ""}
            `}
            >
              Education
            </h1>
            <h3
              ref={ref}
              className={`text-sm md:text-md lg:text-2xl text-left tracking-tight text-gray-500 ${
                inView ? "animate-fade-in-left" : ""
              }`}
            >
              New Graduate.<br></br>
            </h3>
            <div className="flex flex-col gap-5 md:flex-row justify-start items-start">
              <a
                ref={ref}
                href={user.resume}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold text-lg md:text-xl tracking-widest border border-gray-300 text-white p-3 hover:shadow-md rounded-lg w-auto text-center px-20 hover:text-custom-purp hover:bg-white
                  ${inView ? "animate-fade-in-left" : ""}`}
              >
                Resume
              </a>
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
        <div className="md:p-40 md:pb-0 md:pt-0">
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Education;
