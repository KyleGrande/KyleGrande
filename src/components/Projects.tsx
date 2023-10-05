// import { user } from "../assets/userinfo";
import { useInView } from "react-intersection-observer";
import img1 from "../assets/4.png";
function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: false, // The animation will trigger once
    threshold: 0.01, // The element is in view when 10% of it is visible
  });

  return (
    <>
      <div
        ref={ref}
        className={` box-shadow-inner flex items-start justify-start min-h-screen p-10  md:p-40 bg-custom-linear bg-gradient-to-b from-custom-purp from-25% via-custom-dark to-custom-dark `}
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
          {/* <h2 className="text-white text-xl md:text-3xl self-center tracking-wide">
            {user.title}
          </h2> */}
          <h3
            ref={ref}
            className={`text-sm md:text-md lg:text-2xl text-left tracking-tight text-gray-500 ${
              inView ? "animate-fade-in-left" : ""
            }`}
          >
            Cloud, Web, Mobile, & Data.<br></br> I've done quite a bit.
          </h3>
          <div className="flex flex-col gap-5 md:flex-row justify-start items-start">
            <button
              className={` border border-gray-300 text-white p-3 hover:shadow-md rounded-lg w-auto text-center px-20 hover:text-custom-purp hover:bg-white
            ${inView ? "animate-fade-in-left" : ""}`}
            >
              <a
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-lg md:text-xl tracking-widest "
              >
                GitHub
              </a>
            </button>
          </div>
          <br></br>
          <h2
            ref={ref}
            className={`text-white font-bold text-left text-xl md:text-xl tracking-wider 
            ${inView ? "animate-fade-in-top" : ""}
            `}
          >
            Featured Works
          </h2>
          <div>
            <h3
              ref={ref}
              className={`text-white font-bold text-left text-xl md:text-xl tracking-wider 
            ${inView ? "animate-fade-in-top" : ""}
            `}
            >
              GPT CoLab
            </h3>
            <img src={img1} alt="img1" />
            <p className="text-white">
              Thanks to the multi-modal and coding functionality, upon upload it
              decided the which tool would best assist the user.
              <br></br>
              Here it wrote the code to import the PDF reader, parse it, and
              read the text.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
