// databaseや他のbackend serverやapiを利用して動的にデータを取れるようにするとなおよろしい。
// 現在はこのdata.tsファイルに静的にデータを配置して取り込む

import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Skill } from "types/portfolio";

import { BsCircleFill } from "react-icons/bs";

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Type Script",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "PHP",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "HTML & CSS",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Go",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "30",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Laravel",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "firebase",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "contentful",
    level: "65",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "My Blog and Portfolio",
    description:
      "ブログとポートフォリオ(本プロジェクト)を Next.js, contentful, vercel を用いて開発しております",
    image_path: "/images/cat.jpg",
    deployed_url: "https://next-portfolio-nine-chi.vercel.app/",
    github_url: "https://github.com/nyankiti/next-portfolio",
    category: ["react"],
    key_techs: ["React", "Next.js", "Tailwind", "contentful", "typescript"],
  },
  {
    id: 2,
    name: "Gift 自習室 アプリ",
    image_path: "/images/gift-app.png",
    deployed_url: "",
    android_url:
      "https://play.google.com/store/apps/details?id=com.gift.studyroom",
    ios_url: "https://apps.apple.com/jp/app/gift自習室/id1587162918",
    category: ["react"],
    description: "奈良県王寺町にある「Gift自習室」専用アプリ",
    key_techs: ["React Native", "firebase", "Expo"],
  },

  {
    id: 3,
    name: "ケーキ工房 森のおくりもの ホームページ",
    image_path: "/images/morinookurimono.png",
    deployed_url: "https://www.cake-morioku.com/",
    category: ["react"],
    description:
      "奈良県大和高田市のケーキ屋さん 「ケーキ工房 森のおくりもの」 公式ホームページ。",
    key_techs: ["React", "Next.js", "contentful"],
  },
];
