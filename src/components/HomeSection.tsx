import { FileDownIcon, Mail } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

export default function HomeSection() {
  return (
    <section
      id="home"
      className="grid items-center grid-cols-1 sm:grid-cols-[1fr,350px] pt-32"
    >
      <div>
        <h1 className="text-5xl font-bold mb-6">Bonjour, je suis Gaétan !</h1>
        <p className="text-lg mb-6">
          Je suis Gaétan La Selve et je suis ravi de vous accueillir sur mon
          site web 👨‍💻. Vous y découvrirez quelques informations à mon sujet, un
          aperçu de mes projets de développement, ainsi que les liens vers mes
          réseaux sociaux. Vous pouvez également me contacter grâce au
          formulaire en bas de la page.
          <br />
          Bonne navigation et à très bientôt ! 🏄‍♂️
        </p>
        <div className="flex gap-2">
          <Button variant="secondary" asChild>
            <a href="#contact">
              <Mail className="mr-2" />
              Me contacter
            </a>
          </Button>
          <Button variant="default" asChild>
            <a href="/cv-gls.pdf" download>
              <FileDownIcon className="mr-2" />
              Télécharger CV
            </a>
          </Button>
        </div>
      </div>
      <div className="flex justify-center mt-12 sm:mt-0">
        <Image
          src="/hero-image.png"
          alt="Hero Image"
          width={300}
          height={300}
        />
      </div>
    </section>
  )
}
