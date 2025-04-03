"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="relative overflow-hidden group px-4 py-2 rounded-full border border-transparent hover:border-red-600"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex items-center relative z-10">
            <User className={`mr-2 h-4 w-4 transition-transform duration-300 ${isHovered ? "scale-110" : ""}`} />
            <span className={`transition-colors duration-300 ${isHovered ? "text-red-600" : ""}`}>Login</span>
          </div>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login to Your Account</DialogTitle>
          <DialogDescription>Enter your credentials to access your Vodacom account.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your.email@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Button className="w-full bg-red-600 hover:bg-red-700 hover:scale-[1.02] transition-all">Login</Button>
          <div className="text-center text-sm">
            <a href="#" className="text-red-600 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

