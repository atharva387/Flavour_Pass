"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Heart, Share2, Users, BookOpen, Award, TrendingUp, Star, Plus, Search } from "lucide-react"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("feed")
  const [newPost, setNewPost] = useState("")

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

  const trendingTopics = [
    { tag: "#OrganicWines", posts: 234 },
    { tag: "#VintageCollection", posts: 189 },
    { tag: "#WinePairing", posts: 156 },
    { tag: "#HarvestSeason", posts: 123 },
    { tag: "#SommelierTips", posts: 98 },
  ]

  const tabs = [
    { id: "feed", label: "Community Feed" },
    { id: "reviews", label: "Wine Reviews" },
    { id: "events", label: "Community Events" },
    { id: "groups", label: "Wine Groups" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-wine-burgundy text-white py-20">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-wine-gold text-wine-burgundy mb-4 px-4 py-2">
              <Users className="mr-2 h-4 w-4" />
              Wine Community
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Join India's Wine Community</h1>
            <p className="text-xl text-wine-champagne mb-8">
              Connect with fellow wine enthusiasts, share experiences, get expert advice, and discover new wines through
              our vibrant community
            </p>
            <Button size="lg" className="gold-gradient text-wine-burgundy">
              <Plus className="mr-2 h-5 w-5" />
              Join Community
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 -mt-16 relative z-10">
          {communityStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-wine transition-all bg-white">
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

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-wine-cream rounded-lg p-1">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`${
                  activeTab === tab.id ? "bg-wine-burgundy text-white" : "text-wine-burgundy hover:bg-white/50"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "feed" && (
              <div className="space-y-6">
                {/* Create Post */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="You" />
                        <AvatarFallback>YU</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <Textarea
                          placeholder="Share your wine experience..."
                          value={newPost}
                          onChange={(e) => setNewPost(e.target.value)}
                          className="mb-4"
                        />
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Add Photo
                            </Button>
                            <Button variant="outline" size="sm">
                              Tag Wine
                            </Button>
                          </div>
                          <Button className="wine-gradient text-white">Share Post</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Community Posts */}
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
                            <Badge key={index} variant="outline" className="text-xs cursor-pointer hover:bg-wine-cream">
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
            )}

            {activeTab === "reviews" && (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-wine-burgundy/30 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-wine-burgundy mb-2">Wine Reviews</h3>
                <p className="text-muted-foreground">Community wine reviews and ratings coming soon!</p>
              </div>
            )}

            {activeTab === "events" && (
              <div className="text-center py-12">
                <Award className="h-16 w-16 text-wine-burgundy/30 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-wine-burgundy mb-2">Community Events</h3>
                <p className="text-muted-foreground">Virtual tastings and community events coming soon!</p>
              </div>
            )}

            {activeTab === "groups" && (
              <div className="text-center py-12">
                <Users className="h-16 w-16 text-wine-burgundy/30 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-wine-burgundy mb-2">Wine Groups</h3>
                <p className="text-muted-foreground">Join specialized wine interest groups coming soon!</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search */}
            <Card>
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search community..." className="pl-10" />
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-wine-burgundy">
                  <TrendingUp className="h-5 w-5" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-wine-burgundy cursor-pointer hover:underline">
                      {topic.tag}
                    </span>
                    <Badge variant="outline" className="text-xs">
                      {topic.posts}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Wine Journal */}
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

            {/* Community Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-wine-burgundy">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Be respectful and supportive</p>
                <p>• Share authentic experiences</p>
                <p>• No spam or promotional content</p>
                <p>• Drink responsibly</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
