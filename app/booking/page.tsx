"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ChevronLeft, ChevronRight, Clock, CreditCard, Scissors, User, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

// Branch data
const branches = [
  {
    id: "downtown",
    name: "Downtown",
    address: "123 Main Street, Downtown",
    image: "/placeholder.svg?height=300&width=600&text=Downtown+Branch",
  },
  {
    id: "uptown",
    name: "Uptown",
    address: "456 Park Avenue, Uptown",
    image: "/placeholder.svg?height=300&width=600&text=Uptown+Branch",
  },
  {
    id: "westside",
    name: "Westside",
    address: "789 Ocean Drive, Westside",
    image: "/placeholder.svg?height=300&width=600&text=Westside+Branch",
  },
]

// Sample data
const services = [
  {
    id: "haircut",
    name: "Classic Haircut",
    description: "Traditional haircut with clippers and scissors",
    price: 25,
    duration: 60, // 1 hour
    image: "/placeholder.svg?height=200&width=400&text=Haircut",
  },
  {
    id: "beard",
    name: "Beard Trim",
    description: "Shape and trim your beard to perfection",
    price: 15,
    duration: 60, // 1 hour
    image: "/placeholder.svg?height=200&width=400&text=Beard+Trim",
  },
  {
    id: "shave",
    name: "Hot Towel Shave",
    description: "Luxurious straight razor shave with hot towel treatment",
    price: 35,
    duration: 60, // 1 hour
    image: "/placeholder.svg?height=200&width=400&text=Hot+Towel+Shave",
  },
  {
    id: "combo",
    name: "Haircut & Beard Combo",
    description: "Complete grooming package with haircut and beard trim",
    price: 35,
    duration: 60, // 1 hour
    image: "/placeholder.svg?height=200&width=400&text=Combo",
  },
  {
    id: "perm-short",
    name: "Perm - Short Hair",
    description: "Permanent wave treatment for short hair",
    price: 60,
    duration: 120, // 2 hours
    image: "/placeholder.svg?height=200&width=400&text=Perm+Short",
  },
  {
    id: "perm-long",
    name: "Perm - Long Hair",
    description: "Permanent wave treatment for long hair",
    price: 85,
    duration: 120, // 2 hours
    image: "/placeholder.svg?height=200&width=400&text=Perm+Long",
  },
]

// Barbers data with branch and gender specialization
const barbers = [
  {
    id: "james",
    name: "James Wilson",
    specialty: "Classic Cuts",
    image: "/placeholder.svg?height=300&width=300&text=James+Wilson",
    branch: "downtown",
    gender: "men",
  },
  {
    id: "michael",
    name: "Michael Brown",
    specialty: "Fades & Designs",
    image: "/placeholder.svg?height=300&width=300&text=Michael+Brown",
    branch: "downtown",
    gender: "men",
  },
  {
    id: "sarah",
    name: "Sarah Johnson",
    specialty: "Women's Styling",
    image: "/placeholder.svg?height=300&width=300&text=Sarah+Johnson",
    branch: "downtown",
    gender: "women",
  },
  {
    id: "robert",
    name: "Robert Davis",
    specialty: "Beard Styling",
    image: "/placeholder.svg?height=300&width=300&text=Robert+Davis",
    branch: "uptown",
    gender: "men",
  },
  {
    id: "emily",
    name: "Emily Taylor",
    specialty: "Color & Highlights",
    image: "/placeholder.svg?height=300&width=300&text=Emily+Taylor",
    branch: "uptown",
    gender: "women",
  },
  {
    id: "david",
    name: "David Martinez",
    specialty: "Modern Styles",
    image: "/placeholder.svg?height=300&width=300&text=David+Martinez",
    branch: "westside",
    gender: "men",
  },
  {
    id: "jennifer",
    name: "Jennifer Lopez",
    specialty: "Precision Cuts",
    image: "/placeholder.svg?height=300&width=300&text=Jennifer+Lopez",
    branch: "westside",
    gender: "women",
  },
  {
    id: "alex",
    name: "Alex Rodriguez",
    specialty: "Textured Cuts",
    image: "/placeholder.svg?height=300&width=300&text=Alex+Rodriguez",
    branch: "westside",
    gender: "men",
  },
]

// Generate time slots from 9 AM to 6 PM with 1-hour intervals
const generateTimeSlots = () => {
  const slots = []
  for (let hour = 9; hour <= 17; hour++) {
    const hourFormatted = hour % 12 === 0 ? 12 : hour % 12
    const period = hour < 12 ? "AM" : "PM"
    slots.push(`${hourFormatted}:00 ${period}`)
  }
  return slots
}

const timeSlots = generateTimeSlots()

export default function BookingPage() {
  const searchParams = useSearchParams()
  const initialBranch = searchParams.get("branch")

  const [activeTab, setActiveTab] = useState(initialBranch ? "barber" : "branch")
  const [selectedBranch, setSelectedBranch] = useState<string | null>(initialBranch)
  const [selectedGender, setSelectedGender] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0])
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  // Reset selections when branch changes
  useEffect(() => {
    if (selectedBranch) {
      setSelectedBarber(null)
      setSelectedTime(null)
    }
  }, [selectedBranch])

  // Reset time when date changes
  useEffect(() => {
    setSelectedTime(null)
  }, [selectedDate])

  // Generate dates for the next 14 days
  const generateDates = () => {
    const dates = []
    const today = new Date()

    for (let i = 0; i < 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push(date)
    }

    return dates
  }

  const dates = generateDates()

  const handleNextStep = () => {
    if (activeTab === "branch" && selectedBranch) {
      setActiveTab("gender")
    } else if (activeTab === "gender" && selectedGender) {
      setActiveTab("barber")
    } else if (activeTab === "barber" && selectedBarber) {
      setActiveTab("service")
    } else if (activeTab === "service" && selectedService) {
      setActiveTab("datetime")
    } else if (activeTab === "datetime" && selectedDate && selectedTime) {
      setActiveTab("details")
    } else if (activeTab === "details") {
      setActiveTab("payment")
    }
  }

  const handlePreviousStep = () => {
    if (activeTab === "gender") {
      setActiveTab("branch")
    } else if (activeTab === "barber") {
      setActiveTab("gender")
    } else if (activeTab === "service") {
      setActiveTab("barber")
    } else if (activeTab === "datetime") {
      setActiveTab("service")
    } else if (activeTab === "details") {
      setActiveTab("datetime")
    } else if (activeTab === "payment") {
      setActiveTab("details")
    }
  }

  const getSelectedBranchDetails = () => {
    return branches.find((branch) => branch.id === selectedBranch)
  }

  const getSelectedServiceDetails = () => {
    return services.find((service) => service.id === selectedService)
  }

  const getSelectedBarberDetails = () => {
    return barbers.find((barber) => barber.id === selectedBarber)
  }

  // Filter barbers by branch and gender
  const filteredBarbers = barbers.filter(
    (barber) => barber.branch === selectedBranch && barber.gender === selectedGender,
  )

  return (
    <div className="min-h-screen bg-muted/40 py-8">
      <div className="container">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Book Your Appointment</h1>
          <p className="text-muted-foreground">
            Select your branch, stylist, service, and preferred time to schedule your visit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="branch" disabled={activeTab !== "branch"}>
                  Branch
                </TabsTrigger>
                <TabsTrigger value="gender" disabled={!selectedBranch || activeTab === "branch"}>
                  Gender
                </TabsTrigger>
                <TabsTrigger
                  value="barber"
                  disabled={!selectedGender || activeTab === "branch" || activeTab === "gender"}
                >
                  Stylist
                </TabsTrigger>
                <TabsTrigger
                  value="service"
                  disabled={
                    !selectedBarber || activeTab === "branch" || activeTab === "gender" || activeTab === "barber"
                  }
                >
                  Service
                </TabsTrigger>
                <TabsTrigger
                  value="datetime"
                  disabled={
                    !selectedService ||
                    activeTab === "branch" ||
                    activeTab === "gender" ||
                    activeTab === "barber" ||
                    activeTab === "service"
                  }
                >
                  Date & Time
                </TabsTrigger>
                <TabsTrigger
                  value="details"
                  disabled={
                    !selectedTime ||
                    activeTab === "branch" ||
                    activeTab === "gender" ||
                    activeTab === "barber" ||
                    activeTab === "service" ||
                    activeTab === "datetime"
                  }
                >
                  Details
                </TabsTrigger>
              </TabsList>

              <TabsContent value="branch" className="mt-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {branches.map((branch) => (
                    <Card
                      key={branch.id}
                      className={`cursor-pointer transition-all hover:border-primary ${
                        selectedBranch === branch.id ? "border-2 border-primary" : ""
                      }`}
                      onClick={() => setSelectedBranch(branch.id)}
                    >
                      <CardContent className="p-0">
                        <div className="relative h-40 w-full">
                          <Image
                            src={branch.image || "/placeholder.svg"}
                            alt={branch.name}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold">{branch.name}</h3>
                          <div className="mt-2 flex items-center text-muted-foreground">
                            <MapPin className="mr-1 h-4 w-4" />
                            <p className="text-sm">{branch.address}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 flex justify-end">
                  <Button onClick={handleNextStep} disabled={!selectedBranch}>
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="gender" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Select Stylist Type</CardTitle>
                    <CardDescription>Choose whether you need a men's or women's hairstylist</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={selectedGender || ""}
                      onValueChange={setSelectedGender}
                      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                    >
                      <div>
                        <RadioGroupItem value="men" id="men" className="peer sr-only" />
                        <Label
                          htmlFor="men"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <User className="mb-3 h-6 w-6" />
                          <span className="text-lg font-medium">Men's Hairstylist</span>
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="women" id="women" className="peer sr-only" />
                        <Label
                          htmlFor="women"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <User className="mb-3 h-6 w-6" />
                          <span className="text-lg font-medium">Women's Hairstylist</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={handleNextStep} disabled={!selectedGender}>
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="barber" className="mt-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredBarbers.map((barber) => (
                    <Card
                      key={barber.id}
                      className={`cursor-pointer transition-all hover:border-primary ${
                        selectedBarber === barber.id ? "border-2 border-primary" : ""
                      }`}
                      onClick={() => setSelectedBarber(barber.id)}
                    >
                      <CardContent className="p-0">
                        <div className="relative h-48 w-full">
                          <Image
                            src={barber.image || "/placeholder.svg"}
                            alt={barber.name}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                        </div>
                        <div className="p-4 text-center">
                          <h3 className="font-bold">{barber.name}</h3>
                          <p className="text-sm text-muted-foreground">{barber.specialty}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={handleNextStep} disabled={!selectedBarber}>
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="service" className="mt-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((service) => (
                    <Card
                      key={service.id}
                      className={`cursor-pointer transition-all hover:border-primary ${
                        selectedService === service.id ? "border-2 border-primary" : ""
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <CardContent className="p-0">
                        <div className="relative h-40 w-full">
                          <Image
                            src={service.image || "/placeholder.svg"}
                            alt={service.name}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                          <div className="mt-2 flex items-center justify-between">
                            <span className="font-bold">${service.price}</span>
                            <span className="text-sm text-muted-foreground">
                              {service.duration / 60} hour{service.duration > 60 ? "s" : ""}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={handleNextStep} disabled={!selectedService}>
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="datetime" className="mt-6">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="mr-2 h-5 w-5" />
                        Select Date
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-7 gap-2">
                        {dates.map((date, index) => {
                          const dateString = date.toISOString().split("T")[0]
                          const dayName = date.toLocaleDateString("en-US", { weekday: "short" })
                          const dayNumber = date.getDate()
                          const isToday = new Date().toISOString().split("T")[0] === dateString
                          const isSelected = selectedDate === dateString

                          return (
                            <Button
                              key={index}
                              variant={isSelected ? "default" : "outline"}
                              className={`h-16 flex flex-col p-2 ${isToday ? "border-primary" : ""}`}
                              onClick={() => setSelectedDate(dateString)}
                            >
                              <span className="text-xs">{dayName}</span>
                              <span className="text-lg">{dayNumber}</span>
                            </Button>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Clock className="mr-2 h-5 w-5" />
                        Select Time
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time, index) => (
                          <Button
                            key={index}
                            variant={selectedTime === time ? "default" : "outline"}
                            className="h-10"
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={handleNextStep} disabled={!selectedDate || !selectedTime}>
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="details" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="mr-2 h-5 w-5" />
                      Your Information
                    </CardTitle>
                    <CardDescription>Please provide your contact details for your appointment.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" placeholder="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notes">Special Requests (Optional)</Label>
                        <Textarea id="notes" placeholder="Any special requests or notes for your stylist" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={handleNextStep}>
                    Continue to Payment
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="payment" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Payment Details
                    </CardTitle>
                    <CardDescription>
                      Secure payment processing. Your card will be charged after your appointment.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-name">Name on Card</Label>
                        <Input id="card-name" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" size="lg">
                      Confirm Booking (${getSelectedServiceDetails()?.price || 0})
                    </Button>
                  </CardFooter>
                </Card>
                <div className="mt-6 flex justify-start">
                  <Button variant="outline" onClick={handlePreviousStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {selectedBranch && (
                    <div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-5 w-5 text-primary" />
                        <h3 className="font-medium">Branch</h3>
                      </div>
                      <p className="mt-1">{getSelectedBranchDetails()?.name}</p>
                      <p className="text-sm text-muted-foreground">{getSelectedBranchDetails()?.address}</p>
                    </div>
                  )}

                  {selectedGender && (
                    <div>
                      <Separator className="my-4" />
                      <div className="flex items-center">
                        <User className="mr-2 h-5 w-5 text-primary" />
                        <h3 className="font-medium">Stylist Type</h3>
                      </div>
                      <p className="mt-1 capitalize">{selectedGender}'s Hairstylist</p>
                    </div>
                  )}

                  {selectedBarber && (
                    <div>
                      <Separator className="my-4" />
                      <div className="flex items-center">
                        <User className="mr-2 h-5 w-5 text-primary" />
                        <h3 className="font-medium">Stylist</h3>
                      </div>
                      <p className="mt-1">{getSelectedBarberDetails()?.name}</p>
                      <p className="text-sm text-muted-foreground">{getSelectedBarberDetails()?.specialty}</p>
                    </div>
                  )}

                  {selectedService && (
                    <div>
                      <Separator className="my-4" />
                      <div className="flex items-center">
                        <Scissors className="mr-2 h-5 w-5 text-primary" />
                        <h3 className="font-medium">Service</h3>
                      </div>
                      <div className="mt-1 flex items-center justify-between">
                        <p>{getSelectedServiceDetails()?.name}</p>
                        <p className="font-medium">${getSelectedServiceDetails()?.price}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {getSelectedServiceDetails()?.duration / 60} hour
                        {getSelectedServiceDetails()?.duration > 60 ? "s" : ""}
                      </p>
                    </div>
                  )}

                  {selectedDate && selectedTime && (
                    <div>
                      <Separator className="my-4" />
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-primary" />
                        <h3 className="font-medium">Date & Time</h3>
                      </div>
                      <p className="mt-1">
                        {new Date(selectedDate).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <p className="text-sm text-muted-foreground">{selectedTime}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
