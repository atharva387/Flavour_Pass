import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Crown, Check, Sparkles, Gift, Calendar, Percent } from "lucide-react"

export function PremiumMembership() {
  const benefits = [
    {
      icon: Gift,
      title: "Exclusive Access",
      description: "Private tastings and VIP vineyard experiences",
    },
    {
      icon: Percent,
      title: "Member Discounts",
      description: "Up to 25% off on all bookings and wine purchases",
    },
    {
      icon: Calendar,
      title: "Early Bird Access",
      description: "Book premium events before general public",
    },
    {
      icon: Sparkles,
      title: "Curated Experiences",
      description: "Personalized wine experiences tailored for you",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge className="bg-wine-gold text-wine-burgundy mb-4">
            <Crown className="mr-1 h-3 w-3" />
            Premium Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-wine-burgundy mb-4">Join FlavorPass Premium</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlock exclusive benefits and elevate your wine journey with premium membership
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 wine-gradient opacity-5" />
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-wine-gold">
                  <Crown className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-2xl font-serif text-wine-burgundy">Premium Membership</CardTitle>
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="text-3xl font-bold text-wine-burgundy">₹4,999</span>
                <span className="text-muted-foreground">/year</span>
                <Badge className="bg-wine-gold text-wine-burgundy">Save 40%</Badge>
              </div>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-wine-cream">
                      <benefit.icon className="h-5 w-5 text-wine-burgundy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-wine-burgundy mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-8">
                <h3 className="font-semibold text-wine-burgundy">Additional Benefits:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Complimentary wine delivery",
                    "Priority customer support",
                    "Monthly wine magazine",
                    "Exclusive member events",
                    "Personal wine consultant",
                    "Birthday special offers",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button className="wine-gradient text-white px-8 py-3 text-lg">
                  <Crown className="mr-2 h-5 w-5" />
                  Become a Premium Member
                </Button>
                <p className="text-xs text-muted-foreground mt-2">30-day money-back guarantee • Cancel anytime</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
