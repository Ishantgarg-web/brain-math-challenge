import { Brain, Zap, Target, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"

const benefits = [
  {
    icon: Brain,
    title: "Boost Cognitive Function",
    description:
      "Regular mental math practice enhances memory, concentration, and overall brain health. Train your mind to process numbers faster and more accurately.",
  },
  {
    icon: Zap,
    title: "Improve Calculation Speed",
    description:
      "Develop rapid mental arithmetic skills that help in everyday situations, from shopping to business decisions. Speed and accuracy improve with consistent practice.",
  },
  {
    icon: Target,
    title: "Progressive Difficulty Levels",
    description:
      "Start with simple single-digit operations and advance to complex multi-digit calculations. Our adaptive system grows with your abilities.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description:
      "Monitor your improvement over time with detailed performance metrics. See your accuracy rates, average response times, and challenge completion rates.",
  },
]

export function BenefitsSection() {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24 bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Why Practice Mental Math?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Mental arithmetic training offers numerous cognitive benefits backed by research. Strengthen your brain
          through regular mathematical challenges.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <img
          src="/diverse-people-doing-mental-math-calculations-with.jpg"
          alt="People practicing mental math - Brain training and cognitive improvement through arithmetic exercises"
          className="mx-auto rounded-xl shadow-lg max-w-3xl w-full"
        />
      </div>
    </section>
  )
}
