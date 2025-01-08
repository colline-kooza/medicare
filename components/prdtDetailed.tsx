"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MinusIcon, PlusIcon } from 'lucide-react'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"

interface ProductCardProps {
  name: string
  shop: string
  price: number
  weight: string
  image: string
  isSelected?: boolean
}

export function PrdtDetailed({ name, shop, price, weight, image }: ProductCardProps) {
  // console.log(image)
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); 
  };
  return (
    <div
      className={cn(
        "relative rounded-xl shadow-sm transition-all duration-300",
        "bg-white dark:bg-gray-800 dark:text-white "
      )}
    >
      <Link href="/p/food" className="aspect-square relative block  h-[50%] w-full">
        <img
          src={image}
          alt={name}
          className="object-cover rounded-t-lg h-full w-full"
        />
      </Link>
      <div className="flex items-center flex-col justify-center h-[50%]">
        <h3 className="font-medium text-base">{name}</h3>
        <p className="text-muted-foreground text-sm">({shop})</p>
        <p className="text-xs text-muted-foreground mt-1 mb-1">{weight}</p>
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="font-semibold text-sm">{price.toFixed(2)}$</p>
          <div className="flex items-center gap-5">
              <Button               onClick={handleDecrease}
              variant="outline" size="icon" className="h-8 w-8">
                <MinusIcon className="h-4 w-4" />
              </Button>
              <span className="text-sm">{quantity}</span>
              <Button               onClick={handleIncrease}
               variant="outline" size="icon" className="h-8 w-8">
                <PlusIcon className="h-4 w-4" />
              </Button>
            </div>
        </div>
      </div>
    </div>
  )
}
