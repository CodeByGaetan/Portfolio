import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Image from "next/image"
import { ModeToggle } from "./ui/ModeToggle"
import { Button } from "./ui/button"

export default function NavigationBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-background border-b py-2">
      <div className="container flex justify-between items-center">
        <a href="">
          <Image
            src="/logo_light.png"
            width={130}
            height={0}
            alt="Logo"
            className="block dark:hidden"
            priority
          />
          <Image
            src="/logo_dark.png"
            width={130}
            height={0}
            alt="Logo"
            className="hidden dark:block"
            priority
          />
        </a>
        <div className="hidden sm:flex gap-2 items-center">
          <Button variant="ghost" asChild>
            <a href="#about">À propos</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#projects">Projets</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#contact">Contact</a>
          </Button>
          <ModeToggle />
        </div>
        <div className="block sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetClose asChild>
                <div className="flex flex-col mt-8 gap-2">
                  <Button variant="outline" asChild>
                    <a href="#about">À propos</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#projects">Projets</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#contact">Contact</a>
                  </Button>
                </div>
              </SheetClose>
              <div className="flex justify-end mt-2">
                <ModeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
