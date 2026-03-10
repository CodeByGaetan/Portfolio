import { LinkedinIcon, Mail } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"

import Hero from "../../../public/illustrations/Hero.png"

export default function HomeSection() {
  return (
    <section
      id="home"
      className="grid items-center grid-cols-1 sm:grid-cols-[1fr,400px] pt-40"
    >
      <div>
        <h1 className="text-4xl font-bold mb-6">Bienvenue 👋</h1>
        <p className="text-lg mb-6">
          Je suis Gaétan La Selve et je suis ravi de vous accueillir sur mon
          site web. Vous y découvrirez quelques informations à mon sujet, un
          aperçu de mes projets de développement indépendant, ainsi que les liens vers mes
          réseaux sociaux. Vous pouvez également me contacter grâce au
          formulaire en bas de la page.
          <br />
          Bonne navigation et à très bientôt !
        </p>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" asChild>
            <a href="#contact">
              <Mail className="mr-2" />
              Prendre contact
            </a>
          </Button>
          <Button variant="default" asChild>
            {/* <a href="/docs/cv-gls.pdf" download>
              <FileDownIcon className="mr-2" />
              Télécharger mon CV
            </a> */}
            <a href="https://www.linkedin.com/in/laselvegaetan">
              <LinkedinIcon className="mr-2" />
              Expériences & compétences
            </a>
          </Button>
        </div>
      </div>
      <div className="flex mt-12 sm:mt-0 justify-center md:justify-end items-center">
        <Image src={Hero} alt="Hero Image" priority className="w-[300px]" />
      </div>
    </section>
  )
}
