"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import LoginButton from "./login-button"
import CartButton from "./cart-button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Menu
              className={`h-6 w-6 transition-transform duration-300 ${isHovered ? "rotate-90 text-red-600" : ""}`}
            />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>
              <Image
                src="/images/vodacom-logo.png"
                alt="Vodacom Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </SheetTitle>
          </SheetHeader>
          <div className="py-6">
            <nav className="flex flex-col space-y-4">
              <a
                href="#products"
                className="px-4 py-2 text-lg hover:bg-red-50 hover:text-red-600 rounded-md transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Products
              </a>
              <a
                href="#packages"
                className="px-4 py-2 text-lg hover:bg-red-50 hover:text-red-600 rounded-md transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Packages
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-lg hover:bg-red-50 hover:text-red-600 rounded-md transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </nav>
            <div className="mt-6 flex flex-col space-y-4 px-4">
              <LoginButton />
              <div className="flex justify-center">
                <CartButton />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

