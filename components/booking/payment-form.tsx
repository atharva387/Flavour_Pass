"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Smartphone, Building, Shield, Lock, CheckCircle } from "lucide-react"

interface PaymentFormProps {
  total: number
  onSuccess: () => void
}

export function PaymentForm({ total, onSuccess }: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [cardName, setCardName] = useState("")

  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card", icon: CreditCard, popular: true },
    { id: "upi", name: "UPI", icon: Smartphone, popular: true },
    { id: "netbanking", name: "Net Banking", icon: Building, popular: false },
  ]

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)
    onSuccess()
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(" ")
    } else {
      return v
    }
  }

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4)
    }
    return v
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-center">
        <h3 className="text-lg sm:text-xl font-semibold text-wine-burgundy mb-2">Secure Payment</h3>
        <p className="text-sm sm:text-base text-muted-foreground">Complete your booking with secure payment</p>
      </div>

      {/* Payment Method Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-wine-burgundy text-base sm:text-lg">
            <CreditCard className="h-4 w-4 sm:h-5 sm:w-5" />
            Payment Method
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`relative p-3 sm:p-4 border rounded-lg cursor-pointer transition-all ${
                  paymentMethod === method.id
                    ? "border-wine-burgundy bg-wine-cream"
                    : "border-gray-200 hover:border-wine-burgundy/50"
                }`}
                onClick={() => setPaymentMethod(method.id)}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <method.icon className="h-5 w-5 sm:h-6 sm:w-6 text-wine-burgundy" />
                  <span className="text-xs sm:text-sm font-medium">{method.name}</span>
                  {method.popular && <Badge className="bg-wine-gold text-wine-burgundy text-xs">Popular</Badge>}
                </div>
                {paymentMethod === method.id && (
                  <CheckCircle className="absolute top-2 right-2 h-4 w-4 text-wine-burgundy" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Payment Details */}
      {paymentMethod === "card" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-wine-burgundy text-base sm:text-lg">Card Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber" className="text-sm">
                Card Number
              </Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                maxLength={19}
                className="text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate" className="text-sm">
                  Expiry Date
                </Label>
                <Input
                  id="expiryDate"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                  maxLength={5}
                  className="text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv" className="text-sm">
                  CVV
                </Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                  maxLength={4}
                  className="text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardName" className="text-sm">
                Cardholder Name
              </Label>
              <Input
                id="cardName"
                placeholder="John Doe"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className="text-sm"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {paymentMethod === "upi" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-wine-burgundy text-base sm:text-lg">UPI Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="upiId" className="text-sm">
                  UPI ID
                </Label>
                <Input id="upiId" placeholder="yourname@paytm" className="text-sm" />
              </div>
              <div className="text-center p-4 bg-wine-cream rounded-lg">
                <Smartphone className="h-8 w-8 sm:h-12 sm:w-12 text-wine-burgundy mx-auto mb-2" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  You will be redirected to your UPI app to complete the payment
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {paymentMethod === "netbanking" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-wine-burgundy text-base sm:text-lg">Net Banking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bank" className="text-sm">
                  Select Bank
                </Label>
                <select id="bank" className="w-full p-2 border rounded-md text-sm">
                  <option value="">Choose your bank</option>
                  <option value="sbi">State Bank of India</option>
                  <option value="hdfc">HDFC Bank</option>
                  <option value="icici">ICICI Bank</option>
                  <option value="axis">Axis Bank</option>
                  <option value="kotak">Kotak Mahindra Bank</option>
                </select>
              </div>
              <div className="text-center p-4 bg-wine-cream rounded-lg">
                <Building className="h-8 w-8 sm:h-12 sm:w-12 text-wine-burgundy mx-auto mb-2" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  You will be redirected to your bank's website to complete the payment
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-wine-burgundy text-base sm:text-lg">Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>₹{total - total * 0.18}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>GST (18%)</span>
              <span>₹{Math.round(total * 0.18)}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-base sm:text-lg font-semibold">
              <span>Total Amount</span>
              <span className="text-wine-burgundy">₹{total}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Info */}
      <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground">
        <Shield className="h-4 w-4 text-green-600" />
        <span>Secured by 256-bit SSL encryption</span>
        <Lock className="h-4 w-4 text-green-600" />
      </div>

      {/* Payment Button */}
      <Button
        onClick={handlePayment}
        disabled={isProcessing}
        className="w-full wine-gradient text-white py-3 text-sm sm:text-base"
      >
        {isProcessing ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Processing Payment...
          </div>
        ) : (
          `Pay ₹${total}`
        )}
      </Button>

      {/* Terms */}
      <p className="text-xs text-center text-muted-foreground px-4">
        By completing this payment, you agree to our{" "}
        <span className="text-wine-burgundy underline cursor-pointer">Terms of Service</span> and{" "}
        <span className="text-wine-burgundy underline cursor-pointer">Privacy Policy</span>
      </p>
    </div>
  )
}
