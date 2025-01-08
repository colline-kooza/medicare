'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { useLabTests } from '@/store/test-store'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { useCreateBooking } from '@/hooks/booking-hook'
import { toast } from 'sonner'
import { Plus, Minus } from 'lucide-react'

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', 
  '14:00', '15:00', '16:00', '17:00'
]

const categories = [
  'All tests',
  'Affordable Packages',
  'Diabetes',
  'Heart',
  'Cancer',
  'Vitamin',
  'Women Health',
  'Skin care',
  'Liver',
  'Kidney',
  'Stress',
]

const labTests = [
  {
    id: '1',
    name: 'Complete Blood Count (CBC)',
    originalPrice: 250.00,
    price: 199.00,
    category: 'Affordable Packages',
  },
  {
    id: '2',
    name: 'Blood Chemistry Panel',
    originalPrice: 120.00,
    price: 99.00,
    category: 'Diabetes',
  },
  {
    id: '3',
    name: 'Urinalysis',
    originalPrice: 250.00,
    price: 199.00,
    category: 'Kidney',
  },
  {
    id: '4',
    name: 'Electrocardiogram (ECG)',
    originalPrice: 450.00,
    price: 399.00,
    category: 'Heart',
  },
  {
    id: '5',
    name: 'Chest X-Ray',
    originalPrice: 250.00,
    price: 199.00,
    category: 'Heart',
  },
  {
    id: '6',
    name: 'Vitamin D Test',
    originalPrice: 180.00,
    price: 149.00,
    category: 'Vitamin',
  },
  {
    id: '7',
    name: 'Thyroid Function Test',
    originalPrice: 320.00,
    price: 279.00,
    category: 'Women Health',
  },
  {
    id: '8',
    name: 'Liver Function Test',
    originalPrice: 290.00,
    price: 239.00,
    category: 'Liver',
  }
]

export default function BookingPage({userId , email}:{userId:string , email:string}) {
  const [date, setDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>()
  const [selectedCategory, setSelectedCategory] = useState('All tests')
  const { tests, addTest, removeTest, totalAmount } = useLabTests()
  const createBooking = useCreateBooking()

  const filteredTests = selectedCategory === 'All tests' 
    ? labTests 
    : labTests.filter(test => test.category === selectedCategory)

  const handleTestAction = (test: typeof labTests[0]) => {
    const isAdded = tests.some((t) => t.id === test.id)
    
    if (isAdded) {
      removeTest(test.id)
      toast.success(`${test.name} removed from your tests`)
    } else {
      addTest(test)
      toast.success(`${test.name} added to your tests`)
    }
  }

  const handleBooking = async () => {
    if (!date || !selectedTime || tests.length === 0) {
      toast.error('Please select date, time and at least one test')
      return
    }

    const [hours, minutes] = selectedTime.split(':')
    const bookingDate = new Date(date)
    bookingDate.setHours(parseInt(hours), parseInt(minutes))

    try {
      await createBooking.mutateAsync({
        date: bookingDate,
        userId,
        email,
        tests: tests.map(test => ({
          testId: test.id,
          price: test.price
        })),
        totalAmount
      })
      toast.success('Booking created successfully!')
    } catch (error) {
      toast.error('Failed to create booking')
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Select Tests</h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filteredTests.map((test) => {
            const isAdded = tests.some((t) => t.id === test.id)
            return (
              <Card key={test.id} className={cn("transition-colors", 
                isAdded && "border-primary")}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{test.name}</h3>
                      <p className="text-sm text-muted-foreground">{test.category}</p>
                    </div>
                    <Button
                      size="icon"
                      variant={isAdded ? "destructive" : "outline"}
                      onClick={() => handleTestAction(test)}
                    >
                      {isAdded ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </Button>
                  </div>
                  <div className="mt-2">
                    <span className="text-sm text-muted-foreground line-through">
                      ${test.originalPrice.toFixed(2)}
                    </span>
                    <span className="ml-2 text-lg font-bold">
                      ${test.price.toFixed(2)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Select Date & Time</CardTitle>
            <CardDescription>Choose your preferred appointment date and time</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              disabled={(date) => date < new Date()}
            />
            <ScrollArea className="h-72 mt-4 rounded-md border">
              <div className="grid grid-cols-2 gap-2 p-4">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className={cn(
                      "w-full",
                      selectedTime === time && "bg-primary text-primary-foreground"
                    )}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Booking Summary</CardTitle>
            <CardDescription>Review your selected tests and details</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[300px]">
              <div className="space-y-4">
                {tests.map((test) => (
                  <div
                    key={test.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <span>{test.name}</span>
                    <div className="flex items-center gap-4">
                      <span className="font-medium">${test.price.toFixed(2)}</span>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => removeTest(test.id)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total Amount:</span>
                <span className="text-xl font-bold">${totalAmount.toFixed(2)}</span>
              </div>
              {date && selectedTime && (
                <div className="mt-2 text-sm text-muted-foreground">
                  Appointment: {format(date, 'PPP')} at {selectedTime}
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full" 
              size="lg"
              onClick={handleBooking}
              disabled={!date || !selectedTime || tests.length === 0 || createBooking.isPending}
            >
              {createBooking.isPending ? 'Creating Booking...' : 'Confirm Booking'}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}