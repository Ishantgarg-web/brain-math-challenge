import type React from "react"
import type { Metadata } from "next"
import type { Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Footer } from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brain Math Challenge - Test Your Mental Math Speed",
  description:
    "Challenge yourself with our brain math speed test. Practice mental math, improve calculation speed, and train your brain with progressive difficulty levels from single to multi-digit arithmetic.",
  keywords: [
    "brain math challenge",
    "mental math test",
    "speed math practice",
    "arithmetic practice",
    "math brain training",
    "mental calculation",
    "math speed test",
    "IQ practice",
    "brain challenge",
    "math challenge"
  ],
  authors: [{ name: "Brain Math Challenge" }],
  generator: "v0.app",
  icons: {
      icon: "/img_light.png",
      apple: "/img_light.png",
    },
  openGraph: {
    title: "Brain Math Challenge - Test Your Mental Math Speed",
    description:
      "Challenge yourself with our brain math speed test. Practice mental math and improve calculation speed.",
    type: "website",
    url: "https://brainmathchallenge.com",
    siteName: "Brain Math Challenge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brain Math Challenge - Test Your Mental Math Speed",
    description:
      "Challenge yourself with our brain math speed test. Practice mental math and improve calculation speed.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5a5fdb",
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased flex flex-col min-h-screen`}>
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}



