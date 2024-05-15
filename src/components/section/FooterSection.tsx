import Image from "next/image"

import DarkIcon from "../../../public/pwa-images/icon_dark.png"
import LightIcon from "../../../public/pwa-images/icon_light.png"

export default function FooterSection() {
  return (
    <section className="border-t py-4">
      <div className="flex justify-between items-center">
        <div>
          <Image
            src={LightIcon}
            alt="Logo"
            className="size-12 block dark:hidden"
            priority
          />
          <Image
            src={DarkIcon}
            alt="Logo"
            className="size-12 hidden dark:block"
            priority
          />
        </div>
        <p className="text-sm">Tous droits réservés</p>
      </div>
    </section>
  )
}
