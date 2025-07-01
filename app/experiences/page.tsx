"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Clock, Users, Star, Wine, Search } from "lucide-react"

export default function ExperiencesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCity, setSelectedCity] = useState("All Cities")
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedDate, setSelectedDate] = useState("")

  const experiences = [
    {
      id: 1,
      title: "Premium Wine Tasting at Sula Vineyards",
      location: "Nashik, Maharashtra",
      type: "Wine Tasting",
      duration: "3 hours",
      price: 2500,
      originalPrice: 3000,
      rating: 4.8,
      reviews: 234,
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["6 premium wines", "Expert sommelier", "Cheese platter", "Vineyard tour"],
      description: "Discover the art of wine tasting with our expert sommelier in the heart of India's wine country.",
      maxGuests: 12,
      includes: ["Wine tasting", "Food pairing", "Vineyard tour", "Transportation"],
    },
    {
      id: 2,
      title: "Sunset Vineyard Dinner Experience",
      location: "Bangalore, Karnataka",
      type: "Wine Dining",
      duration: "4 hours",
      price: 4500,
      originalPrice: 5500,
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["5-course dinner", "Wine pairings", "Sunset views", "Live music"],
      description:
        "An unforgettable evening of fine dining paired with exquisite wines as the sun sets over the vineyard.",
      maxGuests: 8,
      includes: ["Multi-course dinner", "Wine pairings", "Live entertainment", "Photography"],
    },
    {
      id: 3,
      title: "Harvest Season Experience",
      location: "Pune, Maharashtra",
      type: "Seasonal Activity",
      duration: "6 hours",
      price: 3200,
      originalPrice: 4000,
      rating: 4.7,
      reviews: 89,
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["Grape picking", "Wine making", "Traditional lunch", "Certificate"],
      description: "Join the harvest season and experience the traditional grape picking and wine making process.",
      maxGuests: 15,
      includes: ["Grape picking", "Wine making demo", "Traditional meal", "Souvenir bottle"],
    },
    {
      id: 4,
      title: "Private Cellar Tour & Masterclass",
      location: "Nashik, Maharashtra",
      type: "Educational",
      duration: "2.5 hours",
      price: 5500,
      originalPrice: 6500,
      rating: 4.9,
      reviews: 67,
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["Private tour", "Master sommelier", "Rare wines", "Certificate"],
      description: "Exclusive access to private cellars with a master sommelier for an in-depth wine education.",
      maxGuests: 6,
      includes: ["Private tour", "Expert guidance", "Rare wine tasting", "Certificate"],
    },
    {
      id: 5,
      title: "Wine & Yoga Retreat",
      location: "Goa",
      type: "Wellness",
      duration: "5 hours",
      price: 3800,
      originalPrice: 4500,
      rating: 4.6,
      reviews: 123,
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["Morning yoga", "Wine meditation", "Healthy lunch", "Relaxation"],
      description: "Combine mindfulness with wine appreciation in this unique wellness experience.",
      maxGuests: 10,
      includes: ["Yoga session", "Wine meditation", "Healthy meal", "Wellness kit"],
    },
    {
      id: 6,
      title: "Couples Wine Romance Package",
      location: "Nashik, Maharashtra",
      type: "Romantic",
      duration: "4 hours",
      price: 6500,
      originalPrice: 8000,
      rating: 4.8,
      reviews: 198,
      image: "/placeholder.svg?height=250&width=400",
      highlights: ["Private tasting", "Romantic dinner", "Couple photos", "Gift basket"],
      description: "Perfect romantic experience for couples with private tastings and intimate dinner.",
      maxGuests: 2,
      includes: ["Private tasting", "Romantic dinner", "Photography", "Gift basket"],
    },
  ]

  const experienceTypes = [
    "Wine Tasting",
    "Wine Dining",
    "Vineyard Tours",
    "Educational",
    "Seasonal Activity",
    "Wellness",
    "Romantic",
    "Corporate Events",
  ]

  const cities = ["Nashik", "Bangalore", "Pune", "Goa", "Mumbai", "Delhi"]

  const filteredExperiences = experiences.filter((exp) => {
    const matchesSearch =
      exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCity = selectedCity === "All Cities" || exp.location.includes(selectedCity)
    const matchesType = selectedType === "All Types" || exp.type === selectedType

    return matchesSearch && matchesCity && matchesType
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-wine-burgundy text-white py-20">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-wine-gold text-wine-burgundy mb-4 px-4 py-2">
              <Calendar className="mr-2 h-4 w-4" />
              Premium Experiences
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Wine Experiences</h1>
            <p className="text-xl text-wine-champagne mb-8">
              Discover unforgettable wine experiences from tastings to romantic dinners across India's finest vineyards
            </p>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 -mt-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger>
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger>
                <SelectValue placeholder="Experience type" />
              </SelectTrigger>
              <SelectContent>
                {experienceTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
        </div>

        {/* Results */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-wine-burgundy">
              {filteredExperiences.length} Experiences Found
            </h2>
            <p className="text-muted-foreground">Curated wine experiences across India</p>
          </div>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((experience) => (
            <Card key={experience.id} className="group hover:shadow-wine transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-wine-cream flex items-center justify-center">
                  <Wine className="h-16 w-16 text-wine-burgundy/30" />
                </div>
                <Badge className="absolute top-3 left-3 bg-wine-burgundy text-white">{experience.type}</Badge>
                <div className="absolute top-3 right-3 bg-white/90 rounded px-2 py-1">
                  <span className="text-sm font-medium text-wine-burgundy">₹{experience.price}</span>
                </div>
                {experience.originalPrice > experience.price && (
                  <Badge className="absolute bottom-3 left-3 bg-green-600 text-white">
                    Save ₹{experience.originalPrice - experience.price}
                  </Badge>
                )}
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-wine-burgundy text-lg line-clamp-2 mb-2">{experience.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{experience.description}</p>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Max {experience.maxGuests} guests</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>
                        {experience.rating} ({experience.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-wine-burgundy">Highlights:</p>
                    <div className="flex flex-wrap gap-1">
                      {experience.highlights.slice(0, 3).map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                      {experience.highlights.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{experience.highlights.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-wine-burgundy">₹{experience.price}</span>
                      {experience.originalPrice > experience.price && (
                        <span className="text-sm text-muted-foreground line-through">₹{experience.originalPrice}</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                      <Button className="wine-gradient text-white" size="sm">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-wine-burgundy text-wine-burgundy hover:bg-wine-burgundy hover:text-white bg-transparent"
          >
            Load More Experiences
          </Button>
        </div>
      </div>
    </div>
  )
}
