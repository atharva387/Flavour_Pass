import Link from "next/link"
import { Wine, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const footerLinks = {
    discover: [
      { label: "Wine Marketplace", href: "/wines" },
      { label: "Wineries", href: "/wineries" },
      { label: "Events", href: "/events" },
      { label: "Cities", href: "/cities" },
    ],
    experience: [
      { label: "Wine Tours", href: "/tours" },
      { label: "Tastings", href: "/tastings" },
      { label: "Stays", href: "/stays" },
      { label: "Premium Club", href: "/premium" },
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "Contact Us", href: "/contact" },
      { label: "Booking Policy", href: "/policy" },
      { label: "Cancellation", href: "/cancellation" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Partners", href: "/partners" },
    ],
  }

  return (
    <footer className="bg-wine-burgundy text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-wine-gold">
                <Wine className="h-4 w-4 text-wine-burgundy" />
              </div>
              <span className="font-serif text-xl font-bold">FlavorPass</span>
            </Link>
            <p className="text-wine-cream mb-4 text-sm">
              India's premier wine experience platform connecting wine lovers with extraordinary vineyard experiences
              across the country.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="text-wine-cream hover:text-wine-gold">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-wine-cream hover:text-wine-gold">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-wine-cream hover:text-wine-gold">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-wine-cream hover:text-wine-gold">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold mb-3">Discover</h3>
            <ul className="space-y-2">
              {footerLinks.discover.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-wine-cream hover:text-wine-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Experience</h3>
            <ul className="space-y-2">
              {footerLinks.experience.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-wine-cream hover:text-wine-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-wine-cream hover:text-wine-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-wine-cream hover:text-wine-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-wine-deep-red mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-semibold mb-2">Stay Updated</h3>
              <p className="text-wine-cream text-sm">
                Get the latest wine events, exclusive offers, and vineyard news delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-wine-gold hover:bg-wine-gold/90 text-wine-burgundy">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-wine-deep-red mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-wine-gold" />
              <span className="text-wine-cream">hello@flavorpass.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-wine-gold" />
              <span className="text-wine-cream">+91 95189 43376</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-wine-gold" />
              <span className="text-wine-cream">Mumbai, India</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-wine-deep-red mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-wine-cream">
          <p>&copy; 2024 FlavorPass. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-wine-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-wine-gold transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-wine-gold transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
