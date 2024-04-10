import Image from "next/image"
export default function AboutSection() {
  return (
    <nav
      id="about"
      className="grid items-center grid-cols-1 md:grid-cols-[550px,1fr] pt-28"
    >
      <div className="flex justify-center md:justify-start items-center">
        <Image
          src="/about-image.png"
          alt="About Image"
          width={500}
          height={500}
          className="rounded-lg border"
        />
      </div>
      <div className="mt-8 md:mt-0">
        <h1 className="text-5xl font-bold mb-6">À propos de moi</h1>
        <p className="text-base md:text-lg text-justify">
          Passionné par l&apos;informatique depuis mon plus jeune âge 👶,
          j&apos;ai toujours été attiré par la création technologique, que ce
          soit en montant mon propre ordinateur, en explorant des projets sur
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
          ainsi que du développement web full-stack. J&apos;ai notamment
          travaillé avec Angular et Spring pour créer des applications fiables
          et robustes, adaptées à des projets à grande échelle. Parallèlement,
          j&apos;ai utilisé React et NextJS pour concevoir des sites web
          modernes et légers, adaptés à des projets de plus petite envergure.
          <br />
          Mon objectif est de concevoir des outils pratiques, dotés d&apos;une
          interface moderne et intuitive, pour offrir une expérience utilisateur
          agréable et efficace. 🚀
        </p>
      </div>
    </nav>
  )
}
