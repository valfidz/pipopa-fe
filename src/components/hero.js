'use client'

// import { useState } from 'react'
// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Hero() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative bg-white overflow-hidden lg:h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/pict1.jpg"
          alt="Background"
          className="w-full h-full object-cover sm:object-[0px_-50px] md:object-[0px_-100px] lg:object-[0px_0px]"
        />
        <div className="absolute inset-0 bg-indigo-900 opacity-50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-16 lg:py-64 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl sm:max-w-2xl lg:max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-8xl lg:text-left">
            Kalo bisa pinjem kenapa harus beli
          </h1>
          <div className="mt-10">
            <div className="flex w-full lg:w-5/6 items-center rounded-full bg-white py-2 px-2">
              <span className="pl-6 pr-2 py-3 text-gray-500 flex-grow">
                Cari & pakai barang apapun tanpa beli
              </span>
              <button
                className="rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Browse Items
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}