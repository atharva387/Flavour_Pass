"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, Heart, Utensils, Clock, Star, Wine, Zap, TrendingUp } from "lucide-react"

export default function DiscoverPage() {
  const [selectedMood, setSelectedMood] = useState("")
  const [selectedCuisine, setSelectedCuisine] = useState("")
  const [selectedOccasion, setSelectedOccasion] = useState("")

  const moods = [
    { id: "romantic", label: "Romantic", icon: Heart, color: "bg-rose-100 text-rose-700" },
    { id: "celebration", label: "Celebration", icon: Sparkles, color: "bg-yellow-100 text-yellow-700" },
    { id: "relaxing", label: "Relaxing", icon: Clock, color: "bg-blue-100 text-blue-700" },
    { id: "dinner", label: "Dinner Party", icon: Utensils, color: "bg-green-100 text-green-700" },
  ]

  const cuisines = ["Indian", "Italian", "French", "Mediterranean", "Asian", "Continental"]
  const occasions = [
    "Date Night",
    "Anniversary",
    "Birthday",
    "Business Dinner",
    "Casual Evening",
    "Special Celebration",
  ]

  const recommendations = [
    {
      id: 1,
      name: "Sula Dindori Reserve Shiraz",
      vineyard: "Sula Vineyards",
      type: "Red Wine",
      rating: 4.8,
      price: 1250,
      image: "/placeholder.svg?height=300&width=200",
      match: 95,
      reason: "Perfect for romantic dinners with rich, bold flavors",
      pairing: "Grilled lamb, aged cheese",
    },
    {
      id: 2,
      name: "Grover Zampa La Réserve",
      vineyard: "Grover Zampa",
      type: "White Wine",
      rating: 4.6,
      price: 980,
      image: "/placeholder.svg?height=300&width=200",
      match: 88,
      reason: "Elegant and crisp, ideal for seafood pairings",
      pairing: "Seafood, light pasta",
    },
    {
      id: 3,
      name: "Fratelli Sangiovese",
      vineyard: "Fratelli Wines",
      type: "Red Wine",
      rating: 4.7,
      price: 1100,
      image: "/placeholder.svg?height=300&width=200",
      match: 92,
      reason: "Italian-style wine perfect for dinner parties",
      pairing: "Italian cuisine, pizza",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-wine-burgundy to-wine-charcoal text-white py-20">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-wine-gold text-wine-burgundy mb-4 px-4 py-2">
              <Zap className="mr-2 h-4 w-4" />
              AI-Powered Discovery
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Smart Wine Discovery</h1>
            <p className="text-xl text-wine-champagne mb-8">
              Let our AI sommelier understand your taste preferences and recommend the perfect wines for any occasion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gold-gradient text-wine-burgundy">
                <Sparkles className="mr-2 h-5 w-5" />
                Start Discovery
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                View Trending Wines
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16">
        {/* AI Discovery Tool */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-wine-burgundy mb-4">
              Personalized Wine Matching
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Answer a few questions and let our AI find wines that match your taste profile perfectly
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-wine">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-wine-burgundy">
                <Sparkles className="h-5 w-5" />
                AI Wine Discovery Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Mood Selection */}
              <div>
                <h3 className="font-semibold mb-4 text-wine-burgundy">What's your mood?</h3>
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
                <h3 className="font-semibold mb-4 text-wine-burgundy">What cuisine are you pairing with?</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {cuisines.map((cuisine) => (
                    <Button
                      key={cuisine}
                      variant={selectedCuisine === cuisine ? "default" : "outline"}
                      className={selectedCuisine === cuisine ? "wine-gradient text-white" : ""}
                      onClick={() => setSelectedCuisine(cuisine)}
                    >
                      {cuisine}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Occasion Selection */}
              <div>
                <h3 className="font-semibold mb-4 text-wine-burgundy">What's the occasion?</h3>
                <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an occasion" />
                  </SelectTrigger>
                  <SelectContent>
                    {occasions.map((occasion) => (
                      <SelectItem key={occasion} value={occasion}>
                        {occasion}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Get Recommendations Button */}
              <Button
                className="w-full wine-gradient text-white py-3 text-lg"
                disabled={!selectedMood || !selectedCuisine || !selectedOccasion}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Get AI Wine Recommendations
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations */}
        {selectedMood && selectedCuisine && selectedOccasion && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-wine-burgundy mb-4">Your Perfect Matches</h2>
              <p className="text-lg text-muted-foreground">
                Based on your preferences for {selectedMood} mood with {selectedCuisine} cuisine
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recommendations.map((wine) => (
                <Card key={wine.id} className="group hover:shadow-wine transition-all">
                  <div className="relative">
                    <div className="h-48 bg-wine-cream flex items-center justify-center">
                      <Wine className="h-16 w-16 text-wine-burgundy/30" />
                    </div>
                    <Badge className="absolute top-3 right-3 bg-wine-gold text-wine-burgundy">
                      {wine.match}% Match
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-wine-burgundy">{wine.name}</h3>
                        <p className="text-sm text-muted-foreground">{wine.vineyard}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{wine.rating}</span>
                          <Badge variant="outline" className="text-xs">
                            {wine.type}
                          </Badge>
                        </div>
                      </div>

                      <div className="text-lg font-bold text-wine-burgundy">₹{wine.price}</div>

                      <div className="space-y-2">
                        <p className="text-sm text-wine-burgundy font-medium">Why it's perfect:</p>
                        <p className="text-sm text-muted-foreground italic">"{wine.reason}"</p>
                        <p className="text-xs text-muted-foreground">
                          <strong>Pairs with:</strong> {wine.pairing}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Button className="flex-1 wine-gradient text-white">Add to Cart</Button>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Trending Discoveries */}
        <div>
          <div className="text-center mb-12">
            <Badge className="bg-wine-burgundy text-white mb-4">
              <TrendingUp className="mr-2 h-4 w-4" />
              Trending Now
            </Badge>
            <h2 className="text-3xl font-display font-bold text-wine-burgundy mb-4">Popular Discoveries</h2>
            <p className="text-lg text-muted-foreground">See what other wine lovers are discovering</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { trend: "Organic Wines", count: "2.3K discoveries", growth: "+45%" },
              { trend: "Rosé Collection", count: "1.8K discoveries", growth: "+32%" },
              { trend: "Vintage Reds", count: "3.1K discoveries", growth: "+28%" },
              { trend: "Sparkling Wines", count: "1.5K discoveries", growth: "+67%" },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-wine transition-all">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-wine-burgundy mb-2">{item.count}</div>
                  <div className="font-medium text-wine-burgundy mb-1">{item.trend}</div>
                  <Badge className="bg-green-100 text-green-700">{item.growth}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
