import type React from "react"
import type { Metadata } from "next"
import type { Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

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
  ],
  authors: [{ name: "Brain Math Challenge" }],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
