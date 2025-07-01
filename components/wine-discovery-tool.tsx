"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Heart, Utensils, Clock } from "lucide-react"

export function WineDiscoveryTool() {
  const [selectedMood, setSelectedMood] = useState<string>("")
  const [selectedCuisine, setSelectedCuisine] = useState<string>("")

  const moods = [
    { id: "romantic", label: "Romantic", icon: Heart, color: "bg-rose-100 text-rose-700" },
    { id: "celebration", label: "Celebration", icon: Sparkles, color: "bg-yellow-100 text-yellow-700" },
    { id: "relaxing", label: "Relaxing", icon: Clock, color: "bg-blue-100 text-blue-700" },
    { id: "dinner", label: "Dinner Party", icon: Utensils, color: "bg-green-100 text-green-700" },
  ]

  const cuisines = ["Indian", "Italian", "French", "Mediterranean", "Asian", "Continental"]

  return (
    <section className="py-16 bg-wine-cream">
      <div className="container">
        <div className="text-center mb-12">
          <Badge className="bg-wine-gold text-wine-burgundy mb-4">AI-Powered Recommendations</Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-wine-burgundy mb-4">
            Find Your Perfect Wine Match
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI sommelier suggests the perfect wine based on your mood, cuisine preferences, and taste profile
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-wine-burgundy">
              <Sparkles className="h-5 w-5" />
              Wine Discovery Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Mood Selection */}
            <div>
              <h3 className="font-semibold mb-3">What's your mood?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {moods.map((mood) => (
                  <Button
                    key={mood.id}
                    variant={selectedMood === mood.id ? "default" : "outline"}
                    className={`h-auto p-4 flex flex-col items-center gap-2 ${
                      selectedMood === mood.id ? "wine-gradient text-white" : ""
                    }`}
                    onClick={() => setSelectedMood(mood.id)}
                  >
                    <mood.icon className="h-6 w-6" />
                    <span className="text-sm">{mood.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Cuisine Selection */}
            <div>
              <h3 className="font-semibold mb-3">What cuisine are you pairing with?</h3>
              <div className="flex flex-wrap gap-2">
                {cuisines.map((cuisine) => (
                  <Badge
                    key={cuisine}
                    variant={selectedCuisine === cuisine ? "default" : "outline"}
                    className={`cursor-pointer px-4 py-2 ${
                      selectedCuisine === cuisine ? "bg-wine-burgundy text-white" : ""
                    }`}
                    onClick={() => setSelectedCuisine(cuisine)}
                  >
                    {cuisine}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Get Recommendations Button */}
            <Button
              className="w-full wine-gradient text-white py-3 text-lg"
              disabled={!selectedMood || !selectedCuisine}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Get AI Wine Recommendations
            </Button>

            {/* Sample Recommendation */}
            {selectedMood && selectedCuisine && (
              <div className="mt-6 p-4 bg-wine-rose rounded-lg animate-fade-in">
                <h4 className="font-semibold text-wine-burgundy mb-2">Perfect Match Found!</h4>
                <p className="text-sm text-muted-foreground">
                  Based on your {selectedMood} mood and {selectedCuisine} cuisine preference, we recommend a{" "}
                  <strong>Cabernet Sauvignon from Sula Vineyards</strong> - perfect for creating memorable moments with
                  rich, bold flavors.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
