import type { Metadata } from "next"
import { Suspense } from "react"
import { GameContainer } from "@/components/game-container"

export const metadata: Metadata = {
  title: "Challenge - Brain Math Challenge",
  description:
    "Test your mental math skills with a timed challenge. Answer as many questions correctly as you can within 2 minutes.",
  alternates: {
    canonical: "/challenge",
  },
}

export default function ChallengePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <GameContainer />
    </Suspense>
  )
}
