import { Project } from "@/models/Project"
import { SkillEnum } from "./SkillEnum"
import { TechnoEnum } from "./TechnoEnum"
import { TypeEnum } from "./TypeEnum"

export const projectList: Project[] = [
  {
    id: 1,
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
  },
  {
    id: 4,
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
    demoUrl: "https://apps.apple.com/fr/app/fitime/id6449876288",
  },
  {
    id: 5,
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
  },
  {
    id: 6,
    name: "ChatYCYW",
    description:
      "Le prototype d'une application de chat dédiée au service client de l'agence fictive de location de voitures Your Car Your Way. Il vise à demontrer la faisabilité de cette fonctionnalité dans une architecture Client-Serveur Orientée Service.",
    type: TypeEnum.WEB,
    technologies: [TechnoEnum.ANGULAR, TechnoEnum.SPRING, TechnoEnum.STOMP_JS],
    skills: [SkillEnum.FRONT, SkillEnum.BACK],
    gitHubUrl: "https://github.com/CodeByGaetan/ChatYCYW",
    demoUrl: null,
  },
  {
    id: 7,
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
  },
  {
    id: 8,
    name: "ChâTop",
    description:
      "Une application de gestion de réservations de logements de vacances, offrant aux utilisateurs la possibilité de réserver un logement ou de proposer leur propre logement à la location.",
    type: TypeEnum.WEB,
    technologies: [TechnoEnum.ANGULAR, TechnoEnum.SPRING],
    skills: [SkillEnum.BACK],
    gitHubUrl: "https://github.com/CodeByGaetan/ChaTop",
    demoUrl: null,
  },
  {
    id: 9,
    name: "OlympicGames",
    description:
      "Une interface présentant de manière synthétique les résultats des médailles remportées par pays lors des 3 derniers Jeux Olympiques. Cette page intègre des graphiques pour illustrer ces résultats de manière visuelle.",
    type: TypeEnum.WEB,
    technologies: [TechnoEnum.ANGULAR],
    skills: [SkillEnum.FRONT],
    gitHubUrl: "https://github.com/CodeByGaetan/OlympicGames",
    demoUrl: "https://codebygaetan.github.io/OlympicGames/",
  },
]
