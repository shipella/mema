"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function CartButton() {
  const [itemCount, setItemCount] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="relative p-2 rounded-full hover:bg-red-50 transition-colors"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ShoppingCart
            className={`h-5 w-5 transition-transform duration-300 ${isHovered ? "scale-110 text-red-600" : ""}`}
          />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>Review your items before checkout</SheetDescription>
        </SheetHeader>
        {itemCount === 0 ? (
          <div className="flex flex-col items-center justify-center h-[70vh]">
            <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
            <p className="text-gray-500">Your cart is empty</p>
            <Button className="mt-4 bg-red-600 hover:bg-red-700 hover:scale-105 transition-transform">
              Browse Products
            </Button>
          </div>
        ) : (
          <div className="mt-8">
            {/* Cart items would go here */}
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>0.00 TZS</span>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700 hover:scale-[1.02] transition-all mt-4">
                Checkout
              </Button>
              <Button variant="outline" className="w-full mt-2 hover:bg-red-50 transition-colors">
                Send to Sales Team
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

