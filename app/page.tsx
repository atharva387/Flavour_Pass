import { HeroSection } from "@/components/sections/hero-section"
import { SmartDiscoveryPreview } from "@/components/sections/smart-discovery-preview"
import { FeaturedWinesSection } from "@/components/sections/featured-wines-section"
import { BookingEnginePreview } from "@/components/sections/booking-engine-preview"
import { VirtualToursPreview } from "@/components/sections/virtual-tours-preview"
import { AIConciergeBanner } from "@/components/sections/ai-concierge-banner"
import { PopularWineriesSection } from "@/components/sections/popular-wineries-section"
import { UpcomingEventsSection } from "@/components/sections/upcoming-events-section"
import { CommunityPreview } from "@/components/sections/community-preview"
import { PremiumClubBanner } from "@/components/sections/premium-club-banner"
import { StatsSection } from "@/components/sections/stats-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <SmartDiscoveryPreview />
      <FeaturedWinesSection />
      <BookingEnginePreview />
      <VirtualToursPreview />
      <AIConciergeBanner />
      <PopularWineriesSection />
      <UpcomingEventsSection />
      <CommunityPreview />
      <TestimonialsSection />
      <PremiumClubBanner />
    </div>
  )
}
