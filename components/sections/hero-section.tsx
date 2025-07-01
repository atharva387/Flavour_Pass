"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Search, MapPin, Users, Sparkles, Play, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function HeroSection() {
  const [searchType, setSearchType] = useState("experiences")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-1000"
          style={{
            backgroundImage: `url('/bg.jpg?height=1080&width=1920')`,
          }}
        />
        <div className="absolute inset-0 premium-gradient opacity-85" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-wine-gold/20 rounded-full blur-xl animate-bounce-subtle" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-wine-burgundy/20 rounded-full blur-2xl float-animation" />
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-wine-amber/30 rounded-full blur-lg"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header Content */}
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-wine-gold/20 text-wine-gold border-wine-gold/30 backdrop-blur-sm px-4 py-2 text-sm font-medium">
              <Sparkles className="mr-2 h-4 w-4" />
              India's Most Advanced Wine Platform
            </Badge>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Discover India's
              <span className="block text-wine-gold bg-gradient-to-r from-wine-gold to-wine-amber bg-clip-text text-transparent">
                Wine Renaissance
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-wine-champagne max-w-3xl mx-auto leading-relaxed">
              From AI-powered wine discovery to immersive vineyard experiences, explore India's finest wineries with
              unprecedented sophistication
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="gold-gradient text-wine-burgundy hover:shadow-gold px-8 py-4 text-lg font-semibold"
              >
                <Search className="mr-2 h-5 w-5" />
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Advanced Search Interface */}
          <Card className="glass-effect border-white/20 max-w-5xl mx-auto animate-scale-in">
            <CardContent className="p-8">
              {/* Search Type Selector */}
              <div className="flex justify-center mb-6">
                <div className="flex bg-white/10 rounded-full p-1 backdrop-blur-sm">
                  {[
                    { id: "experiences", label: "Experiences", icon: Calendar },
                    { id: "wines", label: "Wines", icon: Search },
                    { id: "wineries", label: "Wineries", icon: MapPin },
                  ].map((type) => (
                    <Button
                      key={type.id}
                      variant={searchType === type.id ? "default" : "ghost"}
                      size="sm"
                      className={`rounded-full px-6 py-2 transition-all ${
                        searchType === type.id
                          ? "bg-wine-gold text-wine-burgundy shadow-lg"
                          : "text-white hover:bg-white/10"
                      }`}
                      onClick={() => setSearchType(type.id)}
                    >
                      <type.icon className="mr-2 h-4 w-4" />
                      {type.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Search Form */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-wine-champagne">Destination</label>
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
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

                <div className="space-y-2">
                  <label className="text-sm font-medium text-wine-champagne">Check-in</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                    <Input
                      type="date"
                      className="bg-white/10 border-white/20 text-white pl-10 placeholder:text-white/60 backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-wine-champagne">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                    <Select>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white pl-10 backdrop-blur-sm">
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
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-wine-champagne">Experience Type</label>
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                      <SelectValue placeholder="Wine tasting" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tasting">Wine Tasting</SelectItem>
                      <SelectItem value="tour">Vineyard Tour</SelectItem>
                      <SelectItem value="stay">Wine Stay</SelectItem>
                      <SelectItem value="dining">Wine Dining</SelectItem>
                      <SelectItem value="masterclass">Masterclass</SelectItem>
                      <SelectItem value="private">Private Experience</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-wine-champagne">Budget</label>
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                      <SelectValue placeholder="₹2,000" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1000">Under ₹1,000</SelectItem>
                      <SelectItem value="2000">₹1,000 - ₹2,000</SelectItem>
                      <SelectItem value="5000">₹2,000 - ₹5,000</SelectItem>
                      <SelectItem value="10000">₹5,000 - ₹10,000</SelectItem>
                      <SelectItem value="premium">Premium (₹10,000+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full mt-8 gold-gradient text-wine-burgundy font-semibold py-4 text-lg hover:shadow-gold transition-all">
                <Search className="mr-2 h-5 w-5" />
                Search Premium Experiences
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
            {[
              { number: "200+", label: "Premium Wineries", icon: "🍷" },
              { number: "1000+", label: "Wine Varieties", icon: "🍇" },
              { number: "50K+", label: "Happy Travelers", icon: "✨" },
              { number: "25+", label: "Cities Covered", icon: "🗺️" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-wine-gold mb-1 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-wine-champagne text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
