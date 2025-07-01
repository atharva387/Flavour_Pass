"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Play, Smartphone, Eye, MapPin, Star } from "lucide-react"

export function VirtualToursPreview() {
  const virtualTours = [
    {
      id: 1,
      name: "Sula Vineyards 360° Experience",
      location: "Nashik, Maharashtra",
      duration: "15 minutes",
      views: "25K+",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      features: ["360° Views", "Interactive Hotspots", "Audio Guide", "AR Labels"],
      description: "Immersive virtual tour of India's most famous vineyard",
    },
    {
      id: 2,
      name: "Grover Zampa Cellar Tour",
      location: "Bangalore, Karnataka",
      duration: "12 minutes",
      views: "18K+",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
      features: ["Underground Cellars", "Wine Making Process", "Tasting Room", "Expert Commentary"],
      description: "Explore the underground cellars and wine-making facilities",
    },
    {
      id: 3,
      name: "Fratelli Harvest Experience",
      location: "Akluj, Maharashtra",
      duration: "20 minutes",
      views: "12K+",
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=300",
      features: ["Harvest Season", "Grape Processing", "Fermentation", "Seasonal Content"],
      description: "Experience the grape harvest season virtually",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-wine-charcoal to-wine-burgundy text-white">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="bg-wine-gold text-wine-burgundy mb-4 px-4 py-2">
            <Camera className="mr-2 h-4 w-4" />
            Virtual Reality Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Virtual Tours & AR Discovery</h2>
          <p className="text-xl text-wine-champagne max-w-3xl mx-auto leading-relaxed">
            Explore India's finest wineries from anywhere in the world with immersive 360° tours and augmented reality
            wine label scanning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* AR Scanner Demo */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Smartphone className="h-5 w-5 text-wine-gold" />
                AR Wine Label Scanner
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="aspect-video bg-wine-burgundy/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Camera className="h-16 w-16 text-wine-gold mx-auto mb-4" />
                  <p className="text-wine-champagne">Point your camera at any wine label</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Instant Wine Information:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    "Tasting Notes",
                    "Food Pairings",
                    "Vineyard Story",
                    "Reviews & Ratings",
                    "Purchase Options",
                    "Similar Wines",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-wine-gold rounded-full" />
                      <span className="text-wine-champagne">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full gold-gradient text-wine-burgundy">
                <Smartphone className="mr-2 h-4 w-4" />
                Try AR Scanner
              </Button>
            </CardContent>
          </Card>

          {/* Features List */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Immersive Wine Discovery</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Eye,
                    title: "360° Vineyard Views",
                    description: "Explore every corner of the vineyard with high-resolution panoramic views",
                  },
                  {
                    icon: Play,
                    title: "Interactive Hotspots",
                    description: "Click on interactive points to learn about wine-making processes",
                  },
                  {
                    icon: Smartphone,
                    title: "AR Label Recognition",
                    description: "Scan wine labels with your phone for instant information and reviews",
                  },
                  {
                    icon: MapPin,
                    title: "Virtual Route Planning",
                    description: "Plan your actual vineyard visits with virtual previews",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-wine-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-wine-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-wine-champagne text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Virtual Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {virtualTours.map((tour) => (
            <Card
              key={tour.id}
              className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all group"
            >
              <div className="relative">
                <div className="h-48 bg-wine-burgundy/30 rounded-t-lg flex items-center justify-center">
                  <div className="relative">
                    <Camera className="h-16 w-16 text-wine-gold" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-8 w-8 text-white bg-wine-burgundy/80 rounded-full p-1 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <Badge className="bg-wine-gold text-wine-burgundy text-xs">360°</Badge>
                  <Badge className="bg-black/50 text-white text-xs">{tour.duration}</Badge>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <Eye className="h-4 w-4 text-wine-gold" />
                  <span className="text-sm text-white">{tour.views} views</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{tour.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-wine-champagne">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {tour.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {tour.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-wine-champagne">{tour.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {tour.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-white/20 text-wine-champagne">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full gold-gradient text-wine-burgundy group-hover:shadow-gold transition-all">
                    <Play className="mr-2 h-4 w-4" />
                    Start Virtual Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-wine-gold text-wine-gold hover:bg-wine-gold hover:text-wine-burgundy bg-transparent px-8 py-3"
          >
            Explore All Virtual Tours
          </Button>
        </div>
      </div>
    </section>
  )
}
