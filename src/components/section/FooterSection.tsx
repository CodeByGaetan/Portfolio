import Image from "next/image"

export default function FooterSection() {
  return (
    <section className="border-t py-4">
      <div className="flex justify-between items-center">
        <div>
          <Image
            src="/pwa-images/icon_light.png"
            width={50}
            height={50}
            alt="Logo"
            className="block dark:hidden"
            priority
          />
          <Image
            src="/pwa-images/icon_dark.png"
            width={50}
            height={50}
            alt="Logo"
            className="hidden dark:block"
            priority
          />
        </div>
        <p className="text-sm">Tous droits réservés</p>
      </div>
    </section>
  )
}
