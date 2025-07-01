"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Star,
  Calendar,
  Building2,
  Users,
  Award,
  Phone,
  Globe,
  Clock,
  Wine,
  Camera,
  Heart,
  Share2,
  ArrowLeft,
  CheckCircle,
  MapIcon,
  Utensils,
  Car,
  Wifi,
  CreditCard,
  Shield,
  Gift,
} from "lucide-react"
import { BookingModal } from "@/components/booking/booking-modal"

export default function WineryPage() {
  const params = useParams()
  const router = useRouter()
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState<any>(null)
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Mock data - in real app, fetch based on params.id
  const winery = {
    id: 1,
    name: "Sula Vineyards",
    location: "Nashik, Maharashtra",
    region: "Maharashtra",
    rating: 4.8,
    reviews: 2340,
    established: "1999",
    description:
      "India's most visited winery with award-winning wines and stunning vineyard views. Nestled in the heart of Nashik's wine country, Sula Vineyards has been pioneering the Indian wine industry for over two decades.",
    longDescription:
      "Founded in 1999 by Rajeev Samant, Sula Vineyards represents the modern face of Indian winemaking. Located in the picturesque Nashik valley, our vineyards span over 1,500 acres of rolling hills and fertile soil. We combine traditional winemaking techniques with modern technology to produce world-class wines that have put Indian viticulture on the global map.",
    features: ["Wine Tasting", "Vineyard Tours", "Restaurant", "Stay", "Events", "Corporate Retreats"],
    awards: 15,
    visitors: "200K+",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    contact: {
      phone: "+91 2554 223 123",
      email: "info@sulawines.com",
      website: "www.sulawines.com",
      hours: "10:00 AM - 6:00 PM",
      address: "Govardhan Village, Nashik-Pune Highway, Nashik, Maharashtra 422222",
    },
    experiences: [
      {
        id: 1,
        name: "Premium Wine Tasting",
        price: 1500,
        duration: "90 minutes",
        description: "Taste 6 premium wines with expert sommelier guidance",
        includes: ["6 wine tastings", "Cheese platter", "Sommelier guidance", "Tasting notes"],
        maxGuests: 12,
      },
      {
        id: 2,
        name: "Vineyard Tour & Tasting",
        price: 800,
        duration: "60 minutes",
        description: "Guided tour of vineyards followed by wine tasting",
        includes: ["Vineyard tour", "3 wine tastings", "Production facility visit", "Complimentary snacks"],
        maxGuests: 20,
      },
      {
        id: 3,
        name: "Wine & Dine Experience",
        price: 2500,
        duration: "3 hours",
        description: "Multi-course meal paired with premium wines",
        includes: ["4-course meal", "Wine pairings", "Chef interaction", "Recipe cards"],
        maxGuests: 8,
      },
      {
        id: 4,
        name: "Sunset Vineyard Picnic",
        price: 3200,
        duration: "2.5 hours",
        description: "Romantic picnic setup in the vineyards during sunset",
        includes: ["Gourmet picnic basket", "Wine selection", "Sunset views", "Photography session"],
        maxGuests: 4,
      },
    ],
    wines: [
      { name: "Sula Sauvignon Blanc", type: "White", price: 850, rating: 4.6 },
      { name: "Sula Cabernet Shiraz", type: "Red", price: 950, rating: 4.7 },
      { name: "Sula Brut Tropicale", type: "Sparkling", price: 1200, rating: 4.5 },
      { name: "Sula Late Harvest Chenin Blanc", type: "Dessert", price: 1500, rating: 4.8 },
    ],
    amenities: [
      { icon: Utensils, name: "Restaurant", available: true },
      { icon: Car, name: "Parking", available: true },
      { icon: Wifi, name: "Free WiFi", available: true },
      { icon: CreditCard, name: "Card Payment", available: true },
      { icon: Shield, name: "Safety Certified", available: true },
      { icon: Gift, name: "Gift Shop", available: true },
    ],
    highlights: [
      "India's first winery to export wines internationally",
      "Over 15 international awards and recognitions",
      "Sustainable farming practices and eco-friendly operations",
      "State-of-the-art production facility with guided tours",
      "On-site restaurant serving farm-to-table cuisine",
      "Luxury accommodation available for overnight stays",
    ],
  }

  const handleBookExperience = (experience: any) => {
    setSelectedExperience(experience)
    setIsBookingOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-wine-burgundy text-white py-6 sm:py-8 lg:py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.back()}
              className="text-white hover:bg-white/10 p-2"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Back to Wineries</span>
              <span className="sm:hidden">Back</span>
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Main Image */}
            <div className="lg:w-1/2">
              <div className="relative h-64 sm:h-80 bg-wine-cream rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-wine-burgundy/20 to-wine-burgundy/40 flex items-center justify-center">
                  <Building2 className="h-16 w-16 sm:h-24 sm:w-24 text-wine-burgundy" />
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="bg-white/90 hover:bg-white text-wine-burgundy h-8 w-8 sm:h-10 sm:w-10"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                  >
                    <Heart className={`h-3 w-3 sm:h-4 sm:w-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="bg-white/90 hover:bg-white text-wine-burgundy h-8 w-8 sm:h-10 sm:w-10"
                  >
                    <Share2 className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
                <Badge className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-wine-gold text-wine-burgundy text-xs sm:text-sm">
                  Est. {winery.established}
                </Badge>
              </div>
            </div>

            {/* Winery Info */}
            <div className="lg:w-1/2 space-y-4 sm:space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-2">{winery.name}</h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-wine-champagne mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {winery.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {winery.rating} ({winery.reviews} reviews)
                  </span>
                </div>
                <p className="text-wine-champagne text-base sm:text-lg leading-relaxed">{winery.description}</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-white/10 rounded-lg">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-wine-gold mx-auto mb-2" />
                  <div className="text-lg sm:text-2xl font-bold">{winery.awards}</div>
                  <div className="text-xs sm:text-sm text-wine-champagne">Awards</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white/10 rounded-lg">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-wine-gold mx-auto mb-2" />
                  <div className="text-lg sm:text-2xl font-bold">{winery.visitors}</div>
                  <div className="text-xs sm:text-sm text-wine-champagne">Visitors</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white/10 rounded-lg">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 text-wine-gold mx-auto mb-2" />
                  <div className="text-lg sm:text-2xl font-bold">{winery.rating}</div>
                  <div className="text-xs sm:text-sm text-wine-champagne">Rating</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  className="flex-1 bg-wine-gold text-wine-burgundy hover:bg-wine-gold/90"
                  onClick={() => handleBookExperience(winery.experiences[0])}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Experience
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-white text-white hover:bg-white hover:text-wine-burgundy bg-transparent"
                >
                  <Camera className="mr-2 h-4 w-4" />
                  Virtual Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Tabs defaultValue="overview" className="space-y-6 sm:space-y-8">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 h-auto">
            <TabsTrigger value="overview" className="text-xs sm:text-sm py-2 sm:py-3">
              Overview
            </TabsTrigger>
            <TabsTrigger value="experiences" className="text-xs sm:text-sm py-2 sm:py-3">
              Experiences
            </TabsTrigger>
            <TabsTrigger value="wines" className="text-xs sm:text-sm py-2 sm:py-3">
              Our Wines
            </TabsTrigger>
            <TabsTrigger value="amenities" className="text-xs sm:text-sm py-2 sm:py-3">
              Amenities
            </TabsTrigger>
            <TabsTrigger value="contact" className="text-xs sm:text-sm py-2 sm:py-3">
              Contact
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-wine-burgundy text-lg sm:text-xl">About {winery.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                      {winery.longDescription}
                    </p>

                    <h4 className="font-semibold text-wine-burgundy mb-4 text-base sm:text-lg">Highlights</h4>
                    <div className="space-y-2">
                      {winery.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-wine-burgundy text-lg sm:text-xl">Photo Gallery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {winery.images.map((image, index) => (
                        <div key={index} className="h-24 sm:h-32 bg-wine-cream rounded-lg overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-b from-wine-burgundy/20 to-wine-burgundy/40 flex items-center justify-center">
                            <Camera className="h-6 w-6 sm:h-8 sm:w-8 text-wine-burgundy/50" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-wine-burgundy text-lg sm:text-xl">Quick Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-4 w-4 text-wine-burgundy mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm sm:text-base">Opening Hours</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{winery.contact.hours}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-wine-burgundy mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm sm:text-base">Location</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{winery.contact.address}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-4 w-4 text-wine-burgundy mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm sm:text-base">Phone</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{winery.contact.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="h-4 w-4 text-wine-burgundy mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm sm:text-base">Website</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{winery.contact.website}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-wine-burgundy text-lg sm:text-xl">Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {winery.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="experiences" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {winery.experiences.map((experience) => (
                <Card key={experience.id} className="group hover:shadow-wine transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-wine-burgundy text-base sm:text-lg">{experience.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{experience.duration}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl sm:text-2xl font-bold text-wine-burgundy">₹{experience.price}</div>
                        <div className="text-xs text-muted-foreground">per person</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm sm:text-base">{experience.description}</p>

                    <div>
                      <h5 className="font-medium text-wine-burgundy mb-2 text-sm sm:text-base">Includes:</h5>
                      <div className="space-y-1">
                        {experience.includes.map((item, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t gap-3">
                      <span className="text-sm text-muted-foreground">Max {experience.maxGuests} guests</span>
                      <Button
                        className="wine-gradient text-white w-full sm:w-auto"
                        onClick={() => handleBookExperience(experience)}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wines" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {winery.wines.map((wine, index) => (
                <Card key={index} className="group hover:shadow-wine transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-center space-y-4">
                      <div className="h-24 sm:h-32 bg-wine-cream rounded-lg flex items-center justify-center">
                        <Wine className="h-8 w-8 sm:h-12 sm:w-12 text-wine-burgundy/30" />
                      </div>

                      <div>
                        <h4 className="font-semibold text-wine-burgundy text-sm sm:text-base line-clamp-2">
                          {wine.name}
                        </h4>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {wine.type}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{wine.rating}</span>
                      </div>

                      <div className="space-y-2">
                        <div className="text-lg sm:text-xl font-bold text-wine-burgundy">₹{wine.price}</div>
                        <Button size="sm" variant="outline" className="w-full bg-transparent text-xs sm:text-sm">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="amenities" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {winery.amenities.map((amenity, index) => (
                <Card key={index} className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`p-2 sm:p-3 rounded-lg ${amenity.available ? "bg-green-100" : "bg-gray-100"}`}>
                      <amenity.icon
                        className={`h-5 w-5 sm:h-6 sm:w-6 ${amenity.available ? "text-green-600" : "text-gray-400"}`}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-wine-burgundy text-sm sm:text-base">{amenity.name}</h4>
                      <p className={`text-xs sm:text-sm ${amenity.available ? "text-green-600" : "text-gray-500"}`}>
                        {amenity.available ? "Available" : "Not Available"}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-wine-burgundy text-lg sm:text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-wine-burgundy mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm sm:text-base">Address</div>
                        <div className="text-muted-foreground text-sm">{winery.contact.address}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-wine-burgundy flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm sm:text-base">Phone</div>
                        <div className="text-muted-foreground text-sm">{winery.contact.phone}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-wine-burgundy flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm sm:text-base">Website</div>
                        <div className="text-muted-foreground text-sm">{winery.contact.website}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-wine-burgundy flex-shrink-0" />
                      <div>
                        <div className="font-medium text-sm sm:text-base">Opening Hours</div>
                        <div className="text-muted-foreground text-sm">{winery.contact.hours}</div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3 sm:space-y-4">
                    <Button className="w-full wine-gradient text-white">
                      <MapIcon className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-wine-burgundy text-lg sm:text-xl">Location Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 sm:h-64 bg-wine-cream rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapIcon className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-2" />
                      <p className="text-sm">Interactive map would be displayed here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        experience={selectedExperience}
        type="experience"
      />
    </div>
  )
}
