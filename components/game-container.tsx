"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import { getLevelById } from "@/lib/game-config"
import { GamePlay } from "@/components/game-play"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export function GameContainer() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const levelId = searchParams.get("level") || "level0"

  const level = getLevelById(levelId)

  // Redirect if invalid level
  useEffect(() => {
    if (!level) {
      router.push("/")
    }
  }, [level, router])

  if (!level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Invalid Level</h2>
          <Button onClick={() => router.push("/")}>
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Button>
        </div>
      </div>
    )
  }

  return <GamePlay level={level} />
}
