"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import { useRouter } from "next/navigation"
import type { LevelConfig } from "@/lib/game-config"
import { GAME_CONFIG } from "@/lib/game-config"
import { generateQuestion, validateAnswer, type MathQuestion, type GameResult } from "@/lib/math-engine"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Clock, Home } from "lucide-react"

interface GamePlayProps {
  level: LevelConfig
}

export function GamePlay({ level }: GamePlayProps) {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState<MathQuestion | null>(null)
  const [userAnswer, setUserAnswer] = useState("")
  const [results, setResults] = useState<GameResult[]>([])
  const [globalTimeLeft, setGlobalTimeLeft] = useState(GAME_CONFIG.globalTimerSeconds)
  const [questionTimeLeft, setQuestionTimeLeft] = useState(GAME_CONFIG.questionTimerSeconds)
  const [questionStartTime, setQuestionStartTime] = useState(Date.now())
  const [isGameOver, setIsGameOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const questionTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Generate first question on mount
  useEffect(() => {
    const question = generateQuestion(level)
    setCurrentQuestion(question)
    setQuestionStartTime(Date.now())
  }, [level])

  // Global timer
  useEffect(() => {
    if (isGameOver) return

    const interval = setInterval(() => {
      setGlobalTimeLeft((prev) => {
        if (prev <= 1) {
          setIsGameOver(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isGameOver])

  const moveToNextQuestion = useCallback(() => {
    const nextQuestion = generateQuestion(level)
    setCurrentQuestion(nextQuestion)
    setUserAnswer("")
    setQuestionTimeLeft(GAME_CONFIG.questionTimerSeconds)
    setQuestionStartTime(Date.now())

    // Focus input for next question
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, 0)
  }, [level])

  const handleTimeout = useCallback(() => {
    if (!currentQuestion) return

    const timeSpent = (Date.now() - questionStartTime) / 1000
    const parsedAnswer = userAnswer.trim() === "" || userAnswer === "-" ? null : Number.parseInt(userAnswer, 10)

    const result: GameResult = {
      question: currentQuestion,
      userAnswer: parsedAnswer,
      isCorrect: false,
      timeSpent,
    }

    setResults((prev) => [...prev, result])
    moveToNextQuestion()
  }, [currentQuestion, questionStartTime, userAnswer, moveToNextQuestion])

  useEffect(() => {
    if (isGameOver) return

    // Clear any existing timer
    if (questionTimerRef.current) {
      clearInterval(questionTimerRef.current)
    }

    questionTimerRef.current = setInterval(() => {
      setQuestionTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeout()
          return GAME_CONFIG.questionTimerSeconds
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (questionTimerRef.current) {
        clearInterval(questionTimerRef.current)
      }
    }
  }, [isGameOver, currentQuestion, handleTimeout])

  // Auto-focus input
  useEffect(() => {
    if (!isGameOver && inputRef.current) {
      inputRef.current.focus()
    }
  }, [currentQuestion, isGameOver])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    // Allow negative numbers and digits only, or empty string
    if (value === "" || value === "-" || /^-?\d+$/.test(value)) {
      setUserAnswer(value)

      // Check if this is a valid complete answer (not just "-" or empty)
      if (value !== "" && value !== "-" && /^-?\d+$/.test(value)) {
        const parsedAnswer = Number.parseInt(value, 10)

        // Check if the answer is correct
        if (currentQuestion && validateAnswer(currentQuestion, parsedAnswer)) {
          // Clear the question timer immediately
          if (questionTimerRef.current) {
            clearInterval(questionTimerRef.current)
            questionTimerRef.current = null
          }

          const timeSpent = (Date.now() - questionStartTime) / 1000

          const result: GameResult = {
            question: currentQuestion,
            userAnswer: parsedAnswer,
            isCorrect: true,
            timeSpent,
          }

          setResults((prev) => [...prev, result])
          moveToNextQuestion()
        }
      }
    }
  }

  // Navigate to results when game is over
  useEffect(() => {
    if (isGameOver && results.length > 0) {
      const resultsData = encodeURIComponent(JSON.stringify(results))
      const levelData = encodeURIComponent(JSON.stringify(level))
      router.push(`/results?results=${resultsData}&level=${levelData}`)
    }
  }, [isGameOver, results, level, router])

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  const globalProgress = (globalTimeLeft / GAME_CONFIG.globalTimerSeconds) * 100
  const questionProgress = (questionTimeLeft / GAME_CONFIG.questionTimerSeconds) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => router.push("/")}>
            <Home className="mr-2 h-4 w-4" />
            Exit
          </Button>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="font-mono text-lg">
              {Math.floor(globalTimeLeft / 60)}:{String(globalTimeLeft % 60).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Global Timer Progress */}
        <Progress value={globalProgress} className="h-2" />

        {/* Main Game Card */}
        <Card className="p-8 lg:p-12">
          <div className="space-y-8">
            {/* Level Info */}
            <div className="text-center">
              <div className={`inline-block px-4 py-2 rounded-full ${level.color} text-white text-sm font-medium mb-4`}>
                {level.name}
              </div>
              <p className="text-sm text-muted-foreground">Question {results.length + 1}</p>
            </div>

            {/* Question Display */}
            <div className="text-center py-8">
              <h2 className="text-5xl lg:text-7xl font-bold font-mono mb-4">{currentQuestion.displayText}</h2>
              <div className="text-4xl lg:text-5xl font-bold text-muted-foreground">= ?</div>
            </div>

            {/* Answer Input */}
            <div className="space-y-4">
              <Input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                placeholder="Enter your answer"
                value={userAnswer}
                onChange={handleInputChange}
                className="text-center text-2xl h-16 font-mono"
                disabled={isGameOver}
              />

              {/* Question Timer */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Time remaining</span>
                  <span className="font-mono">{questionTimeLeft}s</span>
                </div>
                <Progress value={questionProgress} className="h-1" />
              </div>
            </div>
          </div>
        </Card>

        {/* Stats Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Answer as many questions as you can in {GAME_CONFIG.globalTimerSeconds} seconds!</p>
          <p className="mt-1">Type the correct answer to instantly move to the next question</p>
        </div>
      </div>
    </div>
  )
}
