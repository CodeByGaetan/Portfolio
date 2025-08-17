import AboutSection from "@/components/section/AboutSection"
import ContactSection from "@/components/section/ContactSection"
import FooterSection from "@/components/section/FooterSection"
import HomeSection from "@/components/section/HomeSection"
import NavigationBar from "@/components/section/NavigationBar"
import ProjectsSection from "@/components/section/ProjectsSection"

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <div className="container flex flex-col gap-20">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  )
}
