import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

interface Package {
  id: number
  name: string
  tests: number
  price: number
  originalPrice: number
  discount?: number
  icon: string
}

const categories = [
  "All tests",
  "Full body Check up",
  "Diabetes",
  "Heart",
  "Cancer",
  "Vitamin",
  "Women Health",
  "Skin care",
  "Liver",
  "Kidney",
  "Stress"
]

const packages: Package[] = [
  {
    id: 1,
    name: "Medicare Full body Health Checkup",
    tests: 12,
    price: 430.00,
    originalPrice: 80.00,
    icon: "🫘"
  },
  {
    id: 2,
    name: "Comprehensive full body checkup with Vitamin D & B12",
    tests: 11,
    price: 240.00,
    originalPrice: 80.00,
    discount: 20,
    icon: "🩺"
  },
  {
    id: 3,
    name: "Women's Staying Strong Health Checkup",
    tests: 32,
    price: 300.00,
    originalPrice: 220.00,
    icon: "🫃"
  },
  {
    id: 4,
    name: "Medi care Diabetes Screening",
    tests: 7,
    price: 364.00,
    originalPrice: 80.00,
    discount: 20,
    icon: "💉"
  }
]

export default function FeaturedSection() {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <h1 className="text-xl font-bold tracking-tighter sm:text-4xl md:text-3xl lg:text-4xl mb-8">
          Featured Health<br />Check-up Packages
        </h1>
        
        <ScrollArea className="w-full whitespace-nowrap mb-8">
          <div className="flex space-x-4 pb-4">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="relative hover:shadow-lg transition-shadow bg-[#F1F5F9] dark:bg-card cursor-pointer">
              {pkg.discount && (
                <Badge className="absolute top-4 right-4 bg-yellow-200 text-yellow-900 hover:bg-yellow-200">
                  {pkg.discount}% Off
                </Badge>
              )}
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{pkg.icon}</div>
                <h3 className="font-medium text-base mb-2 line-clamp-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Includes {pkg.tests} Tests
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-medium">${pkg.price}</span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${pkg.originalPrice}
                    </span>
                  </div>
                  <Button className="bg-[#A0E1E1] hover:bg-[#A0E1E1] text-black rounded-xl">
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

