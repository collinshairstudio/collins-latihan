import Link from "next/link"
import { Clock, MapPin, Scissors, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-muted py-8 mt-auto">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Scissors className="h-5 w-5" />
              <span className="text-lg font-bold">ClipMaster</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Premium barbershop providing quality haircuts and grooming services.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-sm">Quick Links</h3>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/barbers" className="text-muted-foreground hover:text-foreground">
                  Our Barbers
                </Link>
              </li>
              <li>
                <Link href="/academy" className="text-muted-foreground hover:text-foreground">
                  Academy
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-sm">Contact</h3>
            <ul className="space-y-1.5 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                <span className="text-muted-foreground">123 Main Street, Downtown</span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="h-3.5 w-3.5" />
                <span className="text-muted-foreground">info@clipmaster.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5" />
                <span className="text-muted-foreground">(123) 456-7890</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-sm">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-3">Subscribe for updates on special offers.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
              />
              <Button type="submit" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t mt-6 pt-6 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} ClipMaster Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
