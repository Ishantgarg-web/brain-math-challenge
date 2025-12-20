import type { Metadata } from "next"
import { Brain } from "lucide-react"
import { LevelSelector } from "@/components/level-selector"
import { BenefitsSection } from "@/components/benefits-section"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Brain Math Challenge - Test Your Mental Math Speed",
  description:
    "Challenge yourself with our brain math speed test. Practice mental math, improve calculation speed, and train your brain with progressive difficulty levels.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Level Selector & CTA */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                <Brain className="h-4 w-4" />
                <span>Brain Training Platform</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Challenge Your Brain with <span className="text-accent">Speed Math</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Test your mental math skills with our progressive difficulty levels. From basic addition to complex
                multi-digit operations, train your brain to calculate faster and think sharper.
              </p>
            </div>

            <LevelSelector />
          </div>

          {/* Right Section - Illustration */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center p-8">
              <img
                src="/abstract-brain-with-mathematical-symbols-and-numbe.jpg"
                alt="Brain Math Challenge - Mental arithmetic training illustration showing a stylized brain with mathematical operations"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-card border-2 border-border rounded-xl p-4 shadow-lg">
              <div className="text-sm text-muted-foreground">Speed Test</div>
              <div className="text-2xl font-bold text-accent">2:00</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border-2 border-border rounded-xl p-4 shadow-lg">
              <div className="text-sm text-muted-foreground">Per Question</div>
              <div className="text-2xl font-bold text-primary">10s</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <BenefitsSection />

      {/* Contact/Feedback Section */}
      <ContactForm />

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Brain Math Challenge. All rights reserved.</p>
          <p className="mt-2">
            Train your brain with mental math challenges. Practice arithmetic and improve your calculation speed.
          </p>
        </div>
      </footer>
    </main>
  )
}
