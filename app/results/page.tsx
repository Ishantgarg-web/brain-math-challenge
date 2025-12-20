import type { Metadata } from "next"
import { Suspense } from "react"
import { ResultsContainer } from "@/components/results-container"

export const metadata: Metadata = {
  title: "Results - Brain Math Challenge",
  description:
    "View your brain math challenge results. See your score, accuracy, and detailed breakdown of each question.",
  alternates: {
    canonical: "/results",
  },
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading results...</div>}>
      <ResultsContainer />
    </Suspense>
  )
}
