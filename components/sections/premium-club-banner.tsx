"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Crown, Check, Sparkles, Gift, Calendar, Percent, Star, Zap } from "lucide-react"

export function PremiumClubBanner() {
  const premiumBenefits = [
    {
      icon: Gift,
      title: "Exclusive Access",
      description: "Private tastings and VIP vineyard experiences",
      highlight: "Members Only",
    },
    {
      icon: Percent,
      title: "Premium Discounts",
      description: "Up to 30% off on all bookings and wine purchases",
      highlight: "Save More",
    },
    {
      icon: Calendar,
      title: "Early Bird Access",
      description: "Book premium events before general public",
      highlight: "Priority Booking",
    },
    {
      icon: Sparkles,
      title: "AI Concierge Plus",
      description: "Advanced AI recommendations and personal sommelier",
      highlight: "Enhanced AI",
    },
  ]

  const membershipTiers = [
    {
      name: "Gold",
      price: 2999,
      originalPrice: 4999,
      period: "year",
      color: "bg-yellow-500",
      features: ["Basic benefits", "15% discounts", "Monthly newsletter"],
      popular: false,
    },
    {
      name: "Platinum",
      price: 4999,
      originalPrice: 7999,
      period: "year",
      color: "bg-gray-400",
      features: ["All Gold benefits", "25% discounts", "Quarterly events", "Personal consultant"],
      popular: true,
    },
    {
      name: "Diamond",
      price: 9999,
      originalPrice: 14999,
      period: "year",
      color: "bg-blue-500",
      features: ["All Platinum benefits", "30% discounts", "Private experiences", "Concierge service"],
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-wine-burgundy to-wine-charcoal text-white">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="bg-wine-gold text-wine-burgundy mb-4 px-4 py-2">
            <Crown className="mr-2 h-4 w-4" />
            Premium Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Join FlavorPass Premium Club</h2>
          <p className="text-xl text-wine-champagne max-w-3xl mx-auto leading-relaxed">
            Unlock exclusive benefits, premium experiences, and personalized wine journeys with our membership program
          </p>
        </div>

        {/* Premium Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {premiumBenefits.map((benefit, index) => (
            <Card key={index} className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-wine-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-wine-gold" />
                </div>
                <Badge className="bg-wine-gold text-wine-burgundy mb-3 text-xs">{benefit.highlight}</Badge>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-wine-champagne text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Membership Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {membershipTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all ${
                tier.popular ? "ring-2 ring-wine-gold scale-105" : ""
              }`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-wine-gold text-wine-burgundy px-4 py-1">
                  <Star className="mr-1 h-3 w-3" />
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`w-3 h-3 ${tier.color} rounded-full`} />
                </div>
                <CardTitle className="text-2xl font-display">{tier.name} Membership</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-bold">₹{tier.price}</span>
                    <span className="text-wine-champagne">/{tier.period}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-wine-champagne line-through">₹{tier.originalPrice}</span>
                    <Badge className="bg-green-600 text-white text-xs">Save ₹{tier.originalPrice - tier.price}</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-wine-gold flex-shrink-0" />
                      <span className="text-sm text-wine-champagne">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full py-3 ${
                    tier.popular
                      ? "gold-gradient text-wine-burgundy hover:shadow-gold"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  <Crown className="mr-2 h-4 w-4" />
                  Choose {tier.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <Card className="bg-white/5 border-white/10 text-white">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">All Premium Members Get</h3>
              <p className="text-wine-champagne">Exclusive benefits that enhance your wine journey</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Complimentary wine delivery across India",
                "Priority customer support with dedicated line",
                "Monthly premium wine magazine subscription",
                "Exclusive member-only events and tastings",
                "Personal wine consultant for recommendations",
                "Birthday and anniversary special offers",
                "Access to limited edition and rare wines",
                "Invitation to harvest season celebrations",
                "Free wine storage and aging consultation",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-wine-gold flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-wine-champagne">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-xs text-wine-champagne mb-4">
                30-day money-back guarantee • Cancel anytime • No hidden fees
              </p>
              <Button size="lg" className="gold-gradient text-wine-burgundy px-8 py-3 hover:shadow-gold">
                <Crown className="mr-2 h-5 w-5" />
                Start Premium Membership
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
