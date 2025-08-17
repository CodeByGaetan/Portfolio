import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SkillEnum } from "@/data/SkillEnum"
import { TechnoEnum } from "@/data/TechnoEnum"
import { TypeEnum } from "@/data/TypeEnum"
import Image from "next/image"
import { Badge } from "../ui/badge"

import About from "../../../public/illustrations/About.png"

export default function AboutSection() {
  let languages: string[] = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Swift",
    "Java",
    "Python",
    "SQL",
  ]

  let technologies: string[] = [
    TechnoEnum.ANGULAR.name,
    TechnoEnum.REACT.name,
    TechnoEnum.SPRING.name,
    TechnoEnum.NEXT_JS.name,
    TechnoEnum.DOCKER.name,
    TechnoEnum.PORTAINER.name,
    TechnoEnum.MYSQL.name,
    TechnoEnum.SWIFT_UI.name,
    TechnoEnum.GITHUB.name,
    TechnoEnum.UNREAL.name,
    "...",
  ]

  let skills = [
    TypeEnum.WEB,
    TypeEnum.MOBILE,
    SkillEnum.FRONT,
    SkillEnum.BACK,
    SkillEnum.TESTS,
    SkillEnum.CI_CD,
    SkillEnum.DEV_OPS,
    "...",
  ]

  const getTags = (items: string[]) => (
    <div className="mt-4 flex flex-wrap gap-1">
      {items.map((item) => (
        <Badge key={item} variant="outline">
          {item}
        </Badge>
      ))}
    </div>
  )

  return (
    <nav
      id="about"
      className="grid items-center grid-cols-1 md:grid-cols-[550px,1fr] pt-28"
    >
      <div className="flex justify-center md:justify-start items-center">
        <Image
          src={About}
          alt="About Image"
          placeholder="blur"
          className="w-[500px] rounded-lg border"
        />
      </div>
      <div className="mt-8 md:mt-0">
        <h1 className="text-5xl font-bold mb-6">À propos de moi</h1>
        <p className="text-base md:text-lg text-justify">
          Passionné par l&apos;informatique depuis mon plus jeune âge 👶,
          j&apos;ai toujours été attiré par la création technologique, que ce
          soit en montant mon propre ordinateur, en réalisant des projets
          Arduino ou en développant des feuilles de calculs. Ma curiosité
          insatiable me pousse constamment à apprendre de nouvelles technologies
          et à m&apos;investir dans divers projets. Doté d&apos;une formation
          d&apos;ingénieur 🎓, je suis naturellement porté vers la résolution de
          problèmes et la création d&apos;outils pratiques pour simplifier le
          quotidien. 🤖
          <br />
          Mon parcours inclut des expériences variées, telles que des
          automatisations Python, du développement de jeux vidéo sur Unreal
          Engine 🎮, du développement mobile sur iOS avec Swift et SwiftUI,
          ainsi que du développement web full-stack.
          <br />
          Mon objectif est de concevoir des outils pratiques, dotés d&apos;une
          interface moderne et intuitive, pour offrir une expérience utilisateur
          agréable et efficace. 🚀
        </p>
        <Tabs defaultValue="languages" className="mt-4 h-20">
          <TabsList>
            <TabsTrigger value="languages">Langages</TabsTrigger>
            <TabsTrigger value="technologies">Outils</TabsTrigger>
            <TabsTrigger value="skills">Compétences</TabsTrigger>
          </TabsList>
          <TabsContent value="languages">{getTags(languages)}</TabsContent>
          <TabsContent value="technologies">
            {getTags(technologies)}
          </TabsContent>
          <TabsContent value="skills">{getTags(skills)}</TabsContent>
        </Tabs>
      </div>
    </nav>
  )
}
