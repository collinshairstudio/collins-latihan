import Link from "next/link"
import Image from "next/image"
import { Clock, MapPin, Scissors } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Barber data with fun taglines and styling info
const barbers = [
  {
    name: "James Wilson",
    specialty: "Classic Cuts",
    branch: "Downtown",
    tagline: "Making heads turn since 2015",
    styles: "Men & Women",
    image: "/placeholder.svg?height=300&width=300&text=James+Wilson",
    color: "bg-blue-500",
  },
  {
    name: "Michael Brown",
    specialty: "Fades & Designs",
    branch: "Uptown",
    tagline: "Your hair's best friend",
    styles: "Men",
    image: "/placeholder.svg?height=300&width=300&text=Michael+Brown",
    color: "bg-purple-500",
  },
  {
    name: "Sarah Johnson",
    specialty: "Women's Styling",
    branch: "Westside",
    tagline: "Transforming looks, boosting confidence",
    styles: "Men & Women",
    image: "/placeholder.svg?height=300&width=300&text=Sarah+Johnson",
    color: "bg-pink-500",
  },
  {
    name: "David Martinez",
    specialty: "Modern Styles",
    branch: "Downtown",
    tagline: "Where style meets precision",
    styles: "Men",
    image: "/placeholder.svg?height=300&width=300&text=David+Martinez",
    color: "bg-green-500",
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section with Branch Selection */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[450px] sm:h-[500px] w-full">
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="Barbershop interior"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Premium Haircuts & Grooming
          </h1>
          <p className="mt-4 sm:mt-6 max-w-md text-base sm:text-lg">
            Experience the art of traditional barbering with modern techniques at ClipMaster.
          </p>
          <div className="mt-6 sm:mt-8 w-full max-w-3xl">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Our Branches</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <Link href="/branches/downtown">
                <div className="relative h-36 sm:h-48 rounded-lg overflow-hidden group">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Downtown+Branch"
                    alt="Downtown Branch"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white">Downtown</h3>
                    <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-white/80">123 Main Street, Downtown</p>
                  </div>
                </div>
              </Link>
              <Link href="/branches/uptown">
                <div className="relative h-36 sm:h-48 rounded-lg overflow-hidden group">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Uptown+Branch"
                    alt="Uptown Branch"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white">Uptown</h3>
                    <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-white/80">456 Park Avenue, Uptown</p>
                  </div>
                </div>
              </Link>
              <Link href="/branches/westside">
                <div className="relative h-36 sm:h-48 rounded-lg overflow-hidden group">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Westside+Branch"
                    alt="Westside Branch"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white">Westside</h3>
                    <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-white/80">789 Ocean Drive, Westside</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 sm:py-16 px-4">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Scissors className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Expert Barbers</h3>
                <p className="text-muted-foreground text-sm">
                  Our team of skilled barbers are trained in the latest techniques and styles.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Convenient Booking</h3>
                <p className="text-muted-foreground text-sm">
                  Book your appointment online anytime, anywhere with our easy-to-use system.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Scissors className="h-6 w-6 sm:h-8 sm:w-8 text-primary rotate-45" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Premium Experience</h3>
                <p className="text-muted-foreground text-sm">
                  Enjoy complimentary beverages and a relaxing atmosphere during your visit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-muted py-10 sm:py-16 px-4">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold">Our Services</h2>
            <Link href="/services">
              <Button variant="outline" className="mt-3 sm:mt-0">
                View All Services
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <Card>
              <CardContent className="p-0">
                <div className="relative h-40 sm:h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Haircut"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Classic Haircut</h3>
                  <p className="text-muted-foreground text-sm mb-4">Traditional haircut with clippers and scissors.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-base sm:text-lg font-bold">$25</span>
                    <Link href="/booking?service=haircut">
                      <Button size="sm">Book Now</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <div className="relative h-40 sm:h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Beard Trim"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Beard Trim</h3>
                  <p className="text-muted-foreground text-sm mb-4">Shape and trim your beard to perfection.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-base sm:text-lg font-bold">$15</span>
                    <Link href="/booking?service=beard">
                      <Button size="sm">Book Now</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="sm:hidden lg:block">
              <CardContent className="p-0">
                <div className="relative h-40 sm:h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Hot Towel Shave"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Hot Towel Shave</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Luxurious straight razor shave with hot towel treatment.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-base sm:text-lg font-bold">$35</span>
                    <Link href="/booking?service=shave">
                      <Button size="sm">Book Now</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-10 sm:py-16 px-4">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            <Card>
              <CardContent className="p-0">
                <div className="relative h-40 sm:h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Downtown"
                    alt="Downtown Branch"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Downtown</h3>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <p className="text-sm">123 Main Street, Downtown</p>
                  </div>
                  <Link href="/branches/downtown">
                    <Button className="w-full" size="sm">
                      View Branch
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <div className="relative h-40 sm:h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Uptown"
                    alt="Uptown Branch"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Uptown</h3>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <p className="text-sm">456 Park Avenue, Uptown</p>
                  </div>
                  <Link href="/branches/uptown">
                    <Button className="w-full" size="sm">
                      View Branch
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <div className="relative h-40 sm:h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=Westside"
                    alt="Westside Branch"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Westside</h3>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <p className="text-sm">789 Ocean Drive, Westside</p>
                  </div>
                  <Link href="/branches/westside">
                    <Button className="w-full" size="sm">
                      View Branch
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Barbers Preview - Playful Design */}
      <section className="bg-muted py-10 sm:py-16 px-4">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold">Meet Our Barbers</h2>
            <Link href="/barbers">
              <Button variant="outline" className="mt-3 sm:mt-0">
                View All Barbers
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {barbers.map((barber, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <Image
                    src={barber.image || "/placeholder.svg"}
                    alt={barber.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute top-0 right-0 ${barber.color} text-white text-xs font-bold py-1 px-2 rounded-bl-lg`}
                  >
                    {barber.styles}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-3 sm:p-4 text-white">
                  <h3 className="text-base sm:text-lg font-bold leading-tight">{barber.name}</h3>
                  <p className="text-xs sm:text-sm text-white/80 mb-1">{barber.specialty}</p>
                  <p className="text-xs italic text-white/70 mb-2 line-clamp-1">{barber.tagline}</p>
                  <Link href={`/booking?barber=${barber.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button size="sm" className="w-full text-xs">
                      Book {barber.name.split(" ")[0]}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Simplified */}
      <section className="py-10 sm:py-16 px-4">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {[
              {
                name: "John D.",
                comment: "Best haircut I've ever had. The attention to detail is amazing.",
              },
              {
                name: "Michael T.",
                comment: "Great atmosphere and professional service. Will definitely be back!",
              },
              {
                name: "Robert S.",
                comment: "Love the online booking system. Makes it so easy to schedule appointments.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-primary/5 border-none">
                <CardContent className="pt-6">
                  <p className="mb-4 text-sm italic">"{testimonial.comment}"</p>
                  <p className="font-bold text-sm">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section className="bg-muted py-10 sm:py-16 px-4">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">ClipMaster Academy</h2>
            <Link href="/academy">
              <Button variant="outline" className="mt-3 sm:mt-0">
                Learn More
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="relative h-[300px] sm:h-[350px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Barbering+Academy"
                alt="ClipMaster Academy"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Master the Art of Barbering</h3>
              <p className="mb-3 text-sm">
                ClipMaster Academy offers comprehensive training programs for aspiring barbers and stylists. Learn from
                industry professionals and gain hands-on experience in our state-of-the-art facilities.
              </p>
              <p className="mb-5 text-sm">
                Our graduates are highly sought after in the industry, with many going on to work in top barbershops or
                even opening their own successful businesses.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/academy">
                  <Button size="sm">Explore Academy</Button>
                </Link>
                <Link href="/academy#alumni">
                  <Button variant="outline" size="sm">
                    Meet Our Alumni
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
