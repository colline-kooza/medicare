import { ArrowRight } from 'lucide-react'
import Link from "next/link"

interface TestCategory {
  id: string
  name: string
  icon: string
}

const categories: TestCategory[] = [
  {
    id: "liver",
    name: "Liver",
    icon: "https://cdn-icons-png.flaticon.com/128/7787/7787778.png"
  },
  {
    id: "blood",
    name: "Blood",
    icon: "https://cdn-icons-png.flaticon.com/128/1477/1477227.png"
  },
  {
    id: "backpain",
    name: "Backpain",
    icon: "https://cdn-icons-png.flaticon.com/128/9099/9099579.png"
  },
  {
    id: "kidneys",
    name: "Kidneys",
    icon: "https://cdn-icons-png.flaticon.com/128/7745/7745034.png"
  },
  {
    id: "orthopaedics",
    name: "Orthopaedics",
    icon: "https://cdn-icons-png.flaticon.com/128/11359/11359899.png"
  },
  {
    id: "senior",
    name: "Senior Citizen",
    icon: "https://cdn-icons-png.flaticon.com/128/4713/4713506.png"
  }
]

export default function FindTests() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Find Tests by
          <br />
          Health concern
        </h2>
        <Link 
          href="/all-tests" 
          className="flex items-center text-sm font-medium dark:text-white text-gray-900 hover:text-gray-700"
        >
          SEE ALL
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/tests/${category.id}`}
            className="flex flex-col items-center group"
          >
            <div className="h-28 w-28 bg-gray-50 dark:bg-gray-400 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-105">
              <img
                src={category.icon}
                alt=""
                className="w-12 h-12 md:w-16 md:h-16"
                aria-hidden="true"
              />
            </div>
            <span className="text-sm md:text-sm dark:text-gray-200 text-gray-900 text-center">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

