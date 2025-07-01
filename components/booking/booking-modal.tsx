"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Wine, Star, Plus, Minus, CheckCircle, X } from "lucide-react"
import { BookingSummary } from "./booking-summary"
import { PaymentForm } from "./payment-form"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  item?: any
  experience?: any
  type?: "wine" | "experience" | "accommodation" | "transport"
}

export function BookingModal({ isOpen, onClose, item, experience, type = "wine" }: BookingModalProps) {
  const [step, setStep] = useState(1)
  const [quantity, setQuantity] = useState(1)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [guests, setGuests] = useState(2)
  const [specialRequests, setSpecialRequests] = useState("")
  const [deliveryOption, setDeliveryOption] = useState("standard")
  const [giftWrap, setGiftWrap] = useState(false)

  const totalSteps = 3

  // Use experience if provided, otherwise use item
  const bookingItem = experience || item

  // Return early if no item to book
  if (!bookingItem) {
    return null
  }

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const calculateTotal = () => {
    let total = bookingItem.price * quantity

    if (deliveryOption === "express") {
      total += 200
    } else if (deliveryOption === "premium") {
      total += 500
    }

    if (giftWrap) {
      total += 150
    }

    return total
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-wine-burgundy mb-2">Booking Details</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Configure your booking preferences</p>
            </div>

            {/* Item Details */}
            <Card>
              <CardContent className="p-3 sm:p-4">
                <div className="flex gap-3 sm:gap-4">
                  <div className="w-16 h-20 sm:w-20 sm:h-24 bg-wine-cream rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wine className="h-6 w-6 sm:h-8 sm:w-8 text-wine-burgundy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-wine-burgundy text-sm sm:text-base line-clamp-2">
                      {bookingItem.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {bookingItem.vineyard || bookingItem.duration || bookingItem.location}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs sm:text-sm">{bookingItem.rating || "4.5"}</span>
                      <Badge variant="outline" className="text-xs">
                        {bookingItem.type || "Experience"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-base sm:text-lg font-bold text-wine-burgundy">₹{bookingItem.price}</span>
                      {bookingItem.originalPrice && bookingItem.originalPrice > bookingItem.price && (
                        <span className="text-xs sm:text-sm text-muted-foreground line-through">
                          ₹{bookingItem.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quantity/Guests */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold">{type === "experience" ? "Number of Guests" : "Quantity"}</Label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="h-8 w-8 sm:h-10 sm:w-10"
                >
                  <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <span className="w-8 sm:w-12 text-center font-semibold text-sm sm:text-base">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-8 w-8 sm:h-10 sm:w-10"
                >
                  <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <div className="ml-2 sm:ml-4 text-xs sm:text-sm text-muted-foreground">
                  {bookingItem.stockCount && bookingItem.stockCount <= 10 && (
                    <span className="text-red-600">Only {bookingItem.stockCount} left in stock</span>
                  )}
                  {bookingItem.maxGuests && (
                    <span className="text-muted-foreground">Max {bookingItem.maxGuests} guests</span>
                  )}
                </div>
              </div>
            </div>

            {/* Date Selection */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold">
                {type === "experience" ? "Experience Date" : "Preferred Delivery Date"}
              </Label>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-wine-burgundy" />
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="text-sm"
                />
              </div>
            </div>

            {/* Time Selection for Experiences */}
            {type === "experience" && (
              <div className="space-y-3">
                <Label className="text-sm font-semibold">Preferred Time</Label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full p-2 border rounded-md text-sm"
                >
                  <option value="">Select time</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>
            )}

            {/* Delivery Options for Wine */}
            {type === "wine" && (
              <div className="space-y-3">
                <Label className="text-sm font-semibold">Delivery Option</Label>
                <div className="space-y-2">
                  {[
                    { id: "standard", name: "Standard Delivery", time: "5-7 business days", price: "Free" },
                    { id: "express", name: "Express Delivery", time: "2-3 business days", price: "₹200" },
                    { id: "premium", name: "Premium Delivery", time: "Next day delivery", price: "₹500" },
                  ].map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={option.id}
                        name="delivery"
                        value={option.id}
                        checked={deliveryOption === option.id}
                        onChange={(e) => setDeliveryOption(e.target.value)}
                      />
                      <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                        <div className="flex justify-between">
                          <div>
                            <div className="font-medium text-sm">{option.name}</div>
                            <div className="text-xs text-muted-foreground">{option.time}</div>
                          </div>
                          <div className={`font-medium text-sm ${option.price === "Free" ? "text-green-600" : ""}`}>
                            {option.price}
                          </div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gift Options for Wine */}
            {type === "wine" && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="gift-wrap"
                    checked={giftWrap}
                    onChange={(e) => setGiftWrap(e.target.checked)}
                  />
                  <Label htmlFor="gift-wrap" className="flex-1 cursor-pointer">
                    <div className="flex justify-between">
                      <div>
                        <div className="font-medium text-sm">Gift Wrapping</div>
                        <div className="text-xs text-muted-foreground">Premium gift box with ribbon</div>
                      </div>
                      <div className="font-medium text-sm">₹150</div>
                    </div>
                  </Label>
                </div>
              </div>
            )}

            {/* Special Requests */}
            <div className="space-y-3">
              <Label className="text-sm font-semibold">Special Requests (Optional)</Label>
              <Textarea
                placeholder="Any special instructions for your booking..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                rows={3}
                className="text-sm"
              />
            </div>
          </div>
        )

      case 2:
        return <BookingSummary item={bookingItem} quantity={quantity} total={calculateTotal()} />

      case 3:
        return <PaymentForm total={calculateTotal()} onSuccess={() => {}} />

      default:
        return null
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xs sm:max-w-lg lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
        <DialogHeader className="relative">
          <DialogTitle className="flex items-center gap-2 text-wine-burgundy text-base sm:text-lg pr-8">
            <Wine className="h-4 w-4 sm:h-5 sm:w-5" />
            Complete Your Booking
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-0 top-0 h-6 w-6 sm:h-8 sm:w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
                  step >= stepNumber ? "bg-wine-burgundy text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {step > stepNumber ? <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" /> : stepNumber}
              </div>
              {stepNumber < 3 && (
                <div
                  className={`w-8 sm:w-16 h-0.5 sm:h-1 mx-1 sm:mx-2 ${
                    step > stepNumber ? "bg-wine-burgundy" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Labels */}
        <div className="flex justify-between text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
          <span className={step >= 1 ? "text-wine-burgundy font-medium" : ""}>Details</span>
          <span className={step >= 2 ? "text-wine-burgundy font-medium" : ""}>Review</span>
          <span className={step >= 3 ? "text-wine-burgundy font-medium" : ""}>Payment</span>
        </div>

        {/* Step Content */}
        <div className="mb-4 sm:mb-6">{renderStepContent()}</div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={step === 1}
            className="order-2 sm:order-1 bg-transparent"
          >
            Previous
          </Button>

          <div className="flex flex-col sm:flex-row gap-2 order-1 sm:order-2">
            <Button variant="outline" onClick={onClose} className="sm:order-2 bg-transparent">
              Cancel
            </Button>
            {step < totalSteps ? (
              <Button onClick={handleNext} className="wine-gradient text-white sm:order-1">
                Next Step
              </Button>
            ) : (
              <Button className="wine-gradient text-white sm:order-1">Complete Booking</Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
