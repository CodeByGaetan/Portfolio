import { Project } from "@/models/Project"
import { SkillEnum } from "./SkillEnum"
import { TechnoEnum } from "./TechnoEnum"
import { TypeEnum } from "./TypeEnum"

import BaudyTrainingGif from "../../public/project-images/BaudyTraining.gif"
import BaudyTrainingPng from "../../public/project-images/BaudyTraining.png"
import ChatYCYWGif from "../../public/project-images/ChatYCYW.gif"
import ChatYCYWPng from "../../public/project-images/ChatYCYW.png"
import EnglishProjectGif from "../../public/project-images/EnglishProject.gif"
import EnglishProjectPng from "../../public/project-images/EnglishProject.png"
import FitimeGif from "../../public/project-images/Fitime.gif"
import FitimePng from "../../public/project-images/Fitime.png"
import OrionMDDGif from "../../public/project-images/OrionMDD.gif"
import OrionMDDPng from "../../public/project-images/OrionMDD.png"
import RemoverGif from "../../public/project-images/Removerr.gif"
import RemoverPng from "../../public/project-images/Removerr.png"

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
    name: "English Project",
    description:
      "Une application web dédiée à l’apprentissage de l’anglais, alliant fiches de grammaire simplifiées, exercices interactifs et suivi personnalisé. Un back-office complet permet une gestion dynamique du contenu. L’accès premium est sécurisé par Clerk pour l’authentification et Stripe pour le paiement.",
    type: TypeEnum.WEB,
    technologies: [
      TechnoEnum.REACT,
      TechnoEnum.NEXT_JS,
      TechnoEnum.DAISYUI,
      TechnoEnum.PRISMA,
      TechnoEnum.POSTGRESQL,
      TechnoEnum.CLERK,
      TechnoEnum.STRIPE,
      TechnoEnum.VERCEL,
    ],
    skills: [SkillEnum.FRONT, SkillEnum.BACK, SkillEnum.DEV_OPS],
    gitHubUrl: null,
    demoUrl: null,
    png: EnglishProjectPng,
    gif: EnglishProjectGif,
  },
  {
    name: "Baudy Training",
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
    name: "Orion MDD",
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
    name: "Chat YCYW",
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
