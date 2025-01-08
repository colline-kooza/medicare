"use client"

import * as React from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Clock, Package, ShoppingCart } from 'lucide-react'
import FeaturedPrdts from "@/components/featuredPrdts"

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = React.useState(0)
  
  const images = [
    "https://img.freepik.com/free-photo/basket-with-healthy-raw-vegetables_23-2147694073.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/close-up-apples-container_1048944-15152991.jpg?ga=GA1.1.123314603.1706863307&semt=ais_hybrid",

  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <Card className="relative aspect-square overflow-hidden">
            <Image
              src={images[selectedImage]}
              alt="Product image"
              fill
              className="object-cover"
              priority
            />
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
              70% OFF
            </Badge>
          </Card>
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="basis-1/3">
                  <div
                    className={`relative aspect-square cursor-pointer rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? "border-primary" : "border-transparent"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image}
                      alt={`Product thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground">Brand/Category</p>
            <h1 className="text-2xl font-bold mt-1">Bobs red mill whole wheat</h1>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">429</span>
              <span className="text-xl">.125</span>
            </div>
            <p className="text-sm text-muted-foreground">+ shipping & handling</p>
          </div>

          <div className="flex gap-4">
            <Button className="flex-1 bg-[#064c4f]">
              Buy now
            </Button>
            <Button variant="outline" className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to cart
            </Button>
          </div>

          <div className="space-y-4 border-t pt-4">
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Express next-day delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Order within 24 hours</span>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="h-4 w-4 rounded-full bg-red-500" />
            <div className="h-4 w-4 rounded-full bg-green-500" />
            <div className="h-4 w-4 rounded-full bg-blue-500" />
          </div>

          <div className="border-t pt-4">
            <h2 className="font-semibold mb-2">Description</h2>
            <p className="text-sm text-muted-foreground">
              Organic whole wheat flour perfect for baking bread, cookies, cakes, and other baked goods. Made from premium quality wheat grains, carefully milled to preserve nutrients and flavor.
            </p>
          </div>
        </div>
      </div>
      <FeaturedPrdts/>
    </div>
  )
}

