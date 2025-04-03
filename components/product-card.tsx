"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProductCardProps {
  title: string
  image: string
  description: string
  price: string
}

export default function ProductCard({ title, image, description, price }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-xl border border-transparent hover:border-red-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-contain transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="font-medium text-red-600">{price}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          className={`w-full bg-red-600 hover:bg-red-700 group overflow-hidden relative ${
            isHovered ? "shadow-lg" : ""
          }`}
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center justify-center">
            <ShoppingCart
              className={`mr-2 h-4 w-4 transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
            />
            Add to Cart
          </span>
        </Button>
      </CardFooter>
    </Card>
  )
}

