/**
 * Game Configuration
 *
 * Centralized configuration for all game levels, timers, and math operations.
 * Easily extensible by adding new levels or modifying existing ones.
 */

export type MathOperation = "+" | "-" | "×" | "÷"

export interface LevelConfig {
  id: string
  name: string
  description: string
  minDigits: number
  maxDigits: number
  operations: MathOperation[]
  color: string
}

// Timer configuration (in seconds)
export const GAME_CONFIG = {
  globalTimerSeconds: 120, // 2 minutes
  questionTimerSeconds: 10, // 10 seconds per question
} as const

// Level definitions - easily extensible
export const LEVELS: LevelConfig[] = [
  {
    id: "level0",
    name: "Level 0",
    description: "Upto Double-digit addition and subtraction - Perfect for beginners",
    minDigits: 1,
    maxDigits: 2,
    operations: ["+", "-"],
    color: "bg-emerald-500",
  },
  {
    id: "level1",
    name: "Level 1",
    description: "Upto Double-digit operations - Basic arithmetic practice",
    minDigits: 2,
    maxDigits: 2,
    operations: ["+", "-", "×"],
    color: "bg-blue-500",
  },
  {
    id: "level2",
    name: "Level 2",
    description: "Multi-digit addition and subtraction - Build your skills",
    minDigits: 2,
    maxDigits: 3,
    operations: ["+", "-"],
    color: "bg-indigo-500",
  },
  {
    id: "level3",
    name: "Level 3",
    description: "Multi-digit operations - Advanced challenge",
    minDigits: 2,
    maxDigits: 3,
    operations: ["+", "-", "×"],
    color: "bg-violet-500",
  },
  {
    id: "level4",
    name: "Level 4",
    description: "Master level - Ultimate brain challenge",
    minDigits: 2,
    maxDigits: 4,
    operations: ["+", "-", "×"],
    color: "bg-purple-500",
  },
]

// Get a level by ID
export function getLevelById(levelId: string): LevelConfig | undefined {
  return LEVELS.find((level) => level.id === levelId)
}
