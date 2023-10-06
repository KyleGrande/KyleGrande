const project3Gif = "/projects/project3/1.mov";
const project2Gif = "/projects/project2/1.png";
const project1Gif = "/projects/project1/1.MP4";
interface user {
  name?: string;
  title?: string;
  description?: string;
  resume?: string;
  linkedin?: string;
  github?: string;
}
interface link {
  name: string;
  url: string;
}
export interface project {
  name: string;
  featured: boolean;
  subtitle?: string;
  description: string;
  gif: string;
  images: string[];
  link: string;
  github: string;
  tags: string[];
}

export interface experience {
  name: string;
  title: string;
  location?: string;
  description: string;
  startDate: string;
  endDate: string;
  tags: string[];
}
export interface education {
  name: string;
  degree: string;
  focus: string;
  location?: string;
  description: string;
  startDate: string;
  endDate: string;
  tags: string[];
}

export const user: user = {
  name: "Kyle Grande",
  title: "Software Engineer",
  description:
    "Software engineer based in New York City, with a passion for building products that make a difference.",
  resume: "https://kyle-grande-resume.s3.amazonaws.com/Kyle_Grande.pdf",
  linkedin: "https://www.linkedin.com/in/kyleggrande/",
  github: "https://github.com/kylegrande/",
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
    featured: true,
    subtitle: "AI assisted Fitness App",
    description: "AI assisted Fitness App",
    gif: project1Gif,
    images: [],
    link: "https://kylegrande.com",
    github: "",
    tags: ["React Native", "TypeScript", "Express", "MongoDB", "AWS", "OpenAI"],
  },
  {
    name: "SentiStock",
    featured: true,
    subtitle: "Serverless Stock Sentiment Analysis",
    description: "Serverless Stock Sentiment Analysis",
    gif: project2Gif,
    images: [
      "/projects/project2/1.png",
      "/projects/project2/2.png",
      "/projects/project2/3.png",
    ],
    link: "https://kylegrande.com",
    github: "",
    tags: ["React Native", "TypeScript", "Express", "MongoDB", "AWS", "OpenAI"],
  },
  {
    name: "GPTColab",
    featured: true,
    subtitle: "Google Colab notebook for GPT-2 text generation",
    description: "Google Colab notebook for GPT-2 text generation",
    gif: project3Gif,
    images: ["/projects/project3/2.png", "/projects/project3/3.png"],
    link: "",
    github: "",
    tags: ["Python", "PyTesseract", "OpenAI", "GPT-4", "Jupyter"],
  },
  {
    name: "Instalist",
    featured: false,
    subtitle: "Cross-listing app for selling on multiple platforms",
    description: "Google Colab notebook for GPT-2 text generation",
    gif: project3Gif,
    images: ["/projects/project3/2.png", "/projects/project3/3.png"],
    link: "",
    github: "",
    tags: ["Python", "PyTesseract", "OpenAI", "GPT-4", "Jupyter"],
  },

  {
    name: "Anibuddy",
    featured: false,
    subtitle: "Native iOS app for tracking Anime",
    description: "Google Colab notebook for GPT-2 text generation",
    gif: project3Gif,
    images: ["/projects/project3/2.png", "/projects/project3/3.png"],
    link: "",
    github: "",
    tags: ["Python", "PyTesseract", "OpenAI", "GPT-4", "Jupyter"],
  },
  {
    name: "Generative Play",
    featured: false,
    subtitle: "Procedurally generated text-based game",
    description: "Google Colab notebook for GPT-2 text generation",
    gif: project3Gif,
    images: ["/projects/project3/2.png", "/projects/project3/3.png"],
    link: "",
    github: "",
    tags: ["Python", "PyTesseract", "OpenAI", "GPT-4", "Jupyter"],
  },
  {
    name: "Picksi Plugin",
    featured: false,
    subtitle: "ChatGPT Plugin for recommending enviormenally friendly products",
    description: "Google Colab notebook for GPT-2 text generation",
    gif: project3Gif,
    images: ["/projects/project3/2.png", "/projects/project3/3.png"],
    link: "",
    github: "",
    tags: ["Python", "PyTesseract", "OpenAI", "GPT-4", "Jupyter"],
  },
  {
    name: "Citi-Bike Analysis",
    featured: false,
    subtitle: "Data analysis of Citi-Bike data",
    description: "Google Colab notebook for GPT-2 text generation",
    gif: project3Gif,
    images: ["/projects/project3/2.png", "/projects/project3/3.png"],
    link: "",
    github: "",
    tags: ["Python", "PyTesseract", "OpenAI", "GPT-4", "Jupyter"],
  },
  {
    name: "EchoNote",
    featured: false,
    subtitle: "Real time speech-to-text note taking app",
    description: "Google Colab notebook for GPT-2 text generation",
    gif: project3Gif,
    images: ["/projects/project3/2.png", "/projects/project3/3.png"],
    link: "",
    github: "",
    tags: ["Python", "PyTesseract", "OpenAI", "GPT-4", "Jupyter"],
  },
];

export const experiences: experience[] = [
  {
    name: "Open Source Contributions",
    title: "FreeCodeCamp, Ansible, Crowdin",
    description: "",
    startDate: "10/2023",
    endDate: "Present",
    tags: ["React Native", "TypeScript", "Express", "MongoDB", "AWS", "OpenAI"],
  },
  {
    name: "KDone Design",
    title: "Software Engineer",
    description: "",
    startDate: "09/2023",
    endDate: "Present",
    tags: ["React Native", "TypeScript", "Express", "MongoDB", "AWS", "OpenAI"],
  },
  {
    name: "Thrift LLC",
    title: "Co-Founder",
    description: "",
    startDate: "07/2021",
    endDate: "01/2022",
    tags: ["React Native", "TypeScript", "Express", "MongoDB", "AWS", "OpenAI"],
  },
];

export const educations: education[] = [
  {
    name: "City University of New York, Hunter College",
    degree: "Bachelor of Art",
    focus: "Computer Science",
    description: "",
    startDate: "06/2020",
    endDate: "08/2023",
    tags: ["React Native", "TypeScript", "Express", "MongoDB", "AWS", "OpenAI"],
  },
];
