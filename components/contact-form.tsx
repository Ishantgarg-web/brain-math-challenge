"use client"

import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Mail, MessageSquare, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    country: "",
    ageGroup: "",
    profession: "",
    comment: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formBody = new FormData()
      formBody.append("entry.2005620554", formData.name)
      formBody.append("entry.1045781291", formData.email)
      formBody.append("entry.1735992955", formData.rating)
      formBody.append("entry.1763347725", formData.country)
      formBody.append("entry.360167530", formData.ageGroup)
      formBody.append("entry.1149163930", formData.profession)
      formBody.append("entry.839337160", formData.comment)

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdxA6MlccHXTBSZDV6OB8Nmlo7a1fWqgY2hFEhmCm8mjQlCjw/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formBody,
        }
      )

      setSubmitted(true)

      toast({
        title: "Feedback Submitted 🎉",
        description: "Thank you for helping us improve Brain Math Challenge!",
      })
    } catch {
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageSquare className="h-4 w-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Contact & Feedback
          </h2>
          <p className="text-lg text-muted-foreground">
            Share your experience and help us improve the Brain Math Challenge.
          </p>
        </div>

        <Card className="p-6 lg:p-8">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                Thank you for your feedback!
              </h3>
              <p className="text-muted-foreground">
                We truly appreciate your time and suggestions 🙌
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label>Name</Label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              {/* Rating */}
              <div className="space-y-2">
                <Label>Rating (1–5)</Label>
                <Input
                  type="number"
                  min={1}
                  max={5}
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({ ...formData, rating: e.target.value })
                  }
                  required
                />
              </div>

              {/* Country */}
              <div className="space-y-2">
                <Label>Country</Label>
                <Input
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  required
                />
              </div>

              {/* Age Group */}
              <div className="space-y-2">
                <Label>Age Group</Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, ageGroup: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select age group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0–10">0–10</SelectItem>
                    <SelectItem value="11–15">11–15</SelectItem>
                    <SelectItem value="15–20">15–20</SelectItem>
                    <SelectItem value="20–30">20–30</SelectItem>
                    <SelectItem value="30–40">30–40</SelectItem>
                    <SelectItem value="40+">40+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Profession */}
              <div className="space-y-2">
                <Label>Profession</Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, profession: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select profession" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Student">Student</SelectItem>
                    <SelectItem value="Currently Working">
                      Currently Working
                    </SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Comment */}
              <div className="space-y-2">
                <Label>Comment</Label>
                <Textarea
                  rows={5}
                  value={formData.comment}
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                <Mail className="mr-2 h-5 w-5" />
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  )
}
