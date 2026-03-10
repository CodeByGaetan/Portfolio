import { TypeEnum } from "@/data/TypeEnum"
import { StaticImageData } from "next/image"
import { Techno } from "./Techno"

export interface Project {
  name: string
  description: string
  type: TypeEnum
  technologies: Techno[]
  gitHubUrl: string | null
  demoUrl: string | null
  png: StaticImageData
  gif: StaticImageData
}
