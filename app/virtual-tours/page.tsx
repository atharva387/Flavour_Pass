"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Play, Smartphone, Eye, MapPin, Star, Clock, VolumeX, Volume2 } from "lucide-react"

export default function VirtualToursPage() {
  const [selectedTour, setSelectedTour] = useState<any>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const virtualTours = [
    {
      id: 1,
      name: "Sula Vineyards 360° Experience",
      location: "Nashik, Maharashtra",
      duration: "15 minutes",
      views: "25K+",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
      features: ["360° Views", "Interactive Hotspots", "Audio Guide", "AR Labels"],
      description: "Immersive virtual tour of India's most famous vineyard with interactive wine education",
      highlights: ["Vineyard walkthrough", "Cellar exploration", "Tasting room tour", "Wine making process"],
      languages: ["English", "Hindi", "Marathi"],
      type: "Premium",
    },
    {
      id: 2,
      name: "Grover Zampa Cellar Tour",
      location: "Bangalore, Karnataka",
      duration: "12 minutes",
      views: "18K+",
      rating: 4.7,
      image: "/placeholder.svg?height=300&width=400",
      features: ["Underground Cellars", "Wine Making Process", "Tasting Room", "Expert Commentary"],
      description: "Explore the underground cellars and wine-making facilities with expert commentary",
      highlights: ["Underground cellars", "Barrel aging", "Bottling process", "Quality control"],
      languages: ["English", "Hindi", "Kannada"],
      type: "Educational",
    },
    {
      id: 3,
      name: "Fratelli Harvest Experience",
      location: "Akluj, Maharashtra",
      duration: "20 minutes",
      views: "12K+",
      rating: 4.6,
      image: "/placeholder.svg?height=300&width=400",
      features: ["Harvest Season", "Grape Processing", "Fermentation", "Seasonal Content"],
      description: "Experience the grape harvest season virtually with seasonal content updates",
      highlights: ["Grape picking", "Crushing process", "Fermentation tanks", "Italian techniques"],
      languages: ["English", "Hindi", "Italian"],
      type: "Seasonal",
    },
    {
      id: 4,
      name: "York Winery Boutique Experience",
      location: "Nashik, Maharashtra",
      duration: "10 minutes",
      views: "8K+",
      rating: 4.5,
      image: "/placeholder.svg?height=300&width=400",
      features: ["Boutique Setting", "Personalized Tour", "Wine Stories", "Intimate Experience"],
      description: "Intimate virtual experience of a boutique winery with personalized storytelling",
      highlights: ["Boutique atmosphere", "Wine stories", "Personal touch", "Exclusive access"],
      languages: ["English", "Hindi"],
      type: "Boutique",
    },
    {
      id: 5,
      name: "Chandon Sparkling Wine Journey",
      location: "Nashik, Maharashtra",
      duration: "18 minutes",
      views: "15K+",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
      features: ["Sparkling Process", "French Techniques", "Riddling", "Disgorgement"],
      description: "Discover the art of sparkling wine making with traditional French techniques",
      highlights: ["Méthode Champenoise", "Riddling process", "Disgorgement", "French heritage"],
      languages: ["English", "Hindi", "French"],
      type: "Luxury",
    },
    {
      id: 6,
      name: "Four Seasons Ultra Premium Tour",
      location: "Pune, Maharashtra",
      duration: "25 minutes",
      views: "5K+",
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=400",
      features: ["Ultra Premium", "Limited Access", "Collector's Wines", "Exclusive Content"],
      description: "Exclusive virtual access to ultra-premium facilities and collector's wine collection",
      highlights: ["Collector's cellar", "Premium facilities", "Exclusive wines", "Limited access"],
      languages: ["English"],
      type: "Exclusive",
    },
  ]

  const arFeatures = [
    {
      title: "Wine Label Scanner",
      description: "Point your camera at any wine label for instant information",
      icon: Smartphone,
    },
    {
      title: "Virtual Sommelier",
      description: "Get expert wine recommendations through AR overlay",
      icon: Eye,
    },
    {
      title: "Interactive Hotspots",
      description: "Tap on objects to learn more about wine making process",
      icon: Camera,
    },
    {
      title: "3D Wine Cellar",
      description: "Explore wine cellars in immersive 3D environment",
      icon: Play,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-wine-charcoal to-wine-burgundy text-white py-20">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-wine-gold text-wine-burgundy mb-4 px-4 py-2">
              <Camera className="mr-2 h-4 w-4" />
              Virtual Reality Experience
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Virtual Tours & AR Discovery</h1>
            <p className="text-xl text-wine-champagne mb-8">
              Explore India's finest wineries from anywhere in the world with immersive 360° tours and augmented reality
              wine discovery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gold-gradient text-wine-burgundy">
                <Play className="mr-2 h-5 w-5" />
                Start Virtual Tour
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <Smartphone className="mr-2 h-5 w-5" />
                Try AR Scanner
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16">
        {/* AR Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-wine-burgundy mb-4">
              Augmented Reality Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience wine discovery like never before with cutting-edge AR technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {arFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-wine transition-all group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-wine-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-wine-burgundy/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-wine-burgundy" />
                  </div>
                  <h3 className="font-semibold text-wine-burgundy mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Virtual Tours Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-wine-burgundy mb-4">360° Virtual Tours</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Immerse yourself in India's premier wineries with high-quality virtual experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {virtualTours.map((tour) => (
              <Card
                key={tour.id}
                className="group hover:shadow-wine transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedTour(tour)}
              >
                <div className="relative">
                  <div className="h-48 bg-wine-cream flex items-center justify-center">
                    <div className="relative">
                      <Camera className="h-16 w-16 text-wine-burgundy/30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="h-8 w-8 text-white bg-wine-burgundy/80 rounded-full p-1 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge className="bg-wine-gold text-wine-burgundy text-xs">360°</Badge>
                    <Badge
                      className={`text-xs ${
                        tour.type === "Premium"
                          ? "bg-purple-100 text-purple-700"
                          : tour.type === "Luxury"
                            ? "bg-yellow-100 text-yellow-700"
                            : tour.type === "Exclusive"
                              ? "bg-red-100 text-red-700"
                              : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {tour.type}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-black/50 text-white text-xs">{tour.duration}</Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <Eye className="h-4 w-4 text-white" />
                    <span className="text-sm text-white">{tour.views} views</span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-white">{tour.rating}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-wine-burgundy mb-1">{tour.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{tour.location}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">{tour.description}</p>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-wine-burgundy">Tour Highlights:</p>
                      <div className="flex flex-wrap gap-1">
                        {tour.highlights.slice(0, 3).map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {tour.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-wine-burgundy/20">
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
        </div>

        {/* AR Demo Section */}
        <div className="bg-wine-cream rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-wine-burgundy mb-4">Try AR Wine Scanner</h3>
              <p className="text-muted-foreground mb-6">
                Point your camera at any wine label to get instant information about the wine, including tasting notes,
                food pairings, reviews, and purchase options.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Instant wine information",
                  "Tasting notes and reviews",
                  "Food pairing suggestions",
                  "Price comparison",
                  "Similar wine recommendations",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-wine-gold rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="wine-gradient text-white">
                <Smartphone className="mr-2 h-4 w-4" />
                Launch AR Scanner
              </Button>
            </div>

            <Card className="bg-white/50 border-wine-burgundy/20">
              <CardContent className="p-6">
                <div className="aspect-video bg-wine-burgundy/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Camera className="h-16 w-16 text-wine-burgundy/50 mx-auto mb-2" />
                    <p className="text-wine-burgundy/70">AR Scanner Demo</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Point your camera at a wine label to see the magic happen
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Virtual Tour Modal */}
      {selectedTour && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-wine-burgundy">{selectedTour.name}</h3>
                <Button variant="ghost" onClick={() => setSelectedTour(null)}>
                  ×
                </Button>
              </div>

              <div className="aspect-video bg-wine-burgundy/10 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <Play className="h-16 w-16 text-wine-burgundy/50 mx-auto mb-2" />
                  <p className="text-wine-burgundy/70">360° Virtual Tour Player</p>
                  <p className="text-sm text-muted-foreground">Click to start immersive experience</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? "Pause" : "Play"}
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setIsMuted(!isMuted)}>
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{selectedTour.duration}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-wine-burgundy mb-2">Tour Highlights</h4>
                  <ul className="space-y-1">
                    {selectedTour.highlights.map((highlight: string, index: number) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-wine-gold rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-wine-burgundy mb-2">Available Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTour.languages.map((lang: string, index: number) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
