'use client'

import { useState } from 'react'
import Image from 'next/image'
// import { ProductCard } from '@/components/ProductCard'
import { Tab } from '@headlessui/react'
import { ProductCard } from '@/components/PrdtCarf'

const categories = [
  { name: 'All', count: 22 },
  { name: 'Fruits', count: 8 },
  { name: 'Vegetables', count: 6 },
  { name: 'Bread', count: 4 },
  { name: 'Sweets', count: 4 },
]

const products = [
  { name: 'Fresh Strawberries', shop: 'Fruit Market', price: 4.99, weight: '250g', image: 'https://media.istockphoto.com/id/182187173/photo/isolated-berries.jpg?s=612x612&w=0&k=20&c=iBBvIdL39XuHATGIlNkKn6nAHfE_BTWkHiOs49IWlFU=' },
  { name: 'Organic Bananas', shop: 'Green Grocer', price: 2.99, weight: '1kg', image: 'https://media.istockphoto.com/id/162487071/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=2qvrsexfY-5qCqYvSly-V-Cm8eQ4hveXrunIpBdrIEE=' },
  { name: 'Sourdough Bread', shop: 'Artisan Bakery', price: 5.99, weight: '500g', image: 'https://media.istockphoto.com/id/2081471042/photo/hands-holding-artisan-sourdough-bread-cut-in-half.jpg?s=612x612&w=0&k=20&c=iLhayBcabyFVWje4yjK13LKru74cfCghxj-1FcJqnnE=' },

  { name: 'Fresh Tomatoes', shop: 'Farm Fresh', price: 3.49, weight: '500g', image: 'https://media.istockphoto.com/id/140453734/photo/fresh-tomatoes.jpg?s=612x612&w=0&k=20&c=b6XySPuRKF6opBf0bexh9AhkWck-c7TaoJvRdVNBgT0=' },

  { name: 'Chocolate Croissant', shop: 'Sweet Delights', price: 2.49, weight: '80g', image: 'https://media.istockphoto.com/id/180824921/photo/fresh-chocolate-croissants-on-a-plate.jpg?s=612x612&w=0&k=20&c=Q6fUlJzjMM3GCj2h1KKQT4R_xzObpWyQDQ7HB55CbAk=' },
  { name: 'Organic Apples', shop: 'Fruit Market', price: 3.99, weight: '1kg', image: 'https://media.istockphoto.com/id/641975492/photo/three-fruits-and-vegetables-detox-drinks.jpg?s=612x612&w=0&k=20&c=f5zNgfySRuxKvWvYUTTbsud95pHFg2p7oVhlAmg_w1M=' },
]

export default function CategoryPage() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="min-h-screen bg-[#F7F8FD]">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Fresh Food</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select className="text-sm border-gray-300 rounded-md">
              <option>Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              key={category.name}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                index === selectedIndex
                  ? 'bg-[#064c4f] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedIndex(index)}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </main>
    </div>
  )
}

