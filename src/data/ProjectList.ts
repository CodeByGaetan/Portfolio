import { Project } from "@/models/Project"
import { SkillEnum } from "./SkillEnum"
import { TechnoEnum } from "./TechnoEnum"
import { TypeEnum } from "./TypeEnum"

import BaudyTrainingPng from "../../public/project-images/BaudyTraining.png"
import ChatYCYWPng from "../../public/project-images/ChatYCYW.png"
import FitimePng from "../../public/project-images/Fitime.png"
import OrionMDDPng from "../../public/project-images/OrionMDD.png"
import RemoverPng from "../../public/project-images/Removerr.png"

import BaudyTrainingGif from "../../public/project-images/BaudyTraining.gif"
import ChatYCYWGif from "../../public/project-images/ChatYCYW.gif"
import FitimeGif from "../../public/project-images/Fitime.gif"
import OrionMDDGif from "../../public/project-images/OrionMDD.gif"
import RemoverGif from "../../public/project-images/Removerr.gif"

export const projectList: Project[] = [
  {
    name: "Fitime",
    description:
      "Une application iOS pour rythmer et suivre ses séances de sport. Celle-ci permet de créer, gérer, lancer et suivre des exercices chronométrés, afin que l'utilisateur n'ait pas à se soucier du timing ou du suivi de ses entraînements.",
    type: TypeEnum.MOBILE,
    technologies: [
      TechnoEnum.SWIFT,
      TechnoEnum.SWIFT_UI,
      TechnoEnum.APPLE_STORE,
    ],
    skills: [SkillEnum.MOBILE_FULL],
    gitHubUrl: null,
    demoUrl: "https://fitime.codebygaetan.fr",
    png: FitimePng,
    gif: FitimeGif,
  },
  {
    name: "BaudyTraining",
    description:
      "Le site internet de Mathys Baudy, coach sportif et diététicien-nutritionniste à Lyon. Ce portail présente ses services, ses tarifs et ses coordonnées, et permet de prendre rendez-vous en ligne.",
    type: TypeEnum.WEB,
    technologies: [
      TechnoEnum.REACT,
      TechnoEnum.NEXT_JS,
      TechnoEnum.SHADCN_UI,
      TechnoEnum.VERCEL,
    ],
    skills: [SkillEnum.FRONT, SkillEnum.BACK, SkillEnum.DEV_OPS],
    gitHubUrl: "https://github.com/CodeByGaetan/BaudyTraining",
    demoUrl: "https://www.baudytraining.fr",
    png: BaudyTrainingPng,
    gif: BaudyTrainingGif,
  },
  {
    name: "Removerr",
    description:
      "Une application web dédiée à la suppression de films et de séries au sein d'un environnement Plex. Cette plateforme simplifie le processus de suppression en communiquant directement avec les applications Radarr, Sonarr et Overseerr.",
    type: TypeEnum.WEB,
    technologies: [
      TechnoEnum.REACT,
      TechnoEnum.NEXT_JS,
      TechnoEnum.SHADCN_UI,
      TechnoEnum.DOCKER,
      TechnoEnum.PORTAINER,
    ],
    skills: [
      SkillEnum.FRONT,
      SkillEnum.BACK,
      SkillEnum.CI_CD,
      SkillEnum.DEV_OPS,
    ],
    gitHubUrl: "https://github.com/CodeByGaetan/Removerr",
    demoUrl: null,
    png: RemoverPng,
    gif: RemoverGif,
  },
  {
    name: "OrionMDD",
    description:
      "Une plateforme de partage d'articles entre développeurs. Cette application permet de s'abonner aux sujets qui nous intéressent, puis de créer, consulter ou commenter des articles en relation avec l'informatique.",
    type: TypeEnum.WEB,
    technologies: [
      TechnoEnum.ANGULAR,
      TechnoEnum.ANGULAR_MATERIAL,
      TechnoEnum.SPRING,
      TechnoEnum.MYSQL,
      TechnoEnum.DOCKER,
      TechnoEnum.RENDER,
    ],
    skills: [SkillEnum.FRONT, SkillEnum.BACK, SkillEnum.DEV_OPS],
    gitHubUrl: "https://github.com/CodeByGaetan/OrionMDD",
    demoUrl: "https://mdd-render.onrender.com/",
    png: OrionMDDPng,
    gif: OrionMDDGif,
  },
  {
    name: "ChatYCYW",
    description:
      "Le prototype d'une application de chat dédiée au service client de l'agence fictive de location de voitures Your Car Your Way. Il vise à demontrer la faisabilité de cette fonctionnalité dans une architecture Client-Serveur Orientée Service.",
    type: TypeEnum.WEB,
    technologies: [TechnoEnum.ANGULAR, TechnoEnum.SPRING, TechnoEnum.STOMP_JS],
    skills: [SkillEnum.FRONT, SkillEnum.BACK],
    gitHubUrl: "https://github.com/CodeByGaetan/ChatYCYW",
    demoUrl: null,
    png: ChatYCYWPng,
    gif: ChatYCYWGif,
  },
]
