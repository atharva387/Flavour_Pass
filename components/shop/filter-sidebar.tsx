"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Filter, X, Star } from "lucide-react"

export function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([500, 3000])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedRegions, setSelectedRegions] = useState<string[]>([])
  const [selectedVineyards, setSelectedVineyards] = useState<string[]>([])
  const [minRating, setMinRating] = useState(0)

  const wineTypes = [
    { id: "red", label: "Red Wine", count: 45 },
    { id: "white", label: "White Wine", count: 32 },
    { id: "sparkling", label: "Sparkling Wine", count: 18 },
    { id: "rose", label: "Rosé Wine", count: 24 },
    { id: "dessert", label: "Dessert Wine", count: 12 },
    { id: "fortified", label: "Fortified Wine", count: 8 },
  ]

  const regions = [
    { id: "nashik", label: "Nashik, Maharashtra", count: 67 },
    { id: "bangalore", label: "Bangalore, Karnataka", count: 34 },
    { id: "pune", label: "Pune, Maharashtra", count: 28 },
    { id: "goa", label: "Goa", count: 19 },
    { id: "himachal", label: "Himachal Pradesh", count: 15 },
    { id: "karnataka", label: "Karnataka Hills", count: 12 },
  ]

  const vineyards = [
    { id: "sula", label: "Sula Vineyards", count: 23 },
    { id: "grover", label: "Grover Zampa", count: 18 },
    { id: "fratelli", label: "Fratelli Wines", count: 15 },
    { id: "york", label: "York Winery", count: 12 },
    { id: "chandon", label: "Chandon India", count: 10 },
    { id: "four-seasons", label: "Four Seasons", count: 8 },
  ]

  const clearAllFilters = () => {
    setPriceRange([500, 3000])
    setSelectedTypes([])
    setSelectedRegions([])
    setSelectedVineyards([])
    setMinRating(0)
  }

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-wine-burgundy">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Price Range */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold text-wine-burgundy">
            Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
          </Label>
          <div className="space-y-2">
            <input
              type="range"
              min="500"
              max="5000"
              step="100"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
              className="w-full"
            />
            <input
              type="range"
              min="500"
              max="5000"
              step="100"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>₹500</span>
            <span>₹5000+</span>
          </div>
        </div>

        <Separator />

        {/* Wine Type */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold text-wine-burgundy">Wine Type</Label>
          <div className="space-y-2">
            {wineTypes.map((type) => (
              <div key={type.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={type.id}
                    checked={selectedTypes.includes(type.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedTypes([...selectedTypes, type.id])
                      } else {
                        setSelectedTypes(selectedTypes.filter((t) => t !== type.id))
                      }
                    }}
                  />
                  <Label htmlFor={type.id} className="text-sm cursor-pointer">
                    {type.label}
                  </Label>
                </div>
                <Badge variant="outline" className="text-xs">
                  {type.count}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Region */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold text-wine-burgundy">Region</Label>
          <div className="space-y-2">
            {regions.map((region) => (
              <div key={region.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={region.id}
                    checked={selectedRegions.includes(region.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedRegions([...selectedRegions, region.id])
                      } else {
                        setSelectedRegions(selectedRegions.filter((r) => r !== region.id))
                      }
                    }}
                  />
                  <Label htmlFor={region.id} className="text-sm cursor-pointer">
                    {region.label}
                  </Label>
                </div>
                <Badge variant="outline" className="text-xs">
                  {region.count}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Vineyard */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold text-wine-burgundy">Vineyard</Label>
          <div className="space-y-2">
            {vineyards.map((vineyard) => (
              <div key={vineyard.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={vineyard.id}
                    checked={selectedVineyards.includes(vineyard.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedVineyards([...selectedVineyards, vineyard.id])
                      } else {
                        setSelectedVineyards(selectedVineyards.filter((v) => v !== vineyard.id))
                      }
                    }}
                  />
                  <Label htmlFor={vineyard.id} className="text-sm cursor-pointer">
                    {vineyard.label}
                  </Label>
                </div>
                <Badge variant="outline" className="text-xs">
                  {vineyard.count}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Rating */}
        <div className="space-y-3">
          <Label className="text-sm font-semibold text-wine-burgundy">Minimum Rating</Label>
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox
                  id={`rating-${rating}`}
                  checked={minRating === rating}
                  onCheckedChange={(checked) => {
                    setMinRating(checked ? rating : 0)
                  }}
                />
                <Label htmlFor={`rating-${rating}`} className="flex items-center gap-1 cursor-pointer">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm">& above</span>
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Apply Filters */}
        <Button className="w-full wine-gradient text-white">Apply Filters</Button>
      </CardContent>
    </Card>
  )
}
