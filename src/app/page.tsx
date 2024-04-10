import AboutSection from "@/components/AboutSection"
import HomeSection from "@/components/HomeSection"
import NavigationBar from "@/components/NavigationBar"
import ProjectsSection2 from "@/components/ProjectsSection2"

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <div className="container flex flex-col gap-20">
        <HomeSection />
        <AboutSection />
        <ProjectsSection2 />
      </div>
    </main>
  )
}
