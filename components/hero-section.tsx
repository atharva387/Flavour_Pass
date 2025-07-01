"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/bg.jpg?height=800&width=1200')`,
        }}
      >
        <div className="absolute inset-0 wine-gradient opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4 animate-fade-in">
            <Badge className="bg-wine-gold text-wine-burgundy font-medium">
              India's Premier Wine Experience Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Discover Extraordinary
              <span className="block text-wine-gold">Wine Experiences</span>
            </h1>
            <p className="text-xl md:text-2xl text-wine-cream max-w-2xl mx-auto">
              From vineyard tours to premium tastings, explore India's finest wineries and create unforgettable memories
            </p>
          </div>

          {/* Search Form */}
          <div className="glass-effect rounded-2xl p-6 max-w-4xl mx-auto animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-wine-cream">Destination</label>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nashik">Nashik</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="pune">Pune</SelectItem>
                    <SelectItem value="goa">Goa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-wine-cream">Check-in</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                  <Input
                    type="date"
                    className="bg-white/10 border-white/20 text-white pl-10 placeholder:text-white/60"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-wine-cream">Guests</label>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="2 guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 guest</SelectItem>
                    <SelectItem value="2">2 guests</SelectItem>
                    <SelectItem value="4">4 guests</SelectItem>
                    <SelectItem value="6">6 guests</SelectItem>
                    <SelectItem value="8">8+ guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-wine-cream">Experience</label>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Wine tasting" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tasting">Wine Tasting</SelectItem>
                    <SelectItem value="tour">Vineyard Tour</SelectItem>
                    <SelectItem value="stay">Wine Stay</SelectItem>
                    <SelectItem value="dining">Wine Dining</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button className="w-full mt-6 bg-wine-gold hover:bg-wine-gold/90 text-wine-burgundy font-semibold py-3 text-lg">
              <Search className="mr-2 h-5 w-5" />
              Search Experiences
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-wine-gold">150+</div>
              <div className="text-wine-cream">Wineries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-wine-gold">500+</div>
              <div className="text-wine-cream">Wine Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-wine-gold">50K+</div>
              <div className="text-wine-cream">Happy Guests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-wine-gold">25+</div>
              <div className="text-wine-cream">Cities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
