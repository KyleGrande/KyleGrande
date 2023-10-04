import { user } from "../assets/userinfo";

function Hero() {
  return (
    <>
      <div className="flex items-start justify-center min-h-screen pt-40">
        <div className="flex-col">
          <h1 className="text-white font-bold text-7xl">{user.name}</h1>
          <h2 className="text-white text-3xl">{user.title}</h2>
          <div flex-row>
            <button className="bg-white text-black p-5 hover:shadow-md hover:shadow-slate-600 rounded-lg px-28">
              <a
                href={user.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-xl"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* <h2>{user.title}</h2>
      <h2>{user.description}</h2> */}
    </>
  );
}

export default Hero;
