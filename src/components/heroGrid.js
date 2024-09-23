import React from 'react';

function HeroGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4 lg:p-8">
      {/* Left Section (Full Height) */}
      <div className="bg-teal-400 p-8 flex items-center justify-center lg:col-span-2">
        <h1 className="text-2xl font-bold text-white leading-tight md:text-3xl lg:text-4xl">
          Setup bioskop pribadi atau pinjem perlengkapan bayi
        </h1>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-2">
        {/* Top Right (Image 1) */}
        <div className="relative bg-gray-800 flex items-center justify-center p-4">
          <img
            src="https://via.placeholder.com/300"
            alt="VR Demo"
            className="w-full h-auto"
          />
          <div className="absolute text-white text-lg font-bold bottom-4 left-4">
            Coba barang sebelum kamu beli
          </div>
        </div>

        {/* Bottom Right */}
        <div className="grid grid-rows-2 gap-4">
          {/* Top Bottom Right (Image 2) */}
          <div className="relative bg-pink-400 flex items-center justify-center p-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Pool Float"
              className="w-full h-auto"
            />
            <div className="absolute text-white text-lg font-bold bottom-4 left-4">
              Bikin meriah acara dirumah
            </div>
          </div>

          {/* Bottom Bottom Right (Info Block) */}
          <div className="bg-blue-900 flex items-center justify-center p-8">
            <h2 className="text-white text-xl font-bold md:text-2xl">
              Aman dan terjamin
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroGrid;
