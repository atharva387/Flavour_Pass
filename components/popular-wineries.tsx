import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Calendar } from "lucide-react"
import Image from "next/image"

export function PopularWineries() {
  const wineries = [
    {
      id: 1,
      name: "Sula Vineyards",
      location: "Nashik, Maharashtra",
      rating: 4.8,
      reviews: 2340,
      image: "/placeholder.svg?height=250&width=400",
      features: ["Wine Tasting", "Vineyard Tours", "Restaurant", "Stay"],
      startingPrice: 1500,
      description: "India's most visited winery with award-winning wines and stunning vineyard views",
    },
    {
      id: 2,
      name: "Grover Zampa Vineyards",
      location: "Bangalore, Karnataka",
      rating: 4.7,
      reviews: 1890,
      image: "/placeholder.svg?height=250&width=400",
      features: ["Premium Tastings", "Cellar Tours", "Events", "Corporate"],
      startingPrice: 2000,
      description: "Premium winery known for exceptional Chardonnay and Cabernet Sauvignon",
    },
    {
      id: 3,
      name: "Fratelli Wines",
      location: "Akluj, Maharashtra",
      rating: 4.6,
      reviews: 1560,
      image: "/placeholder.svg?height=250&width=400",
      features: ["Italian Style", "Food Pairing", "Private Tours", "Weddings"],
      startingPrice: 1800,
      description: "Italian-inspired winery offering authentic wine experiences",
    },
  ]

  return (
    <section className="py-16 bg-wine-cream">
      <div className="container">
        <div className="text-center mb-12">
          <Badge className="bg-wine-burgundy text-white mb-4">Top Destinations</Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-wine-burgundy mb-4">
            Popular Wineries in India
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover India's most celebrated wineries offering world-class experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {wineries.map((winery) => (
            <Card key={winery.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <Image
                  src={winery.image || "/placeholder.svg"}
                  alt={winery.name}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{winery.rating}</span>
                    <span className="text-sm opacity-80">({winery.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-wine-burgundy mb-1">{winery.name}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {winery.location}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">{winery.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {winery.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <div className="text-lg font-bold text-wine-burgundy">₹{winery.startingPrice}</div>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Tour
                      </Button>
                      <Button className="wine-gradient text-white" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-wine-burgundy text-wine-burgundy hover:bg-wine-burgundy hover:text-white bg-transparent"
          >
            Explore All Wineries
          </Button>
        </div>
      </div>
    </section>
  )
}
