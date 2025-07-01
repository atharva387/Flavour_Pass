"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Crown, Check, Sparkles, Gift, Calendar, Percent, Star, Zap } from "lucide-react"

export default function PremiumPage() {
  const [selectedTier, setSelectedTier] = useState("platinum")

  const membershipTiers = [
    {
      name: "Gold",
      price: 2999,
      originalPrice: 4999,
      period: "year",
      color: "bg-yellow-500",
      popular: false,
      features: [
        "15% discount on all bookings",
        "Monthly wine newsletter",
        "Basic AI recommendations",
        "Standard customer support",
        "Access to member events",
      ],
      exclusiveFeatures: [],
    },
    {
      name: "Platinum",
      price: 4999,
      originalPrice: 7999,
      period: "year",
      color: "bg-gray-400",
      popular: true,
      features: [
        "25% discount on all bookings",
        "Quarterly premium events",
        "Advanced AI sommelier",
        "Priority customer support",
        "Personal wine consultant",
        "Free wine delivery",
        "Monthly wine magazine",
      ],
      exclusiveFeatures: ["Exclusive vineyard access", "Private tasting sessions"],
    },
    {
      name: "Diamond",
      price: 9999,
      originalPrice: 14999,
      period: "year",
      color: "bg-blue-500",
      popular: false,
      features: [
        "30% discount on all bookings",
        "Unlimited private experiences",
        "Personal sommelier service",
        "24/7 concierge support",
        "Exclusive wine collection access",
        "Premium wine storage",
        "Custom wine experiences",
        "Annual vineyard retreat",
      ],
      exclusiveFeatures: ["Ultra-rare wine access", "Master sommelier sessions", "Collector's wine auctions"],
    },
  ]

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

  const memberTestimonials = [
    {
      name: "Arjun Mehta",
      tier: "Diamond Member",
      quote:
        "The Diamond membership has transformed my wine journey. Access to rare wines and personal sommelier service is unmatched.",
      rating: 5,
    },
    {
      name: "Kavya Patel",
      tier: "Platinum Member",
      quote:
        "Best investment for wine lovers! The exclusive events and discounts have already paid for the membership.",
      rating: 5,
    },
    {
      name: "Rohit Sharma",
      tier: "Gold Member",
      quote: "Great entry point into premium wine experiences. The AI recommendations are spot-on!",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-wine-burgundy to-wine-charcoal text-white py-20">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-wine-gold text-wine-burgundy mb-4 px-4 py-2">
              <Crown className="mr-2 h-4 w-4" />
              Premium Experience
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">FlavorPass Premium Club</h1>
            <p className="text-xl text-wine-champagne mb-8">
              Unlock exclusive benefits, premium experiences, and personalized wine journeys with our membership program
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gold-gradient text-wine-burgundy">
                <Crown className="mr-2 h-5 w-5" />
                Join Premium
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Compare Plans
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16">
        {/* Premium Benefits */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-wine-burgundy mb-4">
              Premium Member Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience wine tourism like never before with exclusive access and personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-wine transition-all group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-wine-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-wine-burgundy/20 transition-colors">
                    <benefit.icon className="h-8 w-8 text-wine-burgundy" />
                  </div>
                  <Badge className="bg-wine-gold text-wine-burgundy mb-3 text-xs">{benefit.highlight}</Badge>
                  <h3 className="font-semibold text-wine-burgundy mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-wine-burgundy mb-4">
              Choose Your Membership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the perfect membership tier for your wine journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-wine transition-all cursor-pointer ${
                  tier.popular ? "ring-2 ring-wine-gold scale-105" : ""
                } ${selectedTier === tier.name.toLowerCase() ? "ring-2 ring-wine-burgundy" : ""}`}
                onClick={() => setSelectedTier(tier.name.toLowerCase())}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-wine-gold text-wine-burgundy px-4 py-1">
                    <Star className="mr-1 h-3 w-3" />
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`w-4 h-4 ${tier.color} rounded-full`} />
                  </div>
                  <CardTitle className="text-2xl font-display">{tier.name} Membership</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold text-wine-burgundy">₹{tier.price}</span>
                      <span className="text-wine-champagne">/{tier.period}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-sm text-muted-foreground line-through">₹{tier.originalPrice}</span>
                      <Badge className="bg-green-600 text-white text-xs">Save ₹{tier.originalPrice - tier.price}</Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-wine-gold flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {tier.exclusiveFeatures.length > 0 && (
                    <div className="pt-4 border-t">
                      <p className="text-sm font-medium text-wine-burgundy mb-3">Exclusive Features:</p>
                      <div className="space-y-2">
                        {tier.exclusiveFeatures.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <Sparkles className="h-4 w-4 text-wine-gold flex-shrink-0 mt-0.5" />
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button
                    className={`w-full py-3 ${
                      tier.popular
                        ? "gold-gradient text-wine-burgundy hover:shadow-gold"
                        : "wine-gradient text-white hover:shadow-wine"
                    }`}
                  >
                    <Crown className="mr-2 h-4 w-4" />
                    Choose {tier.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Member Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-wine-burgundy mb-4">
              What Our Members Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from premium members about their exclusive experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memberTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-wine transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="font-semibold text-wine-burgundy">{testimonial.name}</h4>
                    <Badge className="bg-wine-gold text-wine-burgundy text-xs">{testimonial.tier}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Benefits */}
        <Card className="bg-wine-cream">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-wine-burgundy mb-4">All Premium Members Get</h3>
              <p className="text-muted-foreground">Exclusive benefits that enhance your wine journey</p>
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
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-xs text-muted-foreground mb-4">
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
    </div>
  )
}
