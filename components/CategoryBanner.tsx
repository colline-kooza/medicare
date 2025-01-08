import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export default function CategoryBanner() {
  return (
    <div className="w-full px-4 py-4 md:py-4 lg:py-4">
      <div className="relative bg-gradient-to-br from-[#6c1143] to-[#6c1143] rounded-2xl overflow-hidden shadow-2xl">
        {/* Animated Background Pattern */}
        <div className="absolute top-0 right-0 opacity-20 animate-pulse">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="text-white">
            <path d="M0 50C55.2285 50 100 5.22848 100 -50C100 -105.228 55.2285 -150 0 -150C-55.2285 -150 -100 -105.228 -100 -50C-100 5.22848 -55.2285 50 0 50Z" fill="currentColor" />
            <path d="M200 50C255.228 50 300 5.22848 300 -50C300 -105.228 255.228 -150 200 -150C144.772 -150 100 -105.228 100 -50C100 5.22848 144.772 50 200 50Z" fill="currentColor" />
          </svg>
        </div>

        <div className="relative container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white drop-shadow-lg">
                Stay Home and Get All<br />
                Your Essentials From<br />
                Our Market!
              </h2>
              <p className='text-md text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              {/* App Store Buttons with hover effects */}
              <div className="flex justify-center lg:justify-start space-x-4 mt-3">
              <Button
                className="bg-[#bbea70] text-black hover:bg-[#8a9d3d] hover:text-white 
                           transition-all duration-300 ease-in-out transform hover:scale-105"
                size="lg"
              >
                Shop now
              </Button>
              </div>
            </div>

            {/* Image with subtle animation */}
            <div className="flex justify-center lg:justify-end cursor-pointer">
              <Image
                src="/top.png"
                alt="Delivery person with groceries"
                width={700}
                height={700}
                className="w-full max-w-md h-auto object-contain transform transition-transform hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}