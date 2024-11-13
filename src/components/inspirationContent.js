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
                <img class="h-48 w-full object-cover" src="/party.jpg" alt="" />
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    <Link to="#" class="hover:underline">Party</Link>
                  </p>
                  <Link to="/post/rent-the-perfect-party" class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">Rent the Perfect Party</p>
                    <p class="mt-3 text-base text-gray-500">Planning a special occasion can be stressful, but it doesn't have to be. With Pipopa, you can rent everything you need to host the perfect party, from party equipment to decor.</p>
                  </Link>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="ml-3">
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-03-16">Nov 13, 2024</time>
                      <span aria-hidden="true">·</span>
                      {/* <span>6 min read</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-cover" src="/appliances.jpg" alt="" />
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    <Link to="#" class="hover:underline">Home Appliances</Link>
                  </p>
                  <Link to="/post/upgrade-your-home" class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">Upgrade Your Home, Rent the Rest</p>
                    <p class="mt-3 text-base text-gray-500">Tired of the hassle and expense of owning appliances? Pipopa offers a convenient and cost-effective solution: appliance rental. By renting your appliances, you can enjoy the latest technology without the long-term commitment.</p>
                  </Link>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="ml-3">
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-03-10">Nov 13, 2024</time>
                      <span aria-hidden="true">·</span>
                      {/* <span>4 min read</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-cover" src="/uang.jpg" alt="" />
              </div>
              <div class="flex flex-1 flex-col justify-between bg-white p-6">
                <div class="flex-1">
                  <p class="text-sm font-medium text-indigo-600">
                    <Link to="#" class="hover:underline">Entrepreneur</Link>
                  </p>
                  <Link to="/post/dapatkan-cash-sewakan-barang" class="mt-2 block">
                    <p class="text-xl font-semibold text-gray-900">Dapetin cash! Sewakan barang tak terpakai di sekitar mu!</p>
                    <p class="mt-3 text-base text-gray-500">Apakah Anda memiliki barang di sekitar yang jarang terpakai? tahukah Anda ada ribuan orang dekat anda yang saat ini mungkin membutuhkan barang tersebut tetapi...</p>
                  </Link>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="ml-3">
                    <div class="flex space-x-1 text-sm text-gray-500">
                      <time datetime="2020-02-12">Nov 13, 2024</time>
                      <span aria-hidden="true">·</span>
                      {/* <span>11 min read</span> */}
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
  