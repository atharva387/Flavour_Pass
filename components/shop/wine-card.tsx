"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart, Wine, MapPin, Sparkles } from "lucide-react"
import { useState } from "react"

interface WineCardProps {
  wine: any
  viewMode: "grid" | "list"
  onBook: () => void
}

export function WineCard({ wine, viewMode, onBook }: WineCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  if (viewMode === "list") {
    return (
      <Card className="group hover:shadow-wine transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex gap-6">
            {/* Wine Image */}
            <div className="relative w-32 h-48 flex-shrink-0">
              <div className="w-full h-full bg-wine-cream rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-wine-burgundy/20 to-wine-burgundy/40 flex items-center justify-center">
                  <Wine className="h-16 w-16 text-wine-burgundy" />
                </div>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
            </div>

            {/* Wine Details */}
            <div className="flex-1 space-y-4">
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {wine.badges.slice(0, 2).map((badge: string) => (
                    <Badge
                      key={badge}
                      className={`text-xs ${
                        badge === "AI Recommended" ? "bg-wine-gold text-wine-burgundy" : "bg-wine-burgundy text-white"
                      }`}
                    >
                      {badge === "AI Recommended" && <Sparkles className="mr-1 h-3 w-3" />}
                      {badge}
                    </Badge>
                  ))}
                  {wine.discount > 0 && <Badge className="bg-green-600 text-white text-xs">{wine.discount}% OFF</Badge>}
                </div>

                <h3 className="text-xl font-semibold text-wine-burgundy mb-1">{wine.name}</h3>
                <p className="text-muted-foreground">{wine.vineyard}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {wine.region}
                  </span>
                  <span>{wine.vintage}</span>
                  <span>{wine.alcohol}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{wine.rating}</span>
                  <span className="text-sm text-muted-foreground">({wine.reviews} reviews)</span>
                </div>
                <Badge variant="outline">{wine.type}</Badge>
              </div>

              <p className="text-sm text-muted-foreground italic">"{wine.tastingNotes}"</p>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-wine-burgundy">₹{wine.price}</span>
                  {wine.originalPrice > wine.price && (
                    <span className="text-lg text-muted-foreground line-through">₹{wine.originalPrice}</span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button className="wine-gradient text-white" size="sm" onClick={onBook}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="group hover:shadow-wine transition-all duration-300 overflow-hidden">
      <div className="relative">
        <div className="h-64 bg-wine-cream flex items-center justify-center overflow-hidden">
          <Wine className="h-20 w-20 text-wine-burgundy/30" />
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 bg-white/90 hover:bg-white shadow-sm"
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
        </Button>
        <div className="absolute top-3 left-3 space-y-1">
          {wine.badges.slice(0, 2).map((badge: string) => (
            <Badge
              key={badge}
              className={`text-xs block ${
                badge === "AI Recommended" ? "bg-wine-gold text-wine-burgundy" : "bg-wine-burgundy text-white"
              }`}
            >
              {badge === "AI Recommended" && <Sparkles className="mr-1 h-3 w-3" />}
              {badge}
            </Badge>
          ))}
        </div>
        {wine.discount > 0 && (
          <Badge className="absolute bottom-3 left-3 bg-green-600 text-white">{wine.discount}% OFF</Badge>
        )}
        {wine.stockCount <= 10 && (
          <Badge className="absolute bottom-3 right-3 bg-red-600 text-white">Only {wine.stockCount} left</Badge>
        )}
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-wine-burgundy text-lg line-clamp-2 mb-1">{wine.name}</h3>
            <p className="text-muted-foreground text-sm">{wine.vineyard}</p>
            <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{wine.region}</span>
              <span>•</span>
              <span>{wine.vintage}</span>
            </div>
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
              {wine.originalPrice > wine.price && (
                <span className="text-sm text-muted-foreground line-through">₹{wine.originalPrice}</span>
              )}
            </div>

            <p className="text-xs text-muted-foreground line-clamp-2">
              <strong>Tasting Notes:</strong> {wine.tastingNotes}
            </p>
          </div>

          <div className="flex gap-2 pt-2">
            <Button className="flex-1 wine-gradient text-white hover:shadow-wine" onClick={onBook}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Book Now
            </Button>
            <Button variant="outline" size="sm" className="border-wine-burgundy text-wine-burgundy bg-transparent">
              Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
