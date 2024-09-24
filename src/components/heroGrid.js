import React from 'react';

function HeroGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4 lg:p-8">
      {/* Left Section (Full Height) */}
      <div className="bg-teal-400 p-8 flex items-center justify-center lg:col-span-2">
        <h1 className="text-3xl font-bold text-white leading-tight md:text-4xl lg:text-5xl">
          Setup bioskop pribadi atau pinjem perlengkapan bayi
        </h1>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-2">
        {/* Top Right (Image 1) */}
        <div className="relative overflow-hidden">
          <img
            src="/pict2.jpg"
            alt="VR Demo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
            <div className="text-white text-xl md:text-2xl lg:text-3xl font-bold p-4">
              Coba barang sebelum kamu beli
            </div>
          </div>
        </div>

        {/* Bottom Right */}
        <div className="grid grid-rows-2 gap-4">
          {/* Top Bottom Right (Image 2) */}
          <div className="relative overflow-hidden">
            <img
              src="/pict3.jpg"
              alt="Home play"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center">
              <div className="text-white text-xl md:text-2xl lg:text-3xl font-bold p-4">
                Bikin meriah acara di rumah
              </div>
            </div>
          </div>

          {/* Bottom Bottom Right (Info Block) */}
          <div className="bg-blue-900 flex items-center justify-center p-8">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
              Aman dan terjamin
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroGrid;