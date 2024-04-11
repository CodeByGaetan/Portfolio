"use client"
import { projectList } from "@/data/ProjectList"
import { Project } from "@/models/Project"
import { useState } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProjectCard from "../sub/ProjectCard"
import ProjectDetail from "../sub/ProjectDetail"

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
    <section id="projects" className="flex flex-col pt-28">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-5xl font-bold">Mes projets</h1>
          <div className="flex gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <CarouselContent>
          {projectList.map((project: Project) => (
            <CarouselItem
              key={project.id}
              className="basis-[90%] md:basis-[30%]"
            >
              <ProjectCard project={project} openProject={openProject} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <ProjectDetail
        project={selectedProject}
        open={open}
        onClose={closeProject}
      />
    </section>
  )
}
