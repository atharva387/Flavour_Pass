"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Car, Home, Utensils, Camera, ArrowRight, Route, CheckCircle, Zap } from "lucide-react"

export function BookingEnginePreview() {
  const [activeTab, setActiveTab] = useState("experiences")
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([])

  const experiences = [
    {
      id: "tasting",
      name: "Premium Wine Tasting",
      duration: "2 hours",
      price: 1500,
      description: "Guided tasting of 6 premium wines with expert sommelier",
      image: "/placeholder.svg?height=200&width=300",
      included: ["Wine tasting", "Cheese platter", "Sommelier guide"],
    },
    {
      id: "tour",
      name: "Vineyard Walking Tour",
      duration: "1.5 hours",
      price: 800,
      description: "Explore the vineyard and learn about wine-making process",
      image: "/placeholder.svg?height=200&width=300",
      included: ["Guided tour", "Wine samples", "Photo opportunities"],
    },
    {
      id: "dining",
      name: "Wine & Dine Experience",
      duration: "3 hours",
      price: 2500,
      description: "Multi-course meal paired with premium wines",
      image: "/placeholder.svg?height=200&width=300",
      included: ["4-course meal", "Wine pairings", "Chef interaction"],
    },
  ]

  const accommodations = [
    {
      id: "villa",
      name: "Vineyard Villa",
      type: "Luxury Villa",
      price: 8500,
      guests: 4,
      amenities: ["Private pool", "Wine cellar", "Butler service"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "cottage",
      name: "Wine Cottage",
      type: "Boutique Room",
      price: 4500,
      guests: 2,
      amenities: ["Garden view", "Wine fridge", "Breakfast included"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const transport = [
    {
      id: "chauffeur",
      name: "Private Chauffeur",
      type: "Luxury Car",
      price: 3500,
      description: "Full day chauffeur service with premium vehicle",
      features: ["Professional driver", "AC vehicle", "Flexible timing"],
    },
    {
      id: "shuttle",
      name: "Vineyard Shuttle",
      type: "Shared Transport",
      price: 800,
      description: "Shared shuttle service between wineries",
      features: ["Fixed schedule", "Multiple stops", "Guide included"],
    },
  ]

  const tabs = [
    { id: "experiences", label: "Experiences", icon: Utensils },
    { id: "stays", label: "Stays", icon: Home },
    { id: "transport", label: "Transport", icon: Car },
    { id: "itinerary", label: "Itinerary", icon: Calendar },
  ]

  return (
    <section className="py-20 bg-wine-charcoal text-white">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="bg-wine-gold text-wine-burgundy mb-4 px-4 py-2">
            <Route className="mr-2 h-4 w-4" />
            Smart Booking Engine
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Plan Your Perfect Wine Journey</h2>
          <p className="text-xl text-wine-champagne max-w-3xl mx-auto leading-relaxed">
            Our AI-powered booking engine creates personalized itineraries combining experiences, stays, and transport
            for the ultimate wine tourism adventure
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Custom Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-4 bg-wine-burgundy/20 backdrop-blur-sm rounded-lg p-1">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  className={`${
                    activeTab === tab.id ? "bg-wine-gold text-wine-burgundy" : "text-white hover:bg-white/10"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <tab.icon className="mr-2 h-4 w-4" />
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {activeTab === "experiences" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {experiences.map((experience) => (
                  <Card
                    key={experience.id}
                    className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all"
                  >
                    <div className="relative">
                      <div className="h-48 bg-wine-burgundy/30 rounded-t-lg flex items-center justify-center">
                        <Camera className="h-12 w-12 text-wine-gold" />
                      </div>
                      <Badge className="absolute top-2 right-2 bg-wine-gold text-wine-burgundy">
                        ₹{experience.price}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{experience.name}</h3>
                      <p className="text-wine-champagne text-sm mb-4">{experience.description}</p>

                      <div className="flex items-center gap-4 text-sm text-wine-champagne mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {experience.duration}
                        </span>
                      </div>

                      <div className="space-y-2 mb-4">
                        <p className="text-sm font-medium">Included:</p>
                        {experience.included.map((item, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-wine-champagne">
                            <CheckCircle className="h-3 w-3 text-wine-gold" />
                            {item}
                          </div>
                        ))}
                      </div>

                      <Button
                        className="w-full gold-gradient text-wine-burgundy"
                        onClick={() => {
                          if (selectedExperiences.includes(experience.id)) {
                            setSelectedExperiences((prev) => prev.filter((id) => id !== experience.id))
                          } else {
                            setSelectedExperiences((prev) => [...prev, experience.id])
                          }
                        }}
                      >
                        {selectedExperiences.includes(experience.id) ? "Remove" : "Add to Itinerary"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "stays" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {accommodations.map((stay) => (
                  <Card
                    key={stay.id}
                    className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all"
                  >
                    <div className="relative">
                      <div className="h-48 bg-wine-burgundy/30 rounded-t-lg flex items-center justify-center">
                        <Home className="h-12 w-12 text-wine-gold" />
                      </div>
                      <Badge className="absolute top-2 right-2 bg-wine-gold text-wine-burgundy">
                        ₹{stay.price}/night
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{stay.name}</h3>
                          <p className="text-wine-champagne text-sm">{stay.type}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-wine-gold" />
                          <span className="text-sm">{stay.guests} guests</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <p className="text-sm font-medium">Amenities:</p>
                        {stay.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-wine-champagne">
                            <CheckCircle className="h-3 w-3 text-wine-gold" />
                            {amenity}
                          </div>
                        ))}
                      </div>

                      <Button className="w-full gold-gradient text-wine-burgundy">Select Accommodation</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "transport" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {transport.map((option) => (
                  <Card
                    key={option.id}
                    className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-wine-gold/20 rounded-lg">
                            <Car className="h-6 w-6 text-wine-gold" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{option.name}</h3>
                            <p className="text-wine-champagne text-sm">{option.type}</p>
                          </div>
                        </div>
                        <Badge className="bg-wine-gold text-wine-burgundy">₹{option.price}</Badge>
                      </div>

                      <p className="text-wine-champagne text-sm mb-4">{option.description}</p>

                      <div className="space-y-2 mb-6">
                        <p className="text-sm font-medium">Features:</p>
                        {option.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-wine-champagne">
                            <CheckCircle className="h-3 w-3 text-wine-gold" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <Button className="w-full gold-gradient text-wine-burgundy">Book Transport</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "itinerary" && (
              <Card className="bg-white/5 border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-wine-gold" />
                    AI-Generated Itinerary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Day 1 */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-wine-gold text-wine-burgundy px-3 py-1">Day 1</Badge>
                      <h3 className="text-lg font-semibold">Nashik Wine Discovery</h3>
                    </div>

                    <div className="space-y-3 ml-6">
                      <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                        <Clock className="h-5 w-5 text-wine-gold mt-1" />
                        <div>
                          <p className="font-medium">10:00 AM - Sula Vineyards Tour</p>
                          <p className="text-sm text-wine-champagne">Vineyard walking tour and premium tasting</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-wine-champagne">
                            <span>Duration: 3 hours</span>
                            <span>₹2,300 per person</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                        <Utensils className="h-5 w-5 text-wine-gold mt-1" />
                        <div>
                          <p className="font-medium">2:00 PM - Wine & Lunch at York Winery</p>
                          <p className="text-sm text-wine-champagne">Gourmet lunch with wine pairings</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-wine-champagne">
                            <span>Duration: 2 hours</span>
                            <span>₹1,800 per person</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                        <Home className="h-5 w-5 text-wine-gold mt-1" />
                        <div>
                          <p className="font-medium">Check-in: Vineyard Villa</p>
                          <p className="text-sm text-wine-champagne">Luxury accommodation with private pool</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-wine-champagne">
                            <span>2 nights</span>
                            <span>₹8,500 per night</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="border-t border-white/10 pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">Trip Summary</h3>
                      <Badge className="bg-wine-burgundy text-white px-3 py-1">2 Days, 1 Night</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-white/5 rounded-lg">
                        <div className="text-2xl font-bold text-wine-gold">₹24,600</div>
                        <div className="text-sm text-wine-champagne">Total Cost (2 people)</div>
                      </div>
                      <div className="text-center p-4 bg-white/5 rounded-lg">
                        <div className="text-2xl font-bold text-wine-gold">6</div>
                        <div className="text-sm text-wine-champagne">Experiences</div>
                      </div>
                      <div className="text-center p-4 bg-white/5 rounded-lg">
                        <div className="text-2xl font-bold text-wine-gold">3</div>
                        <div className="text-sm text-wine-champagne">Wineries</div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        className="flex-1 border-wine-gold text-wine-gold hover:bg-wine-gold hover:text-wine-burgundy bg-transparent"
                      >
                        Customize Itinerary
                      </Button>
                      <Button className="flex-1 gold-gradient text-wine-burgundy">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Complete Package
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
