import { Toaster } from "@/components/ui/toaster"
import type { Metadata, Viewport } from "next"
import { ThemeProvider } from "next-themes"
import { Inter } from "next/font/google"
import Head from "next/head"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CodeByGaetan",
  description: "Portfolio de Gaétan La Selve, développeur web et mobile à Lyon",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "hsl(0 0% 100%)" },
    {
      media: "(prefers-color-scheme: dark)",
      color: "hsl(224 71.4% 4.1%)",
    },
  ],
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <Head>
        <title>{metadata.title?.toString()}</title>
        <meta name="description" content={metadata.description ?? ""} />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
