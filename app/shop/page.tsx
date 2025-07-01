"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wine, Search, Grid3X3, List, SlidersHorizontal, TrendingUp } from "lucide-react"
import { WineCard } from "@/components/shop/wine-card"
import { BookingModal } from "@/components/booking/booking-modal"
import { FilterSidebar } from "@/components/shop/filter-sidebar"

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedWine, setSelectedWine] = useState<any>(null)
  const [showBookingModal, setShowBookingModal] = useState(false)

  const wines = [
    {
      id: 1,
      name: "Sula Dindori Reserve Shiraz",
      vineyard: "Sula Vineyards",
      type: "Red Wine",
      region: "Nashik, Maharashtra",
      vintage: "2021",
      rating: 4.8,
      reviews: 234,
      price: 1250,
      originalPrice: 1500,
      discount: 17,
      image: "/placeholder.svg?height=400&width=300",
      badges: ["Premium", "Award Winner", "AI Recommended"],
      alcohol: "13.5%",
      volume: "750ml",
      tastingNotes: "Rich, full-bodied with notes of blackberry and spice",
      pairing: "Grilled lamb, aged cheese, dark chocolate",
      description: "A premium Shiraz from Sula's reserve collection, aged in French oak barrels for 12 months.",
      inStock: true,
      stockCount: 24,
      features: ["Organic", "Vegan Friendly", "Award Winner"],
    },
    {
      id: 2,
      name: "Grover Zampa La Réserve Chardonnay",
      vineyard: "Grover Zampa",
      type: "White Wine",
      region: "Bangalore, Karnataka",
      vintage: "2022",
      rating: 4.6,
      reviews: 189,
      price: 980,
      originalPrice: 1200,
      discount: 18,
      image: "/placeholder.svg?height=400&width=300",
      badges: ["Bestseller", "Organic"],
      alcohol: "12.5%",
      volume: "750ml",
      tastingNotes: "Crisp and elegant with citrus and oak undertones",
      pairing: "Seafood, light pasta, goat cheese",
      description: "An elegant Chardonnay with perfect balance of fruit and oak.",
      inStock: true,
      stockCount: 18,
      features: ["Organic", "Limited Edition"],
    },
    {
      id: 3,
      name: "Fratelli Sangiovese Superiore",
      vineyard: "Fratelli Wines",
      type: "Red Wine",
      region: "Akluj, Maharashtra",
      vintage: "2020",
      rating: 4.7,
      reviews: 156,
      price: 1100,
      originalPrice: 1300,
      discount: 15,
      image: "/placeholder.svg?height=400&width=300",
      badges: ["Limited Edition", "Italian Style"],
      alcohol: "14%",
      volume: "750ml",
      tastingNotes: "Medium-bodied with cherry flavors and smooth tannins",
      pairing: "Italian cuisine, pizza, tomato-based dishes",
      description: "Italian-style Sangiovese crafted with traditional techniques.",
      inStock: true,
      stockCount: 12,
      features: ["Italian Style", "Hand Harvested"],
    },
    {
      id: 4,
      name: "York Arros Rosé",
      vineyard: "York Winery",
      type: "Rosé Wine",
      region: "Nashik, Maharashtra",
      vintage: "2023",
      rating: 4.5,
      reviews: 98,
      price: 850,
      originalPrice: 1000,
      discount: 15,
      image: "/placeholder.svg?height=400&width=300",
      badges: ["Summer Special", "Light & Fresh"],
      alcohol: "11.5%",
      volume: "750ml",
      tastingNotes: "Fresh and fruity with notes of strawberry and rose petals",
      pairing: "Salads, light appetizers, seafood",
      description: "A refreshing rosé perfect for summer occasions.",
      inStock: true,
      stockCount: 30,
      features: ["Summer Special", "Light & Fresh"],
    },
    {
      id: 5,
      name: "Chandon Brut",
      vineyard: "Chandon India",
      type: "Sparkling Wine",
      region: "Nashik, Maharashtra",
      vintage: "NV",
      rating: 4.4,
      reviews: 145,
      price: 1800,
      originalPrice: 2200,
      discount: 18,
      image: "/placeholder.svg?height=400&width=300",
      badges: ["Celebration", "Premium"],
      alcohol: "12%",
      volume: "750ml",
      tastingNotes: "Crisp and effervescent with apple and citrus notes",
      pairing: "Celebrations, appetizers, seafood",
      description: "Premium sparkling wine perfect for celebrations.",
      inStock: true,
      stockCount: 15,
      features: ["Premium", "Celebration"],
    },
    {
      id: 6,
      name: "Four Seasons Barrique Reserve Shiraz",
      vineyard: "Four Seasons Wines",
      type: "Red Wine",
      region: "Pune, Maharashtra",
      vintage: "2019",
      rating: 4.9,
      reviews: 87,
      price: 2200,
      originalPrice: 2800,
      discount: 21,
      image: "/placeholder.svg?height=400&width=300",
      badges: ["Ultra Premium", "Collector's Edition"],
      alcohol: "14.5%",
      volume: "750ml",
      tastingNotes: "Complex and powerful with dark fruit and spice",
      pairing: "Red meat, game, aged cheeses",
      description: "Ultra-premium Shiraz aged in French oak for 18 months.",
      inStock: true,
      stockCount: 8,
      features: ["Ultra Premium", "Collector's Edition", "Limited Release"],
    },
  ]

  const handleBookWine = (wine: any) => {
    setSelectedWine(wine)
    setShowBookingModal(true)
  }

  const filteredWines = wines.filter(
    (wine) =>
      wine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wine.vineyard.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wine.type.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-wine-burgundy text-white py-16">
        <div className="container">
          <div className="text-center">
            <Badge className="bg-wine-gold text-wine-burgundy mb-4 px-4 py-2">
              <Wine className="mr-2 h-4 w-4" />
              Premium Wine Collection
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Wine Marketplace</h1>
            <p className="text-xl text-wine-champagne max-w-3xl mx-auto">
              Discover and purchase premium wines from India's finest vineyards with expert curation and instant booking
            </p>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}>
            <FilterSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search wines, vineyards, or regions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden bg-transparent"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="discount">Best Deals</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="icon"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="icon"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold text-wine-burgundy">{filteredWines.length} Wines Found</h2>
                <p className="text-muted-foreground">Premium wines from India's finest vineyards</p>
              </div>
              <Badge className="bg-wine-gold text-wine-burgundy">
                <TrendingUp className="mr-1 h-3 w-3" />
                Trending Now
              </Badge>
            </div>

            {/* Wine Grid/List */}
            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
              }`}
            >
              {filteredWines.map((wine) => (
                <WineCard key={wine.id} wine={wine} viewMode={viewMode} onBook={() => handleBookWine(wine)} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-wine-burgundy text-wine-burgundy hover:bg-wine-burgundy hover:text-white bg-transparent"
              >
                Load More Wines
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedWine && (
        <BookingModal
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
          item={selectedWine}
          type="wine"
        />
      )}
    </div>
  )
}
