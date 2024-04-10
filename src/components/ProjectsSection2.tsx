"use client"

import { projectList } from "@/data/ProjectList"
import { Project } from "@/models/Project"
import { useEffect, useState } from "react"
import ProjectDetail from "./ProjectDetail"

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProjectCard from "./ProjectCard"

export default function ProjectsSection2() {
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

  const carouselItems: Map<number, Project[]> = projectList.reduce(
    (acc, project, index) => {
      const carouselIndex = Math.floor(index / 3)
      let projects = acc.get(carouselIndex)
      if (!projects) {
        acc.set(carouselIndex, [project])
      } else {
        projects.push(project)
      }
      return acc
    },
    new Map<number, Project[]>()
  )

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section id="projects" className="flex flex-col items-center pt-24">
      <Carousel setApi={setApi}>
        <div className="mb-4 flex w-full justify-between items-center">
          <h1 className="text-5xl font-bold">Mes projets</h1>
          <div className="flex gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <CarouselContent>
          {Array.from(carouselItems).map(([index, projects]) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
                {projects.map((project: Project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    openProject={openProject}
                  />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <p className="mt-1 mb-4 text-center text-sm text-muted-foreground">{`Page ${current} sur ${count}`}</p>
      </Carousel>
      <ProjectDetail
        project={selectedProject}
        open={open}
        onClose={closeProject}
      />
    </section>
  )
}
