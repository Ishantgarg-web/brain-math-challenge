"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { LEVELS } from "@/lib/game-config"
import { Play, Check } from "lucide-react"

export function LevelSelector() {
  const router = useRouter()
  const [selectedLevel, setSelectedLevel] = useState(LEVELS[0].id)

  const handleStartChallenge = () => {
    router.push(`/challenge?level=${selectedLevel}`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Select Your Level</h2>
        <div className="grid gap-3">
          {LEVELS.map((level) => (
            <Card
              key={level.id}
              className={`p-4 cursor-pointer transition-all border-2 ${
                selectedLevel === level.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
              }`}
              onClick={() => setSelectedLevel(level.id)}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-lg ${level.color} flex items-center justify-center text-white font-bold`}
                >
                  {level.id.slice(-1)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{level.name}</h3>
                  <p className="text-sm text-muted-foreground">{level.description}</p>
                </div>
                {selectedLevel === level.id && <Check className="h-5 w-5 text-primary" />}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Button onClick={handleStartChallenge} size="lg" className="w-full text-lg h-14">
        <Play className="mr-2 h-5 w-5" />
        Test Yourself
      </Button>
    </div>
  )
}
