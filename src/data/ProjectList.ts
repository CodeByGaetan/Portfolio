import { Project } from "@/models/Project"
import { SkillEnum } from "./SkillEnum"
import { TechnoEnum } from "./TechnoEnum"
import { TypeEnum } from "./TypeEnum"

import BaudyTrainingPng from "../../public/project-images/BaudyTraining.png"
import BobAppPng from "../../public/project-images/BobApp.png"
import ChatYCYWPng from "../../public/project-images/ChatYCYW.png"
import ChâTopPng from "../../public/project-images/ChâTop.png"
import CodeByGaetanPng from "../../public/project-images/CodeByGaetan.png"
import FitimePng from "../../public/project-images/Fitime.png"
import OlympicGamesPng from "../../public/project-images/OlympicGames.png"
import OrionMDDPng from "../../public/project-images/OrionMDD.png"
import RemoverPng from "../../public/project-images/Removerr.png"
import YogaAppPng from "../../public/project-images/YogaApp.png"

import BaudyTrainingGif from "../../public/project-images/BaudyTraining.gif"
import BobAppGif from "../../public/project-images/BobApp.gif"
import ChatYCYWGif from "../../public/project-images/ChatYCYW.gif"
import ChâTopGif from "../../public/project-images/ChâTop.gif"
import CodeByGaetanGif from "../../public/project-images/CodeByGaetan.gif"
import FitimeGif from "../../public/project-images/Fitime.gif"
import OlympicGamesGif from "../../public/project-images/OlympicGames.gif"
import OrionMDDGif from "../../public/project-images/OrionMDD.gif"
import RemoverGif from "../../public/project-images/Removerr.gif"
import YogaAppGif from "../../public/project-images/YogaApp.gif"

export const projectList: Project[] = [
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
    name: "CodeByGaetan",
    description:
      "Le site web sur lequel vous vous trouvez, consacré à la présentation de mon profil de développeur ainsi que de mes réalisations. Ce portail comprend également un formulaire de contact ainsi que des liens vers mes réseaux sociaux.",
    type: TypeEnum.WEB,
    technologies: [
      TechnoEnum.REACT,
      TechnoEnum.NEXT_JS,
      TechnoEnum.SHADCN_UI,
      TechnoEnum.VERCEL,
    ],
    skills: [SkillEnum.FRONT, SkillEnum.BACK, SkillEnum.DEV_OPS],
    gitHubUrl: "https://github.com/CodeByGaetan/Portfolio",
    demoUrl: "https://www.codebygaetan.fr/",
    png: CodeByGaetanPng,
    gif: CodeByGaetanGif,
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
    name: "BobApp",
    description:
      "Une interface ultra-minimaliste pour afficher des blagues aléatoires. Le code est Open Source et destiné à être soutenu par la communauté, avec la mise en place d'une démarche d'intégration et de déploiement continu.",
    type: TypeEnum.WEB,
    technologies: [
      TechnoEnum.GITHUB_ACTIONS,
      TechnoEnum.SONARQUBE,
      TechnoEnum.DOCKER,
      TechnoEnum.DOCKER_HUB,
    ],
    skills: [SkillEnum.CI_CD],
    gitHubUrl: "https://github.com/CodeByGaetan/BobApp",
    demoUrl: null,
    png: BobAppPng,
    gif: BobAppGif,
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
  {
    name: "YogaApp",
    description:
      "Une application de gestion de réservations de cours de sport, permettant aux utilisateurs d'effectuer des réservations  et aux administrateurs de gérer les cours. Elle intègre des tests unitaires, d'intégration et fonctionnels afin d'assurer sa fiabilité et sa robustesse.",
    type: TypeEnum.WEB,
    technologies: [
      TechnoEnum.ANGULAR,
      TechnoEnum.SPRING,
      TechnoEnum.JUNIT,
      TechnoEnum.JEST,
      TechnoEnum.CYPRESS,
    ],
    skills: [SkillEnum.TESTS],
    gitHubUrl: "https://github.com/CodeByGaetan/YogaApp",
    demoUrl: null,
    png: YogaAppPng,
    gif: YogaAppGif,
  },
  {
    name: "ChâTop",
    description:
      "Une application de gestion de réservations de logements de vacances, offrant aux utilisateurs la possibilité de réserver un logement ou de proposer leur propre logement à la location.",
    type: TypeEnum.WEB,
    technologies: [TechnoEnum.ANGULAR, TechnoEnum.SPRING],
    skills: [SkillEnum.BACK],
    gitHubUrl: "https://github.com/CodeByGaetan/ChaTop",
    demoUrl: null,
    png: ChâTopPng,
    gif: ChâTopGif,
  },
  {
    name: "OlympicGames",
    description:
      "Une interface présentant de manière synthétique les résultats des médailles remportées par pays lors des 3 derniers Jeux Olympiques. Cette page intègre des graphiques pour illustrer ces résultats de manière visuelle.",
    type: TypeEnum.WEB,
    technologies: [TechnoEnum.ANGULAR],
    skills: [SkillEnum.FRONT],
    gitHubUrl: "https://github.com/CodeByGaetan/OlympicGames",
    demoUrl: "https://codebygaetan.github.io/OlympicGames",
    png: OlympicGamesPng,
    gif: OlympicGamesGif,
  },
]
