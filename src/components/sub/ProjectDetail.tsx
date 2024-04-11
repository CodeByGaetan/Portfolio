import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Project } from "@/models/Project"
import { ExternalLinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import SkillTag from "./SkillTag"
import TechnoTag from "./TechnoTag"

interface ProjectDetailProps {
  project: Project | null
  open: boolean
  onClose: () => void
}

export default function ProjectDetail({
  project,
  open,
  onClose,
}: ProjectDetailProps) {
  return (
    project && (
      <Dialog
        open={open}
        onOpenChange={(isOpen) => {
          if (isOpen) return
          onClose()
        }}
      >
        <DialogContent className="max-w-screen-lg max-h-full flex flex-col gap-4 text-sm overflow-y-auto">
          <DialogTitle className="text-center">{project.name}</DialogTitle>
          <Image
            src={`/project-images/${project.name}.gif`}
            alt={project.name}
            width={1500}
            height={1000}
            unoptimized
            className="border"
          />

          <p>{project.description}</p>

          <div className="flex flex-wrap gap-1">
            <p>Technologies : </p>
            {project.technologies.map((techno) => (
              <TechnoTag key={techno.name} techno={techno} />
            ))}
          </div>

          <div className="flex flex-wrap gap-1">
            <p>Compétences : </p>
            {project.skills.map((skill) => (
              <SkillTag key={skill} skill={skill} />
            ))}
          </div>

          <div className="flex justify-center gap-2">
            {project.gitHubUrl && (
              <Button variant="outline" asChild>
                <Link href={project.gitHubUrl}>
                  <ExternalLinkIcon className="mr-2" />
                  Voir le GitHub
                </Link>
              </Button>
            )}
            {project.demoUrl && (
              <Button variant="default" asChild>
                <Link href={project.demoUrl}>
                  <ExternalLinkIcon className="mr-2" />
                  Voir l&apos;application
                </Link>
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    )
  )
}
