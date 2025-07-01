"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Wine,
  Calendar,
  Building2,
  Crown,
  Search,
  Menu,
  X,
  User,
  ShoppingBag,
  MessageCircle,
  Compass,
  Camera,
  Heart,
  Bell,
  Settings,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(3)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/discover", label: "Discover", icon: Compass, description: "Smart Wine Discovery" },
    { href: "/shop", label: "Shop", icon: Wine, description: "Wine Marketplace" },
    { href: "/experiences", label: "Experiences", icon: Calendar, description: "Tours & Events" },
    { href: "/wineries", label: "Wineries", icon: Building2, description: "Vineyard Listings" },
    { href: "/virtual-tours", label: "Virtual Tours", icon: Camera, description: "360° Experiences" },
    { href: "/community", label: "Community", icon: MessageCircle, description: "Wine Social" },
    { href: "/premium", label: "Premium", icon: Crown, description: "VIP Club" },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl wine-gradient shadow-wine group-hover:shadow-lg transition-all duration-300">
              <Wine className="h-5 w-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-wine-gold rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl font-bold text-wine-burgundy">FlavorPass</span>
            <span className="text-xs text-wine-gold font-medium -mt-1">Premium Wine Experiences</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-wine-burgundy bg-wine-cream"
                    : "text-muted-foreground hover:text-wine-burgundy hover:bg-wine-cream/50"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
                {item.label === "Premium" && (
                  <Badge className="ml-1 bg-wine-gold text-wine-burgundy text-xs px-1.5 py-0.5">VIP</Badge>
                )}

                {/* Tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-wine-charcoal text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {item.description}
                </div>
              </Link>
            )
          })}
        </div>

        {/* Search Bar */}
        <div className="hidden xl:flex items-center space-x-2 flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search wines, wineries, experiences..."
              className="pl-10 bg-wine-cream/30 border-wine-champagne focus:border-wine-gold transition-colors"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-3">
          {/* AI Concierge */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex relative group hover:bg-wine-cream"
            title="AI Wine Concierge"
          >
            <MessageCircle className="h-5 w-5 text-wine-burgundy" />
            <div className="absolute -top-1 -right-1 h-2 w-2 bg-green-500 rounded-full animate-pulse" />
          </Button>

          {/* Wishlist */}
          <Button variant="ghost" size="icon" className="hidden md:flex relative hover:bg-wine-cream" title="Wishlist">
            <Heart className="h-5 w-5 text-wine-burgundy" />
            <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 bg-wine-gold text-wine-burgundy text-xs flex items-center justify-center">
              5
            </Badge>
          </Button>

          {/* Shopping Cart */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex relative hover:bg-wine-cream"
            title="Shopping Cart"
          >
            <ShoppingBag className="h-5 w-5 text-wine-burgundy" />
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 bg-wine-burgundy text-white text-xs flex items-center justify-center">
                {cartCount}
              </Badge>
            )}
          </Button>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex relative hover:bg-wine-cream"
            title="Notifications"
          >
            <Bell className="h-5 w-5 text-wine-burgundy" />
            <div className="absolute -top-1 -right-1 h-2 w-2 bg-wine-gold rounded-full" />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full hover:bg-wine-cream">
                <Avatar className="h-10 w-10 border-2 border-wine-gold">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                  <AvatarFallback className="bg-wine-burgundy text-white font-semibold">JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">Premium Member</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>My Bookings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ShoppingBag className="mr-2 h-4 w-4" />
                <span>Order History</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Heart className="mr-2 h-4 w-4" />
                <span>Wishlist</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden hover:bg-wine-cream"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-background/95 backdrop-blur-lg">
          <div className="container py-6 space-y-6">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search wines, wineries..." className="pl-10 bg-wine-cream/30 border-wine-champagne" />
            </div>

            {/* Mobile Navigation */}
            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg border border-wine-champagne hover:bg-wine-cream transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-6 w-6 text-wine-burgundy" />
                  <span className="text-sm font-medium text-wine-burgundy">{item.label}</span>
                  {item.label === "Premium" && <Badge className="bg-wine-gold text-wine-burgundy text-xs">VIP</Badge>}
                </Link>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex justify-center space-x-4 pt-4 border-t">
              <Button className="flex-1 wine-gradient text-white">Sign In</Button>
              <Button variant="outline" className="flex-1 border-wine-burgundy text-wine-burgundy bg-transparent">
                Join Premium
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
