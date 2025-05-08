"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Scissors, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-2 px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Scissors className="h-6 w-6" />
          <span className="text-xl font-bold">Collins Hair Studio</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/barbers" className="text-sm font-medium transition-colors hover:text-primary">
            Our Barbers
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
          <Link href="/academy" className="text-sm font-medium transition-colors hover:text-primary">
            Academy
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/login" className="hidden sm:block">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </Link>
          <Link href="/booking">
            <Button size="sm">Book Now</Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container py-3 px-4 flex flex-col space-y-3">
            <Link
              href="/"
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/barbers"
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Barbers
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/academy"
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Academy
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium py-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
