"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Wine, CheckCircle } from "lucide-react"

interface BookingSummaryProps {
  item: any
  quantity: number
  total: number
}

export function BookingSummary({ item, quantity, total }: BookingSummaryProps) {
  if (!item) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No booking details available</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-center">
        <h3 className="text-lg sm:text-xl font-semibold text-wine-burgundy mb-2">Booking Summary</h3>
        <p className="text-sm sm:text-base text-muted-foreground">Review your booking details before payment</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-wine-burgundy text-base sm:text-lg">
            <Wine className="h-4 w-4 sm:h-5 sm:w-5" />
            Booking Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 sm:gap-4">
            <div className="w-16 h-20 sm:w-20 sm:h-24 bg-wine-cream rounded-lg flex items-center justify-center flex-shrink-0">
              <Wine className="h-6 w-6 sm:h-8 sm:w-8 text-wine-burgundy" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-wine-burgundy text-sm sm:text-base line-clamp-2">{item.name}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {item.vineyard || item.duration || item.location}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" className="text-xs">
                  {item.type || "Experience"}
                </Badge>
                {item.rating && (
                  <div className="flex items-center gap-1">
                    <span className="text-xs sm:text-sm">⭐ {item.rating}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-2 sm:space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Quantity/Guests:</span>
              <span className="font-medium">{quantity}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Price per item:</span>
              <span className="font-medium">₹{item.price}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal:</span>
              <span className="font-medium">₹{item.price * quantity}</span>
            </div>
          </div>

          <Separator />

          <div className="flex justify-between text-base sm:text-lg font-semibold">
            <span>Total Amount:</span>
            <span className="text-wine-burgundy">₹{total}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-wine-burgundy text-base sm:text-lg">What's Included</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {item.includes ? (
              item.includes.map((inclusion: string, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{inclusion}</span>
                </div>
              ))
            ) : (
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Premium experience included</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="bg-wine-cream p-3 sm:p-4 rounded-lg">
        <h4 className="font-medium text-wine-burgundy mb-2 text-sm sm:text-base">Important Information</h4>
        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
          <li>• Please arrive 15 minutes before your scheduled time</li>
          <li>• Cancellation allowed up to 24 hours before the experience</li>
          <li>• Valid ID required for all participants</li>
          <li>• Age restrictions may apply for certain experiences</li>
        </ul>
      </div>
    </div>
  )
}
