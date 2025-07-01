"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Wine, Award } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Wine,
      number: "200+",
      label: "Premium Wineries",
      description: "Curated selection across India",
      color: "text-wine-burgundy",
    },
    {
      icon: Users,
      number: "50K+",
      label: "Happy Travelers",
      description: "Satisfied wine enthusiasts",
      color: "text-wine-gold",
    },
    {
      icon: Award,
      number: "1000+",
      label: "Wine Varieties",
      description: "From India's finest vineyards",
      color: "text-wine-burgundy",
    },
    {
      icon: TrendingUp,
      number: "25+",
      label: "Cities Covered",
      description: "Across India's wine regions",
      color: "text-wine-gold",
    },
  ]

  return (
    <section className="py-16 bg-wine-cream">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-wine transition-all group">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div
                    className={`w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}
                  >
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color}`}>{stat.number}</div>
                  <div className="text-wine-burgundy font-semibold">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
