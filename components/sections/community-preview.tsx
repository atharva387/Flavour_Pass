"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Heart, Share2, Users, BookOpen, Award, TrendingUp, Star } from "lucide-react"

export function CommunityPreview() {
  const communityPosts = [
    {
      id: 1,
      author: {
        name: "Priya Sharma",
        avatar: "/placeholder.svg?height=40&width=40",
        badge: "Wine Enthusiast",
        level: "Gold Member",
      },
      content:
        "Just visited Sula Vineyards and tried their new Riesling! The floral notes paired beautifully with the spicy Indian appetizers. Highly recommend for wine beginners! 🍷✨",
      image: "/placeholder.svg?height=200&width=300",
      likes: 24,
      comments: 8,
      shares: 3,
      timestamp: "2 hours ago",
      tags: ["#SulaVineyards", "#Riesling", "#WineTasting"],
    },
    {
      id: 2,
      author: {
        name: "Rajesh Kumar",
        avatar: "/placeholder.svg?height=40&width=40",
        badge: "Sommelier",
        level: "Premium Member",
      },
      content:
        "Pro tip: When pairing wines with Indian cuisine, consider the spice level and cooking method. Grover Zampa's Chardonnay works wonderfully with creamy curries! What's your favorite pairing?",
      likes: 42,
      comments: 15,
      shares: 7,
      timestamp: "5 hours ago",
      tags: ["#WinePairing", "#IndianCuisine", "#ProTips"],
    },
    {
      id: 3,
      author: {
        name: "Anita Desai",
        avatar: "/placeholder.svg?height=40&width=40",
        badge: "Travel Blogger",
        level: "Explorer",
      },
      content:
        "Planning a wine tour across Maharashtra next month! Looking for recommendations on hidden gem wineries. Any suggestions from fellow wine travelers? 🗺️🍇",
      likes: 18,
      comments: 12,
      shares: 5,
      timestamp: "1 day ago",
      tags: ["#WineTour", "#Maharashtra", "#TravelTips"],
    },
  ]

  const communityStats = [
    { icon: Users, label: "Active Members", value: "25K+" },
    { icon: BookOpen, label: "Wine Reviews", value: "50K+" },
    { icon: Award, label: "Expert Contributors", value: "500+" },
    { icon: TrendingUp, label: "Monthly Posts", value: "2K+" },
  ]

  return (
    <section className="py-20 bg-wine-cream">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="bg-wine-burgundy text-white mb-4 px-4 py-2">
            <Users className="mr-2 h-4 w-4" />
            Wine Community
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-wine-burgundy mb-6">
            Join India's Largest Wine Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with fellow wine enthusiasts, share experiences, get expert advice, and discover new wines through
            our vibrant community platform
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-wine transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-wine-burgundy/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-wine-burgundy" />
                </div>
                <div className="text-2xl font-bold text-wine-burgundy mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Community Feed */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold text-wine-burgundy mb-6">Recent Community Posts</h3>

            {communityPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-wine transition-all">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Author Info */}
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-wine-burgundy">{post.author.name}</h4>
                          <Badge className="bg-wine-gold text-wine-burgundy text-xs">{post.author.badge}</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{post.author.level}</span>
                          <span>•</span>
                          <span>{post.timestamp}</span>
                        </div>
                      </div>
                    </div>

                    {/* Post Content */}
                    <p className="text-muted-foreground">{post.content}</p>

                    {/* Post Image */}
                    {post.image && (
                      <div className="h-48 bg-wine-burgundy/10 rounded-lg flex items-center justify-center">
                        <div className="text-wine-burgundy/50">Wine Experience Photo</div>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Engagement */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-wine-burgundy transition-colors">
                          <Heart className="h-4 w-4" />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-wine-burgundy transition-colors">
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-sm">{post.comments}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-wine-burgundy transition-colors">
                          <Share2 className="h-4 w-4" />
                          <span className="text-sm">{post.shares}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Community Features */}
          <div className="space-y-6">
            <Card className="bg-wine-burgundy text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-wine-gold" />
                  Wine Journal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-wine-champagne text-sm">
                  Keep track of your wine experiences, tastings, and vineyard visits in your personal wine journal.
                </p>
                <div className="space-y-2">
                  {["Log wine tastings", "Rate and review wines", "Track vineyard visits", "Share experiences"].map(
                    (feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <Star className="h-3 w-3 text-wine-gold" />
                        <span className="text-wine-champagne">{feature}</span>
                      </div>
                    ),
                  )}
                </div>
                <Button className="w-full bg-wine-gold text-wine-burgundy hover:bg-wine-gold/90">
                  Start Your Journal
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-wine-burgundy">
                  <Award className="h-5 w-5 text-wine-gold" />
                  Community Badges
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Earn badges by participating in the community and sharing your wine knowledge.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Wine Explorer", icon: "🗺️" },
                    { name: "Tasting Expert", icon: "🍷" },
                    { name: "Community Helper", icon: "🤝" },
                    { name: "Review Master", icon: "⭐" },
                  ].map((badge, index) => (
                    <div key={index} className="text-center p-3 bg-wine-cream rounded-lg">
                      <div className="text-2xl mb-1">{badge.icon}</div>
                      <div className="text-xs font-medium text-wine-burgundy">{badge.name}</div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full border-wine-burgundy text-wine-burgundy bg-transparent">
                  View All Badges
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="wine-gradient text-white px-8 py-3 hover:shadow-wine">
            <Users className="mr-2 h-5 w-5" />
            Join Wine Community
          </Button>
        </div>
      </div>
    </section>
  )
}
