import type { Metadata } from "next"
import { Sora } from "next/font/google"
import "./globals.scss"

const soraSans = Sora({
  variable: "--font-sora",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Arthur Jenck",
  description:
    "Portfolio d'Arthur Jenck, développeur web front-end passionné spécialisé React sur Paris, expert en UX/UI et Webdesign.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon/icon-light.svg",
        href: "/favicon/icon-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon/icon-dark.svg",
        href: "/favicon/icon-dark.svg",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${soraSans.variable}`}>{children}</body>
    </html>
  )
}
