'use client'

import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ServiceCardProps {
  title: string
  price?: string
  discount?: string
  imageSrc: string
  imageAlt: string
  backgroundColor: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  discount,
  imageSrc,
  imageAlt,
  backgroundColor,
}) => (
  <div 
    className="relative overflow-hidden rounded-3xl p-6 transition-transform hover:scale-[1.02]"
    style={{ backgroundColor }}
  >
    <div className="flex h-full flex-col justify-between gap-20">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold leading-tight text-gray-900 ">
          {title}
        </h3>
        <Button
          variant="link"
          className="group p-0 text-sm font-semibold text-gray-900"
        >
          BOOK NOW
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
      <div>
        {price && (
          <div className="space-y-1">
            <p className="text-sm text-gray-700 ">
              {price === "Flat" ? "Flat" : "Start from"}
            </p>
            <p className="text-3xl font-bold text-gray-900 ">
              <span className="text-xl">$</span>
              {typeof price === "string" ? price : price}
            </p>
          </div>
        )}
        {discount && (
          <div className="space-y-1">
            <p className="text-3xl font-bold text-gray-900 ">
              {discount}
            </p>
            <p className="text-sm text-gray-700">Discount</p>
          </div>
        )}
      </div>
    </div>
    <div className="absolute bottom-0 right-0 w-40">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={160}
        height={160}
        className="object-cover"
      />
    </div>
  </div>
)

export default function HealthServices() {
  return (
    <div className="mx-auto max-w-7xl p-6 ">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          title="Senior citizen health checkup"
          price="299.00"
          imageSrc="/doctor-2.png"
          imageAlt="Senior citizens"
          backgroundColor="#a0e1e1"
        />
        <ServiceCard
          title="Diabetes Screening"
          price="99.00"
          imageSrc="/doctor-4.png"
          imageAlt="Diabetes screening device"
          backgroundColor="#99F6E4"
        />
        <ServiceCard
          title="Women's Staying Strong Health Checkup"
          discount="10%"
          imageSrc="/doctor-6.png"
          imageAlt="Women's health"
          backgroundColor="#FEDDC7"
        />
      </div>
    </div>
  )
}

