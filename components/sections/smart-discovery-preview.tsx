"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, Filter, Heart, Star, ShoppingCart, Wine, Utensils, MapPin, TrendingUp, Zap } from "lucide-react"

export function SmartDiscoveryPreview() {
  const [wineType, setWineType] = useState("")
  const [priceRange, setPriceRange] = useState([500, 3000])
  const [selectedCity, setSelectedCity] = useState("")
  const [foodPairing, setFoodPairing] = useState("")

  const wineResults = [
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
      pairing: "Grilled lamb, aged cheese",
      location: "Nashik",
      alcohol: "13.5%",
      vintage: "2021",
      tastingNotes: "Rich, full-bodied with notes of blackberry and spice",
    },
    {
      id: 2,
      name: "Grover Zampa La Réserve Chardonnay",
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
      alcohol: "12.5%",
      vintage: "2022",
      tastingNotes: "Crisp and elegant with citrus and oak undertones",
    },
    {
      id: 3,
      name: "Fratelli Sangiovese Superiore",
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
      alcohol: "14%",
      vintage: "2020",
      tastingNotes: "Medium-bodied with cherry flavors and smooth tannins",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-wine-cream to-white">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="bg-wine-burgundy text-white mb-4 px-4 py-2">
            <Zap className="mr-2 h-4 w-4" />
            AI-Powered Discovery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-wine-burgundy mb-6">
            Smart Wine Discovery Engine
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our advanced AI analyzes your preferences, taste profile, and dining plans to recommend the perfect wines
            from India's finest vineyards
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Filters Panel */}
          <Card className="lg:col-span-1 shadow-wine">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-wine-burgundy">
                <Filter className="h-5 w-5" />
                Smart Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Wine Type */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-wine-burgundy">Wine Type</label>
                <Select value={wineType} onValueChange={setWineType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select wine type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="red">Red Wine</SelectItem>
                    <SelectItem value="white">White Wine</SelectItem>
                    <SelectItem value="sparkling">Sparkling Wine</SelectItem>
                    <SelectItem value="rose">Rosé Wine</SelectItem>
                    <SelectItem value="dessert">Dessert Wine</SelectItem>
                    <SelectItem value="fortified">Fortified Wine</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range - Using simple input instead of Slider */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-wine-burgundy">
                  Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                </label>
                <div className="flex gap-2">
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="100"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                    className="flex-1"
                  />
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                    className="flex-1"
                  />
                </div>
              </div>

              {/* City */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-wine-burgundy">City</label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nashik">Nashik, Maharashtra</SelectItem>
                    <SelectItem value="bangalore">Bangalore, Karnataka</SelectItem>
                    <SelectItem value="pune">Pune, Maharashtra</SelectItem>
                    <SelectItem value="goa">Goa</SelectItem>
                    <SelectItem value="himachal">Himachal Pradesh</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Food Pairing */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-wine-burgundy">Food Pairing</label>
                <Select value={foodPairing} onValueChange={setFoodPairing}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select cuisine" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="indian">Indian Cuisine</SelectItem>
                    <SelectItem value="cheese">Cheese & Charcuterie</SelectItem>
                    <SelectItem value="seafood">Seafood</SelectItem>
                    <SelectItem value="desserts">Desserts</SelectItem>
                    <SelectItem value="grilled">Grilled Meats</SelectItem>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* AI Recommendation Button */}
              <Button className="w-full wine-gradient text-white py-3">
                <Sparkles className="mr-2 h-5 w-5" />
                Get AI Recommendations
              </Button>

              {/* Compare Feature */}
              <div className="pt-4 border-t">
                <Button variant="outline" className="w-full border-wine-burgundy text-wine-burgundy bg-transparent">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Compare Selected Wines
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Wine Results */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-wine-burgundy">Recommended for You</h3>
              <Badge className="bg-wine-gold text-wine-burgundy">{wineResults.length} matches found</Badge>
            </div>

            <div className="grid gap-6">
              {wineResults.map((wine) => (
                <Card key={wine.id} className="group hover:shadow-wine transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Wine Image */}
                      <div className="relative flex-shrink-0">
                        <div className="w-32 h-48 bg-wine-cream rounded-lg overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-b from-wine-burgundy/20 to-wine-burgundy/40 flex items-center justify-center">
                            <Wine className="h-16 w-16 text-wine-burgundy" />
                          </div>
                        </div>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Wine Details */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {wine.badges.map((badge) => (
                              <Badge
                                key={badge}
                                className={`text-xs ${
                                  badge === "AI Recommended"
                                    ? "bg-wine-gold text-wine-burgundy"
                                    : "bg-wine-burgundy text-white"
                                }`}
                              >
                                {badge === "AI Recommended" && <Sparkles className="mr-1 h-3 w-3" />}
                                {badge}
                              </Badge>
                            ))}
                          </div>

                          <h4 className="text-xl font-semibold text-wine-burgundy mb-1">{wine.name}</h4>
                          <p className="text-muted-foreground">{wine.vineyard}</p>

                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {wine.location}
                            </span>
                            <span>{wine.vintage}</span>
                            <span>{wine.alcohol}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{wine.rating}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">({wine.reviews} reviews)</span>
                          <Badge variant="outline" className="ml-2">
                            {wine.type}
                          </Badge>
                        </div>

                        <p className="text-sm text-muted-foreground italic">"{wine.tastingNotes}"</p>

                        <div className="flex items-center gap-2">
                          <Utensils className="h-4 w-4 text-wine-burgundy" />
                          <span className="text-sm">
                            <strong>Pairs with:</strong> {wine.pairing}
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl font-bold text-wine-burgundy">₹{wine.price}</span>
                            <span className="text-lg text-muted-foreground line-through">₹{wine.originalPrice}</span>
                            <Badge className="bg-green-100 text-green-700">
                              Save ₹{wine.originalPrice - wine.price}
                            </Badge>
                          </div>

                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button className="wine-gradient text-white" size="sm">
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center pt-8">
              <Button
                variant="outline"
                size="lg"
                className="border-wine-burgundy text-wine-burgundy hover:bg-wine-burgundy hover:text-white bg-transparent"
              >
                View All Recommendations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
