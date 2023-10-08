import { user } from "../assets/userinfo";

function Footer() {
  return (
    <footer className="bg-black">
      <div className="flex justify-between items-center py-4 px-6 min-h-max">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-xl font-bold">Contact</h1>
          <div className="flex justify-center items-center">
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="linkedin"
                className="h-8 w-8"
              />
            </a>
            <a href={user.github} target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/color/48/000000/github--v1.png"
                alt="github"
                className="h-8 w-8"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
