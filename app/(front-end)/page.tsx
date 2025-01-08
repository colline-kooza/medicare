'use client'

import Image from 'next/image'
import { Check, Home, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import TestCategories from '@/components/(front-end)/test-categories'
import FeaturedSection from '@/components/(front-end)/featured-section'
import FindTests from '@/components/(front-end)/find-tests'
import Patients from '@/components/(front-end)/patients'
import LabTests from '@/components/(front-end)/lab-tests'
import Reviews from '@/components/(front-end)/reviews'
import WhyChooseUs from '@/components/(front-end)/why-choose-us'
import Samples from '@/components/(front-end)/samples'
import Faq from '@/components/(front-end)/Faq'
import { FaqItem } from '@/types/types'
import Link from 'next/link'

const carouselData = [
  {
    title: "Family body checkup package",
    price: "Now at $199",
    image: "https://img.freepik.com/free-photo/female-surgeon-with-surgical-mask-operating-room-using-3d-image-guided-surgery-machine_657921-1151.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid"
  },
  {
    title: "Family body checkup package",
    price: "Now at $199",
    image: "https://img.freepik.com/premium-photo/cord-with-camera-it-sits-purple-background_900775-9198.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid"
  },
  {
    title: "Complete health screening",
    price: "Starting from $299",
    image: "https://img.freepik.com/free-photo/close-up-african-american-hand-holding-stethoscope_482257-19507.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid"
  },
  {
    title: "Premium health package",
    price: "Special offer $399",
    image: "https://img.freepik.com/premium-photo/african-medical-worker-hazmat-suit-working-with-microscope-inside-lab-hospital-coronavirus-outbreak-focus-face_166273-2017.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid"
  }
]

const defaultFaqItems: FaqItem[] = [
  {
    question: "How do I start online consultation with doctors on Medicare?",
    answer: "To start an online consultation, simply create an account, select your preferred doctor, and schedule an appointment through our platform.",
  },
  {
    question: "Are your online doctors qualified?",
    answer: "Yes, all our doctors are fully licensed, board-certified professionals with extensive experience in their respective fields.",
  },
  {
    question: "Is online doctor consultation safe and secured on Medicare?",
    answer: "Yes, our platform uses advanced encryption and follows all HIPAA guidelines to ensure your medical information remains private and secure.",
  },
  {
    question: "What happens if I don't get a response from a doctor?",
    answer: "If you don't receive a response within the expected timeframe, our support team will assist you and ensure you're connected with an available doctor.",
  },
  {
    question: "What is the online doctor consultations?",
    answer: "Online doctor consultation or online medical consultation is a method to connect patients and doctors virtually. It is a convenient and easy way to get online doctor advice using doctor apps or telemedicine apps or platforms, and the internet.",
  },
]

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen  sm:w-full md:max-w-[1200px] mx-auto overflow-hidden">
      <div className="container relative mx-auto px-4 py-12">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold leading-[40px] lg:leading-[55px] dark:text-gray-300 text-[#1f221d] md:text-4xl lg:text-5xl">
                {carouselData[currentSlide].title}<br />
                <span className='text-lg'>{carouselData[currentSlide].price}</span>
              </h1>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1f221d]">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-800 dark:text-gray-400">Full body checkup with cancer</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1f221d]">
                    <Home className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-800 dark:text-gray-400">Free home sample pickup</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div className='flex items-center'>
              <Link href="/booking">
              <button className="group flex w-fit items-center gap-2 rounded-full bg-[#6b21a8] px-6 py-3 text-white transition-all hover:bg-gray-800">
                  Book now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
              <Link href="/booking">
              <button 
                  className="group flex justify-center items-center rounded-full bg-[#6b21a8] w-10 h-10 text-white transition-all hover:bg-gray-800"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselData.length)}
                >
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
                
              </div>

              <div className="flex gap-2">
                {carouselData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all ${
                      currentSlide === index 
                        ? "w-8 bg-gray-900" 
                        : "w-4 bg-gray-400 hover:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative ">
            <div className="absolute inset-0 -left-20 bg-[#a2e0e0] blur-3xl opacity-50 z-0"></div>
            {carouselData.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  currentSlide === index 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 translate-x-full absolute"
                }`}
              >
                <Image
                  src={slide.image}
                  alt="Family checkup"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover relative z-10 transition-transform hover:scale-105 duration-300"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <FeaturedSection/>
      {/* <TestCategories/> */}
      <FindTests/>
      <Patients/>
      <LabTests/>
      <Reviews/>
      <WhyChooseUs/>
      <Samples/>
      <Faq items={defaultFaqItems}/>
    </div>
  )
}

