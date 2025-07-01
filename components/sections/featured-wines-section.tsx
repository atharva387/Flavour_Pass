import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Wine, TrendingUp } from "lucide-react"

export function FeaturedWinesSection() {
  const wines = [
    {
      id: 1,
      name: "Sula Dindori Reserve Shiraz",
      vineyard: "Sula Vineyards",
      type: "Red Wine",
      rating: 4.8,
      reviews: 234,
      price: 1250,
      originalPrice: 1500,
      image: "/placeholder.svg?height=300&width=200",
      badges: ["Premium", "Award Winner", "AI Recommended"],
      pairing: "Grilled meats, aged cheese",
      location: "Nashik",
      discount: 17,
    },
    {
      id: 2,
      name: "Grover Zampa La Réserve",
      vineyard: "Grover Zampa",
      type: "White Wine",
      rating: 4.6,
      reviews: 189,
      price: 980,
      originalPrice: 1200,
      image: "/placeholder.svg?height=300&width=200",
      badges: ["Bestseller", "Organic"],
      pairing: "Seafood, light pasta",
      location: "Bangalore",
      discount: 18,
    },
    {
      id: 3,
      name: "Fratelli Sangiovese",
      vineyard: "Fratelli Wines",
      type: "Red Wine",
      rating: 4.7,
      reviews: 156,
      price: 1100,
      originalPrice: 1300,
      image: "/placeholder.svg?height=300&width=200",
      badges: ["Limited Edition", "Italian Style"],
      pairing: "Italian cuisine, pizza",
      location: "Akluj",
      discount: 15,
    },
    {
      id: 4,
      name: "York Arros Rosé",
      vineyard: "York Winery",
      type: "Rosé Wine",
      rating: 4.5,
      reviews: 98,
      price: 850,
      originalPrice: 1000,
      image: "/placeholder.svg?height=300&width=200",
      badges: ["Summer Special", "Light & Fresh"],
      pairing: "Salads, light appetizers",
      location: "Nashik",
      discount: 15,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="bg-wine-burgundy text-white mb-4 px-4 py-2">
            <TrendingUp className="mr-2 h-4 w-4" />
            Curated Selection
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-wine-burgundy mb-6">Featured Wines</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Handpicked premium wines from India's finest vineyards, available for direct purchase with exclusive member
            discounts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {wines.map((wine) => (
            <Card key={wine.id} className="group hover:shadow-wine transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="h-64 bg-wine-cream flex items-center justify-center overflow-hidden">
                  <Wine className="h-20 w-20 text-wine-burgundy/30" />
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white shadow-sm"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <div className="absolute top-3 left-3 space-y-1">
                  {wine.badges.slice(0, 2).map((badge) => (
                    <Badge
                      key={badge}
                      className={`text-xs block ${
                        badge === "AI Recommended" ? "bg-wine-gold text-wine-burgundy" : "bg-wine-burgundy text-white"
                      }`}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                {wine.discount > 0 && (
                  <Badge className="absolute bottom-3 left-3 bg-green-600 text-white">{wine.discount}% OFF</Badge>
                )}
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-wine-burgundy text-lg line-clamp-2 mb-1">{wine.name}</h3>
                    <p className="text-muted-foreground text-sm">{wine.vineyard}</p>
                    <p className="text-xs text-muted-foreground">{wine.location}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {wine.type}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{wine.rating}</span>
                      <span className="text-xs text-muted-foreground">({wine.reviews})</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-bold text-wine-burgundy">₹{wine.price}</span>
                      <span className="text-sm text-muted-foreground line-through">₹{wine.originalPrice}</span>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      <strong>Pairs with:</strong> {wine.pairing}
                    </p>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 wine-gradient text-white hover:shadow-wine">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-wine-burgundy text-wine-burgundy bg-transparent"
                    >
                      Details
                    </Button>
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
            Explore Wine Marketplace
          </Button>
        </div>
      </div>
    </section>
  )
}
