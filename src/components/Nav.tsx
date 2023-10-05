import { links } from "../assets/userinfo";

function Nav() {
  return (
    <nav className="shadow-black  shadow-md min-h-max">
      <ul className="flex justify-between items-center py-4 px-6">
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
