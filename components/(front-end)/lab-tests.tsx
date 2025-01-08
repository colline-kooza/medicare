'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { ArrowRight } from 'lucide-react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { useLabTests } from '@/store/test-store'
// import { useLabTests, type LabTest } from '@/store/use-lab-tests'
type LabTest=  {
    id: string,
    name: string,
    originalPrice: number,
    price: number,
  }

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

const labTests: LabTest[] = [
  {
    id: '1',
    name: 'Complete Blood Count (CBC)',
    originalPrice: 250.00,
    price: 199.00,
  },
  {
    id: '2',
    name: 'Blood Chemistry Panel',
    originalPrice: 120.00,
    price: 99.00,
  },
  {
    id: '3',
    name: 'Urinalysis',
    originalPrice: 250.00,
    price: 199.00,
  },
  {
    id: '4',
    name: 'Electrocardiogram (ECG)',
    originalPrice: 450.00,
    price: 399.00,
  },
  {
    id: '5',
    name: 'Chest X-Ray',
    originalPrice: 250.00,
    price: 199.00,
  },
]

export default function LabTests() {
  const [selectedCategory, setSelectedCategory] = useState('All tests')
  const { tests: addedTests, addTest, removeTest } = useLabTests()

  const handleTestAction = (test: LabTest) => {
    const isAdded = addedTests.some((t) => t.id === test.id)
    
    if (isAdded) {
      removeTest(test.id)
      toast.success(`${test.name} removed from your tests`)
    } else {
      addTest({ ...test, isAdded: true })
      toast.success(`${test.name} added to your tests`)
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 ">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Book Lab Tests</h1>
        <Button variant="ghost" className="text-primary">
          SEE ALL
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="w-full whitespace-nowrap rounded-md mb-8">
        <div className="flex w-max space-x-4 p-1">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="rounded-full text-sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="space-y-4">
        {labTests.map((test) => {
          const isAdded = addedTests.some((t) => t.id === test.id)
          
          return (
            <div
              key={test.id}
              className="flex items-center justify-between py-4 border-b border-border"
            >
              <div>
                <h3 className="font-medium text-base">{test.name}</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-xs text-muted-foreground line-through">
                    ${test.originalPrice.toFixed(2)}
                  </span>
                  <span className="ml-2 text-lg font-semibold">
                    ${test.price.toFixed(2)}
                  </span>
                </div>
                <Button
                  variant={isAdded ? "destructive" : "outline"}
                  onClick={() => handleTestAction(test)}
                >
                  {isAdded ? 'Remove' : 'Add'}
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

