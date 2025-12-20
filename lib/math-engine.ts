/**
 * Math Engine
 *
 * Core game logic for generating random math questions based on level configuration.
 * Handles question generation, answer validation, and result calculation.
 */

import type { LevelConfig, MathOperation } from "./game-config"

export interface MathQuestion {
  id: string
  operand1: number
  operand2: number
  operation: MathOperation
  correctAnswer: number
  displayText: string
}

export interface GameResult {
  question: MathQuestion
  userAnswer: number | null
  isCorrect: boolean
  timeSpent: number // in seconds
}

/**
 * Generate a random number with specified digit count
 */
function generateRandomNumber(minDigits: number, maxDigits: number): number {
  const digits = Math.floor(Math.random() * (maxDigits - minDigits + 1)) + minDigits
  const min = Math.pow(10, digits - 1)
  const max = Math.pow(10, digits) - 1
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Calculate the answer based on operation
 */
function calculateAnswer(operand1: number, operand2: number, operation: MathOperation): number {
  switch (operation) {
    case "+":
      return operand1 + operand2
    case "-":
      return operand1 - operand2
    case "×":
      return operand1 * operand2
    case "÷":
      // Ensure division results in whole numbers
      return Math.floor(operand1 / operand2)
    default:
      return 0
  }
}

/**
 * Generate a random math question based on level configuration
 */
export function generateQuestion(level: LevelConfig): MathQuestion {
  const operation = level.operations[Math.floor(Math.random() * level.operations.length)]
  let operand1 = generateRandomNumber(level.minDigits, level.maxDigits)
  let operand2 = generateRandomNumber(level.minDigits, level.maxDigits)

  // Special handling for subtraction to avoid negative results
  if (operation === "-" && operand2 > operand1) {
    ;[operand1, operand2] = [operand2, operand1]
  }

  // Special handling for division to ensure clean division
  if (operation === "÷") {
    operand1 = operand2 * Math.floor(Math.random() * 10 + 1)
  }

  const correctAnswer = calculateAnswer(operand1, operand2, operation)
  const displayText = `${operand1} ${operation} ${operand2}`

  return {
    id: `q-${Date.now()}-${Math.random()}`,
    operand1,
    operand2,
    operation,
    correctAnswer,
    displayText,
  }
}

/**
 * Validate user answer
 */
export function validateAnswer(question: MathQuestion, userAnswer: number | null): boolean {
  if (userAnswer === null) return false
  return userAnswer === question.correctAnswer
}

/**
 * Calculate game statistics
 */
export function calculateStats(results: GameResult[]) {
  const totalQuestions = results.length
  const correctAnswers = results.filter((r) => r.isCorrect).length
  const accuracy = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0
  const totalTime = results.reduce((sum, r) => sum + r.timeSpent, 0)
  const averageTime = totalQuestions > 0 ? totalTime / totalQuestions : 0

  return {
    totalQuestions,
    correctAnswers,
    incorrectAnswers: totalQuestions - correctAnswers,
    accuracy: Math.round(accuracy * 10) / 10,
    totalTime: Math.round(totalTime * 10) / 10,
    averageTime: Math.round(averageTime * 10) / 10,
  }
}
