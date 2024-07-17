import {Technology} from "@/types/project/technology";

export interface Project {
  title: string
  description: string
  imageSource?: string
  href: string
  technologies: Technology[]
}