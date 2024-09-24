import React from 'react';

function HeroSection() {
  return (
    <div className="grid grid-cols-1 gap-8 px-8 py-12 md:grid-cols-2 md:px-16 md:py-12">
      {/* Left Section */}
      <div>
        <h2 className="text-3xl font-semibold text-blue-900 mb-8 md:text-4xl">Pinjam atau sewakan, mudah!</h2>

        {/* Step 1 */}
        <div className="mb-8">
          <h3 className="text-teal-500 text-lg mb-2">01</h3>
          <h4 className="text-xl font-semibold text-gray-900 md:text-2xl">Cari dan pilih</h4>
          <p className="text-gray-600">Find everything you need for rent in one place. Browse our selection of house appliances, equipment, tools, and gadgets.</p>
        </div>

        {/* Step 2 */}
        <div className="mb-8">
          <h3 className="text-teal-500 text-lg mb-2">02</h3>
          <h4 className="text-xl font-semibold text-gray-900 md:text-2xl">Pesan dan kirim</h4>
          <p className="text-gray-600">Reserve your item, pick rental periods to fit your needs, wait till it's delivered to your location.</p>
        </div>

        {/* Step 3 */}
        <div className="mb-8">
          <h3 className="text-teal-500 text-lg mb-2">03</h3>
          <h4 className="text-xl font-semibold text-gray-900 md:text-2xl">Kembalikan lalu tinggalkan review</h4>
          <p className="text-gray-600">Return and leave a review. Share what you made with it and inspire others with the possibilities.</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex flex-col justify-center items-center">
        {/* Image 1 */}
        <img
          src="/pict4.jpg"
          alt="BBQ"
          className="mb-4 rounded-lg shadow-lg w-full md:mb-8"
        />
        {/* Image 2 */}
        <img
          src="/pict5.jpg"
          alt="VR kit"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </div>
  );
}

export default HeroSection;
