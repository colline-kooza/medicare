
import Link from 'next/link'
import { ArrowRight, FlaskRoundIcon as Flask, Stethoscope } from 'lucide-react'

export default function TestCategories() {
  return (
    <div className=" px-4 py-8 margin-auto">
      <div className="grid lg:gap-12 gap-6  md:grid-cols-2 lg:grid-cols-3">
        {/* Lab Tests Card */}
        <Link 
          href="/lab-tests"
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-300 p-6 transition-all hover:shadow-lg  cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-[#2a2516] ">Book</h3>
              <p className="text-xl text-[#2a2516] font-medium">Lab Tests</p>
            </div>
            <div className="relative">
              <div className="absolute -right-2 -top-2 h-24 w-24 rounded-full bg-white/20 blur-xl" />
              <Flask className="relative h-20 w-20 rotate-12 text-[#3b351c] " strokeWidth={1.5} />
            </div>
          </div>

               <button 
                  className="group flex justify-center items-center rounded-full bg-[#39331b] w-7 h-7 text-white transition-all mt-2 hover:bg-gray-800"
                >
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
        
        </Link>

        {/* Health Checks Card */}
        <Link 
          href="/health-checks"
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FEC091] to-[#FEC091] p-6 transition-all hover:shadow-lg dark:from-orange-900/90 dark:to-orange-900/70 cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Popular</h3>
              <p className="text-lg text-gray-900 dark:text-gray-100">Health Checks</p>
            </div>
            <div className="relative">
              <div className="absolute -right-2 -top-2 h-24 w-24 rounded-full bg-white/20 blur-xl" />
              <Stethoscope className="relative h-20 w-20 rotate-12 text-[#3b351c]  dark:text-gray-100" strokeWidth={1.5} />
            </div>
          </div>
          <button 
                  className="group flex justify-center items-center rounded-full bg-[#39331b] w-7 h-7 text-white transition-all mt-2 hover:bg-gray-800"
                >
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
        </Link>

        {/* X-rays Card */}
        <Link 
          href="/xrays-scans"
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-200 to-pink-100 p-6 transition-all hover:shadow-lg dark:from-pink-900/90 dark:to-pink-900/70 cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">X-rays</h3>
              <p className="text-lg text-gray-900 dark:text-gray-100">Scans & MRI</p>
            </div>
            <div className="relative">
              <div className="absolute -right-2 -top-2 h-24 w-24 rounded-full bg-white/20 dark:bg-white blur-xl" />
              <svg 
                className="relative h-20 w-20 rotate-12 text-[#3b351c]  " 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <path d="M9 7h6m-6 3h6m-6 3h6m-3-9v12m-6-3v3h12v-3M6 5h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1z" />
              </svg>
            </div>
          </div>
            <button 
                  className="group flex justify-center items-center rounded-full bg-[#39331b] w-7 h-7 text-white transition-all mt-2 hover:bg-gray-800"
                >
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
        </Link>
      </div>
    </div>
  )
}

