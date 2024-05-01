import { SkillEnum } from "@/data/SkillEnum"
import { TypeEnum } from "@/data/TypeEnum"
import { StaticImageData } from "next/image"
import { Techno } from "./Techno"

export interface Project {
  id: number
  name: string
  description: string
  type: TypeEnum
  technologies: Techno[]
  skills: SkillEnum[]
  gitHubUrl: string | null
  demoUrl: string | null
  img: StaticImageData
}
