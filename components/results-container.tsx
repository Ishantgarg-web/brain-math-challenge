"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import type { GameResult } from "@/lib/math-engine"
import type { LevelConfig } from "@/lib/game-config"
import { calculateStats } from "@/lib/math-engine"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, RotateCcw, CheckCircle2, XCircle, Clock } from "lucide-react"

export function ResultsContainer() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [results, setResults] = useState<GameResult[]>([])
  const [level, setLevel] = useState<LevelConfig | null>(null)

  useEffect(() => {
    const resultsParam = searchParams.get("results")
    const levelParam = searchParams.get("level")

    if (resultsParam && levelParam) {
      try {
        const decodedResults = JSON.parse(decodeURIComponent(resultsParam))
        const decodedLevel = JSON.parse(decodeURIComponent(levelParam))
        setResults(decodedResults)
        setLevel(decodedLevel)
      } catch (error) {
        console.error("Failed to parse results:", error)
        router.push("/")
      }
    } else {
      router.push("/")
    }
  }, [searchParams, router])

  if (!results.length || !level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading results...</div>
      </div>
    )
  }

  const stats = calculateStats(results)

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Challenge Complete!</h1>
          <p className="text-lg text-muted-foreground">Here's how you performed on {level.name}</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">{stats.totalQuestions}</div>
            <div className="text-sm text-muted-foreground">Total Questions</div>
          </Card>
          <Card className="p-6 text-center bg-success/10">
            <div className="text-3xl font-bold text-success mb-2">{stats.correctAnswers}</div>
            <div className="text-sm text-muted-foreground">Correct</div>
          </Card>
          <Card className="p-6 text-center bg-destructive/10">
            <div className="text-3xl font-bold text-destructive mb-2">{stats.incorrectAnswers}</div>
            <div className="text-sm text-muted-foreground">Incorrect</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{stats.accuracy}%</div>
            <div className="text-sm text-muted-foreground">Accuracy</div>
          </Card>
        </div>

        {/* Detailed Results */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold">Question Breakdown</h2>
          <div className="space-y-3">
            {results.map((result, index) => (
              <Card
                key={result.question.id}
                className={`p-4 ${
                  result.isCorrect ? "bg-success/5 border-success/30" : "bg-destructive/5 border-destructive/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    {result.isCorrect ? (
                      <CheckCircle2 className="h-6 w-6 text-success" />
                    ) : (
                      <XCircle className="h-6 w-6 text-destructive" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="font-mono text-lg font-semibold">
                      {result.question.displayText} = {result.question.correctAnswer}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Your answer: {result.userAnswer ?? "No answer"}
                      {!result.isCorrect && result.userAnswer !== null && (
                        <span className="ml-2 text-destructive">(Incorrect)</span>
                      )}
                      {result.userAnswer === null && <span className="ml-2 text-destructive">(Timed out)</span>}
                    </div>
                  </div>

                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => router.push(`/challenge?level=${level.id}`)}>
            <RotateCcw className="mr-2 h-5 w-5" />
            Try Again
          </Button>
          <Button size="lg" variant="outline" onClick={() => router.push("/")}>
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  )
}
