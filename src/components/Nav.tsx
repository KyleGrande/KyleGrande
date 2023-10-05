import { links } from "../assets/userinfo";

function Nav() {
  return (
    <nav className=" shadow-custom-dark border-t-2 border-b border-black shadow-md md:min-h-max grid grid-cols-2">
      <div className=" justify-start items-center py-10 px-6 text-white font-bold text-sm md:text-5xl">
        {/* KYLE GRANDE */}
      </div>
      <ul className="flex justify-evenly items-center py-4 px-6 gap-4 text-sm md:text-lg tracking-wide font-light">
        {links.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
