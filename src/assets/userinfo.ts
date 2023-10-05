const project3Gif = "/projects/project3/1.mov";
const project1Gif = "/projects/project1/1.MP4";
interface user {
  name?: string;
  title?: string;
  description?: string;
  resume?: string;
  linkedin?: string;
}
interface link {
  name: string;
  url: string;
}
export interface project {
  name: string;
  subtitle?: string;
  description: string;
  gif: string;
  images: string[];
  link: string;
  github: string;
  tags: string[];
}

export const user: user = {
  name: "Kyle Grande",
  title: "Software Engineer",
  description:
    "Software engineer based in New York City, with a passion for building products that make a difference.",
  resume: "https://kyle-grande-resume.s3.amazonaws.com/Kyle_Grande.pdf",
  linkedin: "https://www.linkedin.com/in/kyleggrande/",
};

export const links: link[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kyleggrande/",
  },
  {
    name: "Github",
    url: "https://github.com/kylegrande/",
  },

  {
    name: "Resume",
    url: "https://kyle-grande-resume.s3.amazonaws.com/Kyle_Grande.pdf",
  },
  // {
  //   name: "Email",
  //   url: "mailto:kyle.g.grande@gmail.com",
  // },
];

export const projects: project[] = [
  {
    name: "UFIT",
    subtitle: "AI assisted Fitness App",
    description: "AI assisted Fitness App",
    gif: project1Gif,
    images: [
      "https://kyle-grande-resume.s3.amazonaws.com/portfolio1.png",
      "https://kyle-grande-resume.s3.amazonaws.com/portfolio2.png",
      "https://kyle-grande-resume.s3.amazonaws.com/portfolio3.png",
    ],
    link: "https://kylegrande.com",
    github: "",
    tags: ["React Native", "TypeScript", "Express", "MongoDB", "AWS", "OpenAI"],
  },
  {
    name: "SentiStock",
    subtitle: "Serverless Stock Sentiment Analysis",
    description: "Serverless Stock Sentiment Analysis",
    gif: "https://kyle-grande-resume.s3.amazonaws.com/portfolio.gif",
    images: [
      "https://kyle-grande-resume.s3.amazonaws.com/portfolio1.png",
      "https://kyle-grande-resume.s3.amazonaws.com/portfolio2.png",
      "https://kyle-grande-resume.s3.amazonaws.com/portfolio3.png",
    ],
    link: "https://kylegrande.com",
    github: "",
    tags: ["React Native", "TypeScript", "Express", "MongoDB", "AWS", "OpenAI"],
  },
  {
    name: "GPTColab",
    subtitle: "Google Colab notebook for GPT-2 text generation",
    description: "Google Colab notebook for GPT-2 text generation",
    gif: project3Gif,
    // gif: "../assets/gptcolab.gif",
    images: [
      "https://kyle-grande-resume.s3.amazonaws.com/gptcolab1.png",
      "https://kyle-grande-resume.s3.amazonaws.com/gptcolab2.png",
      "https://kyle-grande-resume.s3.amazonaws.com/gptcolab3.png",
    ],
    link: "https://colab.research.google.com/drive/1bV4Xr0a0nW5Z2w0kY6l8jY7U4v4s5ZuM?usp=sharing",
    github: "",
    tags: ["Python", "PyTesseract", "OpenAI", "GPT-4", "Jupyter"],
  },
];
