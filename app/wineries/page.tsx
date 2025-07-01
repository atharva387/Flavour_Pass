"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, Building2, Search, Filter, Calendar, SlidersHorizontal } from "lucide-react"

export default function WineriesPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedRating, setSelectedRating] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const wineries = [
    {
      id: 1,
      name: "Sula Vineyards",
      location: "Nashik, Maharashtra",
      region: "Maharashtra",
      rating: 4.8,
      reviews: 2340,
      established: "1999",
      description: "India's most visited winery with award-winning wines and stunning vineyard views.",
      features: ["Wine Tasting", "Vineyard Tours", "Restaurant", "Stay"],
      awards: 15,
      visitors: "200K+",
      priceRange: "₹800 - ₹3500",
      image: "/placeholder.svg?height=300&width=400",
      experiences: 8,
      wines: 25,
    },
    {
      id: 2,
      name: "Grover Zampa Vineyards",
      location: "Bangalore, Karnataka",
      region: "Karnataka",
      rating: 4.6,
      reviews: 1890,
      established: "1988",
      description: "Pioneer of Indian winemaking with French winemaking expertise and premium wines.",
      features: ["Wine Tasting", "Vineyard Tours", "Events", "Corporate"],
      awards: 12,
      visitors: "150K+",
      priceRange: "₹900 - ₹4000",
      image: "/placeholder.svg?height=300&width=400",
      experiences: 6,
      wines: 18,
    },
    {
      id: 3,
      name: "Fratelli Wines",
      location: "Akluj, Maharashtra",
      region: "Maharashtra",
      rating: 4.7,
      reviews: 1456,
      established: "2007",
      description: "Italian-style winery bringing European winemaking traditions to Indian terroir.",
      features: ["Wine Tasting", "Italian Cuisine", "Vineyard Tours", "Events"],
      awards: 10,
      visitors: "120K+",
      priceRange: "₹1000 - ₹5000",
      image: "/placeholder.svg?height=300&width=400",
      experiences: 5,
      wines: 15,
    },
    {
      id: 4,
      name: "York Winery",
      location: "Nashik, Maharashtra",
      region: "Maharashtra",
      rating: 4.5,
      reviews: 987,
      established: "2008",
      description: "Boutique winery known for premium wines and personalized tasting experiences.",
      features: ["Wine Tasting", "Private Tours", "Wine Club", "Cellar Door"],
      awards: 8,
      visitors: "80K+",
      priceRange: "₹750 - ₹3000",
      image: "/placeholder.svg?height=300&width=400",
      experiences: 4,
      wines: 12,
    },
    {
      id: 5,
      name: "Chandon India",
      location: "Nashik, Maharashtra",
      region: "Maharashtra",
      rating: 4.4,
      reviews: 756,
      established: "2013",
      description: "Premium sparkling wine producer with French heritage and Indian innovation.",
      features: ["Sparkling Wine Tasting", "Vineyard Tours", "Events", "Luxury Experience"],
      awards: 6,
      visitors: "60K+",
      priceRange: "₹1500 - ₹6000",
      image: "/placeholder.svg?height=300&width=400",
      experiences: 3,
      wines: 8,
    },
    {
      id: 6,
      name: "Four Seasons Wines",
      location: "Pune, Maharashtra",
      region: "Maharashtra",
      rating: 4.9,
      reviews: 432,
      established: "2005",
      description: "Ultra-premium boutique winery focusing on limited production and exceptional quality.",
      features: ["Premium Tasting", "Private Cellar", "Collector Wines", "VIP Experience"],
      awards: 18,
      visitors: "25K+",
      priceRange: "₹2000 - ₹8000",
      image: "/placeholder.svg?height=300&width=400",
      experiences: 2,
      wines: 6,
    },
  ]

  const regions = ["all", "Maharashtra", "Karnataka"]
  const ratings = ["all", "4.5+", "4.0+", "3.5+"]

  const filteredWineries = useMemo(() => {
    return wineries.filter((winery) => {
      const matchesSearch =
        winery.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        winery.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        winery.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesRegion = selectedRegion === "all" || winery.region === selectedRegion

      const matchesRating =
        selectedRating === "all" ||
        (selectedRating === "4.5+" && winery.rating >= 4.5) ||
        (selectedRating === "4.0+" && winery.rating >= 4.0) ||
        (selectedRating === "3.5+" && winery.rating >= 3.5)

      return matchesSearch && matchesRegion && matchesRating
    })
  }, [searchQuery, selectedRegion, selectedRating])

  const handleViewDetails = (wineryId: number) => {
    router.push(`/wineries/${wineryId}`)
  }

  const handleBookVisit = (wineryId: number) => {
    router.push(`/wineries/${wineryId}?tab=experiences`)
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedRegion("all")
    setSelectedRating("all")
    setShowFilters(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-wine-burgundy text-white py-12 sm:py-16 lg:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-wine-gold text-wine-burgundy mb-4 px-3 py-1.5 sm:px-4 sm:py-2">
              <Building2 className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">Premium Wineries</span>
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6">
              Discover Wineries
            </h1>
            <p className="text-lg sm:text-xl text-wine-champagne max-w-3xl mx-auto px-4">
              Explore India's finest wineries, from boutique family estates to award-winning vineyards
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search and Filters */}
        <div className="space-y-4 mb-8">
          {/* Mobile Filter Toggle */}
          <div className="flex items-center justify-between lg:hidden">
            <h2 className="text-xl font-semibold text-wine-burgundy">Find Wineries</h2>
            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="bg-transparent">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Search Bar - Always Visible */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search wineries, locations, or descriptions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full"
            />
          </div>

          {/* Desktop Filters - Always Visible on Large Screens */}
          <div className="hidden lg:flex gap-4">
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                {regions.slice(1).map((region) => (
                  <SelectItem key={region} value={region}>
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedRating} onValueChange={setSelectedRating}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                {ratings.slice(1).map((rating) => (
                  <SelectItem key={rating} value={rating}>
                    {rating}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {(searchQuery || selectedRegion !== "all" || selectedRating !== "all") && (
              <Button variant="outline" onClick={clearFilters} className="bg-transparent">
                <Filter className="mr-2 h-4 w-4" />
                Clear
              </Button>
            )}
          </div>

          {/* Mobile Filters - Collapsible */}
          {showFilters && (
            <div className="lg:hidden space-y-4 p-4 bg-wine-cream rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    {regions.slice(1).map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedRating} onValueChange={setSelectedRating}>
                  <SelectTrigger>
                    <SelectValue placeholder="Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ratings</SelectItem>
                    {ratings.slice(1).map((rating) => (
                      <SelectItem key={rating} value={rating}>
                        {rating}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {(searchQuery || selectedRegion !== "all" || selectedRating !== "all") && (
                <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
                  <Filter className="mr-2 h-4 w-4" />
                  Clear All Filters
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-wine-burgundy">
              {filteredWineries.length} {filteredWineries.length === 1 ? "Winery" : "Wineries"} Found
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">Discover premium wine experiences across India</p>
          </div>
        </div>

        {/* Wineries Grid */}
        {filteredWineries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {filteredWineries.map((winery) => (
              <Card key={winery.id} className="group hover:shadow-wine transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div className="h-40 sm:h-48 bg-wine-cream flex items-center justify-center overflow-hidden">
                    <Building2 className="h-12 w-12 sm:h-16 sm:w-16 text-wine-burgundy/30" />
                  </div>
                  <Badge className="absolute top-3 left-3 bg-wine-burgundy text-white text-xs">
                    Est. {winery.established}
                  </Badge>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-wine-gold text-wine-burgundy text-xs">{winery.awards} Awards</Badge>
                  </div>
                </div>

                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="font-semibold text-wine-burgundy text-lg sm:text-xl mb-1 line-clamp-1">
                        {winery.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span className="truncate">{winery.location}</span>
                      </div>
                      <p className="text-muted-foreground text-sm line-clamp-2 sm:line-clamp-3">{winery.description}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-sm sm:text-base">{winery.rating}</span>
                        <span className="text-xs sm:text-sm text-muted-foreground">({winery.reviews})</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {winery.visitors} visitors
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {winery.features.slice(0, 2).map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {winery.features.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{winery.features.length - 2} more
                        </Badge>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center text-sm py-3 border-y">
                      <div>
                        <div className="font-semibold text-wine-burgundy">{winery.experiences}</div>
                        <div className="text-xs text-muted-foreground">Experiences</div>
                      </div>
                      <div>
                        <div className="font-semibold text-wine-burgundy">{winery.wines}</div>
                        <div className="text-xs text-muted-foreground">Wines</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-center">
                        <span className="text-base sm:text-lg font-bold text-wine-burgundy">{winery.priceRange}</span>
                        <span className="text-xs sm:text-sm text-muted-foreground block">Experience pricing</span>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-transparent text-xs sm:text-sm"
                          onClick={() => handleViewDetails(winery.id)}
                        >
                          View Details
                        </Button>
                        <Button
                          className="flex-1 wine-gradient text-white hover:shadow-wine text-xs sm:text-sm"
                          size="sm"
                          onClick={() => handleBookVisit(winery.id)}
                        >
                          <Calendar className="mr-1 h-3 w-3" />
                          Book Visit
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Building2 className="h-12 w-12 sm:h-16 sm:w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-muted-foreground mb-2">No wineries found</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 px-4">
              Try adjusting your search criteria or clearing the filters
            </p>
            <Button variant="outline" onClick={clearFilters} className="bg-transparent">
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredWineries.length > 0 && (
          <div className="text-center mt-8 sm:mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-wine-burgundy text-wine-burgundy hover:bg-wine-burgundy hover:text-white bg-transparent px-6 sm:px-8"
            >
              Load More Wineries
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
