"use client"

import * as React from "react"
import Link from "next/link"
import { Search, MapPin, ChevronDown, Tag, Menu } from 'lucide-react'
import { Session } from "next-auth"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { getInitials } from "@/lib/generateInitials"
import { ModeToggle } from "@/components/mode-toggle"

interface SiteHeaderProps {
  session: Session | null
}

export function SiteHeader({ session }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = async () => {
    try {
      await signOut()
      router.push("/login")
    } catch (error) {
      console.log(error)
    }
  }

  const navigation = [
    { name: "Books", href: "/booking" },
    { name: "Dashboard", href: "/dashboard" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full flex items-center justify-center",
        isScrolled
          ? "bg-background/80 backdrop-blur-sm shadow-sm"
          : "bg-background/60 backdrop-blur-none"
      )}
    >
      <div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo-3.png"
              alt="Logo"
              className="h-28 w-28 rounded-lg"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>New York</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>

        <div className="flex-1 max-w-2xl hidden lg:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Lab Tests, Scans & Health Checkup Packages"
              className="w-full pl-10 bg-muted/50"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  Healthcare Services
                  <Badge variant="secondary" className="bg-[#6b21a8]  text-white hover:bg-red-600">
                    New
                  </Badge>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {navigation.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className="gap-2 text-[#6b21a8] dark:text-red-500">
              <Tag className="h-4 w-4" />
              Offers
            </Button>

            <ModeToggle />
          </div>

          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={session.user?.image ?? ""}
                      alt={session.user?.fullName ?? ""}
                    />
                    <AvatarFallback>
                      {getInitials(session.user?.fullName)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline-block">
                    {session.user?.fullName}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm font-medium transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <Button asChild variant="ghost" className="justify-start gap-2">
                  <Link href="/offers">
                    <Tag className="h-4 w-4" />
                    Offers
                  </Link>
                </Button>
                <ModeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
