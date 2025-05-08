import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Award, Heart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-muted/40">
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[300px] sm:h-[400px] w-full">
          <Image
            src="/placeholder.svg?height=400&width=1200&text=About+ClipMaster"
            alt="About ClipMaster"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-start justify-center text-white px-4">
          <div className="max-w-2xl">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white mb-3">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">About ClipMaster</h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg">
              Discover the story behind our premium barbershop and our commitment to exceptional grooming services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-10 sm:py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Story</h2>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              Founded in 2010, ClipMaster began as a single chair in a small downtown location with a simple mission: to
              provide exceptional grooming services in a welcoming environment.
            </p>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              Over the years, we've grown to three distinct locations across the city, each with its own unique
              character but all sharing the same commitment to quality, craftsmanship, and customer satisfaction.
            </p>
            <p className="text-sm sm:text-base">
              Today, ClipMaster is recognized as one of the premier barbershops in the region, known for our skilled
              barbers, attention to detail, and the perfect blend of traditional techniques with modern styles.
            </p>
          </div>
          <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Our+Story"
              alt="ClipMaster Story"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted py-10 sm:py-16 px-4">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-3 sm:p-4 mb-3 sm:mb-4">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  We strive for excellence in every haircut, every service, and every customer interaction.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-3 sm:p-4 mb-3 sm:mb-4">
                  <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Community</h3>
                <p className="text-muted-foreground text-sm">
                  We believe in building relationships and creating a welcoming space for everyone in our community.
                </p>
              </CardContent>
            </Card>
            <Card className="sm:col-span-2 md:col-span-1">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-3 sm:p-4 mb-3 sm:mb-4">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Passion</h3>
                <p className="text-muted-foreground text-sm">
                  We're passionate about our craft and dedicated to continuous learning and improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Branches */}
      <section className="container py-10 sm:py-16 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Branches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
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
                <p className="text-muted-foreground text-sm mb-4">
                  Our flagship location in the heart of downtown, offering a full range of men's grooming services in a
                  classic barbershop atmosphere.
                </p>
                <Link href="/branches/downtown">
                  <Button className="w-full" size="sm">
                    Visit Branch
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
                <p className="text-muted-foreground text-sm mb-4">
                  Our upscale location in the trendy uptown district, offering premium services for both men and women
                  in a modern, luxurious setting.
                </p>
                <Link href="/branches/uptown">
                  <Button className="w-full" size="sm">
                    Visit Branch
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="sm:col-span-2 md:col-span-1">
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
                <p className="text-muted-foreground text-sm mb-4">
                  Our relaxed westside location with ocean views, offering a full range of services for men and women in
                  a laid-back, beachy atmosphere.
                </p>
                <Link href="/branches/westside">
                  <Button className="w-full" size="sm">
                    Visit Branch
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
