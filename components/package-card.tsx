"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

interface PackageCardProps {
  title: string
  speed: string
  price: string
  features: string[]
  type: "4G" | "5G"
  popular?: boolean
}

export default function PackageCard({ title, speed, price, features, type, popular = false }: PackageCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={`overflow-hidden transition-all duration-500 ${
        popular ? "border-red-600 shadow-lg" : "hover:shadow-lg"
      } ${isHovered ? "transform -translate-y-2" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {popular && <div className="bg-red-600 text-white text-center py-1 text-sm font-medium">Popular Choice</div>}
      <CardHeader className={`pb-2 ${type === "5G" ? "bg-red-50" : "bg-gray-50"}`}>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${
              type === "5G" ? "bg-red-600 text-white" : "bg-gray-600 text-white"
            }`}
          >
            {type}
          </span>
        </div>
        <p className="text-sm text-gray-500">{speed}</p>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <span className={`text-3xl font-bold ${isHovered ? "text-red-600" : ""} transition-colors duration-300`}>
            {price}
          </span>
          <span className="text-gray-500 text-sm">/month</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check
                className={`h-4 w-4 ${isHovered ? "text-red-500" : "text-green-500"} mr-2 transition-colors duration-300`}
              />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          className={`w-full relative overflow-hidden group ${
            type === "5G" ? "bg-red-600 hover:bg-red-700" : "bg-gray-600 hover:bg-gray-700"
          }`}
        >
          <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
          <span className="relative">Select Package</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

