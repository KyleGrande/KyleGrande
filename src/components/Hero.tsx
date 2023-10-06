import { user } from "../assets/userinfo";
import { useInView } from "react-intersection-observer";

function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: false, // The animation will trigger once
    threshold: 0.3, // The element is in view when 10% of it is visible
  });

  return (
    <>
      <div
        ref={ref}
        className={`bg-custom-purp box-shadow-inner flex items-center justify-center min-h-screen md:p-40 `}
      >
        <div className="flex flex-col gap-7">
          <h1
            ref={ref}
            className={`text-white font-bold text-center text-5xl md:text-5xl tracking-wider 
            ${inView ? "animate-fade-in-top" : ""}
            `}
          >
            {user.name} | {user.title}
          </h1>
          {/* <h2 className="text-white text-xl md:text-3xl self-center tracking-wide">
            {user.title}
          </h2> */}
          <h3
            ref={ref}
            className={`text-sm md:text-md lg:text-2xl text-center tracking-tight text-gray-500 ${
              inView ? "animate-fade-in-top" : ""
            }`}
          >
            {user.description}
          </h3>
          <div className="flex flex-col gap-5 md:flex-row justify-center items-center">
            <button
              onClick={() => window.open(user.resume, "_blank")}
              ref={ref}
              className={`bg-white text-black p-3 hover:shadow-md rounded-lg hover:bg-transparent hover:text-white border border-lg w-full md:w-auto text-center md:px-20 ${
                inView ? "animate-fade-in-left" : ""
              }`}
            >
              <a
                href={user.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-lg md:text-xl tracking-widest"
              >
                Resume
              </a>
            </button>
            <button
              onClick={() => window.open(user.github, "_blank")}
              ref={ref}
              className={`border border-gray-300 text-white p-3 hover:shadow-md rounded-lg w-full hover:bg-white hover:text-custom-purp md:w-auto text-center md:px-20  ${
                inView ? "animate-fade-in-right" : ""
              }`}
            >
              <a
                href={user.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-lg md:text-xl tracking-widest"
              >
                LinkedIn
              </a>
            </button>
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row gap-4 p-4">
          <div className="bg-blue-500 p-4 flex items-end justify-end">
            Item 1
          </div>
          <div className="bg-red-500 text-white p-4 flex">Item 2</div>
          <div className="bg-green-500 text-white p-4">Item 3</div>
        </div> */}
      </div>
      {/* <div className="grid grid-rows-3 gap-5 items-center">
        <div className="bg-blue-500 text-white p-4 flex items-center justify-center">
          Item 1
        </div>
        <div className="bg-red-500 text-white p-4">Item 2</div>
        <div className="bg-green-500 text-white p-4 self-center">Item 3</div>
      </div> */}

      {/* <h2>{user.title}</h2>
      <h2>{user.description}</h2> */}
    </>
  );
}

export default Hero;
