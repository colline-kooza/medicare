import { ArrowRight, FlaskRoundIcon as Flask, TestTube } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface ServiceCardProps {
  title: string
  label: string
  icon: React.ReactNode
  imageSrc: string
  imageAlt: string
  buttonText: string
  className?: string
}

function ServiceCard({
  title,
  label,
  icon,
  imageSrc,
  imageAlt,
  buttonText,
  className,
}: ServiceCardProps) {
  return (
    <Card className={`relative overflow-hidden ${className}`}>
      <div className="relative z-10 p-6 h-full flex flex-col">
        <div className="flex items-center gap-2 text-sm font-medium mb-4 text-gray-900">
          {icon}
          {label}
        </div>
        <h3 className="text-xl font-bold mb-4 md:text-3xl lg:text-2xl max-w-[200px] text-gray-900">
          {title}
        </h3>
        <div className="mt-auto">
          <Button variant="secondary" className="group">
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-48 h-48 md:w-64 md:h-64">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
          priority
        />
      </div>
    </Card>
  )
}

export default function Samples() {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <ServiceCard
            title="Health Test at your home"
            label="Sample Collection"
            icon={<TestTube className="w-4 h-4" />}
            imageSrc="/sample-1.png"
            imageAlt="Hand holding a blood sample vial"
            buttonText="Book Now"
            className="bg-[#A8E6E1] "
          />
          <ServiceCard
            title="Visit a lab near you"
            label="Lab Test"
            icon={<Flask className="w-4 h-4" />}
            imageSrc="/sample-2.png"
            imageAlt="Medical consultation"
            buttonText="Appointment now"
            className="bg-[#FFE66D] "
          />
        </div>
      </div>
    </section>
  )
}

