import { Link } from "react-router-dom"

export default function ContentInspiration() {
    return (
        <div class="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
        <div class="absolute inset-0">
          <div class="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div class="relative mx-auto max-w-7xl">
          <div class="text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Find your inspirations</h2>
            <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              This is your life and it's ending one minute @ a time...</p>
          </div>
          <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
      
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80" alt="" />
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    <Link to="#" class="hover:underline">Home Appliances</Link>
                  </p>
                  <Link to="#" class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">10 Must-Have Items for Every Rental Home</p>
                    <p class="mt-3 text-base text-gray-500">Are you tired of living in a rental home that feels empty and lacks essential items? Look no further! We have compiled a list of 10...</p>
                  </Link>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="ml-3">
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-03-16">Sept 16, 2024</time>
                      <span aria-hidden="true">·</span>
                      <span>6 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80" alt="" />
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    <Link to="#" class="hover:underline">Lifestyle</Link>
                  </p>
                  <Link to="#" class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">The Benefits of Renting Instead of Buying</p>
                    <p class="mt-3 text-base text-gray-500">The Benefits of Renting Instead of Buying In today's world, where convenience and sustainability are increasingly important,...</p>
                  </Link>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="ml-3">
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-03-10">Sept 10, 2024</time>
                      <span aria-hidden="true">·</span>
                      <span>4 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80" alt="" />
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    <Link to="#" class="hover:underline">Entrepreneur</Link>
                  </p>
                  <Link to="#" class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">How to Make Money Renting Out Your Unused Items</p>
                    <p class="mt-3 text-base text-gray-500">Are you looking for a way to make some extra money? Do you have unused items lying around your house that you don't use anymore? Well,...</p>
                  </Link>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="ml-3">
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-02-12">Sept 12, 2024</time>
                      <span aria-hidden="true">·</span>
                      <span>11 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </div>
    )
  }
  