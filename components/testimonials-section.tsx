import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "FlavorPass made our anniversary celebration unforgettable! The wine recommendations were spot-on, and the vineyard tour was perfectly organized.",
      image: "/placeholder.svg?height=60&width=60",
      experience: "Romantic Wine Tour",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "As a wine enthusiast, I'm impressed by the curated selection and expert recommendations. The premium membership is worth every penny!",
      image: "/placeholder.svg?height=60&width=60",
      experience: "Premium Member",
    },
    {
      id: 3,
      name: "Anita Desai",
      location: "Bangalore",
      rating: 5,
      text: "The AI wine pairing suggestions are incredibly accurate. Found my new favorite wine through their recommendations!",
      image: "/placeholder.svg?height=60&width=60",
      experience: "Wine Discovery",
    },
  ]

  return (
    <section className="py-16 bg-wine-cream">
      <div className="container">
        <div className="text-center mb-12">
          <Badge className="bg-wine-burgundy text-white mb-4">Customer Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-wine-burgundy mb-4">What Our Guests Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from wine lovers who've discovered extraordinary experiences through FlavorPass
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative overflow-hidden">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-wine-gold mb-4" />

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>

                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-wine-burgundy">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <Badge variant="outline" className="text-xs mt-1">
                      {testimonial.experience}
                    </Badge>
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
