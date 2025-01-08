"use client"

import { Menu, ShoppingCart, User } from 'lucide-react'
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ModeToggle } from './mode-toggle'

export default function Header() {
  return (
    <header className=" bg-[#064c4f] text-white lg:rounded-lg lg:py-2">
      <div className="flex items-center h-[52px] px-4 gap-4 justify-between">
        {/* Left section */}
        <button className="p-2 hover:bg-white/10 rounded-md">
          <Menu className="h-5 w-5" />
        </button>
        
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold">
          Granluxe
        </Link>

        {/* Search bar */}
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <Input 
              type="search"
              placeholder="Search for Company, Event, Restaurant or Place..."
              className="w-full bg-white text-black h-9 pr-10 text-sm rounded-2xl"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:block">
            <span className="text-sm">
              Order now and get it within <span className="text-yellow-400">15 mins!</span>
            </span>
          </div>
          
          <button className="flex items-center gap-1 p-2 hover:bg-white/10 rounded-md">
            <ShoppingCart className="h-6 w-6" />
          </button>
          
          {/* <button className="p-2 hover:bg-white/10 rounded-md">
            <User className="h-6 w-6" />
          </button> */}
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

