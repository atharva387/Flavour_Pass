import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart } from "lucide-react"
import Image from "next/image"

export function FeaturedWines() {
  const wines = [
    {
      id: 1,
      name: "Sula Dindori Reserve Shiraz",
      vineyard: "Sula Vineyards",
      type: "Red Wine",
      rating: 4.8,
      price: 1250,
      originalPrice: 1500,
      image: "/placeholder.svg?height=300&width=200",
      badges: ["Premium", "Award Winner"],
      pairing: "Grilled meats, aged cheese",
    },
    {
      id: 2,
      name: "Grover Zampa La Réserve",
      vineyard: "Grover Zampa",
      type: "White Wine",
      rating: 4.6,
      price: 980,
      originalPrice: 1200,
      image: "/placeholder.svg?height=300&width=200",
      badges: ["Bestseller"],
      pairing: "Seafood, light pasta",
    },
    {
      id: 3,
      name: "Fratelli Sangiovese",
      vineyard: "Fratelli Wines",
      type: "Red Wine",
      rating: 4.7,
      price: 1100,
      originalPrice: 1300,
      image: "/placeholder.svg?height=300&width=200",
      badges: ["Limited Edition"],
      pairing: "Italian cuisine, pizza",
    },
    {
      id: 4,
      name: "York Arros Rosé",
      vineyard: "York Winery",
      type: "Rosé Wine",
      rating: 4.5,
      price: 850,
      originalPrice: 1000,
      image: "/placeholder.svg?height=300&width=200",
      badges: ["Summer Special"],
      pairing: "Salads, light appetizers",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge className="bg-wine-burgundy text-white mb-4">Curated Selection</Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-wine-burgundy mb-4">Featured Wines</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked premium wines from India's finest vineyards, available for direct purchase
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wines.map((wine) => (
            <Card key={wine.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <Image
                  src={wine.image || "/placeholder.svg"}
                  alt={wine.name}
                  width={200}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button size="icon" variant="ghost" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                  <Heart className="h-4 w-4" />
                </Button>
                <div className="absolute top-2 left-2 space-y-1">
                  {wine.badges.map((badge) => (
                    <Badge key={badge} className="bg-wine-gold text-wine-burgundy text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>

              <CardContent className="p-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-wine-burgundy line-clamp-2">{wine.name}</h3>
                  <p className="text-sm text-muted-foreground">{wine.vineyard}</p>
                  <Badge variant="outline" className="text-xs">
                    {wine.type}
                  </Badge>

                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{wine.rating}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-wine-burgundy">₹{wine.price}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{wine.originalPrice}</span>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    <strong>Pairs with:</strong> {wine.pairing}
                  </p>

                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 wine-gradient text-white">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
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
            View All Wines
          </Button>
        </div>
      </div>
    </section>
  )
}
