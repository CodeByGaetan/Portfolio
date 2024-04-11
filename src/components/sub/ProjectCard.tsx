import { Project } from "@/models/Project"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

interface ProjectCardProps {
  project: Project
  openProject: (project: Project) => void
}

export default function ProjectCard({
  project,
  openProject,
}: ProjectCardProps) {
  return (
    <Card
      className="cursor-pointer group border-2 hover:border-primary h-full"
      onClick={() => openProject(project)}
    >
      <CardHeader>
        <CardTitle className="text-center group-hover:text-primary">
          {project.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={`/project-images/${project.name}.png`}
          alt={project.name}
          width={1500}
          height={1000}
          className="border"
        />
      </CardContent>
      <CardFooter>
        <CardDescription>{project.description}</CardDescription>
      </CardFooter>
    </Card>
  )
}
