"use client"
import { ChevronLeft, ChevronRight, Phone, Star, StarHalf } from 'lucide-react'
import Link from 'next/link'
import { Card } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'


interface Testimonial {
    id: number
    name: string
    role: string
    content: string
    avatar: string
  }
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Esther Howard",
      role: "Patient",
      content: "I had a great experience at this healthcare clinic. I was seen quickly, and the doctor was able to diagnose and treat my condition.",
      avatar: "https://img.freepik.com/free-photo/beautiful-smiling-african-american-female-with-crisp-hair-broad-smile-shows-white-teeth-wears-casual-t-shirt-spectacles-stands-wall-rejoices-having-day-off-woman-journalist-indoor_273609-15511.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid"
    },
    {
      id: 2,
      name: "Sarah Wilson",
      role: "Patient",
      content: "The medical staff was very professional and caring. They took the time to explain everything thoroughly.",
      avatar: "https://img.freepik.com/free-photo/young-girl-white-t-shirt-wearing-glasses-looking-camera-with-serious-confident-expression_141793-108813.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Patient",
      content: "Excellent service and modern facilities. The whole process was smooth and efficient.",
      avatar: "https://img.freepik.com/free-photo/medium-shot-man-with-afro-hairstyle_23-2150677136.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid"
    },
    {
      id: 4,
      name: "Emma Thompson",
      role: "Patient",
      content: "Very impressed with the level of care and attention I received. Would highly recommend.",
      avatar: "https://img.freepik.com/premium-photo/man-face-avatar-portrait-confident-expression-icon-handsome-young-beardy-guy-isolated-light_279525-27178.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid"
    },
    {
      id: 5,
      name: "David Rodriguez",
      role: "Patient",
      content: "The clinic is well-organized and the staff is friendly. A great healthcare experience overall.",
      avatar: "https://img.freepik.com/free-photo/studio-portrait-grumpy-stylish-young-man-frowns-face-with-dissatisfaction-has-bad-mood-feels-furious-annoyed-with-something_273609-8722.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid"
    }
  ]
export default function Reviews() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
  
    const goToSlide = (index: number) => {
      if (!isAnimating && index !== currentSlide) {
        setIsAnimating(true)
        setCurrentSlide(index)
        setTimeout(() => setIsAnimating(false), 500)
      }
    }
  
    const nextSlide = () => {
      if (!isAnimating) {
        setIsAnimating(true)
        setCurrentSlide((prev:any) => (prev + 1) % testimonials.length)
        setTimeout(() => setIsAnimating(false), 500)
      }
    }
  
    const prevSlide = () => {
      if (!isAnimating) {
        setIsAnimating(true)
        setCurrentSlide((prev:any) => (prev - 1 + testimonials.length) % testimonials.length)
        setTimeout(() => setIsAnimating(false), 500)
      }
    }
  
    useEffect(() => {
      const timer = setInterval(() => {
        nextSlide()
      }, 5000)
  
      return () => clearInterval(timer)
    }, [currentSlide])
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="w-full bg-[#1E0B2F] dark:bg-[#1E0B2F] rounded-2xl p-6 sm:p-8 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-[#E4B7A0] dark:text-[#E4B7A0] text-xl sm:text-2xl font-semibold">
            Need help with booking your test?
          </h2>
          <p className="text-[#E4B7A0] dark:text-[#E4B7A0] opacity-90">
            Full body checkup with cancer
          </p>
        </div>
        <Link
          href="tel:(012)8273957"
          className="inline-flex items-center gap-2 bg-[#E4B7A0] dark:bg-[#E4B7A0] text-[#1E0B2F] dark:text-[#1E0B2F] px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-sm"
        >
          <Phone className="w-4 h-4" />
          <span className="font-medium">(012)8273957</span>
        </Link>
      </div>

      {/* Reviews Section */}
      <div className="text-center space-y-8 ">
        <h1 className="text-[#1E0B2F] dark:text-white text-xl sm:text-2xl md:text-3xl font-bold max-w-3xl mx-auto leading-tight">
          Our doctors and clinics have earned over{" "}
          <span className="text-[#1E0B2F] dark:text-white">
            5,000+ reviews on Google!
          </span>
        </h1>
        
        <div className="flex justify-center items-center gap-1">
          {[...Array(4)].map((_, i) => (
            <Star
              key={i}
              className="w-7 h-7 fill-green-500 text-green-500"
            />
          ))}
          <StarHalf
            className="w-7 h-7 fill-green-500 text-green-500"
          />
        </div>
        
        <p className="text-[#1E0B2F] dark:text-white text-sm">
          Average Google Rating is 4.6
        </p>
      </div>

      <div className="mt-16">
        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white dark:bg-gray-950 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-900"
              onClick={prevSlide}
              disabled={isAnimating}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="w-full flex-shrink-0"
                  >
                    <Card className="p-8 sm:p-10 bg-white dark:bg-gray-950 shadow-sm">
                      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <Avatar className="w-16 h-16 border-2 border-gray-100 dark:border-gray-800">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} className='object-cover' />
                          <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-4 flex-1">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                              {testimonial.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {testimonial.role}
                            </p>
                          </div>
                          <p className="text-base text-gray-900 dark:text-gray-100 leading-relaxed">
                            {testimonial.content}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white dark:bg-gray-950 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-900"
              onClick={nextSlide}
              disabled={isAnimating}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentSlide 
                    ? "w-4 bg-primary" 
                    : "bg-gray-200 dark:bg-gray-800"
                }`}
                onClick={() => goToSlide(i)}
                disabled={isAnimating}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

