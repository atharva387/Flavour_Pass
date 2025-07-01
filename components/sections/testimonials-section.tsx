import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "FlavorPass transformed our anniversary celebration! The AI wine recommendations were spot-on, and the vineyard tour was perfectly organized. The premium membership pays for itself with the exclusive experiences.",
      image: "/placeholder.svg?height=60&width=60",
      experience: "Romantic Wine Tour",
      membershipLevel: "Platinum Member",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "As a wine enthusiast, I'm impressed by the curated selection and expert recommendations. The virtual tours helped me plan my actual visits, and the community is incredibly knowledgeable!",
      image: "/placeholder.svg?height=60&width=60",
      experience: "Premium Member",
      membershipLevel: "Diamond Member",
    },
    {
      id: 3,
      name: "Anita Desai",
      location: "Bangalore",
      rating: 5,
      text: "The AI wine pairing suggestions are incredibly accurate. Found my new favorite wine through their recommendations, and the AR label scanner is a game-changer for wine shopping!",
      image: "/placeholder.svg?height=60&width=60",
      experience: "Wine Discovery",
      membershipLevel: "Gold Member",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="bg-wine-burgundy text-white mb-4 px-4 py-2">Customer Stories</Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-wine-burgundy mb-6">What Our Members Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from wine lovers who've discovered extraordinary experiences through FlavorPass
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative overflow-hidden hover:shadow-wine transition-all">
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-wine-gold mb-6" />

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-8 italic leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-wine-burgundy text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-wine-burgundy">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <div className="flex gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.experience}
                      </Badge>
                      <Badge className="bg-wine-gold text-wine-burgundy text-xs">{testimonial.membershipLevel}</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
