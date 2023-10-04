interface user {
  name?: string;
  title?: string;
  description?: string;
  resume?: string;
}
interface link {
  name: string;
  url: string;
}
interface project {
  name: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags: string[];
}

export const user: user = {
  name: "Kyle Grande",
  title: "Software Engineer",
  description:
    "I'm a software engineer based in New York City, NY specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.",
  resume: "https://kyle-grande-resume.s3.amazonaws.com/Kyle_Grande.pdf",
};

export const links: link[] = [
  {
    name: "Github",
    url: "https://github.com/kylegrande/",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kyleggrande/",
  },
  {
    name: "Email",
    url: "",
  },
];
