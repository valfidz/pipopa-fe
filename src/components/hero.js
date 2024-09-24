'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative bg-white overflow-hidden lg:h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/pict1.jpg" // replace with your background image URL
          alt="Background"
          className="w-full h-full object-cover sm:object-[0px_-50px] md:object-[0px_-100px] lg:object-[0px_0px]"
        />
        <div className="absolute inset-0 bg-indigo-900 opacity-50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-16 lg:py-64 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl sm:max-w-2xl lg:max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Kalo bisa pinjem kenapa harus beli
          </h1>
          <div className="mt-10 flex justify-center">
            <div className="relative flex w-full px-6 py-4 max-w-lg items-center rounded-full bg-white">
              <span className="pl-6 pr-2 py-3 text-gray-500">
                Cari & pakai barang apapun tanpa beli
              </span>
              <button
                className="ml-auto rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
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