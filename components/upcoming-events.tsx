import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, Ticket } from "lucide-react"
import Image from "next/image"

export function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: "Wine & Dine Festival",
      date: "2024-02-15",
      time: "6:00 PM - 10:00 PM",
      location: "Sula Vineyards, Nashik",
      image: "/placeholder.svg?height=200&width=300",
      price: 2500,
      attendees: 45,
      maxAttendees: 60,
      type: "Festival",
      description: "An evening of premium wines paired with gourmet cuisine",
    },
    {
      id: 2,
      title: "Harvest Season Celebration",
      date: "2024-02-20",
      time: "4:00 PM - 8:00 PM",
      location: "Grover Zampa, Bangalore",
      image: "/placeholder.svg?height=200&width=300",
      price: 1800,
      attendees: 28,
      maxAttendees: 40,
      type: "Celebration",
      description: "Celebrate the harvest season with exclusive wine tastings",
    },
    {
      id: 3,
      title: "Sommelier Masterclass",
      date: "2024-02-25",
      time: "2:00 PM - 5:00 PM",
      location: "Fratelli Wines, Akluj",
      image: "/placeholder.svg?height=200&width=300",
      price: 3500,
      attendees: 12,
      maxAttendees: 20,
      type: "Masterclass",
      description: "Learn from expert sommeliers about wine tasting techniques",
    },
    {
      id: 4,
      title: "Rosé Garden Party",
      date: "2024-03-01",
      time: "5:00 PM - 9:00 PM",
      location: "York Winery, Nashik",
      image: "/placeholder.svg?height=200&width=300",
      price: 2200,
      attendees: 35,
      maxAttendees: 50,
      type: "Party",
      description: "An elegant evening celebrating rosé wines in a garden setting",
    },
  ]

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Festival":
        return "bg-purple-100 text-purple-700"
      case "Celebration":
        return "bg-green-100 text-green-700"
      case "Masterclass":
        return "bg-blue-100 text-blue-700"
      case "Party":
        return "bg-pink-100 text-pink-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge className="bg-wine-gold text-wine-burgundy mb-4">Exclusive Events</Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-wine-burgundy mb-4">Upcoming Wine Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join exclusive wine events, tastings, and masterclasses across India's premier wineries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-2 left-2 ${getEventTypeColor(event.type)}`}>{event.type}</Badge>
                <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1">
                  <span className="text-xs font-medium text-wine-burgundy">₹{event.price}</span>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="space-y-3">
                  <h3 className="font-semibold text-wine-burgundy line-clamp-2">{event.title}</h3>

                  <p className="text-xs text-muted-foreground line-clamp-2">{event.description}</p>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(event.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>
                        {event.attendees}/{event.maxAttendees} attending
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t">
                    <Button className="w-full wine-gradient text-white" size="sm">
                      <Ticket className="mr-2 h-4 w-4" />
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-wine-burgundy text-wine-burgundy hover:bg-wine-burgundy hover:text-white bg-transparent"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  )
}
