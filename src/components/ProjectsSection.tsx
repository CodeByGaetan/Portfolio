"use client"

import { projects } from "@/data/ProjectList"
import { Project } from "@/models/Project"
import Image from "next/image"
import { useState } from "react"
import ProjectDetail from "./ProjectDetail"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

export default function ProjectsSection() {
  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const openProject = (project: Project) => {
    setSelectedProject(project)
    setOpen(true)
  }

  const closeProject = () => {
    setSelectedProject(null)
    setOpen(false)
  }

  return (
    <nav id="projects" className="flex flex-col items-center pt-24">
      <h1 className="text-5xl font-bold">Mes projets</h1>
      <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
        {projects.map((project: Project) => (
          <Card
            key={project.id}
            className="cursor-pointer group border-2 hover:border-primary"
            onClick={() => openProject(project)}
          >
            <CardHeader>
              <CardTitle className="text-center group-hover:text-primary">
                {project.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={`/projects/${project.name}.png`}
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
        ))}
      </div>
      <ProjectDetail
        project={selectedProject}
        open={open}
        onClose={closeProject}
      />
    </nav>
  )
}
