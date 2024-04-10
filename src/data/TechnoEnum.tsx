import { Techno } from "@/models/Techno"

export const TechnoEnum: Record<string, Techno> = {
  ANGULAR: {
    name: "Angular",
    color: "#dd0031",
    textColor: "#ffffff",
  },
  SPRING: {
    name: "Spring",
    color: "#6db33f",
    textColor: "#ffffff",
  },
  REACT: {
    name: "React",
    color: "#61dafb",
    textColor: "#000000",
  },
  NEXT_JS: {
    name: "NextJs",
    color: "#000000",
    textColor: "#ffffff",
  },
  SHADCN_UI: {
    name: "ShadcnUI",
    color: "#ffffff",
    textColor: "#000000",
  },
  DOCKER: {
    name: "Docker",
    color: "#0db7ed",
    textColor: "#ffffff",
  },
  PORTAINER: {
    name: "Portainer",
    color: "#0056b3",
    textColor: "#ffffff",
  },
  VERCEL: {
    name: "Vercel",
    color: "#000000",
    textColor: "#ffffff",
  },
  ANGULAR_MATERIAL: {
    name: "Angular Material",
    color: "#f48fb1",
    textColor: "#000000",
  },
  MYSQL: {
    name: "MySQL",
    color: "#00758f",
    textColor: "#ffffff",
  },
  RENDER: {
    name: "Render",
    color: "#f55e61",
    textColor: "#ffffff",
  },
  SWIFT: {
    name: "Swift",
    color: "#ffac45",
    textColor: "#000000",
  },
  SWIFT_UI: {
    name: "SwiftUI",
    color: "#4ac0f0",
    textColor: "#ffffff",
  },
  APPLE_STORE: {
    name: "Apple Store",
    color: "#000000",
    textColor: "#ffffff",
  },
  GITHUB_ACTIONS: {
    name: "GitHub Actions",
    color: "#2088ff",
    textColor: "#ffffff",
  },
  SONARQUBE: {
    name: "SonarQube",
    color: "#4e9bc3",
    textColor: "#ffffff",
  },
  DOCKER_HUB: {
    name: "Docker Hub",
    color: "#0db7ed",
    textColor: "#ffffff",
  },
  STOMP_JS: {
    name: "StompJS",
    color: "#ff6600",
    textColor: "#ffffff",
  },
  JUNIT: {
    name: "Junit",
    color: "#b52e31",
    textColor: "#ffffff",
  },
  JEST: {
    name: "Jest",
    color: "#99425b",
    textColor: "#ffffff",
  },
  CYPRESS: {
    name: "Cypress",
    color: "#17202c",
    textColor: "#ffffff",
  },
}

const TechnoData: Techno[] = [TechnoEnum.ANGULAR, TechnoEnum.SPRING]
