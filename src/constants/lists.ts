import VercelLogo from "@/public/techstack/vercel.svg";
import NextJSLogo from "@/public/techstack/next.svg";
import ReactJSLogo from "@/public/techstack/reactjs-logo.svg";
import HTML5Logo from "@/public/techstack/html5-logo.svg";
import CSS3Logo from "@/public/techstack/css3-logo.svg";
import MantineLogo from "@/public/techstack/mantine-logo.svg";
import TypescriptLogo from "@/public/techstack/ts-logo.svg";
import TailwindLogo from "@/public/techstack/tailwindcss-logo.svg";
import GithubLogo from "@/public/techstack/github-logo.svg";

export interface ITech {
  name: string;
  logo: string;
  size?: number;
}

export const TECH_STACK: ITech[] = [
  { name: "HTML", logo: HTML5Logo, size: 100 },
  { name: "CSS", logo: CSS3Logo, size: 100 },
  { name: "React", logo: ReactJSLogo, size: 100 },
  { name: "NextJS", logo: NextJSLogo, size: 180 },
  { name: "Mantine", logo: MantineLogo, size: 180 },
  { name: "Typescript", logo: TypescriptLogo, size: 100 },
  { name: "Tailwind CSS", logo: TailwindLogo, size: 180 },
  { name: "Vercel", logo: VercelLogo, size: 180 },
  { name: "Vercel", logo: GithubLogo, size: 100 },
];
