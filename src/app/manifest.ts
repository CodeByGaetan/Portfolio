import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CodeByGaetan",
    short_name: "CodeByGaetan",
    description:
      "Portfolio de Gaétan La Selve, développeur web et mobile à Lyon",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/pwa-images/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/pwa-images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
