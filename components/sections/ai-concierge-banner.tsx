"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, Bot, User, Sparkles, Wine, Utensils, MapPin, Clock, Star } from "lucide-react"

export function AIConciergeBanner() {
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "bot",
      message:
        "Hello! I'm your AI wine concierge. I can help you discover perfect wines, plan vineyard visits, and suggest food pairings. What would you like to explore today?",
      timestamp: "2:30 PM",
    },
    {
      id: 2,
      type: "user",
      message: "I'm planning a romantic dinner. Can you suggest a wine that pairs well with Indian cuisine?",
      timestamp: "2:31 PM",
    },
    {
      id: 3,
      type: "bot",
      message:
        "Perfect choice for romance! For Indian cuisine, I recommend a Sula Dindori Reserve Shiraz. Its rich, full-bodied character complements spicy dishes beautifully. The wine has notes of blackberry and spice that enhance the complex flavors of Indian food. Would you like me to find wineries near you where you can experience this wine?",
      timestamp: "2:31 PM",
    },
  ])

  const [newMessage, setNewMessage] = useState("")

  const quickSuggestions = [
    { icon: Wine, text: "Recommend wines for beginners" },
    { icon: Utensils, text: "Food pairing suggestions" },
    { icon: MapPin, text: "Best wineries near me" },
    { icon: Clock, text: "Plan weekend wine tour" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-wine-burgundy to-wine-charcoal text-white">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="bg-wine-gold text-wine-burgundy mb-4 px-4 py-2">
            <Bot className="mr-2 h-4 w-4" />
            AI-Powered Assistant
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Meet Your Personal Wine Concierge</h2>
          <p className="text-xl text-wine-champagne max-w-3xl mx-auto leading-relaxed">
            Our AI sommelier understands your taste preferences, suggests perfect pairings, and helps you discover new
            wines tailored to your palate and occasions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chat Interface */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-0">
                {/* Chat Header */}
                <div className="flex items-center gap-3 p-4 border-b border-white/20">
                  <div className="relative">
                    <div className="w-10 h-10 bg-wine-gold rounded-full flex items-center justify-center">
                      <Bot className="h-5 w-5 text-wine-burgundy" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-wine-burgundy" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Wine Concierge</h3>
                    <p className="text-xs text-wine-champagne">Online • Responds instantly</p>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-4">
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {message.type === "bot" && (
                        <div className="w-8 h-8 bg-wine-gold rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-wine-burgundy" />
                        </div>
                      )}

                      <div
                        className={`max-w-xs lg:max-w-sm ${
                          message.type === "user" ? "bg-wine-gold text-wine-burgundy" : "bg-white/10 text-white"
                        } rounded-2xl px-4 py-3`}
                      >
                        <p className="text-sm">{message.message}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.type === "user" ? "text-wine-burgundy/70" : "text-wine-champagne"
                          }`}
                        >
                          {message.timestamp}
                        </p>
                      </div>

                      {message.type === "user" && (
                        <div className="w-8 h-8 bg-wine-burgundy rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-white/20">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask about wines, pairings, or experiences..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                    <Button size="icon" className="bg-wine-gold text-wine-burgundy hover:bg-wine-gold/90">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features & Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">What I Can Help You With</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Wine,
                      title: "Wine Recommendations",
                      description: "Get personalized wine suggestions based on your taste preferences and budget",
                    },
                    {
                      icon: Utensils,
                      title: "Food Pairing Expertise",
                      description: "Discover perfect wine and food combinations for any cuisine or occasion",
                    },
                    {
                      icon: MapPin,
                      title: "Vineyard Discovery",
                      description: "Find the best wineries and experiences near you or your travel destination",
                    },
                    {
                      icon: Star,
                      title: "Experience Planning",
                      description: "Plan complete wine tours, tastings, and romantic getaways",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-wine-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-wine-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-wine-champagne text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Suggestions */}
              <div>
                <h4 className="font-semibold mb-3">Try asking me:</h4>
                <div className="space-y-2">
                  {quickSuggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start border-white/20 text-white hover:bg-white/10 h-auto py-3 bg-transparent"
                    >
                      <suggestion.icon className="mr-3 h-4 w-4 text-wine-gold" />
                      {suggestion.text}
                    </Button>
                  ))}
                </div>
              </div>

              <Button className="w-full gold-gradient text-wine-burgundy py-3 text-lg font-semibold">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Chatting with AI Concierge
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
