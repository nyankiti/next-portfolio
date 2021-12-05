import { IconType } from "react-icons";

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  android_url?: string;
  ios_url?: string;
  github_url?: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "react" | "laravel";
