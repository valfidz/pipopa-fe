import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertSuccess } from './alertSuccess.js';
import { AlertFailed } from './alertFailed.js';

function Footer() {
    const be_url = process.env.REACT_APP_BE_URL || 'http://localhost:5000'
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    })

    const [alert, setAlert] = useState({ show: false, message: "", type: "" })
    const [loading, setLoading] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const {
            firstName,
            lastName,
            email,
            subject,
            message
        } = formData

        setLoading(true)

        try {
            axios.post(`${be_url}/api/sendmail`, {
                firstName,
                lastName,
                email,
                subject,
                message
            }).then((result) => {
                console.log(result)
                // alert('Send mail success')
                setAlert({ show: true, message: "Form has been submitted", type: "success" })
                setLoading(false)
            }).catch((error) => {
                console.log(error)
                // alert('Send mail error')
                setAlert({ show: true, message: "Submit form failed", type: "error" })
                setLoading(false)
            })
        } catch (error) {
            console.log(error)
            // alert('Send mail error')
            setAlert({ show: true, message: "Submit form failed", type: "error" })
            setLoading(false)
        }
    }

    const closeModal = () => {
        setAlert({ ...alert, show: false });
      };

  return (
    <>
        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="flex items-center justify-center">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-teal-500 border-t-transparent"></div>
            </div>
          </div>
        )}

        {alert.show && alert.type === "success" && <AlertSuccess closeModal={closeModal} />}
        {alert.show && alert.type === "error" && <AlertFailed closeModal={closeModal} />}

        <div className="flex flex-col">
        <div className="grid grid-cols-1 gap-12 px-8 py-12 md:grid-cols-2 lg:grid-cols-3 md:px-16 md:py-16">
            {/* First Section - Address and Contact Info */}
            <div>
            {/* Logo */}
            <div className="mb-6">
                <img
                src="/logo_vertikal.jpg" // Replace with actual logo URL
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
                <p>+628119150273</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
                <Link to="#"><img src="/fb.png" alt="Facebook" className='w-8' /></Link>
                <Link to="#"><img src="/ig.png" alt="Instagram" className='w-8' /></Link>
            </div>
            </div>

            {/* Second Section - Navigation Links */}
            <div>
            <h2 className="text-2xl font-semibold mb-4 lg:text-3xl">Quick Links</h2>
            <div className="flex flex-col space-y-2">
                <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
                <a href="/about" className="text-gray-600 hover:text-blue-600">About</a>
                <a href="/inspirations" className="text-gray-600 hover:text-blue-600">Inspirations</a>
                <a href="/faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
            </div>
            </div>

            {/* Third Section - Contact Form */}
            <div>
            <h2 className="text-2xl font-semibold mb-6 lg:text-3xl">Contact Us</h2>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                    type="text"
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
                    required
                />
                <input
                    type="text"
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
                />
                </div>
                <input
                type="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
                required
                />
                <input
                type="text"
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
                required
                />
                <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder="Message *"
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
                rows="4"
                required
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
    </>
  );
}

export default Footer;
