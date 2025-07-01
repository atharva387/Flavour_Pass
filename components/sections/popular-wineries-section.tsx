import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Calendar, Building2, Users, Award } from "lucide-react"

export function PopularWineriesSection() {
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
      established: "1999",
      awards: 15,
      visitors: "200K+",
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
      established: "1988",
      awards: 12,
      visitors: "150K+",
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
      established: "2007",
      awards: 8,
      visitors: "100K+",
    },
  ]

  return (
    <section className="py-20 bg-wine-cream">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="bg-wine-burgundy text-white mb-4 px-4 py-2">
            <Building2 className="mr-2 h-4 w-4" />
            Top Destinations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-wine-burgundy mb-6">
            Popular Wineries in India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover India's most celebrated wineries offering world-class experiences and award-winning wines
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {wineries.map((winery) => (
            <Card key={winery.id} className="group hover:shadow-wine transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-wine-burgundy/10 flex items-center justify-center">
                  <Building2 className="h-16 w-16 text-wine-burgundy/30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{winery.rating}</span>
                    <span className="text-sm opacity-80">({winery.reviews} reviews)</span>
                  </div>
                </div>
                <Badge className="absolute top-3 right-3 bg-wine-gold text-wine-burgundy">
                  Est. {winery.established}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-wine-burgundy mb-2">{winery.name}</h3>
                    <div className="flex items-center text-muted-foreground text-sm mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {winery.location}
                    </div>
                    <p className="text-sm text-muted-foreground">{winery.description}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-3 border-y">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Award className="h-4 w-4 text-wine-gold" />
                      </div>
                      <div className="text-lg font-bold text-wine-burgundy">{winery.awards}</div>
                      <div className="text-xs text-muted-foreground">Awards</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-4 w-4 text-wine-gold" />
                      </div>
                      <div className="text-lg font-bold text-wine-burgundy">{winery.visitors}</div>
                      <div className="text-xs text-muted-foreground">Visitors</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Star className="h-4 w-4 text-wine-gold" />
                      </div>
                      <div className="text-lg font-bold text-wine-burgundy">{winery.rating}</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {winery.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <div className="text-xl font-bold text-wine-burgundy">₹{winery.startingPrice}</div>
                    </div>
                    <div className="space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-wine-burgundy text-wine-burgundy bg-transparent"
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        Book
                      </Button>
                      <Button className="wine-gradient text-white" size="sm">
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-wine-burgundy text-wine-burgundy hover:bg-wine-burgundy hover:text-white bg-transparent px-8 py-3"
          >
            Discover All Wineries
          </Button>
        </div>
      </div>
    </section>
  )
}
