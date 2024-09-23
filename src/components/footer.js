import React from 'react';

function Footer() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 gap-12 px-8 py-12 md:grid-cols-2 lg:grid-cols-3 md:px-16 md:py-16">
        {/* First Section - Address and Contact Info */}
        <div>
          {/* Logo */}
          <div className="mb-6">
            <img
              src="https://via.placeholder.com/100x50" // Replace with actual logo URL
              alt="Company Logo"
              className="w-24 h-auto"
            />
          </div>

          {/* Address and Contact Info */}
          <div className="mb-6">
            <p>Sampoerna Strategic Square</p>
            <p>South Tower, Fl16</p>
            <p>Jl. Jenderal Sudirman</p>
            <p>Jakarta 12930</p>
            <p>info@pipopa.id</p>
            <p>021 212 769 19</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#"><img src="https://via.placeholder.com/20x20" alt="Facebook" /></a>
            <a href="#"><img src="https://via.placeholder.com/20x20" alt="Instagram" /></a>
          </div>
        </div>

        {/* Second Section - Navigation Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-gray-600 hover:text-blue-600">Sewa</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Inspirasi</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">FAQ</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Tentang</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Pipopa Pro</a>
          </div>
        </div>

        {/* Third Section - Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 lg:text-3xl">Contact Us</h2>

          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email *"
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
            />
            <textarea
              placeholder="Message *"
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
              rows="4"
            />

            <button className="px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer at the Bottom */}
      <div className="px-8 py-6 text-sm text-gray-500 md:px-16">
        <p>© 2024 by Pipopa.</p>
      </div>
    </div>
  );
}

export default Footer;
